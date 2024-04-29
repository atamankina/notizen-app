import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import CreateNote from './components/CreateNote';
import Header from './components/Header';
import NotesList from './components/NotesList';
import { notesData } from './data/notes.data';
import { Note } from './types/notes.type';
import { useState } from 'react';


export default function App() {

  const [ notes, setNotes ] = useState<Note[]>(notesData)

  function addNote(note: Note): void {
    setNotes([...notes, note]);
  }

  // Die App gibt das Grundgerüst der Anwendung vor
  // Hier werden wir später viele Informationen speichern und an Komponenten weitergeben

  return (
    <>
    <Header />
    <Container>
      <Row>
        <Col md={4}>
            <CreateNote notes = {notes} addNote = {addNote} />
        </Col>
        <Col>
          <NotesList notes = {notes} setNotes={setNotes} />
        </Col>
      </Row>
    </Container>
    </>
  )
}
