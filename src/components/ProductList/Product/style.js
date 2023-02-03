import styled from "styled-components";
export const ProductCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 346px;
  background-color: var(--color-gray-10);
  border: 3px solid var(--color-gray-20);
  border-radius: var(--border-radius);
  box-sizing: border-box;
`;
export const CardImgContainer = styled.div`
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 177px;
    width: 177px;
  }
`;
export const CardInformation = styled.div`
  padding: 2rem 1rem;
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-direction: column;
  align-items: flex-start;
  background-color: var(--color-gray-0);
  p {
    font-size: var(--font-size-text-3);
  }
  p span {
    color: var(--color-primary);
  }
`;
