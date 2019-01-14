import { GET_PHOTO_REQUEST, GET_PHOTO_SUCCESS, GET_PHOTO_FAIL } from '../constants/constants';

const initialState = {
  year: 2019,
  photos: [],
  isFetching: false,
  error: '',
  yearsArr: [],
};

export const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case (GET_PHOTO_REQUEST) :
      return { ...state,
        year: action.payload,
        isFetching: true,
        error: '',
      };
    case (GET_PHOTO_SUCCESS) :
      return { ...state,
        photos: action.payload.photos,
        yearsArr: action.payload.yearsArr,
        isFetching: false,
        error: '',
      };
    case (GET_PHOTO_FAIL) :
      return { ...state,
        error: action.payload.message,
        isFetching: false,
      };
    default:
      return state;
  }
};
