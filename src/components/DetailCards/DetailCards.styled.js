import styled from "styled-components";

export const Styled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 50%;
  margin: auto;

  @media (max-width: 1024px) {
    width: 75%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;
