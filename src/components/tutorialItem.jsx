import axios from "axios";
import { useState } from "react";
import ModalEdit from "./modal";
const TutorialItem = ({ item: { id, title, description }, getTutorials }) => {
  const [show, setShow] = useState(false);

  const handleRemove = () => {
    axios
      .delete(`https://tutorial-api.fullstack.clarusway.com/tutorials/${id}/`)
      .catch((e) => console.log(e))
      .finally(() => getTutorials());
  };
  return (
    <>
      <ModalEdit
        show={show}
        setShow={setShow}
        id={id}
        title={title}
        description={description}
        getTutorials={getTutorials}
      />
      <tr className="rounded-5 mt-3">
        <td>{id}</td>
        <td>{title}</td>
        <td>{description}</td>
        <td>
          <i
            className="fa-solid fa-pen-to-square"
            onClick={() => setShow(true)}
          ></i>
        </td>
        <td>
          <i className="fa-solid fa-eraser " onClick={handleRemove}></i>
        </td>
      </tr>
    </>
  );
};

export default TutorialItem;
