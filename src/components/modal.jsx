import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
function ModalEdit({
  show,
  setShow,
  id,
  title: titleold,
  description: descriptionold,
  getTutorials,
}) {
  const [form, setForm] = useState({
    title: titleold,
    description: descriptionold,
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleEdit = (e) => {
    e.preventDefault();
    axios
      .put(
        `https://tutorial-api.fullstack.clarusway.com/tutorials/${id}/`,
        form
      )
      .catch((error) => console.log(error))
      .finally(() => getTutorials());

    setShow(false);
  };
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Tutorial</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleEdit}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>New Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your title."
                autoFocus
                onChange={handleChange}
                value={form.title}
                name="title"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>New Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your description"
                onChange={handleChange}
                value={form.description}
                name="description"
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" variant="primary">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default ModalEdit;
