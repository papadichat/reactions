import React, { useEffect, useState } from "react";
import CardCss from "./style";
import axios from "axios";
import ReactTooltip from "react-tooltip";

function Reaction({ info, reactions, users }) {
  const { Info, setInfo } = useState([]);
  useEffect(() => {
    console.log(info);
    console.log(users);
    let new_info = info.map((con) => {
      let user = users.find((user) => user.id === con.user_id);
      console.log(user);
      return { ...con, first_name: user.first_name, last_name: user.last_name };
    });

    console.log(new_info);
  }, []);

  return (
    <CardCss>
      <div className="reactions">
        <span>
          {info.some((data) => data.reaction_id === 1) && (
            <>
              <span data-tip data-for="i" className="reaction">
                {reactions && reactions[0] && reactions[0].emoji}
              </span>
              <ReactTooltip id="i" place="bottom" type="dark">
                <span>{reactions && reactions[0] && reactions[0].name}</span>
              </ReactTooltip>{" "}
            </>
          )}
          {info.some((data) => data.reaction_id === 2) && (
            <>
              <span data-tip data-for="b" className="reaction">
                {reactions && reactions[1] && reactions[1].emoji}
              </span>
              <ReactTooltip id="b" place="bottom" type="dark">
                <span>{reactions && reactions[1] && reactions[1].name}</span>
              </ReactTooltip>
            </>
          )}
          {info.some((data) => data.reaction_id === 3) && (
            <>
              <span data-tip data-for="c" className="reaction">
                {reactions && reactions[2] && reactions[2].emoji}
              </span>
              <ReactTooltip id="c" place="bottom" type="dark">
                <span>{reactions && reactions[2] && reactions[2].name}</span>
              </ReactTooltip>
            </>
          )}

          {info.some((data) => data.reaction_id === 4) && (
            <>
              <span data-tip data-for="d" className="reaction">
                {reactions && reactions[3] && reactions[3].emoji}
              </span>{" "}
              <ReactTooltip id="d" place="bottom" type="dark">
                <span>{reactions && reactions[3] && reactions[3].name}</span>
              </ReactTooltip>
            </>
          )}
          {info.some((data) => data.reaction_id === 5) && (
            <>
              <span data-tip data-for="e" className="reaction">
                {reactions && reactions[4] && reactions[4].emoji}
              </span>{" "}
              <ReactTooltip id="e" place="bottom" type="dark">
                <span>{reactions && reactions[4] && reactions[4].name}</span>
              </ReactTooltip>
            </>
          )}
          {info.some((data) => data.reaction_id === 6) && (
            <>
              <span data-tip data-for="a" className="reaction">
                {reactions && reactions[5] && reactions[5].emoji}
              </span>{" "}
              <ReactTooltip id="a" place="bottom" type="dark">
                <span>{reactions && reactions[5] && reactions[5].name}</span>
              </ReactTooltip>
            </>
          )}
        </span>
      </div>
      <div className="trigger"></div>
    </CardCss>
  );
}

export default Reaction;
