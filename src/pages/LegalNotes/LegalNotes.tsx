import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Obfuscate from "react-obfuscate";
import CallIcon from "@mui/icons-material/Call";
import { Link } from "react-router-dom";
import { hexToRgbA } from "../../utils/helpers";

export default function LegalNotes() {
  const theme = useTheme();
  const matchSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <AppBar position="static" sx={{
        mb: 2,
        boxShadow: "0 3px 5px 2px " + hexToRgbA(process.env.REACT_APP_PALETTE_PRIMARY_MAIN)
      }}>
        <Toolbar>
          <Link style={{ color: "inherit", textDecoration: "inherit", display: "contents" }} to="/">
            <img
              style={{
                verticalAlign: "bottom",
                maxHeight: matchSmall ? 40 : 47
              }}
              src={"logo_white.svg"}
              alt={`brand for ${process.env.REACT_APP_SITE_NAME}`}
            />
          </Link>
          <Box sx={{ flexGrow: 1 }}></Box>
          <CallIcon sx={{ mr: 0.2 }} />
          <Obfuscate
            style={{
              color: "inherit",
              textDecoration: "inherit",
              fontSize: matchSmall ? 12 : "inherit"
            }}
            tel={process.env.REACT_APP_OWNER_TEL}
          />
        </Toolbar>
      </AppBar>
      <Container maxWidth="xs" sx={{ mb: matchSmall ? 15 : 13 }}>
        <Card>
          <CardHeader
            title="Impressum"
            subheader={
              <Box
                component="hr"
                sx={{
                  width: "100%",
                  border: 0,
                  height: "1px",
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  marginTop: 0,
                  marginBottom: 1
                }}
              />
            }
            sx={{
              pb: 0
            }}
            align="justify"
          />
          <CardContent>
            <Typography variant="caption">
              <strong>Geschäftsführer von {process.env.REACT_APP_SITE_NAME}</strong>
            </Typography>
            <Typography paragraph variant="body1">
              {process.env.REACT_APP_OWNER_NAME}
            </Typography>

            <Typography variant="caption">
              <strong>Anschrift</strong>
            </Typography>
            <Typography variant="body1">{process.env.REACT_APP_OWNER_ADRESS_STREET}</Typography>
            <Typography paragraph variant="body1">
              {process.env.REACT_APP_OWNER_ADRESS_ZIP_CITY}
            </Typography>

            {process.env.REACT_APP_OWNER_HWK ? (
              <>
                <Typography variant="caption">
                  <strong>Handwerkskammer Betriebsnummer</strong>
                </Typography>
                <Typography paragraph variant="body1">
                  {process.env.REACT_APP_OWNER_HWK}
                </Typography>
              </>
            ) : null}

            <Typography variant="caption">
              <strong>Telefonnummer</strong>
            </Typography>
            <Typography paragraph variant="body1">
              <Obfuscate tel={process.env.REACT_APP_OWNER_TEL} element="span" />
            </Typography>

            <Typography variant="caption">
              <strong>E-Mail</strong>
            </Typography>
            <Typography variant="body1">
              <Obfuscate email={process.env.REACT_APP_OWNER_MAIL} element="span" />
            </Typography>
          </CardContent>
        </Card>
      </Container>
      <AppBar
        position="fixed"
        sx={{
          top: "auto",
          bottom: 0,
          boxShadow: "0px -5px 5px " + hexToRgbA(process.env.REACT_APP_PALETTE_PRIMARY_MAIN),
        }}
      >
        <Toolbar sx={{ justifyContent: "center", mt: 2 }}>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="caption"
              component={Link}
              sx={{ mt: 3, mb: 0, mr: 1 }}
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/"
            >
              Startseite
            </Typography>
            {" - "}
            <Typography
              variant="caption"
              component={Link}
              sx={{ ml: 1, mt: 3, mb: 0 }}
              style={{ color: "inherit", textDecoration: "inherit" }}
              to="/datenschutz"
            >
              Datenschutz
            </Typography>
            <Typography variant="caption" component="div" sx={{ mt: 1, mb: 2 }}>
              {"Copyright © "}
              {new Date().getFullYear()}{" "}
              <Link
                style={{ color: "inherit", textDecoration: "inherit" }}
                to="/"
              >
                {process.env.REACT_APP_SITE_NAME}
              </Link>
              . Alle Rechte vorbehalten.
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
