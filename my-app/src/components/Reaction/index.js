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
      current_id: null,
      info: [],
      reaction_added: false,
      reaction: null,
    };
  }

  componentDidMount() {
    let id = this.props.content_id;
    axios
      .get(
        `https://artful-iudex.herokuapp.com/user_content_reactions?content_id=${id}`
      )
      .then((res) => {
        console.log(res);
        const { data } = res;
        this.setState({ info: data });
      })
      .catch((err) => console.log(err));
  }
  addEmoji = (reaction_id) => {
    if (this.state.reaction !== null) {
      axios
        .delete(`https://artful-iudex.herokuapp.com/user_content_reactions`, {
          user_id: 0,
          content_id: this.props.content_id,
          reaction_id: this.state.rection,
        })
        .then((res) => {
          console.log(res);
          const { data } = res;
          this.setState({
            info: [...this.state.info, data],
            reaction_added: true,
            reaction: data.reaction_id,
            show: false,
          });
        })
        .catch((err) => console.log(err));
    }
    axios
      .post(`https://artful-iudex.herokuapp.com/user_content_reactions`, {
        user_id: 0,
        content_id: this.props.content_id,
        reaction_id: reaction_id,
      })
      .then((res) => {
        console.log(res);
        const { data } = res;
        this.setState({
          info: [...this.state.info, data],
          reaction_added: true,
          reaction: data.reaction_id,
          show: false,
        });
      })
      .catch((err) => console.log(err));
  };
  setCurrent = (id) => {
    this.setState({ current_id: id });
    console.log(this.state);
  };
  getAll = (e) => {
    axios
      .get(`https://artful-iudex.herokuapp.com/user_content_reactions`)
      .then((res) => {
        console.log(res);
        const { data } = res;
        this.setState({
          reaction_data: data,
          current_id: 0,
        });
      })
      .catch((err) => console.log(err));
  };
  getData = (e) => {
    console.log(e);
    let id = e.target.getAttribute("data-for");
    console.log(e.target);
    axios
      .get(
        `https://artful-iudex.herokuapp.com/user_content_reactions?reaction_id=${id}`
      )
      .then((res) => {
        console.log(res);
        const { data } = res;
        this.setState({ reaction_data: data }, this.setCurrent(id));
      })
      .catch((err) => console.log(err));
  };
  render() {
    const { users, reactions } = this.props;
    const { info, reaction_data, modal, show, current_id } = this.state;
    return (
      <>
        <CardCss>
          <div className={`modal ${modal ? "is-active" : ""}`}>
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <div className="reactions1">
                  <div
                    className={`reaction ${current_id == 0 ? "active" : ""}`}
                    onClick={this.getAll}
                  >
                    All
                  </div>
                  {reactions &&
                    reactions.map((reaction, index) => {
                      return (
                        info.some(
                          (data) => data.reaction_id === reaction.id
                        ) && (
                          <>
                            <div
                              name={reaction.id}
                              data-for={reaction.id}
                              onClick={(e) => {
                                this.getData(e);
                              }}
                              className={`reaction ${
                                current_id == reaction.id ? "active" : ""
                              }`}
                            >
                              {reactions &&
                                reactions[index] &&
                                reactions[index].emoji}
                              <span data-for={reaction.id}>
                                {
                                  info.filter(
                                    (each) => each.reaction_id === reaction.id
                                  ).length
                                }
                              </span>
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
                {reaction_data &&
                  reaction_data.map((rec) => {
                    return (
                      <div className="user-info">
                        <div className="user-pic">
                          <img
                            src={
                              users[
                                users.findIndex(
                                  (user) => user.id === rec.user_id
                                )
                              ].avatar
                            }
                            alt="user_pic"
                          />
                        </div>

                        <p key={rec.id}>
                          {" "}
                          {users[
                            users.findIndex((user) => user.id === rec.user_id)
                          ].first_name +
                            " " +
                            users[
                              users.findIndex((user) => user.id === rec.user_id)
                            ].last_name}{" "}
                        </p>
                      </div>
                    );
                  })}
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
              {reactions &&
                reactions.map((reaction, index) => {
                  return (
                    info.some((data) => data.reaction_id === reaction.id) && (
                      <>
                        <span
                          name={reaction.id}
                          data-tip
                          data-for={reaction.id}
                          className="reaction"
                          onClick={(e) => {
                            this.setState(
                              { modal: true, current_id: reaction.id },
                              this.getData(e)
                            );
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
                          {reaction_data &&
                            reaction_data.map((rec) => {
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
            <span>{info.length}</span>
          </div>
          <div className="trigger">
            <div className={`reactions-container ${show ? "show" : ""} `}>
              {reactions &&
                reactions.map((reaction, index) => {
                  return (
                    <>
                      <span
                        className="rec"
                        onClick={() => {
                          this.addEmoji(reaction.id);
                        }}
                        data-tip
                        data-for={reaction.id.toString() + "reac"}
                      >
                        {reaction.emoji}
                      </span>{" "}
                      <ReactTooltip
                        id={reaction.id.toString() + "reac"}
                        place="top"
                        type="dark"
                      >
                        <p>
                          {reactions &&
                            reactions[index] &&
                            reactions[index].name}
                        </p>
                      </ReactTooltip>{" "}
                    </>
                  );
                })}
            </div>
            {this.state.reaction_added ? (
              <button
                type="button"
                className="button"
                onMouseEnter={() => {
                  this.setState({ show: true });
                }}
              >
                {" "}
                {reactions.find((rec) => rec.id === this.state.reaction).emoji +
                  reactions.find((rec) => rec.id === this.state.reaction).name}
              </button>
            ) : (
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
            )}
          </div>
        </CardCss>
      </>
    );
  }
}

export default Reaction;
