import Count from './count';
import './App.css'


function App() {
function handleClick(){
  alert('i am clicked');
}
function handleClick2(){
  alert('i am clicked from 2');
}




  return (
    <>
      <h3>BASIC -2</h3>
      <Count></Count>
      <button onClick={handleClick}>CLick Me</button>
      <button onClick={()=>handleClick2()}>CLick Me</button>
    </>
  )
}

export default App
