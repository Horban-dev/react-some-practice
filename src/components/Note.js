import { MdDelete } from 'react-icons/md';
const Note = ({id, text, date, deleteNote}) => {
    return (
        <div className="note">
            <span className="note-title">{text}</span>
            <div className="note-footer">
                <small>{date}</small>
                <MdDelete 
                        onClick={() => deleteNote(id)}
                        className="delete-icon" 
                        size='1.3em'
                />
            </div>
            
        </div>
    )
}
export default Note;