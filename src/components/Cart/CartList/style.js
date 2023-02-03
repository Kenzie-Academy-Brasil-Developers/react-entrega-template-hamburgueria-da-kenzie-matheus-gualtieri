import styled from "styled-components";
export const CartListContainer = styled.div`
  max-height: 20rem;
  padding: 1rem;
  background-color: var(--color-gray-10);
  overflow-y: scroll;
  ul {
    padding: 0.5rem 0;
    list-style: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: 2px solid var(--color-gray-20);
    gap: 1rem;
  }
`;
