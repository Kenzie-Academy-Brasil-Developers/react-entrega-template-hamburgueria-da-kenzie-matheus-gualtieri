import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    --color-primary: #27AE60;
    --color-primary-50: #93D7AF;
    --color-secondary: #EB5757;
    --color-gray-100: #333333;
    --color-gray-50: #828282;
    --color-gray-20: #E0E0E0;
    --color-gray-10: #F5F5F5;
    --color-gray-0: #FFFFFF;

    --color-feedback-negative: #E60000;
    --color-feedback-warning: #FFCD07;
    --color-feedback-succes: #168821;
    --color-feedback-information: #155BCB;

    --font-size-title-1:  1.75rem;
    --font-size-title-2:  1.375rem;
    --font-size-title-3:  1.125rem;
    --font-size-title-4:  0.875rem;

    --font-size-text-1:  1rem;
    --font-size-text-2:  0.875rem;
    --font-size-text-3:  0.75rem;

    --font-weigth-1: bold;
    --font-weigth-2: semibold;

    --font-family:'Inter', sans-serif;

    --border-radius: 0.5rem;
}
body{
    font-family: var(--font-family);
}
`;
export default GlobalStyle;
