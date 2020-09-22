import React, { useState, useEffect } from "react";
import CardCss from "./style";
import Reaction from "../../components/Reaction";
import axios from "axios";
import "bulma/css/bulma.css";
function App() {
  const [reactions, setReactions] = useState([]);
  const [users, setUsers] = useState([
    {
      id: 0,
      first_name: "Susmit",
      last_name: "Rao",
      email: "lphippen0@berkeley.edu",
      avatar: "http://dummyimage.com/128x134.png/dddddd/000000",
    },
  ]);
  useEffect(() => {
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
        setUsers([...users, ...data]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <CardCss>
      <div className="App">
        <div className="content-container">
          <div className="cont"></div>
          <Reaction users={users} reactions={reactions} content_id={1} />
        </div>
        <div className="content-container">
          <div className="cont"></div>
          <Reaction content_id={2} users={users} reactions={reactions} />
        </div>
      </div>
    </CardCss>
  );
}

export default App;
