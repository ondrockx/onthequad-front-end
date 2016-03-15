import config from '../config';
import $ from 'jquery';

const authenticate = () => {
  return (dispatch) => {
    var gUser = gapi.auth2.getAuthInstance().currentUser.get();
    var profile = gUser.getBasicProfile();
    var id_token = gUser.getAuthResponse().id_token;
    return $.ajax({
      type: 'POST',
      xhrFields: {
        withCredentials: true
      },
      url: config.backendURL + '/api/auth/',
      data: {id_token},
      success: ()=>{
        dispatch({
          type: 'CHANGE_USER',
          userId: profile.getId(),
          name: profile.getName(),
          email: profile.getEmail()
        });
      }
    });
  };
};

export const login = () => {
  return (dispatch) => {
    gapi.auth2.getAuthInstance().signIn().then(() => {
      dispatch(authenticate());
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    $.ajax({
      type: 'GET',
      xhrFields: {
        withCredentials: true
      },
      url: config.backendURL + '/api/logout/',
      success: ()=>{
        dispatch({type: 'LOGOUT'});
      }
    });
  };
};

export const startGAuth = () => {
  return (dispatch) => {
    gapi.load('auth2', ()=>{
      var gAuth = gapi.auth2.init({
        client_id: '441857043088-ujkkfjr5f66e1j4qq02iueink9d5fcj8.apps.googleusercontent.com',
        scope: 'profile email'
      });
      gAuth.then(() => {
        if (gAuth.currentUser.get().isSignedIn()) {
          dispatch(authenticate());
        } else {
          dispatch(login());
        }
      }, (reason) => {
        console.error(reason);
      });
    });
  };
};