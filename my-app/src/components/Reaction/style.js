import styled from "styled-components";

const CardCss = styled.div`
  .modal {
    .modal-card-head {
      display: flex;
      justify-content: space-between;
      .reactions1 {
        display: flex;
        justify-content: space-between;
        flex: 1;
        .reaction {
          cursor: pointer;
          flex: 1;
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

    background: #fff;
    padding: 0 20px 10px 20px;
    .reactions-container {
      display: none;
      position: relative;
      z-index: 50;
      background: #fff;
      height: 32px;
      padding: 0 20px 10px 20px;
    }
    .show {
      display: block;
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
