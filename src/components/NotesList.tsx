import NotesCard from "./NotesCard";
import { Note } from "../types/notes.type";
import { Col, Container, Row } from "react-bootstrap";

type Props = {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

function NotesList(props: Props){

    return (
        <>
            <Container>
                <Row>
                    {
                        props.notes.map(note => 
                            <Col md={6} key={note.id}>
                                <NotesCard
                                    id={note.id}
                                    title={note.title}
                                    user={note.user}
                                    date={note.date}
                                    categories={note.categories}
                                    content={note.content} 
                                />
                            </Col>
                    )}
                </Row>
            </Container>
        </>
    )
}

export default NotesList;