import styled from "styled-components";

const CardCss = styled.div`
  .reactions {
    display: flex;
    justify-content: flex-start;
    align-items: Center;
    height: 32px;
    border-radius: 24px;
    background: #fff;
    padding: 0 20px;
    .reaction {
      height: 16px;
      width: 16px;
      margin-right: 16px;
    }
  }
`;

export default CardCss;
