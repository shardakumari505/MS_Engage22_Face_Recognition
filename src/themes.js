import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: "#fff",
    fontColor: "#000000",
};

export const darkTheme = {
    body: "#000000",
    fontColor: "#fff",
};

export const GlobalStyles = createGlobalStyle`
body{
    background-color: ${(props) => props.theme.body};
}`;