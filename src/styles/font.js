import { createGlobalStyle } from "styled-components";
const Font = createGlobalStyle`
h1{
    font-size: var(--font-size-title-1);
    font-weight: var(--font-weigth-1);
    color: var(--color-gray-100);
}
h2{
    font-size: var(--font-size-title-2);
    font-weight: var(--font-weigth-1);
    color: var(--color-gray-100);
}
h3{
    font-size: var(--font-size-title-3);
    font-weight: var(--font-weigth-1);
    color: var(--color-gray-100);
}
h4{
    font-size: var(--font-size-title-4);
    font-weight: var(--font-weigth-1);
    color: var(--color-gray-100);
}
p{
    font-size: var(--font-size-text-3);
    color: var(--color-gray-50);
}
`;
export default Font;
