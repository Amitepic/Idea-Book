import './LeftAside.css'
import Notes from '../Notes.jsx'
import NoteContext from '../Context/NoteContext';
import {useContext, useState} from 'react';

const LeftAside = () => {

    const NotesDataGlobal = useContext(NoteContext);
    console.log(NotesDataGlobal);



    return(
        <div className = 'LeftMain'>
         <h1 className='title'>Pocket Notes</h1>
         

         <Notes name={"Math"} p={"M"}/>
         <hr />
         <Notes name={"Node js"}  p={"N J"} />
         <hr />
         <Notes name={"React"}  p={"R"}/>
         <hr />
         <Notes name={"Java"}  p={"J"}/>
         

        </div>
    )
}

export default LeftAside;