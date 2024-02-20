const server = process.env.REACT_APP_BACKEND_SERVER ||"http://localhost:4000/users";

export function getUsers() {
  return function (dispatch) {
    dispatch(loading());
    fetch(server)
      .then((res) => res.json())
      .then((res) => {
        setTimeout(() => {
          dispatch({ type: "GET_USERS", payload: res });
        }, 2000);
      });
  };
}

export function searchUsers(data) {
  return function (dispatch) {
    dispatch(loading());
    setTimeout(() => {
      dispatch({ type: "SEARCH_USERS", payload: data });
    }, 2000);
  };
}

export function createUser(payload) {
  return function (dispatch) {
    dispatch(loading());
    return fetch(server, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) =>
        setTimeout(() => {
          dispatch({ type: "CREATE_USER", payload: data });
        }, 2000)
      )
      .catch((err) => console.log(err));
  };
}

export function deleteUser(id) {
  return function (dispatch) {
    dispatch(loading());
    return fetch(server + `/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) =>
        setTimeout(() => {
          dispatch({ type: "DELETE_USER", payload: data });
        }, 2000)
      )
      .catch((err) => console.log(err));
  };
}

export function updateUser(id,user) {
  return function (dispatch) {
    dispatch(loading());
    return fetch(server + `/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) =>
        setTimeout(() => {
          dispatch({ type: "UPDATE_USER", payload: data });
        }, 2000)
      )
      .catch((err) => console.log(err));
  };
}

export function loading() {
  return { type: "LOADING" };
}
