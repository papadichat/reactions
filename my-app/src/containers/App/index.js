import React, { useState, useEffect } from "react";
import CardCss from "./style";
import Reaction from "../../components/Reaction";
import axios from "axios";
function App() {
  const [content1, setContent1] = useState([]);
  const [content2, setContent2] = useState([]);
  const [reactions, setReactions] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://artful-iudex.herokuapp.com/user_content_reactions?content_id=1`
      )
      .then((res) => {
        console.log(res);
        const { data } = res;
        setContent1(data);
      })
      .catch((err) => console.log(err));
    axios
      .get(
        `https://artful-iudex.herokuapp.com/user_content_reactions?content_id=2`
      )
      .then((res) => {
        console.log(res);
        const { data } = res;
        setContent2(data);
      })
      .catch((err) => console.log(err));
    axios
      .get(`https://artful-iudex.herokuapp.com/reactions`)
      .then((res) => {
        console.log(res);
        const { data } = res;
        setReactions(data);
      })
      .catch((err) => console.log(err));
    axios
      .get(`https://artful-iudex.herokuapp.com/users`)
      .then((res) => {
        console.log(res);
        const { data } = res;
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <CardCss>
      <div className="App">
        <div className="content-container">
          <div className="cont"></div>
          <Reaction info={content1} users={users} reactions={reactions} />
        </div>
        <div className="content-container">
          <div className="cont"></div>
          <Reaction info={content2} users={users} reactions={reactions} />
        </div>
      </div>
    </CardCss>
  );
}

export default App;
