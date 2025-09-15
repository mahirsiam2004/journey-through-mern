import Actor from "./Actor";
import "./App.css";
import ToDo from "./todo";


function App() {
  return <>
  const actors =['prabhs','yash','srk','ntr'];
<h1>React Basics</h1>

{
  actors.map(actor=><Actor actor={actor}></Actor>)
}

{/* <ToDo task="learn-react" isDone={true}></ToDo>
<ToDo task="revise-react" isDone={false}></ToDo> */}

  {/* <Player name="mahir" runs="5000"></Player> */}
  </>;
}

function Player({name,runs}) {
  return (
    <div className="student">
      <h3>Name: {name}</h3>
      <h3>Runs: {runs}</h3>
    </div>
  );
}

export default App;
