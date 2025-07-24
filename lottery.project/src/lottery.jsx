import { useState } from "react";
import { genTicket } from "./helper";
import Ticket from "./Ticket";

function Lottery ({ n = 3, winCondition }) {
  const [ticket, setTicket] = useState(genTicket(n));
  const isWinning = winCondition(ticket);

  const buyTicket = () => {
    setTicket(genTicket(n));
  };

  return (
    <div>
      <h1>Lottery Game!</h1>
      <Ticket ticket={ticket} />
      <button onClick={buyTicket}>Buy New Ticket</button>
      <h3 >{isWinning && "Congratulations, you won!"}</h3>
    </div>
  );
}
export default Lottery;