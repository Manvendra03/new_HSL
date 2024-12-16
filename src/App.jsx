import { createContext, useContext, useRef, useState } from "react";
import { LoginScreen } from "./pages/LoginScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeScreen } from "./pages/HomeScreen";


  export const MyContext = createContext();

function App() {
   
  const [currentUrl , setCurrentUrl] = useState("");
  const [currentFile, setCurrentFile] = useState(null);
  const [isLocalFile , setIsLocalFile] = useState(false);
  const [isAudio , setIsAudio] = useState(true);
  const currentRef  = useRef(null);
  return (
    <>
      <MyContext.Provider value={{setCurrentFile,setIsLocalFile,isLocalFile,currentFile,setCurrentUrl,currentUrl ,currentRef}} > 
       <div>
           <Routes>
              <Route path="/" element={<LoginScreen/>} />
              <Route path="/home" element={<HomeScreen/>} />
           </Routes>
       </div>
       </MyContext.Provider>     
    </>
  );
}

export default App;
