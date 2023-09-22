import Tutorial from "../components/tutorial";
import TutorialList from "../components/tutorialList";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [tutorials, setTutorials] = useState([]);

  const getTutorials = () => {
    axios("https://tutorial-api.fullstack.clarusway.com/tutorials/")
      .then((response) => setTutorials(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getTutorials();
  }, []);

  return (
    <div className="container">
      <Tutorial
        tutorials={tutorials}
        setTutorials={setTutorials}
        getTutorials={getTutorials}
      />
      <TutorialList tutorials={tutorials} getTutorials={getTutorials} />
    </div>
  );
};

export default Home;
