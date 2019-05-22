import { GET_PHOTO_SUCCESS } from '../constants/constants';
import { GET_PHOTO_REQUEST } from '../constants/constants';

import { makeYearPhotos, getMorePhotos, photosArr, cached, yearsArr } from '../utils/PageFunctions';

export const getPhotos = year => dispatch => {
  dispatch({
    type: GET_PHOTO_REQUEST,
    payload: year,
  });

  if (cached) {
    let photos = makeYearPhotos(photosArr, year);
    dispatch({
      type: GET_PHOTO_SUCCESS,
      payload: {
        photos,
        yearsArr,
      },
    });
  } else {
    setTimeout(getMorePhotos, 334, year, 200, 0, dispatch);
  }
};
