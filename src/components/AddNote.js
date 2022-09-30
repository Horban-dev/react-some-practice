import { useState } from 'react'
const AddNote = ({handleAddNote}) => {
    const [inputText, setInputText] = useState('')
    const letterLimit = 200;

    const textEx = (e) => {
        if(letterLimit - e.target.value.length >= 0) {
            setInputText(e.target.value)
        }
    }
    
    const saveHandle = () => {
        if(inputText.trim().length > 5) {
            handleAddNote(inputText)
            setInputText('')
        } 
    }
    return (
        <div className="note new">
            <textarea onChange={textEx} value={inputText} cols="7" rows="5" placeholder="Type smth..."></textarea>
            <div className="note-footer">
                <small>{letterLimit - inputText.length} Remaining</small>
                <button onClick={saveHandle} className="save">Save</button>
            </div>
        </div>
    )
}
export default AddNote;