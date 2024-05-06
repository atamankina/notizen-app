import Card from "react-bootstrap/Card";
import { Note } from "../types/notes.type";
import { Button, Form, Modal } from "react-bootstrap";
import { useRef, useState } from 'react';
import { format, parseISO } from 'date-fns';
import { BASE_URL } from "../config";

type Props = Note & {
  deleteFunction: (id: number) => void
}

function NotesCard(props: Props) {

  const categories = props.categories.map(cat => '#' + cat).join(' ')
  const dateString = parseISO(props.date.toString())
  const date = format(dateString, 'dd-MM-yyyy HH:mm')

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const titleRef = useRef<HTMLInputElement>(null)
  const contentRef = useRef<HTMLTextAreaElement>(null)
  const userRef = useRef<HTMLInputElement>(null)
  const categoriesRef = useRef<HTMLInputElement>(null)

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault()
    const title = titleRef.current?.value
    const content = contentRef.current?.value
    const user = userRef.current?.value
    const categoriesInput = categoriesRef.current?.value

    if (!title || !content || !user || !categoriesInput) {
      return
    }
    
    const categoriesUpdate = categoriesInput.split(',').map(category => category.trim())

    fetch(`${BASE_URL}/notes/${props.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Galina'
      },
      body: JSON.stringify({ title, content, user, categories: categoriesUpdate })
    })

    // force a re-render
    window.location.reload()

  }

  return (
    <>
    <Card className='mb-1'>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Erstellt von {props.user}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">am {date}</Card.Subtitle>
        <Card.Text>{props.content}</Card.Text>
        <Card.Subtitle className="mb-2 text-muted">{categories}</Card.Subtitle>
        <Button variant="outline-success" size="sm" onClick={handleShow}>Bearbeiten</Button>
        <Button 
          className="ms-1"
          variant="outline-danger" 
          size="sm" 
          onClick={()=>{ props.deleteFunction(props.id) }}
        >Löschen</Button>
      </Card.Body>
    </Card>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Notiz bearbeiten</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Titel</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                defaultValue={props.title}
                autoFocus
                ref={titleRef}
              />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Inhalt</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder='Inhalt'
                ref={contentRef}
                defaultValue={props.content}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Kategorien</Form.Label>
              <Form.Control
                type="text"
                placeholder="Kategorien"
                ref={categoriesRef}
                defaultValue={props.categories.join(', ')}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Benutzer</Form.Label>
              <Form.Control
                type="text"
                placeholder="Benutzer"
                ref={userRef}
                defaultValue={props.user}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={handleClose}>
            Abbrechen
          </Button>
          <Button variant="outline-primary" onClick={handleEdit}>
            Speichern
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default NotesCard;