import styled from "styled-components";
export const HeaderStyled = styled.header`
  background-color: var(--color-gray-10);
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    box-sizing: border-box;
    padding: 1rem;
  }
  h3 span {
    font-size: var(--font-size-text-3);
    color: var(--color-secondary);
  }
  @media (min-width: 900px) {
    div {
      margin: 0 115px;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;
export const FormStyled = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3rem;
  background-color: var(--color-gray-0);
  border-radius: var(--border-radius);
  position: relative;
  input {
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    background-color: var(--color-gray-0);
    border: 1px solid transparent;
    border-radius: var(--border-radius);
    box-sizing: border-box;
  }
  input:focus {
    border-color: var(--color-gray-100);
  }
  button {
    position: absolute;
    right: 0.5rem;
    z-index: 1;
  }
  @media (min-width: 900px) {
    width: 38%;
  }
`;
