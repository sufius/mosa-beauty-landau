import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import grey from "@mui/material/colors/grey";

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        light: `${process.env.REACT_APP_ALETTE_PRIMARY_LIGHT}`,
        main: `${process.env.REACT_APP_PALETTE_PRIMARY_MAIN}`,
        dark: `${process.env.REACT_APP_PALETTE_PRIMARY_DARK}`,
        contrastText: "#fff"
      },
      secondary: {
        light: `${process.env.REACT_APP_PALETTE_SECONDARY_LIGHT}`,
        main: `${process.env.REACT_APP_PALETTE_SECONDARY_MAIN}`,
        dark: `${process.env.REACT_APP_PALETTE_SECONDARY_DARK}`,
        contrastText: "#fff"
      }
    },
    shape: {
      borderRadius: 0
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          html {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          html, body {
            background-color: ${grey[100]};
          }
        `
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            background: `linear-gradient(45deg, ${process.env.REACT_APP_PALETTE_PRIMARY_MAIN} 30%, ${process.env.REACT_APP_PALETTE_SECONDARY_MAIN} 90%)`,
          }
        }
      }
    }
  })
);

export default theme;
