import './AddNotesPop.css';
import NoteContext from '../Context/NoteContext';
import {useContext, useState } from 'react';


const AddNotesPop = () =>{

   
    const NotesDataGlobal = useContext(NoteContext);
    const [CreateNote , setCreateNote] = useState({
     name:"",
     coloor:"",
     Notes:[],
     selected:false
    });
    
     
    const handleCreate  = () => {
        NotesDataGlobal.setNotesData([...NotesDataGlobal.NotesData, CreateNote]);
        localStorage.setItem('NotesLocal', JSON.stringify(NotesDataGlobal));

        const show = document.getElementsByClassName("AddNotesPopup");
        show[0].style.display = "none";
         
       

        const showNotes = document.getElementsByClassName("rightaside");
        showNotes[0].style.display = "none";

        const Hidemain = document.getElementsByClassName("right-second-page");
        Hidemain[0].style.display = "block";

        

        

    }

    return(
        <div className="AddNotesPopup">
           <p className='text'>Create New group</p>
           <label className='text'>
           Group Name: <input type="text" required placeholder="Enter group name" onChange={(e) => {setCreateNote({...CreateNote, 
            name:e.target.value })}} />
           </label>
            <br />
           <label className='text cards'>
           Choose colour: 
           <div className='card1'></div>
           <div className='card2'></div>
           <div className='card3'></div>
           </label>
           <button className='create-btn' onClick={handleCreate}>create</button>
        </div>
    )
}

export default AddNotesPop;