function getURLParameter(name) {
  return decodeURI(
    (RegExp(name + "=" + "(.+?)(&|$)").exec(window.location.search) || [
      ,
      null,
    ])[1] || ""
  );
}

let subid = getURLParameter("subid");
let subid2 = getURLParameter("subid2");
let firstname = getURLParameter("firstname");
let surname = getURLParameter("surname");
let city = getURLParameter("city");
let zipcode = getURLParameter("zipcode");
let address = getURLParameter("address");
let phone = getURLParameter("phone");
let mobile = getURLParameter("mobile");
let pid = getURLParameter("pid");
let nrp = getURLParameter("nrp");

let ffdomain = "https://" + getURLParameter("ffdomain");
let session = getURLParameter("session");
let fluxf = getURLParameter("fluxf");
let fluxffn = getURLParameter("fluxffn");

function ActionRedirect(action) {
  window.location.replace(
    ffdomain +
      "/?flux_action=" +
      action +
      "&flux_f=" +
      fluxf +
      "&flux_ffn=" +
      fluxffn +
      "&flux_sess=" +
      session
  );
}

let count = 1;
const audio = new Audio("./sounds/bubbles.mp3");

function spin() {
  let wheel = document.querySelector("#spinner");
  let ret = undefined;
  switch (count) {
    case 1:
      wheel.classList.add("spinAround");
      audio.play();
      ret = new Promise((res) => {
        setTimeout(res, 7000);
      });
      break;
    case 2:
      wheel.classList.add("spinAround2");
      audio.play();
      ret = new Promise((res) => {
        setTimeout(res, 7000);
      });
      break;
    case 3:
      wheel.classList.add("spinAround3");
      audio.play();
      ret = new Promise((res) => {
        setTimeout(res, 7000);
      });
      break;
  }
  count++;
  return ret;
}

export { ActionRedirect, mobile, spin };
