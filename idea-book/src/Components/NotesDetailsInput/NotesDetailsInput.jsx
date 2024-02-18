import './NotesDetailsInput.css'

const NotesDetailsInput = () => {

    const handleInput = () => {
        const Hidemain = document.getElementsByClassName("right-second-page");
        Hidemain[0].style.display = "none";

        const showNotes = document.getElementsByClassName("rightaside");
        showNotes[0].style.display = "block";

    }
    return(
        
        
        <div className='note-text-area'>
            < input type='text' placeholder='Enter your text here..........'/>

            <button className='note-text-area-btn' onClick={handleInput}>✅</button>
        </div>
        
    )
}

export default NotesDetailsInput;