import NotesCard from "./NotesCard";
import { Note } from "../types/notes.type";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { BASE_URL } from "../config";

type Props = {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>,
    search: string
}


function NotesList(props: Props){

    const [filteredNotes, setFilteredNotes] = useState(props.notes)

    function filterByContent() {
        const filteredNotes = [...props.notes].filter(note => {
            return note.content.toLowerCase().includes(props.search.toLowerCase())
        })
        setFilteredNotes(filteredNotes)
    }

    useEffect(() => {
        filterByContent()
    }, [props.search, props.notes])

    function handleDelete(id: number): void {
        fetch(`${BASE_URL}/notes/${id}`, {
            method: 'DELETE',
            headers: {
              'Authorization': 'Galina'
            }
          })
      
          // force a re-render
          window.location.reload()
    }

    return (
        <>
            <Container>
                <Row>
                    {
                        filteredNotes.map(note => 
                            <Col md={6} key={note.id}>
                                <NotesCard
                                    id={note.id}
                                    title={note.title}
                                    categories={note.categories}
                                    content={note.content}
                                    user={note.user}
                                    date={note.date} 
                                    deleteFunction={handleDelete} />
                            </Col>
                    )}
                </Row>
            </Container>
        </>
    )
}

export default NotesList;