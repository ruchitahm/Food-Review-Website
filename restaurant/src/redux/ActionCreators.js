// import * as ActionTypes from './ActionTypes';
// import { DISHES } from '../shared/dishes';
// import { baseUrl } from '../shared/baseUrl';

// export const addComment = (comment) => ({
//     type: ActionTypes.ADD_COMMENT,
//     payload: comment
// });

// // export const postComment = (dishId, rating, author, comment) => (dispatch) => {
// export const postComment = (dishId, rating, comment) => (dispatch) => {

//     const newComment = {
//         dishId: dishId,
//         rating: rating,
//         // author: author,
//         comment: comment
//     };
//     // newComment.date = new Date().toISOString();
//     console.log('Comment ', newComment);

//     const bearer = 'Bearer ' + localStorage.getItem('token');

//     return fetch(baseUrl + 'comments', {
//         method: "POST",
//         body: JSON.stringify(newComment),
//         headers: {
//           "Content-Type": "application/json"
//         },
//         credentials: "same-origin"
//     })
//     .then(response => {
//         if (response.ok) {
//           return response;
//         } else {
//           var error = new Error('Error ' + response.status + ': ' + response.statusText);
//           error.response = response;
//           throw error;
//         }
//       },
//       error => {
//             // throw error;
//             var errmess = new Error(error.message);
//             throw errmess;
//       })
//     .then(response => response.json())
//     .then(response => dispatch(addComment(response)))
//     .catch(error =>  { console.log('post comments', error.message); 
//         alert('Your comment could not be posted\nError: '+error.message); });
// };

// export const postFeedback = (id,firstname, lastname, telnum, email, agree, contactType, message ) => (dispatch) => {

//     const newFeedback = {
//         // dishId: dishId,
//         // rating: rating,
//         // author: author,
//         // comment: comment,
//         id: id,
//         firstname: firstname,
//         lastname: lastname,
//         telnum: telnum,
//         email: email,
//         agree: agree,
//         contactType: contactType,
//         message: message
//     };
//     newFeedback.date = new Date().toISOString();
    
//     return fetch(baseUrl + 'feedback', {
//         method: "POST",
//         body: JSON.stringify(newFeedback),
//         headers: {
//           "Content-Type": "application/json"
//         },
//         credentials: "same-origin"
//     })
//     .then(response => {
//         if (response.ok) {
//           return response;
//         } else {
//           var error = new Error('Error ' + response.status + ': ' + response.statusText);
//           error.response = response;
//           throw error;
//         }
//       },
//       error => {
//             throw error;
//       })
// //     .then(response => response.json())
// //     // .then(response => dispatch(addFeedback(response)))
// //     .then(response => alert("Thank you for your feedback! " + JSON.stringify(response)))
// //     .catch(error =>  { console.log('Post Feedback', error.message); 
// //         alert('Your feedback could not be posted\nError: ' + error.message); });
//         .then(response => response.json())
//         .then(response =>  { console.log('Feedback',response);
//              alert("Thank you for your feedback! " + JSON.stringify(response))})
//         .catch(error =>  error.message)
// };

// export const fetchDishes = () => (dispatch) => {

//     dispatch(dishesLoading(true));

//     return fetch(baseUrl + 'dishes')
//     .then(response => {
//         if(response.ok){
//             return response;
//         }
//         else{
//             var error = new Error('Error ' + response.status + ': ' + response.statusText );
//             error.response = response;
//             throw error;
//         }
//     }, error => {
//         var errmess = new Error(error.message);
//         throw errmess;
//     })
//     .then(response => response.json())
//     .then(dishes => dispatch(addDishes(dishes)))
//     .catch(error => dispatch(dishesFailed(error.message)))
    
//     // setTimeout(() => {
//     //     dispatch(addDishes(DISHES));
//     // }, 2000);
// }

// export const dishesLoading = () => ({
//     type: ActionTypes.DISHES_LOADING
// });

// export const dishesFailed = (errmess) => ({
//     type: ActionTypes.DISHES_FAILED,
//     payload: errmess
// });

// export const addDishes = (dishes) => ({
//     type: ActionTypes.ADD_DISHES,
//     payload: dishes
// }); 

// export const fetchComments = () => (dispatch) => {    
//     return fetch(baseUrl + 'comments')
//     .then(response => {
//         if(response.ok){
//             return response;
//         }
//         else{
//             var error = new Error('Error ' + response.status + ': ' + response.statusText );
//             error.response = response;
//             throw error;
//         }
//     }, error => {
//         var errmess = new Error(error.message);
//         throw errmess;
//     })
//     .then(response => response.json())
//     .then(comments => dispatch(addComments(comments)))
//     .catch(error => dispatch(commentsFailed(error.message)))
    
// };

// export const commentsFailed = (errmess) => ({
//     type: ActionTypes.COMMENTS_FAILED,
//     payload: errmess
// });

// export const addComments = (comments) => ({
//     type: ActionTypes.ADD_COMMENTS,
//     payload: comments
// });

// export const fetchPromos = () => (dispatch) => {
    
//     dispatch(promosLoading());

//     return fetch(baseUrl + 'promotions')
//     .then(response => {
//         if(response.ok){
//             return response;
//         }
//         else{
//             var error = new Error('Error ' + response.status + ': ' + response.statusText );
//             error.response = response;
//             throw error;
//         }
//     }, error => {
//         var errmess = new Error(error.message);
//         throw errmess;
//     })
//     .then(response => response.json())
//     .then(promos => dispatch(addPromos(promos)))
//     .catch(error => dispatch(promosFailed(error.message)))
    
// }

// export const promosLoading = () => ({
//     type: ActionTypes.PROMOS_LOADING
// });

// export const promosFailed = (errmess) => ({
//     type: ActionTypes.PROMOS_FAILED,
//     payload: errmess
// });

// export const addPromos = (promos) => ({
//     type: ActionTypes.ADD_PROMOS,
//     payload: promos
// });

// // 
// export const fetchLeaders = () => (dispatch) => {
    
//     dispatch(leadersLoading());

//     return fetch(baseUrl + 'leaders')
//     .then(response => {
//         if(response.ok){
//             return response;
//         }
//         else{
//             var error = new Error('Error ' + response.status + ': ' + response.statusText );
//             error.response = response;
//             throw error;
//         }
//     }, error => {
//         var errmess = new Error(error.message);
//         throw errmess;
//     })
//     .then(response => response.json())
//     .then(leaders => dispatch(addLeaders(leaders)))
//     .catch(error => dispatch(leadersFailed(error.message)))
    
// }

// export const leadersLoading = () => ({
//     type: ActionTypes.LEADERS_LOADING
// });

// export const leadersFailed = (errmess) => ({
//     type: ActionTypes.LEADERS_FAILED,
//     payload: errmess
// });

// export const addLeaders = (leaders) => ({
//     type: ActionTypes.ADD_LEADERS,
//     payload: leaders
// });

// export const requestLogin = (creds) => ({
//     type: ActionTypes.LOGIN_REQUEST,
//     creds
// });

// export const receiveLogin = (response) => {
//     return {
//         type: ActionTypes.LOGIN_SUCCESS,
//         token: response.token
//     }
// }

// export const loginError = (message) => {
//     return {
//         type: ActionTypes.LOGIN_FAILURE,
//         message
//     }
// }

// export const loginUser = (creds) => (dispatch) => {
//     // We dispatch requestLogin to kickoff the call to the API
//     dispatch(requestLogin(creds))
//     return fetch(baseUrl + 'users/login', {
//         method: 'POST',
//         headers: { 
//             'Content-Type':'application/json' 
//         },
//         body: JSON.stringify(creds)
//     })
//     .then(response => {
//         if (response.ok) {
//             return response;
//         } else {
//             var error = new Error('Error ' + response.status + ': ' + response.statusText);
//             error.response = response;
//             throw error;
//         }
//         },
//         error => {
//             throw error;
//         })
//     .then(response => response.json())
//     .then(response => {
//         if (response.success) {
//             // If login was successful, set the token in local storage
//             localStorage.setItem('token', response.token);
//             localStorage.setItem('creds', JSON.stringify(creds));
//             // Dispatch the success action
//             dispatch(fetchFavorites());
//             dispatch(receiveLogin(response));
//         }
//         else {
//             var error = new Error('Error ' + response.status);
//             error.response = response;
//             throw error;
//         }
//     })
//     .catch(error => dispatch(loginError(error.message)))
// };

// export const requestLogout = () => {
//     return {
//       type: ActionTypes.LOGOUT_REQUEST
//     }
// }
  
// export const receiveLogout = () => {
//     return {
//       type: ActionTypes.LOGOUT_SUCCESS
//     }
// }

// // Logs the user out
// export const logoutUser = () => (dispatch) => {
//     dispatch(requestLogout())
//     localStorage.removeItem('token');
//     localStorage.removeItem('creds');
//     dispatch(favoritesFailed("Error 401: Unauthorized"));
//     dispatch(receiveLogout())
// }

// export const postFavorite = (dishId) => (dispatch) => {

//     const bearer = 'Bearer ' + localStorage.getItem('token');

//     return fetch(baseUrl + 'favorites/' + dishId, {
//         method: "POST",
//         body: JSON.stringify({"_id": dishId}),
//         headers: {
//           "Content-Type": "application/json",
//           'Authorization': bearer
//         },
//         credentials: "same-origin"
//     })
//     .then(response => {
//         if (response.ok) {
//           return response;
//         } else {
//           var error = new Error('Error ' + response.status + ': ' + response.statusText);
//           error.response = response;
//           throw error;
//         }
//       },
//       error => {
//             throw error;
//       })
//     .then(response => response.json())
//     .then(favorites => { console.log('Favorite Added', favorites); dispatch(addFavorites(favorites)); })
//     .catch(error => dispatch(favoritesFailed(error.message)));
// }

// export const deleteFavorite = (dishId) => (dispatch) => {

//     const bearer = 'Bearer ' + localStorage.getItem('token');

//     return fetch(baseUrl + 'favorites/' + dishId, {
//         method: "DELETE",
//         headers: {
//           'Authorization': bearer
//         },
//         credentials: "same-origin"
//     })
//     .then(response => {
//         if (response.ok) {
//           return response;
//         } else {
//           var error = new Error('Error ' + response.status + ': ' + response.statusText);
//           error.response = response;
//           throw error;
//         }
//       },
//       error => {
//             throw error;
//       })
//     .then(response => response.json())
//     .then(favorites => { console.log('Favorite Deleted', favorites); dispatch(addFavorites(favorites)); })
//     .catch(error => dispatch(favoritesFailed(error.message)));
// };

// export const fetchFavorites = () => (dispatch) => {
//     dispatch(favoritesLoading(true));

//     const bearer = 'Bearer ' + localStorage.getItem('token');

//     return fetch(baseUrl + 'favorites', {
//         headers: {
//             'Authorization': bearer
//         },
//     })
//     .then(response => {
//         if (response.ok) {
//             return response;
//         }
//         else {
//             var error = new Error('Error ' + response.status + ': ' + response.statusText);
//             error.response = response;
//             throw error;
//         }
//     },
//     error => {
//         var errmess = new Error(error.message);
//         throw errmess;
//     })
//     .then(response => response.json())
//     .then(favorites => dispatch(addFavorites(favorites)))
//     .catch(error => dispatch(favoritesFailed(error.message)));
// }

// export const favoritesLoading = () => ({
//     type: ActionTypes.FAVORITES_LOADING
// });

// export const favoritesFailed = (errmess) => ({
//     type: ActionTypes.FAVORITES_FAILED, 
//     payload: errmess
// });

// export const addFavorites = (favorites) => ({
//     type: ActionTypes.ADD_FAVORITES,
//     payload: favorites
// });

import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
import { baseUrl } from '../shared/baseUrl';

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (dishId, rating, comment) => (dispatch) => {

    const newComment = {
        dish: dishId,
        rating: rating,
        comment: comment
    }
    console.log('Comment ', newComment);

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': bearer
        },
        credentials: 'same-origin'
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => { console.log('Post comments ', error.message);
        alert('Your comment could not be posted\nError: '+ error.message); })
}


export const postFeedback = (id,firstname, lastname, telnum, email, agree, contactType, message ) => (dispatch) => {
    // export const postFeedback = (feedback) => (dispatch) => {
    const newFeedback = {
        // dishId: dishId,
        // rating: rating,
        // author: author,
        // comment: comment,
        id: id,
        firstname: firstname,
        lastname: lastname,
        telnum: telnum,
        email: email,
        agree: agree,
        contactType: contactType,
        message: message
    };
    newFeedback.date = new Date().toISOString();
    
    return fetch(baseUrl + 'feedback', {
        method: "POST",
        body: JSON.stringify(newFeedback),
        // body: JSON.stringify(feedback),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    // .then(response => dispatch(addFeedback(response)))
    .then(response =>  { console.log('Feedback',response);
         alert("Thank you for your feedback! " + JSON.stringify(response))})
    .catch(error =>  error.message)
        // { console.log('Post Feedback', error.message); 
        // alert('Your feedback could not be posted\nError: ' + error.message); });
};

export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
    .then(response => {
        if(response.ok){
            return response;
        }
        else{
            var error = new Error('Error ' + response.status + ': ' + response.statusText );
            error.response = response;
            throw error;
        }
    }, error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)))
    
    // setTimeout(() => {
    //     dispatch(addDishes(DISHES));
    // }, 2000);
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
}); 

export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments')
    .then(response => {
        if(response.ok){
            return response;
        }
        else{
            var error = new Error('Error ' + response.status + ': ' + response.statusText );
            error.response = response;
            throw error;
        }
    }, error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)))
    
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => (dispatch) => {
    
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
    .then(response => {
        if(response.ok){
            return response;
        }
        else{
            var error = new Error('Error ' + response.status + ': ' + response.statusText );
            error.response = response;
            throw error;
        }
    }, error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)))
    
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

// 
export const fetchLeaders = () => (dispatch) => {
    
    dispatch(leadersLoading());

    return fetch(baseUrl + 'leaders')
    .then(response => {
        if(response.ok){
            return response;
        }
        else{
            var error = new Error('Error ' + response.status + ': ' + response.statusText );
            error.response = response;
            throw error;
        }
    }, error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(leaders => dispatch(addLeaders(leaders)))
    .catch(error => dispatch(leadersFailed(error.message)))
    
}

export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
});

export const leadersFailed = (errmess) => ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errmess
});

export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});

export const requestLogin = (creds) => ({
    type: ActionTypes.LOGIN_REQUEST,
    creds
});
export const requestSignUp = (creds) => ({
    type: ActionTypes.SIGNUP_REQUEST,
    creds
});

export const receiveLogin = (response) => {
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        token: response.token
    }
}

export const loginError = (message) => {
    return {
        type: ActionTypes.LOGIN_FAILURE,
        message
    }
}

export const loginUser = (creds) => (dispatch) => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestLogin(creds))
    return fetch(baseUrl + 'users/login', {
        method: 'POST',
        headers: { 
            'Content-Type':'application/json' 
        },
        body: JSON.stringify(creds)
    })
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
        },
        error => {
            throw error;
        })
    .then(response => response.json())
    .then(response => {
        if (response.success) {
            // If login was successful, set the token in local storage
            localStorage.setItem('token', response.token);
            localStorage.setItem('creds', JSON.stringify(creds));
            // Dispatch the success action
            dispatch(fetchFavorites());
            dispatch(receiveLogin(response));
        }
        else {
            var error = new Error('Error ' + response.status);
            error.response = response;
            throw error;
        }
    })
    .catch(error => dispatch(loginError(error.message)))
};

export const signupUser = (credsdetails) => (dispatch) => {
    // We dispatch requestLogin to kickoff the call to the API
    dispatch(requestSignUp(credsdetails))
    return fetch(baseUrl + 'users/signup', {
        method: 'POST',
        headers: { 
            'Content-Type':'application/json' 
        },
        body: JSON.stringify(credsdetails)
    })
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            alert('User Registeration Unsuccessful, as UserName Already Exists!'); 
            throw error;
        }
        },
        error => {
            throw error;
        })
    .then(response => response.json())
    .then(response =>  { console.log('SIGN UP Details: ',response);
         alert("User Registered Successfully! ")})
    // .then(response => {
    //     if (response.success) {
    //         // If login was successful, set the token in local storage
    //         localStorage.setItem('token', response.token);
    //         localStorage.setItem('creds', JSON.stringify(creds));
    //         // Dispatch the success action
    //         dispatch(fetchFavorites());
    //         dispatch(receiveLogin(response));
    //     }
    //     else {
    //         var error = new Error('Error ' + response.status);
    //         error.response = response;
    //         throw error;
    //     }
    // })
    .catch(error => dispatch(loginError(error.message)))
};

export const requestLogout = () => {
    return {
      type: ActionTypes.LOGOUT_REQUEST
    }
}
  
export const receiveLogout = () => {
    return {
      type: ActionTypes.LOGOUT_SUCCESS
    }
}

// Logs the user out
export const logoutUser = () => (dispatch) => {
    dispatch(requestLogout())
    localStorage.removeItem('token');
    localStorage.removeItem('creds');
    dispatch(favoritesFailed("Error 401: Unauthorized"));
    dispatch(receiveLogout())
}

export const postFavorite = (dishId) => (dispatch) => {

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'favorites/' + dishId, {
        method: "POST",
        body: JSON.stringify({"_id": dishId}),
        headers: {
          "Content-Type": "application/json",
          'Authorization': bearer
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(favorites => { console.log('Favorite Added', favorites); dispatch(addFavorites(favorites)); })
    .catch(error => dispatch(favoritesFailed(error.message)));
}

export const deleteFavorite = (dishId) => (dispatch) => {

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'favorites/' + dishId, {
        method: "DELETE",
        headers: {
          'Authorization': bearer
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(favorites => { console.log('Favorite Deleted', favorites); dispatch(addFavorites(favorites)); })
    .catch(error => dispatch(favoritesFailed(error.message)));
};

export const fetchFavorites = () => (dispatch) => {
    dispatch(favoritesLoading(true));

    const bearer = 'Bearer ' + localStorage.getItem('token');

    return fetch(baseUrl + 'favorites', {
        headers: {
            'Authorization': bearer
        },
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
        else {
            var error = new Error('Error ' + response.status + ': ' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    })
    .then(response => response.json())
    .then(favorites => dispatch(addFavorites(favorites)))
    .catch(error => dispatch(favoritesFailed(error.message)));
}

export const favoritesLoading = () => ({
    type: ActionTypes.FAVORITES_LOADING
});

export const favoritesFailed = (errmess) => ({
    type: ActionTypes.FAVORITES_FAILED, 
    payload: errmess
});

export const addFavorites = (favorites) => ({
    type: ActionTypes.ADD_FAVORITES,
    payload: favorites
});

// export const addFavorite = (favorites) => ({
//     type: ActionTypes.ADD_COMMENT,
//     payload: comment
// });