import "./style/index.scss";
import { getEducation } from "./education";
import { getUser } from "./user";

const test = window.location.pathname;

const educationOnly = (path) => {
  return path.indexOf("education") === -1;
};

const showUserResume = (userName, userAge) => {
  if (userName !== undefined && userAge !== undefined) {
    document.getElementById(
      "userIntro"
    ).innerHTML = `MY NAME IS ${userName} ${userAge}YO AND THIS IS MY RESUME/CV`;
  } else {
    // TODO feedback: 这段操作比较奇怪
    document.body.removeChild(document.getElementById("header"));
    document
      .getElementById("main")
      .removeChild(document.getElementById("about"));
  }
};
const showUserDescription = (userDes) => {
  document.getElementById("userDescription").innerHTML = `${userDes}`;
};
const showUserImg = (userAvatar) => {
  document.getElementById("photo").setAttribute("src", `${userAvatar}`);
};
getUser(test)
  .then((response) => response.json())
  .then((data) => {
    // TODO feedback: 建议用解构
    const userName = data.name;
    const userAge = data.age;
    const userAvatar = data.avatar;
    const userDes = data.description;
    showUserResume(userName, userAge);
    showUserDescription(userDes);
    showUserImg(userAvatar);
  });

// TODO feedback: 为什么会存在两种url？
getEducation(educationOnly(test) ? `${test}/educations` : test)
  .then((response) => response.json())
  .then((data) => {
    // TODO feedback: ES6 forEach
    for (let i = 0; i < data.length; i++) {
      const dom = document.createElement("section");
      dom.className = "education";
      // TODO feedback: 为什么是h5，和h4?
      dom.innerHTML = `<h5>${data[i].year}</h5>
<!--      // TODO feedback: article标签不太准确，建议是section -->
      <article>
        <h4>${data[i].title}</h4>
        <p>${data[i].description}</p>
      </article>`;
      // TODO feedback: 在for循环中，每次都要操作DOM，影响性能，不推荐这样做
      document.getElementById("education-topic").appendChild(dom);
    }
  });
