import Card from "react-bootstrap/Card";
import { Note } from "../types/notes.type";
import { Button } from "react-bootstrap";

type Props = Note & {

}

function NotesCard(props: Props) {

  const categories = props.categories.map(c => '#' + c).join(' ')
  const date = props.date.toString().substring(4, 24)

  return (
    <Card className='mb-1'>
      <Card.Body>
        <Card.Title className="mb-3 fs-3">{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted fw-light">Notiz von {props.user}</Card.Subtitle>
        <Card.Subtitle className="mb-3 text-muted fw-lighter">Erstellt am {date}</Card.Subtitle>
        <Card.Text>{props.content}</Card.Text>
        <Card.Subtitle className="mb-4 text-muted fw-light">{categories}</Card.Subtitle>
        <Button variant="outline-success" size="sm">Bearbeiten</Button>{' '}
        <Button variant="outline-danger" size="sm">Löschen</Button>{' '}
      </Card.Body>
    </Card>
  )
}

export default NotesCard;