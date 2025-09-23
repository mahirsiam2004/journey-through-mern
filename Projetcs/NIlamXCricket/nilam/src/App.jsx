import "./App.css";
import navPng from "./assets/logo.png";
function App() {
  return (
    <>
      <div className="navbar max-w-[1200px] mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            <img className="w-[60px] h-[60px]" src={navPng} alt="" />
          </a>
        </div>
        <div className="flex-none">
          <span className="mr-1">60000000</span>
          <span>coin</span>
        </div>
      </div>



    </>
  );
}

export default App;
