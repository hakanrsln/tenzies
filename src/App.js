
import React from 'react';
import './App.css';
import Die from './Die';
import { nanoid } from "nanoid";

function App() {
    const [dice, setDice] = React.useState(allNewDice())

    function allNewDice() {
      // new array to hold my numbers
      const newDice = []
      //loop 10 times
      for(let i=0; i<10; i++){
        newDice.push({
          value:Math.ceil(Math.random() * 6),
        isHeld: true,
        id:nanoid()
      })
      }

      return newDice
        //push a random number from 1-6 to my array
    }
    function rollDice() {
      setDice(allNewDice())
    }

    const diceElements = dice.map(die => <Die key={die.id} value={die.value} isHeld={die.isHeld} />)



  return (
   <main>
    <div className="dice-container">

        {diceElements}
        
    </div>
    <button className='roll-dice' onClick={rollDice}>Roll</button>
   </main>
  );
}

export default App;
