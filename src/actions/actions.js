import * as CP from '../constants/actions';


export const addPost = post => {
  return {
    type: CP.ADD_POST,
    post
  };
};
