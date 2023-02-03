import styled from "styled-components";
export const CartProductCard = styled.li`
  display: flex;
  gap: 1rem;
`;
export const ContainerImg = styled.div`
  height: 100%;
  background-color: var(--color-gray-20);
  border-radius: var(--border-radius);
  img {
    width: 4.5rem;
  }
`;
export const CartProducInformation = styled.div`
  width: 80%;
  padding: 0.25rem 0 0 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: space-between;
  box-sizing: border-box;
  h4,
  p {
    height: 50%;
  }
`;
