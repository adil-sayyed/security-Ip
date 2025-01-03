// for handling add or edit modal
const basicButton = document.getElementById("basicButton");
const moreSettings = document.getElementById("moresettings");

function toggleModal(id) {
  const element = document.getElementById(id);
  element.classList.toggle("hidden");
  if (id == "newipblockModal") {
    basicButton.classList.add("bg-c-yellow");
  }
}
//handle moresetting toggle
function showMoreSettings() {
  moreSettings.classList.remove("hidden");
  basicButton.classList.add("bg-c-light-black1");
  basicButton.classList.add("hover-bg-c-yellow");
  basicButton.classList.remove("bg-c-yellow");
}
function hideMoreSettings() {
  moreSettings.classList.add("hidden");
}