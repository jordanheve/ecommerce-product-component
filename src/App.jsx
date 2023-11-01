import ItemLayout from "./components/ItemLayout"
import Navbar from "./components/navbar"
import { Toaster } from "react-hot-toast"

function App() {

  return (
    <div className="lg:max-w-7xl">
    <Toaster
      position='top-center'
      reverseorder={false}
    />
     <Navbar/>
     <ItemLayout/>
    </div>
  )
}

export default App
