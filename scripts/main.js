const rulesBtn = document.getElementById("rules_toggle");

function fadeIn() {
  const popover = document.getElementsByClassName("rules__popover")[0];
}

rulesBtn.addEventListener("click", e => {
  const POPOVER__HTML = `
  <div class="rules__popover ">
  <div class="popover__inner flex flex__fdc flex__aic flex__jcsb">
    <p>Rules</p>
    <img src="./asstes/svg/image-rules.svg" alt="rules of game">
  </div>
</div>
    `;

  const offsetInnerWrapper = document.getElementsByClassName(
    "offset__inner__wrapper"
  )[0];

  if (e.target.dataset.state === "false") {
    e.target.dataset.state = "true";
    offsetInnerWrapper.insertAdjacentHTML("beforeend", POPOVER__HTML);
  } else if (e.target.dataset.state === "true") {
    e.target.dataset.state = "false";
    const popover = document.getElementsByClassName("rules__popover")[0];

    popover.remove();
  }
});
