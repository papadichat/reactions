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
      modal: false,
      show: false,
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
    const { reaction_data, modal, show } = this.state;
    return (
      <>
        <CardCss>
          <div className={`modal ${modal ? "is-active" : ""}`}>
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <div className="reactions1">
                  <div className="reaction">All</div>
                  {reactions.map((reaction, index) => {
                    return (
                      info.some((data) => data.reaction_id === reaction.id) && (
                        <>
                          <div name={reaction.id} className="reaction">
                            {reactions &&
                              reactions[index] &&
                              reactions[index].emoji}
                          </div>
                        </>
                      )
                    );
                  })}
                </div>

                <button
                  className="delete"
                  aria-label="close"
                  onClick={() => {
                    this.setState({ modal: false });
                  }}
                ></button>
              </header>
              <section className="modal-card-body">
                <p>hi</p>
              </section>
              <footer className="modal-card-foot">
                <button className="button is-success">Save changes</button>
                <button
                  className="button"
                  onClick={() => {
                    this.setState({ modal: false });
                  }}
                >
                  Cancel
                </button>
              </footer>
            </div>
          </div>
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
                        onClick={() => {
                          this.setState({ modal: true });
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        {reactions &&
                          reactions[index] &&
                          reactions[index].emoji}
                      </span>
                      <ReactTooltip
                        afterShow={this.getData}
                        id={reaction.id.toString()}
                        place="bottom"
                        type="dark"
                      >
                        <p>
                          {reactions &&
                            reactions[index] &&
                            reactions[index].name}
                        </p>
                        {reaction_data.map((rec) => {
                          return (
                            <p key={rec.id}>
                              {" "}
                              {users[
                                users.findIndex(
                                  (user) => user.id === rec.user_id
                                )
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
          <div className="trigger">
            <div className={`reactions-container ${show ? "show" : ""} `}>
              {reactions.map((reaction, index) => {
                return (
                  <>
                    <span data-tip data-for={reaction.id.toString() + "reac"}>
                      {reaction.emoji}
                    </span>{" "}
                    <ReactTooltip
                      id={reaction.id.toString() + "reac"}
                      place="bottom"
                      type="dark"
                    >
                      <p>
                        {reactions && reactions[index] && reactions[index].name}
                      </p>
                    </ReactTooltip>{" "}
                  </>
                );
              })}
            </div>
            <button
              type="button"
              className="button"
              onMouseEnter={() => {
                this.setState({ show: true });
              }}
            >
              <span className="material-icons">thumb_up_alt</span>
              <p>Like</p>
            </button>
          </div>
        </CardCss>
      </>
    );
  }
}

export default Reaction;
