import Table from "react-bootstrap/Table";
import styles from "./tutorial.module.scss";
import TutorialItem from "./tutorialItem";
const TutorialList = ({ tutorials, getTutorials }) => {
  return (
    <Table className=" table-hover table table-info table-striped" striped>
      <thead>
        <tr className={styles.tablerow}>
          <th>ID</th>
          <th>Title</th>
          <th>Description</th>
          <th>Edit</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {tutorials?.map((item) => (
          <TutorialItem key={item.id} item={item} getTutorials={getTutorials} />
        ))}
      </tbody>
    </Table>
  );
};

export default TutorialList;
