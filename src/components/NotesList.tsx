import NotesCard from "./NotesCard";
import { Note } from "../types/notes.type";
import { Col, Container, Row } from "react-bootstrap";

type Props = {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}


function NotesList(props: Props){

    const deleteNote = (id: number) => {
        const newNotes = [...props.notes].filter(note => note.id !== id)
        props.setNotes(newNotes)
      }

    return (
        <>
            <Container>
                <Row>                  
                    {
                        props.notes.map((note, index) => 
                        <Col md={6} key={note.id}>
                            <NotesCard
                            id={note.id}
                            title={note.title}
                            categories={note.categories}
                            content={note.content} 
                            deletionFunction={deleteNote}
                            />
                        </Col>
                    )
                    }                 
                </Row>
            </Container>
        </>
    )

}

export default NotesList;