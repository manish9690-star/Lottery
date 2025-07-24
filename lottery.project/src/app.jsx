import "./app.css";
import Lottery from "./lottery";
import { sum } from "./helper";

 export default function App() {
  const winCondition = (ticket) => {
     return sum(ticket) === 15;
  };

  return (
    <div>
      <Lottery n={4} winCondition={winCondition} />
    </div>
  );
}

