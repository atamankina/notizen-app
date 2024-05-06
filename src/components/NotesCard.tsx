import Card from "react-bootstrap/Card";
import { Note } from "../types/notes.type";
import { Button } from "react-bootstrap";


type Props = Note & {
  deleteFunction: (id: number) => void
}

function NotesCard(props: Props) {

  const categories = props.categories.map(c => '#' + c).join(' ')
  const date = props.date.toString()

  return (
    <Card className='mb-1'>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.user}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
        <Card.Text>{props.content}</Card.Text>
        <Card.Subtitle className="mb-2 text-muted">{categories}</Card.Subtitle>
        <Button variant="outline-success" size="sm">Bearbeiten</Button>
        <Button 
          className="ms-1"
          variant="outline-danger" 
          size="sm" 
          onClick={()=>{ props.deleteFunction(props.id) }}
        >Löschen</Button>
      </Card.Body>
    </Card>
  )
}

export default NotesCard;