import { Button, Container, Form, Navbar } from 'react-bootstrap';

type Props = {
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

function Header(props: Props) {
  return (
    <Navbar expand="md" className="bg-body-tertiary mb-2">
      <Container>
        <Navbar.Brand>Notiz App</Navbar.Brand>
        <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Notiz suchen"
                    className="me-2"
                    aria-label="Search"
                    onChange={e => props.setSearch(e.target.value)}
                  />
                  <Button variant="outline-success">Suchen</Button>
                </Form>
      </Container>
    </Navbar>
  );
}

export default Header;