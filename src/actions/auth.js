import config from '../config';
import $ from 'jquery';
import { getItemsIfApplicable, startLoading, stopLoading } from '../actions';

const authenticate = () => {
  return (dispatch) => {
    dispatch(startLoading());
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
        dispatch(getItemsIfApplicable());
        dispatch(stopLoading());
      },
      error: (XMLHttpRequest, textStatus, errorThrown) => {
        console.error(textStatus);
        dispatch(stopLoading);
      }
    });
  };
};

export const login = () => {
  return (dispatch) => {
    dispatch(startLoading());
    return gapi.auth2.getAuthInstance().signIn().then(() => {
      dispatch(authenticate());
      dispatch(stopLoading());
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(startLoading());
    const auth2 = gapi.auth2.getAuthInstance();
    return auth2.signOut().then(() => {
      $.ajax({
        type: 'GET',
        xhrFields: {
          withCredentials: true
        },
        url: config.backendURL + '/api/logout/',
        success: () => {
          dispatch({type: 'LOGOUT'});
          dispatch(stopLoading());
        },
        error: (XMLHttpRequest, textStatus, errorThrown) => {
          console.error(textStatus);
          dispatch(stopLoading());
        }
      });
    });
  };
};

export const startGAuth = () => {
  return (dispatch) => {
    dispatch(startLoading());
    return gapi.load('auth2', ()=>{
      var gAuth = gapi.auth2.init({
        client_id: '441857043088-ujkkfjr5f66e1j4qq02iueink9d5fcj8.apps.googleusercontent.com',
        hosted_domain: 'uconn.edu',
        scope: 'profile email'
      });
      gAuth.then(() => {
        if (gAuth.currentUser.get().isSignedIn()) {
          dispatch(authenticate());
        }
        dispatch(stopLoading());
      }, (reason) => {
        console.error(reason);
        dispatch(stopLoading());
      });
    });
  };
};