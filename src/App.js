
import './App.css';
import Die from './Die';

function App() {
  return (
   <main>
    <div className="dice-container">

        <Die value="1" />
        <Die value="1" />
        <Die value="2" />
        <Die value="1" />
        <Die value="3" />
        <Die value="1" />
        <Die value="2" />
        <Die value="1" />
        <Die value="2" />
        <Die value="5" />
    </div>
   </main>
  );
}

export default App;
