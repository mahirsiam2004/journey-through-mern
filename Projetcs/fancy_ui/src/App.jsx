import About from "./components/About"
import Eyes from "./components/Eyes"
import Landing from "./components/Landing"
import Marquee from "./components/Marquee"
import Navbar from "./components/Navbar"

function App() {


  return (
    <>
    <div className='w-full h-screen  text-white'>
      <Navbar></Navbar>
      <Landing></Landing>
      <Marquee></Marquee>
      <About></About>
      <Eyes></Eyes>
    </div>
    </>
  )
}

export default App
