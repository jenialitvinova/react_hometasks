import ListView from "./components/ListView";
import './App.css';

function App() {
  const names = [
      "Jenia",
      "Hanna",
      "Nadzeya"
  ]
  return (
    <div className="App">
      <ListView names={names}/>
    </div>
  );
}

export default App;
