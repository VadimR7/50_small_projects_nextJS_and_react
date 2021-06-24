import Head from 'next/head';
import { FormEvent, useEffect, useState } from 'react';
import marked from 'marked';
import DOMPurify from 'dompurify';
import ComponentStyles from '../styles/NotesAppStyle';
import { fontAwsome, googleFonts } from '../helpers/externalLinks';

type Note = {
  id: number;
  text: string;
};

const addNewNote = () => {
  const id = Math.floor(Math.random() * Date.now());
  return {
    id,
    text: '',
  };
};

export default function NotesApp(): JSX.Element {
  const [notes, setNotes] = useState<Note[]>([]);
  const [isActive, setIsActive] = useState<number[]>([]);

  useEffect(() => {
    const localStorageNotes = localStorage.getItem('notes');
    if (localStorageNotes) {
      const notesFromLocalStorage = JSON.parse(localStorageNotes);
      setNotes(notesFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = () => {
    const newNote = addNewNote();
    setNotes([...notes, newNote]);
  };

  const handleNoteDelete = (id: number) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const handleToogle = (id: number) => {
    if (isActive.includes(id)) {
      const newArr = isActive.filter((item) => item !== id);
      setIsActive(newArr);
    } else {
      setIsActive([...isActive, id]);
    }
  };

  const handleInputChange = (e: FormEvent<HTMLTextAreaElement>, id: number) => {
    const text = e.currentTarget.value;
    const indexOfNote = notes.findIndex((item) => item.id === id);
    setNotes((prevState) => {
      const newArr = [...prevState];
      newArr[indexOfNote].text = text;
      return newArr;
    });
  };

  return (
    <>
      <Head>
        <title>Notes App</title>
        <link rel="icon" href="/favicon.ico" />
        {fontAwsome}
        {googleFonts('Poppins', 200, 400)}
      </Head>
      <ComponentStyles.Wrapper>
        <button type="button" className="add" onClick={handleAddNote}>
          <i className="fas fa-plus" /> Add note
        </button>

        {notes &&
          notes.map((note) => {
            const markedMainText = marked(note.text);
            const cleanedMarkedMainText = DOMPurify.sanitize(markedMainText);
            return (
              <div className="note" key={note.id}>
                <div className="tools">
                  <button
                    type="button"
                    className="edit"
                    onClick={() => handleToogle(note.id)}
                  >
                    <div className="fas fa-edit" />
                  </button>
                  <button
                    type="button"
                    className="edit"
                    onClick={() => handleNoteDelete(note.id)}
                  >
                    <div className="fas fa-trash-alt" />
                  </button>
                </div>

                <div
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    __html: `${cleanedMarkedMainText}`,
                  }}
                  className={
                    isActive.includes(note.id) ? 'main hidden' : 'main'
                  }
                />
                <textarea
                  value={note.text}
                  className={isActive.includes(note.id) ? '' : 'hidden'}
                  onInput={(e) => handleInputChange(e, note.id)}
                />
              </div>
            );
          })}
      </ComponentStyles.Wrapper>
    </>
  );
}
