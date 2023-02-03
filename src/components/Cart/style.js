import styled from "styled-components";
export const CartStyled = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  border: 1px solid transparent;
  border-radius: var(--border-radius);
  @media (min-width: 900px) {
    width: 37%;
    margin: 0;
  }
`;
export const CartHeader = styled.div`
  padding: 1rem;
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  box-sizing: border-box;
  background-color: var(--color-primary);
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  h3 {
    color: var(--color-gray-0);
  }
`;
