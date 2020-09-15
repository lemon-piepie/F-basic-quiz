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
