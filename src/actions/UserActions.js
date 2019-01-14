import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from '../constants/constants';

export const handleLogin = () => dispatch => {
  dispatch({
    type: LOGIN_REQUEST,
  });

  //eslint-disable-next-line no-undef
  VK.Auth.login(r => {
    if (r.session) {
      let username = r.session.user.first_name;
      dispatch({
        type: LOGIN_SUCCESS,
        payload: username,
      });
    } else {
      dispatch({
        type: LOGIN_FAIL,
        error: true,
        payload: new Error('Не удалось выполнить вход'),
      });
    }
  }, 4);
};
