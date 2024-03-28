// const password = document.getElementsByName(".password");
// const move = document.getElementById("move");
// const load = document.getElementsByClassName(".load");
// const changePassword = document.getElementById("changePassword");

const button = document.getElementById("button");
compount = false;

button.addEventListener("click", () => {
  console.log("opertion");
  const password = document.getElementById("password");
  password.classList.add("remove");
  if (compount) {
    InputDeviceInfo === invaid;
    return () => {
      password.classList.remove("remove");
      const move = document.getElementById("move");
      move.classList.add("remove");
    };
  } else {
    const move = document.getElementById("move");
    move.classList.remove("remove");
  }
});

const operate = document.getElementById("operate");

operate.addEventListener("click", () => {
  console.log("let go");
  const move = document.getElementById("move");
  move.classList.add("remove");
  setTimeout(() => {
    const load = document.getElementById("load");
    load.classList.remove("remove");
  }, 100);
  return () => {
    const changePassword = document.getElementById("changePassword");
    changePassword.classList.remove("remove");
  };
});
