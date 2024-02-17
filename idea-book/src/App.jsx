import Dashboard from './Components/Dashboard/Dashboard.jsx'
import {  useState } from "react";
import NoteContext from './Components/Context/NoteContext'


import './App.css'

function App() {

  const [NotesData, setNotesData] = useState([]);

  return (

    <>
    <NoteContext.Provider value={{NotesData,setNotesData}}>

      <Dashboard />

     </NoteContext.Provider>
    </>
  )
}

export default App;
