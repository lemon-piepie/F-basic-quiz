// TODO feedback: 如果是请求的话，建议放在单独的utils或者services文件件下
const getEducation = async (path) => {
  // TODO feedback: URL不正确，path中多了"/"
  return fetch(`http://localhost:8080/${path}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
};

// TODO feedback: 无效代码
const addEducation = async (data, path) => {
  return fetch(`http://localhost:8080/${path}`, {
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
