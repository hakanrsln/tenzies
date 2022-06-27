
import React from 'react';
import './App.css';
import Die from './Die';

function App() {
    const [dice, setDice] = React.useState(allNewDice())

    function allNewDice() {
      // new array to hold my numbers
      const newDice = []
      //loop 10 times
      for(let i=0; i<10; i++){
        newDice.push(Math.ceil(Math.random() * 6))
      }

      return newDice
        //push a random number from 1-6 to my array
    }

    const diceElements = dice.map(die => <Die value={die} />)

  return (
   <main>
    <div className="dice-container">

        {diceElements}
        
    </div>
   </main>
  );
}

export default App;
