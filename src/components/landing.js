import { useEffect, useState } from "react";
import { mobile } from "../func";

const audio = new Audio("./sounds/bubbles.mp3");
const intro = new Audio("./sounds/intro.mp3");

const { mes, greet, title } = window.txt;
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const today = new Date();

const date = `${
  months[today.getMonth()]
} ${today.getDate()},${today.getFullYear()}`;

const PopUp = () => {
  return (
    <span className="flx flx-jc-ce flx-ai-ce p-20 brd brd-wht1 w-30 fade-t popUp">
      <small className="txt-wht mont">
        {mes} {date}
      </small>
    </span>
  );
};

const Greet = (props) => {
  const { state, set } = props;
  const { img, head, mes, user, btn } = greet;

  const clicked = () => {
    let targ = document.querySelector(".main").classList.add("fade-out");
    setTimeout(() => {
      set({
        ...state,
        main: false,
        svg: true,
      });
    }, 1000);
  };

  return (
    <section className="greet w-30 brd brd-wht1 flx flx-col flx-jc-sb flx-ai-ce p-20 h-80 fade-t">
      <img src={img.img} alt={img.alt} className="w-80" />
      <div className="h-50 flx flx-col flx-ai-ce flx-jc-sp">
        <h4 className="mont txt-al-ce txt-wht">{head}</h4>
        <p className="txt-wht txt-al-ce lato lato-l">{mes}</p>
        <p className="mont txt-al-ce txt-wht">
          {user}
          {!mobile ? " 09212131" : mobile}
        </p>
        <button className="btn w-50 btn-ylw mont" onClick={clicked}>
          {btn}
        </button>
      </div>
    </section>
  );
};

const Start = () => {
  return (
    <div className="w-100 h-100 flx flx-jc-ce flx-ai-ce fade titleCont">
      <h1 className="title mont txt-wht txt-al-ce">{title}</h1>
    </div>
  );
};

const Main = (props) => {
  const { state, set } = props;

  return (
    <main className="w-100 h-100 flx flx-col flx-jc-sp flx-ai-ce main">
      <PopUp />
      <Greet state={state} set={set} />
      <small className="w-30 txt-wht txt-al-ce lato">{window.txt.terms}</small>
    </main>
  );
};

export { Main, Start };
