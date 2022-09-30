import {useState, useEffect } from 'react';
import NotesList from './components/NotesList';
import Header from './components/Header';
import Search from './components/Search';
import './App.css';
import { nanoid } from 'nanoid';



const App = () => {
    const [notes, setNotes] = useState([
        {
        id: nanoid(),
        text: 'Hello, its my first note',
        date: '19/12/2022',
        },
        {
        id: nanoid(),
        text: 'There is my second note!',
        date: '23/02/2022',
        },
        {
        id: nanoid(),
        text: 'Its my third note!',
        date: '04/01/2022',
        },
        {
        id: nanoid(),
        text: 'Some notes test...',
        date: '09/10/2022',
        }
    ])

    const [serchText, setSerchText] = useState('');
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("react-notes-app-data"));
        if (data) {
          setNotes(data);
        }
      }, []);

    useEffect(() => {
        localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
      }, [notes]);

     

    const AddNote = (text) => {
        const date = new Date()
        const newNote = {
            id: nanoid(),
            text: text,
            date: date.toLocaleDateString()
        }
        const newNotes = [...notes, newNote]
        setNotes(newNotes)
    }

    const deleteNote = (id) => {
        const filteredNotes = notes.filter((note) => note.id !== id);
        setNotes(filteredNotes);
    };
    
  
    return (
        <div className={`${darkMode && 'dark-mode'}`}>
            <div className="container">
                <Header handleDark={setDarkMode}/>
                <Search handleSearchText={setSerchText}/>
                <NotesList 
                        notes={notes.filter((note) => note.text.toLowerCase().includes(serchText))} 
                        handleAddNote={AddNote}
                        deleteNote={deleteNote}
                />
            </div>
        </div>
    )
}



export default App;
