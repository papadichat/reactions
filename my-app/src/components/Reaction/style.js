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
          display: flex;
          justify-content: center;
          cursor: pointer;
          flex: 1;
        }
        .active {
          border-bottom: 1px solid blue;
        }
      }
    }
    .modal-card-body {
      display: flex;
      flex-direction: column;
      .user-info {
        display: flex;
        .user-pic {
          margin-right: 20px;
          border: 1px solid grey;
          border-radius: 50%;
          img {
            max-width: 70px;
            max-height: 70px;
            object-fit: contain;
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
      z-index: 50;
      background: #fff;
      height: 32px;
      padding: 0 20px 10px 20px;
      bottom: 20px;

      .rec {
        font-size: 16px;
        margin-right: 16px;
        cursor: pointer;
        :hover {
          position: absolute;
          font-size: 32px;
          z-index: 5;
        }
      }
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
