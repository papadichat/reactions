import styled from "styled-components";

const CardCss = styled.div`
  .modal {
    .modal-card-head {
      display: flex;
      justify-content: space-between;
      background-color: white;
      .reactions1 {
        display: flex;
        justify-content: space-between;
        flex: 1;
        .reaction {
          display: flex;
          justify-content: center;
          cursor: pointer;
          flex: 1;
          padding-bottom: 10px;
          font-weight: 500;
          :hover {
            background-color: rgba(0, 0, 0, 0.05);
          }
        }
        .active {
          border-bottom: 3px solid blue;
        }
      }
    }
    .modal-card-body {
      display: flex;
      flex-direction: column;
      .user-info {
        display: flex;
        margin-bottom: 20px;
        justify-content: space-between;
        align-items: center;

        .k {
          display: flex;
          align-items: center;
          p {
            font-weight: 500;
          }
        }

        .user-pic {
          margin-right: 20px;
          border: 1px solid grey;
          border-radius: 50%;
          width: 70px;
          height: 70px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
          }
        }
      }
    }
  }
  .reactions {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 32px;

    background: #fff;
    padding: 0 20px 10px 20px;
    span {
      display: flex;
      align-items: center;
    }
    .no {
      margin-top: 10px;
      margin-left: 20px;
      font-weight: 400;
      text-decoration: underline;
      cursor: pointer;
    }
    .reaction {
      display: block;
      height: 16px;
      width: 16px;
      cursor: pointer !important;
      pointer-events: auto;
      margin-right: 5px;
    }
  }
  .trigger {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 32px;
    position: relative;
    background: #fff;
    padding: 0 20px 10px 20px;
    .reactions-container {
      display: none;
      position: absolute;
      width: max-content;
      height: max-content;
      z-index: 100;
      background: #fff;
      height: 32px;
      border-radius: 24px;
      padding: 0 20px 10px 20px;
      bottom: 30px;
      border: 1px solid grey;

      .rec:first-child {
        margin-left: 0;
      }
      .__react_component_tooltip {
        display: flex;

        align-items: center;
        background-color: #161616;
        border-radius: 100px;
        height: 24px;
        font-size: 12px;
        color: #fff;
        padding: 4px 8px;
        :after {
          content: none;
        }
      }

      .rec {
        display: block;
        font-size: 16px;
        margin-left: 16px;
        cursor: pointer;
        :hover {
          font-size: 32px;
        }
      }
    }
    .show {
      display: flex;
    }
    .button {
      border: none;
      outline: none;
      font-size: 14px;
      color: grey;
      .material-icons {
        font-size: 14px !important;
      }
    }
  }
`;

export default CardCss;
