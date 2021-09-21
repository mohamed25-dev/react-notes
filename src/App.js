import { useState, useEffect } from 'react';
import './App.css';
import Preview from './Components/Preview';
import Message from './Components/Message';
import NotesContainer from './Components/Notes/NotesContainer';
import NotesList from './Components/Notes/NotesList';
import Note from './Components/Notes/Note';
import NoteForm from './Components/Notes/NoteForm';
import Alert from './Components/Alert';

function App() {
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [validationErrors, setValidationErrors] = useState([]);


  const validate = () => {
    const validationErrors = [];
    let passed = true;

    if (!title) {
      validationErrors.push(' الرجاء إدخال عنوان الملاحظة');
      passed = false;
    }

    if (!content) {
      validationErrors.push('الرجاء إدخال محتوى الملاحظة');
      passed = false;
    }

    setValidationErrors(validationErrors);
    return passed;
  }


  useEffect(() => {
   if (localStorage.getItem('notes')) {
    setNotes(JSON.parse(localStorage.getItem('notes')));
   } else {
     localStorage.setItem('notes', JSON.stringify([]));
   }

  }, []);

  const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  }

  const changeTitleHandler = (event) => {
    setTitle(event.target.value);
  };

  const saveNoteHandler = () => {
    if (!validate()) return;

    const note = {
      id: new Date(),
      title,
      content,
    }

    const updatedNotes = [note, ...notes];
    saveToLocalStorage('notes', updatedNotes);

    setNotes(updatedNotes);
    setCreating(false);
    setSelectedNote(note.id);
    setTitle(note.title);
    setContent(note.content);
  };

  const changeContentHandler = (event) => {
    setContent(event.target.value);
  };

  const addNoteHandler = (event) => {
    setCreating(true);
    setEditing(false);
    setSelectedNote(null);
    setTitle('');
    setContent('');
  }

  const editNoteHandler = (event) => {
    setCreating(false);
    setEditing(true);
  }

  const updateNoteHandler = () => {
    if (!validate()) return;

    const updatedNotes = [...notes];
    const noteIndex = notes.findIndex(note => note.id === selectedNote);

    updatedNotes[noteIndex] = {
      id: selectedNote,
      title,
      content
    }

    saveToLocalStorage('notes', updatedNotes);

    setNotes(updatedNotes);
    setEditing(false);
    setTitle('');
    setContent('');
  }

  const deleteNoteHandler = () => {
    const noteIndex = notes.findIndex(note => note.id === selectedNote);
    notes.splice(noteIndex, 1);

    saveToLocalStorage('notes', updatedNotes);
    setNotes(notes);

    setEditing(false);
    setCreating(false);
    setSelectedNote(null);
    setTitle('');
    setContent('');
  }

  const selectNoteHandler = (id) => {
    const note = notes.find((note) => note.id === id);

    setCreating(false);
    setEditing(false);
    setSelectedNote(id);
    setTitle(note.title);
    setContent(note.content);
  }

  const getAddNote = () => {
    return (
      <NoteForm 
       formTitle={'إضافة ملاحظة جديدة'} 
       title={title} 
       content={content} 
       changeTitleHandler={changeTitleHandler} 
       changeContentHandler={changeContentHandler}
       clickHandler={saveNoteHandler}
       />
     );
  };

  const getEditNote = () => {
    return (
     <NoteForm 
      formTitle={'تعديل ملاحظة'} 
      title={title} 
      content={content} 
      changeTitleHandler={changeTitleHandler} 
      changeContentHandler={changeContentHandler}
      clickHandler={updateNoteHandler}
      />
    );
  };

  const getPreview = () => {
    if (notes.length === 0) {
      return <Message title="لا يوجد ملاحظات لعرضها" />
    }

    if (!selectedNote) {
      return <Message title="الرجاء اختيار ملاحظة لعرضها" />
    }

    const note = notes.find((note) => note.id === selectedNote);
    return (
      <div>
        <div className="note-operations">
          <a href="#" onClick={editNoteHandler}>
            <i className="fa fa-pencil-alt" />
          </a>
          <a href="#" onClick={deleteNoteHandler}>
            <i className="fa fa-trash" />
          </a>
        </div>
        <div>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <NotesContainer>
        <NotesList>
          {
            notes.map(note => <Note key={note.id} 
                title={note.title} 
                noteClicked={()=> selectNoteHandler(note.id)}
                active={selectedNote === note.id}
                /> 
            )
          }
        </NotesList>
        <button className="add-btn" onClick={addNoteHandler}>+</button>
      </NotesContainer>
      <Preview>
        {creating ? getAddNote() : editing ? getEditNote() : getPreview()}
      </Preview>
      {validationErrors.length !== 0 && <Alert validateMessages={validationErrors} />}
    </div>
  );
}

export default App;
