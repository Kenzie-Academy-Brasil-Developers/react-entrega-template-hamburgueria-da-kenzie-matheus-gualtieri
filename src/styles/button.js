import styled from "styled-components";
export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: var(--color-primary);
  color: var(--color-gray-0);
  border: 1px solid var(--color-primary);
  border-radius: var(--border-radius);
  transition: 0.5s;
  cursor: pointer;
  :hover {
    background-color: var(--color-primary-50);
    border-color: var(--color-primary-50);
  }
`;
export const ButtonRemove = styled.button`
  background-color: transparent;
  color: var(--color-gray-50);
  border: 1px solid transparent;
  font-size: var(--font-size-text-3);
  transition: 0.5s;
  cursor: pointer;
  :hover {
    color: var(--color-gray-100);
  }
`;
export const ButtonRemoveAll = styled.button`
  padding: 0.5rem 1rem;
  background-color: var(--color-gray-20);
  color: var(--color-gray-50);
  border: 1px solid var(--color-gray-20);
  border-radius: var(--border-radius);
  transition: 0.5s;
  cursor: pointer;
  :hover {
    filter: brightness(0.9);
  }
`;
