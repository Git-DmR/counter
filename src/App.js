import CounterContainer from "../src/containers/counter";
import CounterManagerContainer from "./containers/counterManager";
import "./App.css";

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <hr />
      <CounterManagerContainer />
    </div>
  );
}

export default App;
