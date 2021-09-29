import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import grey from "@mui/material/colors/grey";

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        light: "#45288b",
        main: "#0B005D",
        dark: "#000034",
        contrastText: "#fff"
      },
      secondary: {
        light: "#6482ca",
        main: "#305699",
        dark: "#002e6a",
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
            background: "linear-gradient(45deg, #0B005D 30%, #305699 90%)",
            boxShadow: "0 3px 5px 2px rgba(11, 0, 93, 0.3)"
          }
        }
      }
    }
  })
);

export default theme;
