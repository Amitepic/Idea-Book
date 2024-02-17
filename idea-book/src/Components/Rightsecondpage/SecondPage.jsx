import Header from '../Header/Header.jsx' 
import IndivisualNotes from '../IndivisualNotes/IndivisualNotes.jsx';
import NotesDetailsInput from '../NotesDetailsInput/NotesDetailsInput.jsx';
import './SecondPage.css';


const SecondPage = () =>{
    return(
        <>
        <div className='secondPage'>
            <Header />
            <div className='All-notes'>
            <IndivisualNotes />
            <IndivisualNotes />
            <IndivisualNotes />
            <IndivisualNotes />
            </div>

            
            <NotesDetailsInput />
        </div>
        </>
    )
}

export default SecondPage;