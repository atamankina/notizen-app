import NotesCard from "./NotesCard";
import { Note } from "../types/notes.type";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

type Props = {
    notes: Note[],
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>,
    search: string
}


function NotesList(props: Props){

    const [filteredNotes, setFilteredNotes] = useState(props.notes)

    useEffect(() => {
        filterByContent()
    }, [props.search, props.notes])

    const filterByContent = () => {
        const filteredNotes = [...props.notes].filter(note => {
        return note.content.toLowerCase().includes(props.search.toLowerCase())
        })
        setFilteredNotes(filteredNotes)
    }

    const deleteNote = (id: number) => {
        const newNotes = [...props.notes].filter(note => note.id !== id)
        props.setNotes(newNotes)
      }

    return (
        <>
            <Container>
                <Row>                  
                    {
                        filteredNotes.map((note, index) => 
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