const getEducation = async (path) => {
  return fetch(`http://localhost:8080/${path}/educations`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
};

const addEducation = async (data, path) => {
  return fetch(`http://localhost:8080/${path}/educations`, {
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

export { getEducation, addEducation };
