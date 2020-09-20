import React, { useState, useEffect } from "react";
import CardCss from "./style";
import Reaction from "../../components/Reaction";
import axios from "axios";
import "bulma/css/bulma.css";
function App() {
  const [modal, setModal] = useState(false);
  const [content1, setContent1] = useState([]);
  const [content2, setContent2] = useState([]);
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
        setUsers([...users, ...data]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <CardCss>
      <div className={`modal ${modal ? "is-active" : ""}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Modal title</p>
            <button className="delete" aria-label="close"></button>
          </header>
          <section className="modal-card-body">
            <p>hi</p>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success">Save changes</button>
            <button
              className="button"
              onClick={() => {
                setModal(false);
              }}
            >
              Cancel
            </button>
          </footer>
        </div>
      </div>
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
