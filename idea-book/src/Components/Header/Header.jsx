import Notes from '../Notes.jsx'
import './Header.css'

const  Header = () => {
    return(
           <div className='header'>
             <Notes name={"Math"} p={"M"}/>
        </div>
    )
}

export default Header;