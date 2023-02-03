import styled from "styled-components";
export const SearchedProductContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 1rem;
  h2 span {
    color: var(--color-gray-50);
  }
  button {
    display: none;
  }
  @media (min-width: 900px) {
    width: 57%;
    margin: 0;
    margin-top: 1rem;
    justify-content: space-between;
    button {
      display: flex;
    }
  }
`;
