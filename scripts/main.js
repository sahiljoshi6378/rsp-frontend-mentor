const rulesBtn = document.getElementById("rules_toggle");



// open rules banner
rulesBtn.addEventListener("click", e => {

  // const closeBtn = document.createElement('img');
  // closeBtn.

  const POPOVER__HTML = `
  <div class="rules__popover ">
  <div class="popover__inner flex flex__fdc flex__aic flex__jcfs">
    <p>Rules</p>
    <img src="./asstes/svg/image-rules.svg" alt="rules of game">
    <img
    onClick="closeRuleBanner()"
    class="close"
    src="./asstes/svg/close.svg"
    />
  </div>
</div>
    `;

  const gameWrapper = document.getElementsByClassName("game__wrapper")[0];

  if (e.target.dataset.state === "false") {
    e.target.dataset.state = "true";
    closeRulesbtn = document.getElementsByClassName("close")[0];
    gameWrapper.insertAdjacentHTML("afterbegin", POPOVER__HTML);
  } else if (e.target.dataset.state === "true") {
    e.target.dataset.state = "false";
    const popover = document.getElementsByClassName("rules__popover")[0];
    popover.remove();
  }
});



function closeRuleBanner(e){
  rulesBtn.dataset.state = "false";
  const popover = document.getElementsByClassName("rules__popover")[0];
  popover.remove();
}