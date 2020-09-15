import "./style/index.scss";
import { getEducation } from "./education";
import { getUser } from "./user";

const showUserResume = (userName, userAge) => {
  document.getElementById(
    "userIntro"
  ).innerHTML = `MY NAME IS ${userName} ${userAge}YO AND THIS IS MY RESUME/CV`;
};
const showUserDescription = (userDes) => {
  document.getElementById("userDescription").innerHTML = `${userDes}`;
};
const showUserImg = (userAvatar) => {
  document.getElementById("photo").setAttribute("src", `${userAvatar}`);
};
getUser(1)
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

getEducation(1)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      console.log(data[i]);
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
