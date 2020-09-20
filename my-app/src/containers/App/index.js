import React, { useState, useEffect } from "react";
import CardCss from "./style";
import Reaction from "../../components/Reaction";
import axios from "axios";
function App() {
  const [content1, setContent1] = useState([]);
  const [content2, setContent2] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://my-json-server.typicode.com/artfuldev/json-db-data/user_content_reactions?content_id=1`
      )
      .then((res) => {
        console.log(res);
        const { data } = res;
        setContent1(data);
      });
    axios
      .get(
        `https://my-json-server.typicode.com/artfuldev/json-db-data/user_content_reactions?content_id=2`
      )
      .then((res) => {
        console.log(res);
        const { data } = res;
        setContent2(data);
      });
  }, []);

  return (
    <CardCss>
      <div className="App">
        <div className="content-container">
          <div className="cont"></div>
          <Reaction info={content1} />
        </div>
        <div className="content-container">
          <div className="cont"></div>
          <Reaction info={content2} />
        </div>
      </div>
    </CardCss>
  );
}

export default App;
