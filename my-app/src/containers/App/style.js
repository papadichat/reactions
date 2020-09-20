import styled from "styled-components";

const CardCss = styled.div`
  .App {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: grey;
    .content-container {
      height: 300px;
      width: 50vw;
      margin-bottom: 30px;
      .cont {
        background: lightgray;
        height: 200px;
      }
    }
  }
`;

export default CardCss;
