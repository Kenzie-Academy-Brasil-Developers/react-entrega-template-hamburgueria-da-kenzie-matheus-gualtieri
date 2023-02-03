import styled from "styled-components";
export const ProductListContainer = styled.div`
  overflow-x: scroll;
  width: 100%;
  padding: 1rem 0;
  margin: 1rem;
  ul {
    display: flex;
    gap: 1rem;
    width: fit-content;
  }
  @media (min-width: 900px) {
    width: 60%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    ul {
      justify-content: center;
      flex-wrap: wrap;
    }
  }
`;
