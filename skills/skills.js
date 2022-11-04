const nav = document.querySelector(".navb");
const button1 = document.querySelector(".b1");
const button2 = document.querySelector(".b2");
const button3 = document.querySelector(".b3");
const button4 = document.querySelector(".b4");
const body = document.querySelector("body");
const tabs = document.querySelector(".tabskil");

// const navbar = document.querySelector("#navbar");
// const tabs = document.querySelector(".tabsinner");
// const about = document.querySelector(".about");

tabs.classList.toggle("tabskils");
nav.addEventListener("click", () => {
  console.log(tabs.classList);
  tabs.classList.toggle("tabskils");
  //   tabs.style.transition = "width 2s,height 2s ,transform 2s";
  //   tabs.style.height = "height:3rem";
});
// console.log("clicked");

const images = [];
images.push(
  "./images/mountain.jpg",
  "./images/skies.jpg",
  "./images/mountgreen.jpg",
  "./images/image2.jpg"
);
button1.addEventListener("click", () => {
  body.style.backgroundImage = `url(${images[0]})`;
  if (body.style.backgroundImage == `url("./images/mountain.jpg")`) {
    button1.style.backgroundColor = `aqua`;
    button2.style.backgroundColor = `white`;
    button3.style.backgroundColor = `white`;
    button4.style.backgroundColor = `white`;
  }
});
button2.addEventListener("click", () => {
  body.style.backgroundImage = `url(${images[1]})`;
  if (body.style.backgroundImage == `url("./images/skies.jpg")`) {
    button2.style.backgroundColor = `aqua`;
    button1.style.backgroundColor = `white`;
    button3.style.backgroundColor = `white`;
    button4.style.backgroundColor = `white`;
  }
});
button3.addEventListener("click", () => {
  body.style.backgroundImage = `url(${images[2]})`;
  if (body.style.backgroundImage == `url("./images/mountgreen.jpg")`) {
    button3.style.backgroundColor = `aqua`;
    button2.style.backgroundColor = `white`;
    button1.style.backgroundColor = `white`;
    button4.style.backgroundColor = `white`;
  }
});
button4.addEventListener("click", () => {
  body.style.backgroundImage = `url(${images[3]})`;
  if (body.style.backgroundImage == `url("./images/image2.jpg")`) {
    button4.style.backgroundColor = `aqua`;
    button3.style.backgroundColor = `white`;
    button2.style.backgroundColor = `white`;
    button1.style.backgroundColor = `white`;
  }
});

setInterval(() => {
  body.style.backgroundImage = `url(${
    images[Math.floor(Math.random() * images.length)]
  }`;
  if (body.style.backgroundImage == `url("./images/mountain.jpg")`) {
    button1.style.backgroundColor = `aqua`;
    button2.style.backgroundColor = `white`;
    button3.style.backgroundColor = `white`;
    button4.style.backgroundColor = `white`;
  }
  if (body.style.backgroundImage == `url("./images/skies.jpg")`) {
    button2.style.backgroundColor = `aqua`;
    button1.style.backgroundColor = `white`;
    button3.style.backgroundColor = `white`;
    button4.style.backgroundColor = `white`;
  }
  if (body.style.backgroundImage == `url("./images/mountgreen.jpg")`) {
    button3.style.backgroundColor = `aqua`;
    button2.style.backgroundColor = `white`;
    button1.style.backgroundColor = `white`;
    button4.style.backgroundColor = `white`;
  }
  if (body.style.backgroundImage == `url("./images/image2.jpg")`) {
    button4.style.backgroundColor = `aqua`;
    button3.style.backgroundColor = `white`;
    button2.style.backgroundColor = `white`;
    button1.style.backgroundColor = `white`;
  }
}, 5000);
