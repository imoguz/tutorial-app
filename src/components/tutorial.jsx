import styles from "./tutorial.module.scss";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import axios from "axios";
const Tutorial = ({ getTutorials }) => {
  const [form, setForm] = useState({ title: "", description: "" });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postTutorial();
    setForm({ title: "", description: "" });
  };
  const postTutorial = () => {
    axios
      .post("https://tutorial-api.fullstack.clarusway.com/tutorials/", form)
      .catch((error) => console.log(error))
      .finally(() => getTutorials());
  };
  return (
    <div className={`${styles.container} container w-50 mt-3 fs-5  `}>
      <h2>ADD YOUR TUTORIAL</h2>
      <Form className="bg-info p-5 rounded-4 mb-4" onSubmit={handleSubmit}>
        <Form.Group className="mb-3 mx-auto" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your title."
            onChange={handleChange}
            value={form.title}
            name="title"
          />
        </Form.Group>
        <Form.Group className="mb-3  mx-auto" controlId="desc">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your description"
            onChange={handleChange}
            value={form.description}
            name="description"
          />
        </Form.Group>
        <div className="text-end">
          <Button className="px-4 bg-danger" type="submit" variant="primary">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};
export default Tutorial;
