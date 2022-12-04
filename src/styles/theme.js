import { extendTheme } from "@chakra-ui/react";


const config= {
    initialColorMode: 'dark',
    useSystemColorMode: 'false'
};

const theme = extendTheme(
    { config },
    {
      styles: {
        global: (props) => ({
          "html, body": {
            bgColor: props.colorMode === "dark" ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)",
            color: props.colorMode === "dark" ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
          },
          "h1":{
            color: props.colorMode === "dark" ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
          },
          "div":{
            color: props.colorMode === "dark" ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
            fontSize: "20px",
          },
          "button":{
            color: props.colorMode === "dark" ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"
          },
          "span":{
            fontWeight: "bold",
            fontSize: "18px",
            marginRight: "1rem",
            color: props.colorMode === "dark" ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
          },
          "select":{
            color: props.colorMode === "dark" ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
          }
        }),
      },
    },
    {
      fonts: {
        heading:`'Inter, sans-serif'`,
        body: `'Inter, sans-serif'`,
      },
      fontWeights: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
    },
    {
        components: {
            Select: {
              parts: ["field", "icon"],
              baseStyle: {
                icon: {
                  width: "2rem",
                  fontSize: "3rem"
                }
              }
            }
          }
    }
  );

  export default theme;