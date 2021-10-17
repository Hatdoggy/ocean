import { Pop } from "./components/pop";
import { Main, Start } from "./components/landing";
import { useEffect, useState } from "react";
import { Spinner } from "./components/svg";

const { stats } = window.txt;

function App() {
  const [state, setState] = useState({
    start: true,
    pop: false,
    svg: false,
    main: false,
    pops: {
      w: false,
      l1: true,
      l2: false,
      l: true,
    },
  });
  const { spins, bank } = stats;

  const [stat, setStat] = useState({
    spins: spins.val,
    bank: bank.val,
  });

  useEffect(() => {
    let targ = document.querySelector(".titleCont");
    setTimeout(() => {
      targ.classList.remove("fade");
      targ.classList.add("fade-out");
      setTimeout(() => {
        setState({
          ...state,
          start: false,
          main: true,
        });
      }, 500);
    }, 2000);
  }, []);

  return (
    <div className="w-100 h-100 pos-rel">
      {state.pop && (
        <Pop state={state} set={setState} setStat={setStat} stat={stat} />
      )}
      {state.main && <Main state={state} set={setState} />}
      {state.start && <Start />}
      {state.svg && (
        <Spinner stat={stat} state={state} set={setState} setStat={setStat} />
      )}
    </div>
  );
}

export default App;
