const getUser = async (path) => {
  return fetch(`http://localhost:8080/${path}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
};

const addUser = async (data) => {
  return fetch("http://localhost:8080/users", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((result) => {
      return result.text();
    })
    .catch((error) => {
      console.log(error.message);
    });
};

export { getUser, addUser };
