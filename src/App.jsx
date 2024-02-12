
import './App.css'
import Nav from './Components/Nav'
import Header from './Components/Header'
import Best from './Components/Best'
import Menu from './Components/Menu'
import Subscribe from './Components/Subscribe'
import Customer from './Components/Customer'
import Footer from './Components/Footer'
import { ThemeProvider } from './Context/Theme'
import { useState,useEffect } from 'react'


function App() {
  const[themeMode,setThemeMode]=useState("light")
  const lightTheme=()=>{
    setThemeMode("light");
  }
  const darkTheme=()=>{
    setThemeMode("dark");
  }
  
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(themeMode);
  }, [themeMode]);
  

  return (
    <>
    <ThemeProvider value={{themeMode,lightTheme,darkTheme}} >
     <Nav />
     <Header />
     <Best />
     <Menu />
     <Subscribe />
     <Customer />
     <Footer />
     </ThemeProvider>
    </>
  )
}

export default App
