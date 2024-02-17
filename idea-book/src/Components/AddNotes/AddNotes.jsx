import './AddNotes.css'


const AddNotes = () => {
    return(
        <div className='main'>
        <div className='add-btn'>
          <button className='btn'  onClick={()=>{
            console.log("clk");
            const show = document.getElementsByClassName("AddNotesPopup");
            show[0].style.display = "block";

          }}> + </button>
          
        </div>
        </div>
    )
}

export default AddNotes;