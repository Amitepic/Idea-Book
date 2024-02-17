import LeftAside from '../LeftSection/LeftAside.jsx';
import RightAside from '../RightSection/RightAside.jsx';
import AddNotes from '../AddNotes/AddNotes.jsx'
import AddNotesPop from '../AddPopUp/AddNotesPop.jsx';
import './Dashboard.css';

const Dashboard = () => {
    return(
        <div className='Dashbord'>
        
        <LeftAside />
        <RightAside />
        <AddNotes />
        <AddNotesPop />
        </div>
    )
}
export default Dashboard;