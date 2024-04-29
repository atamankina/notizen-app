import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import CreateNote from './components/CreateNote';
import Header from './components/Header';
import NotesList from './components/NotesList';
import { notes } from './data/notes.data';


export default function App() {

  // Die App gibt das Grundgerüst der Anwendung vor
  // Hier werden wir später viele Informationen speichern und an Komponenten weitergeben

  return (
    <>
    <Header />
    <Container>
      <Row>
        <Col md={4}>
            <CreateNote />
        </Col>
        <Col>
          <NotesList notes = {notes}/>
        </Col>
      </Row>
    </Container>
    </>
  )
}
