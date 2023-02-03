import styled from "styled-components";
export const MainStyled = styled.main`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: 900px) {
    margin: 0 115px;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
