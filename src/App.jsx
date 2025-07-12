import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Calendar from './components/Calendar'
// import 'bootstrap/dist/css/bootstrap.min.css';

// import { ThemeProvider } from "./ThemeContext";
function App() {
 

  return (
    <>
    <div>
        {/* <ThemeProvider> */}
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/calendar' element={<Calendar/>}/>
      </Routes>
      </BrowserRouter>
      {/* </ThemeProvider> */}
    </div>
     
    </>
  )
}

export default App
