import { GET_PHOTO_FAIL, GET_PHOTO_SUCCESS } from '../constants/constants';

export let photosArr = [];
export let yearsArr = [];
export let cached = false;

export const getUserYears = (photos) => {
  const sorted = photos.sort((a, b) => a.date - b.date);
  const firstYear = new Date(sorted[0].date * 1000).getFullYear();
  let years = [];
  const currYear = new Date().getFullYear();
  for (let year = firstYear; year <= currYear; year++) {
    years.push(year);
  }

  return years;
};

export function makeYearPhotos(photos, selectedYear) {
  let createdYear;
  let yearPhotos = [];

  photos.forEach(item => {
    createdYear = new Date(item.date * 1000).getFullYear();
    if (createdYear === selectedYear) {
      yearPhotos.push(item);
    }
  });

  yearPhotos.sort((a, b) => b.likes.count - a.likes.count);

  return yearPhotos;
}

export const getMorePhotos = (year, count, offset, dispatch) => {
  //eslint-disable-next-line no-undef
  VK.Api.call(
    'photos.getAll',
    { count: count, offset: offset, extended: 1, v: '5.92' },
    r => {
      console.log(r);
      try {
        photosArr = photosArr.concat(r.response.items);
        if (offset <= r.response.count) {
          offset += 200;
          getMorePhotos(year, count, offset, dispatch);
        } else {
          yearsArr = getUserYears(photosArr);
          let photos = makeYearPhotos(photosArr, year);
          cached = true;

          dispatch({
            type: GET_PHOTO_SUCCESS,
            payload: {
              photos,
              yearsArr,
            },
          });
        }
      } catch (e) {
        dispatch({
          type: GET_PHOTO_FAIL,
          payload: new Error(e),
          error: true,
        });
      }
    }
  );
};

