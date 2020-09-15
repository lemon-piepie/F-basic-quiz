function getEducation(userId) {
  return fetch(`http://localhost:8080/user/${userId}/educations`, {
    method: "GET",
  })
    .then((response) => {
      return response.text();
    })
    .catch((error) => {
      console.log(error.message);
    });
}

function addEducation() {
  return fetch(`http://localhost:8080/user/${userId}/educations`, {
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

export { getEducation, addEducation };
