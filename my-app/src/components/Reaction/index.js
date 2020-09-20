import React, { useEffect, useState } from "react";
import CardCss from "./style";
import axios from "axios";
import ReactTooltip from "react-tooltip";

class Reaction extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      reaction_data: [],
    };
  }

  componentDidMount() {}
  getData = (e) => {
    let id = e.target.getAttribute("data-for");
    console.log(e.target);
    axios
      .get(
        `https://artful-iudex.herokuapp.com/user_content_reactions?reaction_id=${id}`
      )
      .then((res) => {
        console.log(res);
        const { data } = res;
        this.setState({ reaction_data: data });
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { info, users, reactions } = this.props;
    const { reaction_data } = this.state;
    return (
      <CardCss>
        <div className="reactions">
          <span>
            {reactions.map((reaction, index) => {
              return (
                info.some((data) => data.reaction_id === reaction.id) && (
                  <>
                    <span
                      name={reaction.id}
                      data-tip
                      data-for={reaction.id}
                      className="reaction"
                    >
                      {reactions && reactions[index] && reactions[index].emoji}
                    </span>
                    <ReactTooltip
                      afterShow={this.getData}
                      id={reaction.id.toString()}
                      place="bottom"
                      type="dark"
                    >
                      <p>
                        {reactions && reactions[index] && reactions[index].name}
                      </p>
                      {reaction_data.map((rec) => {
                        return (
                          <p key={rec.id}>
                            {" "}
                            {users[
                              users.findIndex((user) => user.id === rec.user_id)
                            ].first_name +
                              " " +
                              users[
                                users.findIndex(
                                  (user) => user.id === rec.user_id
                                )
                              ].last_name}{" "}
                          </p>
                        );
                      })}
                    </ReactTooltip>{" "}
                  </>
                )
              );
            })}
          </span>
        </div>
        <div className="trigger"></div>
      </CardCss>
    );
  }
}

export default Reaction;
