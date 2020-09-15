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
    const userName = data.name;
    const userAge = data.age;
    const userAvatar = data.avatar;
    const userDes = data.description;
    showUserResume(userName, userAge);
    showUserDescription(userDes);
    showUserImg(userAvatar);
  });

getEducation(educationOnly(test) ? `${test}/educations` : test)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      const dom = document.createElement("section");
      dom.className = "education";
      dom.innerHTML = `<h5>${data[i].year}</h5>
      <article>
        <h4>${data[i].title}</h4>
        <p>${data[i].description}</p>
      </article>`;
      document.getElementById("education-topic").appendChild(dom);
    }
  });
