import { Routes, Route } from "react-router-dom"
import Input from "./components/Input"
import SingUpPage from "./pages/SingUpPage"
import LoginPage from "./pages/LoginPage"

function App() {
  return (
    <div>
      <Input label={"Usuario"}/>
      <h1 className='text-red-500'>Hello</h1>
      <Routes>
        <Route path="/" element={"home"}/>
        <Route path="signup" element={<SingUpPage/>}/>
        <Route path="login" element={<LoginPage/>}/>
      </Routes>
    </div>
  )
}

export default App
