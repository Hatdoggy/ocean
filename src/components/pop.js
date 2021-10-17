import { useState, useEffect } from "react";
import { spin, ActionRedirect } from "../func";

const { pop } = window.txt;
const audio = new Audio("./sounds/drop.mp3");
const win = new Audio("./sounds/win.mp3");
audio.volume = 0.3;
win.volume = 0.2;

const L1 = (props) => {
  const { pops, state, set, stat, setStat } = props;
  const { img, alt, head, head2, mes, btn } = pop.lose1;
  const { bank, spins } = stat;

  useEffect(() => {
    audio.play();
    setStat({
      ...stat,
      spins: spins - 1,
      bank: bank - 50,
    });
  }, []);

  const click = () => {
    let targ = document.querySelector(".popCont");
    targ.classList.add("fade-out");

    setTimeout(async () => {
      targ.classList.remove("fade-out");
      set({
        ...state,
        pop: false,
      });
      await spin();
      set({
        ...state,
        pop: true,
        pops: {
          w: false,
          l1: false,
          l2: true,
          l: true,
        },
      });
    }, 500);
  };

  return (
    <div className="flx flx-col inner flx-ai-ce flx-jc-sp p-20">
      <img src={img} alt={alt} />
      <div className="brd brd-wht1 flx flx-col flx-ai-ce flx-jc-sp p-20">
        <h4 className="mont txt-wht txt-al-ce">{head}</h4>
        <p className="mont txt-wht txt-al-ce m-t-5">{head2}</p>
        <p className="lato lato-l m-t-2 txt-wht txt-al-ce">{mes}</p>
        <button className="btn m-t-5 btn-blue mont" onClick={click}>
          {btn}
        </button>
      </div>
    </div>
  );
};

const L2 = (props) => {
  const { pops, state, set, stat, setStat } = props;
  const { img, alt, head, head2, mes, btn } = pop.lose2;
  const { bank, spins } = stat;

  useEffect(() => {
    audio.play();
    setStat({
      ...stat,
      spins: spins - 1,
      bank: bank - 50,
    });
  }, []);

  const click = async () => {
    let targ = document.querySelector(".popCont");
    targ.classList.add("fade-out");

    setTimeout(async () => {
      targ.classList.remove("fade-out");
      set({
        ...state,
        pop: false,
      });
      await spin();
      set({
        ...state,
        pop: true,
        pops: {
          w: true,
          l1: false,
          l2: false,
          l: false,
        },
      });
    }, 500);
  };

  return (
    <div className="flx flx-col inner flx-ai-ce flx-jc-sp p-20">
      <img src={img} alt={alt} />
      <div className="brd brd-wht1 flx flx-col flx-ai-ce flx-jc-sp p-20 m-t-5">
        <h4 className="mont txt-wht txt-al-ce">{head}</h4>
        <p className="mont txt-wht txt-al-ce m-t-5">{head2}</p>
        <p className="lato lato-l m-t-2 txt-wht txt-al-ce">{mes}</p>
        <button className="btn m-t-5 btn-blue mont" onClick={click}>
          {btn}
        </button>
      </div>
    </div>
  );
};

const Lose = (props) => {
  const { pops, state, set, stat, setStat } = props;
  return (
    <div className="popCont flx flx-col flx-jc-ce flx-ai-ce bg-grad w-30 shdw-pop fade-t">
      {pops.l1 && (
        <L1 pops={pops} state={state} set={set} stat={stat} setStat={setStat} />
      )}
      {pops.l2 && (
        <L2 pops={pops} state={state} set={set} stat={stat} setStat={setStat} />
      )}
    </div>
  );
};

const Win = () => {
  const { img, alt, head, head2, mes, btn } = pop.win;

  useEffect(() => {
    audio.play();
    win.play();
  }, []);

  return (
    <div className="popCont flx flx-col inner flx-jc-ce flx-ai-ce bg-grad w-30 shdw-pop fade-t">
      <img src={img} alt={alt} />
      <div className="brd brd-wht1 flx flx-col flx-ai-ce flx-jc-sp p-20 m-t-5">
        <h4 className="mont txt-wht txt-al-ce">{head}</h4>
        <p className="mont txt-wht txt-al-ce m-t-5">{head2}</p>
        <p className="lato lato-l m-t-2 txt-wht txt-al-ce">{mes}</p>
        <button
          className="btn m-t-5 btn-ylw mont product-button"
          data-product-id="1"
          onClick={(elem) => ActionRedirect(elem.target.dataset.productId)}
        >
          {btn}
        </button>
      </div>
    </div>
  );
};

const Pop = (props) => {
  const { state, set, stat, setStat } = props;
  const { pops } = state;

  return (
    <div className="flx flx-jc-ce flx-ai-ce w-100 h-100 bg-pop fade">
      {pops.w && <Win />}
      {pops.l && (
        <Lose
          pops={pops}
          state={state}
          set={set}
          setStat={setStat}
          stat={stat}
        />
      )}
    </div>
  );
};

export { Pop };
