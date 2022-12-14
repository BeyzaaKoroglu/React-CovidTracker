import styled from "styled-components";

export const Styled = styled.header`
  h1 {
    font-size: 90px;
    margin-top: 25px;
    margin-bottom: 0;
    img {
      width: 70px;
    }
  }
  h3 {
    margin: 0;
  }

  @media (max-width: 479px) {
    h1 {
      font-size: 40px;
      margin-top: 25px;
      margin-bottom: 0;
      img {
        width: 33px;
      }
    }
  }
`;
