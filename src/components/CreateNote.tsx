import { Button, Card, Form } from "react-bootstrap";

function CreateNote() {

    return (
        <Card className='mb-1'>
            <Card.Body>
                <Card.Title>Notiz erstellen</Card.Title>
                <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Titel</Form.Label>
                    <Form.Control type="text" placeholder="Gebe den Titel ein" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Inhalte</Form.Label>
                    <Form.Control as="textarea" placeholder="Gebe die Notiz ein" rows={5} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Kategorien</Form.Label>
                    <Form.Control type="text" placeholder="Gebe die Kategorien ein" />
                </Form.Group>
                <Button variant="outline-primary">Notiz erstellen</Button>
                </Form>
            </Card.Body>
        </Card>
      );

}

export default CreateNote;