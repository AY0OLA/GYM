const addShidebar = () => {
  //   console.log("open bar");
  const navItem = document.querySelector(".navItem");
  navItem.classList.add("active");

  const body = document.querySelector("body");
  //   console.log("close body");
  body.classList.add("unscroll");
};
const removeShidebar = () => {
  //   console.log("close bar");
  const navItem = document.querySelector(".navItem");
  navItem.classList.remove("active");

  const body = document.querySelector("body");
  //   console.log("open body");
  body.classList.remove("unscroll");
};

const remove = () => {
  const navItem = document.querySelector(".navItem");
  navItem.classList.remove("active");

  const body = document.querySelector("body");
  //   console.log("open body");
  body.classList.remove("unscroll");
};

// Trunate
const showMoreBtn = document.getElementById("show-more");
const showLessBtn = document.getElementById("show-less");

showMoreBtn.addEventListener("click", () => {
  const nameL = document.getElementById("nameL");
  nameL.classList.remove("truncate");
  showMoreBtn.classList.add("invisible");
  showLessBtn.classList.remove("invisible");
  console.log("open");
});

showLessBtn.addEventListener("click", () => {
  const nameL = document.getElementById("nameL");
  nameL.classList.add("truncate");
  showMoreBtn.classList.remove("invisible");
  showLessBtn.classList.add("invisible");
  console.log("close");
});

// Adding and removing active
const sayContents = document.querySelectorAll(".sayContent");
sayContents.forEach((block) => {
  block.addEventListener("click", () => {
    sayContents.forEach((blocks) => {
      blocks.classList.remove("ative");
    });
    block.classList.add("ative");
  });
});

const photo = document.querySelectorAll(".photo");
photo.forEach((photos) => {
  photos.addEventListener("click", () => {
    photo.forEach((photos2) => {
      photos2.classList.remove("action");
    });

    photos.classList.add("action");
  });
});
