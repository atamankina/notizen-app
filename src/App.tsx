import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import CreateNote from './components/CreateNote';
import Header from './components/Header';
import NotesList from './components/NotesList';
import { notesData } from './data/notes.data';
import { Note } from './types/notes.type';
import { useEffect, useState } from 'react';
import { useGetNotes } from './hooks/api';


export default function App() {

  const [searchTerm, setSearchTerm] = useState<string>('')
  const [ notes, setNotes ] = useState<Note[]>([])

  const { isLoading: getNotesIsLoading, data: getNotesData, error: getNotesError } = useGetNotes('Galina')

  useEffect(() => {
    if (!getNotesIsLoading && getNotesData) {
      setNotes(getNotesData)
    }
  }, [getNotesIsLoading, getNotesData])

  function addNote(note: Note): void {
    setNotes([...notes, note]);
  }

  // Die App gibt das Grundgerüst der Anwendung vor
  // Hier werden wir später viele Informationen speichern und an Komponenten weitergeben

  return (
    <>
    <Header setSearch={setSearchTerm}/>
    <Container>
      <Row>
        <Col md={4}>
            <CreateNote notes = {notes} addNote = {addNote} />
        </Col>
        <Col>
          <NotesList notes = {notes} setNotes={setNotes} search={searchTerm}/>
        </Col>
      </Row>
    </Container>
    </>
  )
}
