import { Button, Form } from "react-bootstrap";
import { Note } from "../types/notes.type";
import { useRef } from "react";

type Props = {
  addNote: (note: Note) => void,
  notes: Note[]
}

export default function CreateNote(props: Props) {

  const titleRef = useRef<HTMLInputElement>(null)
  const contentRef = useRef<HTMLTextAreaElement>(null)
 // const userRef = useRef<HTMLInputElement>(null)
  const categoriesRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const title = titleRef.current!.value
    const content = contentRef.current!.value
   // const user = userRef.current!.value
    const categoriesInput = categoriesRef.current!.value

    if (!title || !content || !categoriesInput) return

    const categories = categoriesInput.split(',').map(category => category.trim());

    const id = props.notes.length + 1
 //   const createdAt = new Date()
    props.addNote({
      title,
      content,
      categories,
      id
    })
  }

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Form.Group className='mb-3'>
        <Form.Label>Title</Form.Label>
        <Form.Control type='text' placeholder='Title' ref={titleRef} />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Content</Form.Label>
        <Form.Control as='textarea' placeholder='Content' ref={contentRef} />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Categories</Form.Label>
        <Form.Control type='text' placeholder='Enter categories separated by commas' ref={categoriesRef} />
      </Form.Group>
      {/* <Form.Group className='mb-3'>
        <Form.Label>User</Form.Label>
        <Form.Control type='text' placeholder='User' ref={userRef} />
      </Form.Group> */}

      <Button type="submit" variant="primary">Create</Button>
    </Form>
  )
}
