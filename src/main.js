const innerTextBtn = document.querySelector("#innerText");
const resetBtn = document.querySelector("#reset");

const innerTextHandle = () => {
  console.log("innerText");
  const titleEl = document.querySelector("#titleText");
  const positionEl = document.querySelector("#position");
  titleEl.insertAdjacentHTML(
    positionEl.value,
    `<span>${positionEl.value}</span>`
  );
};

innerTextBtn.addEventListener("click", innerTextHandle);

resetBtn.addEventListener("click", () => {
  window.location.reload();
});
