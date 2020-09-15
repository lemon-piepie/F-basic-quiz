function getUser(userId) {
  return fetch(`http://localhost:8080/user/${userId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.text();
    })
    .catch((error) => {
      console.log(error.message);
    });
}

function addUser() {
  return fetch("http://localhost:8080/users", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => {
      return response.text();
    })
    .catch((error) => {
      console.log(error.message);
    });
}

export { getUser, addUser };
