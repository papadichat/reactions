import React, { useEffect, useState } from "react";
import CardCss from "./style";
import axios from "axios";
import ReactTooltip from "react-tooltip";

function Reaction({ info }) {
  const [reactions, setReactions] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://my-json-server.typicode.com/artfuldev/json-db-data/reactions`
      )
      .then((res) => {
        console.log(res);
        const { data } = res;
        setReactions(data);
      });
  }, []);

  return (
    <CardCss>
      <ReactTooltip />
      <div className="reactions">
        {info.some((data) => data.reaction_id === 1) && (
          <div data-tip="hello" data-for="1" className="reaction">
            {reactions && reactions[0].emoji}
          </div>
        )}
        {info.some((data) => data.reaction_id === 2) && (
          <div data-tip="hello" data-for="1" className="reaction">
            {reactions && reactions[1].emoji}
          </div>
        )}
        {info.some((data) => data.reaction_id === 3) && (
          <div data-tip="hello" data-for="1" className="reaction">
            {reactions && reactions[2].emoji}
          </div>
        )}

        {info.some((data) => data.reaction_id === 4) && (
          <div className="reaction">{reactions && reactions[3].emoji}</div>
        )}
        {info.some((data) => data.reaction_id === 5) && (
          <div className="reaction">{reactions && reactions[4].emoji}</div>
        )}
      </div>
      <div className="trigger"></div>
    </CardCss>
  );
}

export default Reaction;
