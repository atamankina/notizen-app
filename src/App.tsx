import React, { useState } from "react";
import './App.css';
import Header from './components/Header';
import NotesList from './components/NotesList';
import { notesData } from './data/notes.data';
import CreateNote from "./components/CreateNote";
import { Col, Container, Row } from "react-bootstrap";
import { Note } from "./types/notes.type";


export default function App() {

  const [notes, setNotes] = useState<Note[]>(notesData)
  const [searchTerm, setSearchTerm] = useState<string>('')

  function addNote(note: Note): void {
    setNotes([...notes, note]);
  }

  // Die App gibt das Grundgerüst der Anwendung vor
  // Hier werden wir später viele Informationen speichern und an Komponenten weitergeben

  return (
    <>
    <Header setSearch={setSearchTerm} />
    <Container className='mt-3'>
      <Row>
        <Col>
         <NotesList notes = {notes} setNotes={setNotes} search={searchTerm}/>
       </Col>
       <Col md={4}>
        <CreateNote addNote={addNote} notes={notes}/>
       </Col>
      </Row>
    </Container>
    </>
  )
}
