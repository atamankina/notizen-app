import Card from "react-bootstrap/Card";
import { Note } from "../types/notes.type";
import { Button, Form, Modal } from "react-bootstrap";
import { useState } from "react";
import { useRef } from "react";
import { BASE_URL, userName } from "../config";


type Props = Note & {
  deleteFunction: (id: number) => void
}

function NotesCard(props: Props) {

  const categories = props.categories.map(c => '#' + c).join(' ')
  const date = props.date.toString()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const categoriesRef = useRef<HTMLInputElement>(null);
  const userRef = useRef<HTMLInputElement>(null);

  const handleEdit = (e: React.FormEvent) => {
    e.preventDefault();
    const title = titleRef.current!.value;
    const content = contentRef.current!.value;
    const categoriesInput = categoriesRef.current!.value;
    const user = userRef.current!.value;

    if (!title || !content || !categoriesInput || !user) return

    const categoriesUpdate = categoriesInput.split(',').map(category => category.trim())

        fetch(`${BASE_URL}/notes/${props.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': userName
            },
            body: JSON.stringify({ title, content, user, categories: categoriesUpdate })
        })

        window.location.reload()

  }

  return (
    <>
    <Card className='mb-1'>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.user}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
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
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Titel</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Titel"
                  defaultValue={props.title}
                  ref={titleRef} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Inhalt</Form.Label>
                <Form.Control 
                  as="textarea" 
                  placeholder="Inhalt" 
                  defaultValue={props.content}
                  autoFocus 
                  rows={5} 
                  ref={contentRef} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Kategorien</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Kategorien"
                  defaultValue={props.categories.join(', ')} 
                  ref={categoriesRef} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Benutzer</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Benutzer" 
                  defaultValue={props.user}
                  ref={userRef} />
            </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={handleClose}>
          Abbrechen
        </Button>
        <Button variant="outline-primary" onClick={handleEdit}>
          Notiz Speichern
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default NotesCard;