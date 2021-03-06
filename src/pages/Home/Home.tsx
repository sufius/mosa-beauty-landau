import { useState } from "react";
import { styled } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { scroller, Element } from "react-scroll";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import LoadingButton from "@mui/lab/LoadingButton";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Obfuscate from "react-obfuscate";
import CallIcon from "@mui/icons-material/Call";
import DcpCarousel from "../../components/DcpCarousel";
import Hero from "../../components/Hero";
import DcpPhoneInput from "../../components/DcpPhoneInput";
import { hexToRgbA } from "../../utils/helpers";

const drawerWidth = 240;

const StyledToolbar = styled(Toolbar)(() => ({
  alignItems: "flex-end",
  flexDirection: "column",
  paddingTop: "16px",
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    justifyContent: "center",
  },
}));

type Inputs = {
  name: string;
  email: string;
  mobile: string;
  emailText: string;
};

const defaultValues = {
  name: "",
  email: "",
  mobile: "+49",
  emailText: "",
};

export default function Home() {
  const theme = useTheme();
  const matchMedium = useMediaQuery(theme.breakpoints.down("md"));
  const matchSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const [value, setValue] = useState("section_1");
  const handleChange = (newValue: string) => {
    setValue(newValue);
    scroller.scrollTo(newValue, {
      duration: 1000,
      delay: 100,
      smooth: true,
      containerId: "body",
      offset: -100, // Scrolls to element + 50 pixels down the page
    });
  };

  const [isSubmitting, setIsSubmitting] = useState<true | false>(false);
  const [submitted, setSubmitted] = useState<undefined | true | false>(
    undefined
  );
  const methods = useForm<Inputs>({
    defaultValues,
    mode: "all",
    reValidateMode: "onBlur",
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = methods;

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setIsSubmitting(true);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    fetch("/request/quotation", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then(() => {
        setSubmitted(true);
      })
      .catch(() => {
        setSubmitted(false);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem
          button
          key="Telefonnummer"
          onClick={() => {
            handleChange("section_1");
          }}
        >
          <CallIcon sx={{ mr: 1 }} />
          <Obfuscate
            style={{
              color: "inherit",
              textDecoration: "inherit",
              minWidth: "169px",
            }}
            tel={process.env.REACT_APP_OWNER_TEL}
          />
        </ListItem>
        {[
          "Start",
          "??ber mich",
          "Dienstleistungen",
          "Bewertungen",
          "Kontakt",
        ].map((text, index) => (
          <ListItem
            button
            key={text}
            onClick={() => {
              handleChange(`section_${index + 1}`);
            }}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: "100%",
          boxShadow: "0 3px 5px 2px " + hexToRgbA(process.env.REACT_APP_PALETTE_PRIMARY_MAIN),
        }}
      >
        <Toolbar>
          <Link
            style={{ color: "inherit", textDecoration: "inherit", display: "contents" }}
            to="/"
            onClick={() => {
              handleChange("section_1");
            }}
          >
            <img
              style={{
                verticalAlign: "bottom",
                maxHeight: matchSmall ? 40 : 47,
              }}
              src={"/logo_white.svg"}
              alt={`brand for ${process.env.REACT_APP_SITE_NAME}`}
            />
          </Link>
          <Box sx={{ flexGrow: 1 }}></Box>
          {!matchMedium ? (
            <Tabs
              value={value}
              onChange={(_event: any, value: any) => {
                handleChange(value);
              }}
              aria-label="nav tabs"
              textColor="inherit"
              TabIndicatorProps={{ style: { backgroundColor: "white" } }}
            >
              <Tab label="Start" value={"section_1"} />
              <Tab label="??ber mich" value={"section_2"} />
              <Tab label="Dienstleistungen" value={"section_3"} />
              <Tab label="Bewertungen" value={"section_4"} />
              <Tab label="Kontakt" value={"section_5"} />
            </Tabs>
          ) : null}

          {!matchSmall ? (
            <>
              <CallIcon sx={{ ml: 3, mr: 1 }} />
              <Obfuscate
                style={{
                  color: "inherit",
                  textDecoration: "inherit",
                  minWidth: "169px",
                }}
                tel={process.env.REACT_APP_OWNER_TEL}
              />
            </>
          ) : null}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 1, mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Element name="section_1">
        <Toolbar />
        <Hero onChange={handleChange} />
        <Container maxWidth="lg">
          <Element name="section_2">
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              align="center"
              sx={{ fontWeight: "light", mb: 0, mt: !matchMedium ? 6 : 4 }}
            >
              ??BER MICH
            </Typography>
            <Grid container spacing={2} sx={{ mt: !matchMedium ? 1 : 0 }}>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: { md: "block", xs: "none" },
                }}
              >
                <Card
                  sx={{
                    maxWidth: "100%",
                    borderRadius: "4px",
                  }}
                >
                  <CardMedia
                    component="img"
                    image="/profile_picture.jpg"
                    alt="image about us"
                    loading="lazy"
                  />
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography paragraph align="justify">
                  Mit MoSa Beauty bin ich seit 2021 erfolgreich in
                  der Kosmetik und Beauty-Branche t??tig.
                  Ich entwickle f??r meine Kunden individuelle L??sungen unter
                  Ber??cksichtigung aktueller Trends. Ich garantiere mit meinem
                  Gesp??r f??r passende Perspektiven und meiner individuellen
                  Herangehensweise f??r auf meine Kunden zugeschnittene
                  Angebote. Mein Ziel ist es einen bleibenden und
                  positiven Eindruck zu hinterlassen.
                </Typography>
                <Card
                  sx={{
                    maxWidth: "100%",
                    borderRadius: "4px",
                    display: { md: "none", sm: "block" },
                    mb: 2,
                  }}
                >
                  <CardMedia
                    component="img"
                    image="/profile_picture.jpg"
                    alt="image about us"
                    loading="lazy"
                  />
                </Card>
                <Typography paragraph align="justify">
                  Als Kleinunternehmerin berate ich Sie stilsicher und
                  zielorientiert f??r alle Belange rund um das Thema Sch??nheit und Kosmetik.
                  Ich habe mich diesem Bereich mit Haut und Haaren verschrieben und k??mmere
                  mich um meine Kunden nicht nur w??hrend der Behandlung sondern auch w??hrend
                  Einwirkzeiten von Farben, Masken, Cremes und Co. F??r jeden Hauttyp biete ich
                  eine umfassende Beratung und sorge damit f??r ein einmaliges Wohlf??hlerlebnis.
                  Ich kenne die etablierten Substanzen und wei?? wie sie wirken, was man nicht
                  nur schnell feststellen wird sondern bei Bedarf auch erleben kann.
                </Typography>
              </Grid>
            </Grid>
          </Element>
          <Element name="section_3">
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              align="center"
              sx={{ fontWeight: "light", mb: 0, mt: !matchMedium ? 4 : 2 }}
            >
              DIENSTLEISTUNGEN
            </Typography>
            <Grid container spacing={4} sx={{ mt: 0 }}>
              <Grid item xs={12} md={6}>
                <Card sx={{ height: "100%" }}>
                  <CardMedia
                    component="img"
                    image="/photoepilation.jpg"
                    alt="photoepilation"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      PHOTOEPILATION, DAUERHAFTE HAARENTFERNUNG
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Wir verwenden f??r eine Haarentfernung das IPL-System. Im IPL-System werden mit Hilfe von hochenergetischen Xenonlampen hochkonzentrierte Lichtblitze auf die zu behandelnden Haarans??tze geschossen. Das intensiv pulsierende Licht heizt den selektierten Haarschaft auf und f??hrt somit zu einer Aufl??sung der Wachstumszone des Haares. Angepasst an Hauttyp, Haarstruktur und Haarfarbe wird das Wellenl??ngenspektrum gefiltert und entfernt somit, je nach Hauttyp, Haarfarbe (schwarz, braun, blond), K??rperregion und Haardichte, die behandelten Haare. In der Regel ist ein sofortiger Wachstumsstop feststellbar, sp??testens jedoch nach etwa 8 bis 14 Tagen.
                    <br/>
                    <br/>
                    Eine vollst??ndige Behandlung besteht in der Regel aus mehreren Sitzungen, welche individuell festgelegt werden und stark von der Hautpartie und Haarstruktur abh??ngt. Das liegt haupts??chlich daran, dass Haare in unterschiedlichen Zyklen wachsen und nur in ihrer Wachstumsphase (Anagenphase), nicht aber in der Ruhephase (Telogenphase) durch Photoepilation beseitigt werden k??nnen. Folgebehandlungen sollten im Abstand von etwa 4 bis h??chstens 8 Wochen vereinbart werden.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card sx={{ height: "100%" }}>
                  <CardMedia
                    component="img"
                    height="372"
                    image="/eyelashes2.jpeg"
                    alt="eyelashes"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      WIMPERN
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Es ist endlich an der Zeit die Gesundheit und Sch??nheit
                      ihrer Wimpern der Welt zu zeigen! Am besten geschieht das mit einer
                      professionellen Laminierung ihrer Wimpern. Die Wimpernlaminierung ist eine
                      neue und luxuri??se Behandlung der Wimpern. Das Wimpernlifting
                      mit Laminierung ist die beste Alternative zur Wimpernverl??ngerung.
                      Im Anschluss werden die Wimpern (auf Wunsch) gef??rbt und mit einem
                      Vitaminkomplex gepflegt, was den Effekt zus??tzlich verst??rkt.
                      Am effektivsten ist eine Laminierung durch eine weiterf??hrende Behandlung,
                      bei der spezielle Wirkstoffe in Verbindung mit der Laminierung in der Wimper
                      bleibt und der Effekt sogar bis zu 8 Wochen anhalten kann, statt den ??blichen 4 bis 6 Wochen.
                      Die Wimpern sehen nach der ersten Behandlung volumin??ser, l??nger und
                      ges??nder aus. Mit Wimpernlifting musst du dir keine Sorgen machen,
                      dass falsche Wimpern abfallen, wenn du dir mal die Augen reibst
                      oder zu Mascara greifst. Zudem ist die Anwendung Risikofrei was
                      Allergien angeht, denn es ist zu 100% aus nat??rlichen Inhaltsstoffen.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card sx={{ height: "100%" }}>
                  <CardMedia
                    component="img"
                    height="373"
                    image="/skin_rejuvenation.jpeg"
                    alt="skin_rejuvenation"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      HAUTVERJ??NGUNG
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Microneedling PhiBright ist eine Weiterentwicklung der Mikronadel-Technik, welche eine personalisierte Behandlung unter Ber??cksichtigung individueller Bed??rfnisse der verschiedenen Hauttypen und -bedingungen anbietet.
                      <br/>
                      <br/>
                      Eine Palette von 15 verschiedenen PhiBright-Sera erm??glicht eine individuelle Behandlung und einen von der Art und des Zustands der zu behandelnden Haut abh??ngigen Ansatz.
                      <br/>
                      <br/>
                      Durch die individuelle Beratung und der gemeinsamen Analyse des Hauttyps, wird mit Hilfe etablierter Berechnungsmethoden ein geeignetes Serum ermittelt. Ein solches Serum dient nicht nur zur Verj??ngung der Haut, sondern auch bei folgenden Anwendungsf??llen:
                    <ul>
                      <li>Falten</li>
                      <li>dehydrierte Haut</li>
                      <li>fettige und problematische Haut</li>
                      <li>Hyperpigmentierung</li>
                      <li>Narben</li>
                      <li>Aknenarben</li>
                      <li>vergr????erte Poren</li>
                      <li>Dehnungsstreifen</li>
                      <li>Alopezie</li>
                    </ul>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card sx={{ height: "100%" }}>
                  <CardMedia
                    component="img"
                    image="/facial_treatment3.jpg"
                    alt="facial_treatment"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      GESICHTSBEHANDLUNG
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Die apparative Kosmetik erm??glicht Behandlungsm??glichkeiten auf einem ganz hohen Niveau. Dazu geh??rt das Aquafacial ??? auch bekannt als Hydrafacial. Es ist eine einzigartige Gesichtsbehandlung, bei der alle Hauttypen und Hautstrukturen effektiv behandelt werden. Dabei wird die Haut gereinigt, gegl??ttet und mit Feuchtigkeit versorgt und beginnt somit wieder zu strahlen. Zu den Vorteilen geh??ren:
                    <ul>
                      <li>Sichtbare Ergebnisse bereits nach wenigen Tagen</li>
                      <li>Weiche und strahlende Haut nach schon einer Anwendung</li>
                      <li>Porentiefe Reinigung komponiert mit tiefgreifender Hydratisierung</li>
                      <li>Die Hautgesundheit wird verbessert</li>
                      <li>Reduziert fettige und verstopfte Haut</li>
                      <li>Das Hautbild wirkt ebenm????iger</li>
                      <li>Fortgeschrittene Alterserscheinungen werden gemildert</li>
                      <li>Reduziert Hyperpigmentierung und Sonnensch??den</li>
                      <li>Anregung der Mikrozirkulation der Haut</li>
                      <li>Keine Ausfallzeit und Nebenwirkungen</li>
                      <li>Wissenschaftlich nachgewiesene Wirksamkeit</li>
                      <li>Die Elastizit??t und Straffheit der Haut wird erh??ht</li>
                      <li>Erfolgreicher Einsatz in der Rosazea-Therapie</li>
                    </ul>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card sx={{ height: "100%" }}>
                  <CardMedia
                    component="img"
                    image="/eyebrows4.jpg"
                    alt="eyebrows"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      AUGENBRAUEN
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Mit dieser Behandlungsmethode werden Augenbrauen mit einer Pinzette, mit wachs oder mit der Fadentechnik geformt. Dabei hilt das Augenbrauen-Lifting die Brauen in die gew??nschten Form zu bringen und zu fixieren. Daf??r werden die H??rchen zun??chst in die jeweilige Form gek??mmt ??? meistens nach oben, um mehr F??lle zu schaffen und die Augenbrauen zu verdichten. Dann werden die Augenbrauenhaare in dieser Position mit einem wasserl??slichen Kleber fixiert. Im n??chsten Schritt, der <i>Brow Lamination</i>, werden spezielle Cremes auf die Augenbrauen aufgetragen, die jeweils ca. zehn Minuten einwirken m??ssen. Im Anschluss werden die Augenbrauen (nach Wunsch) gef??rbt und mit einem Vitaminkomplex gepflegt.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card sx={{ height: "100%" }}>
                  <CardMedia
                    component="img"
                    image="/henna_brows3.jpg"
                    alt="henna_brows"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      HENNA BROWS
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Mit dieser Behandlungsmethode werden Augenbrauen mit einer Pinzette, mit wachs oder mit der Fadentechnik geformt. Dabei hilt das Augenbrauen-Lifting die Brauen in die gew??nschten Form zu bringen und zu fixieren. Daf??r werden die H??rchen zun??chst in die jeweilige Form gek??mmt ??? meistens nach oben, um mehr F??lle zu schaffen und die Augenbrauen zu verdichten. Dann werden die Augenbrauenhaare in dieser Position mit einem wasserl??slichen Kleber fixiert. Im n??chsten Schritt, der <i>Brow Lamination</i>, werden spezielle Cremes auf die Augenbrauen aufgetragen, die jeweils ca. zehn Minuten einwirken m??ssen. Im Anschluss werden die Augenbrauen (nach Wunsch) gef??rbt und mit einem Vitaminkomplex gepflegt.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Element>
          <Element name="section_4">
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              align="center"
              sx={{
                fontWeight: "light",
                mb: !matchMedium ? 3 : 2,
                mt: !matchMedium ? 6 : 4,
              }}
            >
              BEWERTUNGEN
            </Typography>
            <Paper elevation={1} sx={{ mb: 2 }}>
              <DcpCarousel />
            </Paper>
          </Element>
          <Element name="section_5">
            <Typography
              variant="h4"
              component="h1"
              gutterBottom
              align="center"
              sx={{
                fontWeight: "light",
                mb: !matchMedium ? 3 : 2,
                mt: !matchMedium ? 6 : 5,
              }}
            >
              GRATIS ANGEBOT EINHOLEN
            </Typography>
            <FormProvider {...methods}>
              <Box
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
              >
                <Card>
                  <CardHeader
                    title="Kontakt formular"
                    subheader="Kontaktieren Sie mich jetzt! Ich rufen Sie umgehend zur??ck und werde versuchen all Ihre Fragen zu beantworten. Anschlie??end erstelle Ihnen ein individuelles Angebot."
                    sx={{
                      pb: 0,
                    }}
                    align="justify"
                  />
                  <CardContent>
                    {submitted === undefined ? (
                      <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                          <TextField
                            name="name"
                            inputRef={register({ required: true })}
                            error={Boolean(errors.name)}
                            helperText={
                              Boolean(errors.name) &&
                              "Sie m??ssen einen Namen eingeben"
                            }
                            id="name"
                            label="Name"
                            variant="filled"
                            fullWidth
                            required
                          />
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <TextField
                            name="email"
                            inputRef={register({
                              required: true,
                              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            })}
                            error={Boolean(errors.email)}
                            helperText={
                              Boolean(errors.email) &&
                              "Sie m??ssen eine E-Mail eingeben"
                            }
                            id="email"
                            label="E-Mail"
                            variant="filled"
                            fullWidth
                            required
                          />
                        </Grid>
                        <Grid item xs={12} md={4}>
                          <DcpPhoneInput />
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            name="emailText"
                            inputRef={register({ required: true })}
                            error={Boolean(errors.emailText)}
                            helperText={
                              Boolean(errors.emailText) &&
                              "Sie m??ssen einen E-Mail-Text eingeben"
                            }
                            id="email-text"
                            label="E-Mail-Text"
                            multiline
                            minRows={10}
                            maxRows={20}
                            variant="filled"
                            fullWidth
                            required
                          />
                        </Grid>
                      </Grid>
                    ) : submitted === true ? (
                      <Alert severity="success">
                        Ihre Nachricht wurde erfolgreich gesendet! Vielen Dank
                        f??r Ihre Anfrage. Wir werden uns umgehend bei Ihnen
                        melden.
                      </Alert>
                    ) : (
                          <Alert severity="error">
                            Ihre Nachricht konnte nicht gesendet werden! Bitte
                            versuchen Sie es entweder zu einem sp??teren Zeitpunkt
                            noch einmal oder telefonisch.
                      </Alert>
                        )}
                  </CardContent>
                  {submitted === undefined ? (
                    <CardActions
                      sx={{
                        p: 2,
                        pt: 0,
                      }}
                    >
                      <LoadingButton
                        disabled={!isValid}
                        loading={isSubmitting}
                        type="submit"
                        variant="contained"
                        size="large"
                      >
                        Anfrage senden
                      </LoadingButton>
                    </CardActions>
                  ) : null}
                </Card>
              </Box>
            </FormProvider>
          </Element>
        </Container>
      </Element>
      <Box
        sx={{
          flexGrow: 1,
          mt: 4,
          boxShadow: "0px -5px 5px " + hexToRgbA(process.env.REACT_APP_PALETTE_PRIMARY_MAIN),
        }}
      >
        <AppBar position="static">
          <StyledToolbar>
            <Grid container spacing={2} sx={{ pt: matchSmall ? 1 : 3, ml: 0 }}>
              <Grid
                item
                xs={12}
                sm={4}
                sx={
                  !matchSmall
                    ? { borderRight: "1px solid rgba(255, 255, 255, 0.4)" }
                    : {}
                }
              >
                <Typography align="center" sx={{ pt: matchSmall ? 1 : 0 }}>
                  <Link
                    style={{
                      color: "inherit",
                      textDecoration: "inherit",
                      fontWeight: "bold",
                    }}
                    to="/"
                    onClick={() => {
                      handleChange("section_1");
                    }}
                  >
                    {process.env.REACT_APP_SITE_NAME}
                  </Link>
                </Typography>
                <Typography
                  variant="caption"
                  component="p"
                  align="center"
                  sx={{ pb: 2, fontWeight: "light" }}
                >
                  {process.env.REACT_APP_SITE_HERO_TITLE_PART_2}
                </Typography>
                <Typography
                  variant="overline"
                  component="p"
                  align="center"
                  sx={{ fontWeight: "bold", lineHeight: 1.3 }}
                >
                  Telefon:
                </Typography>
                <Typography
                  align="center"
                  sx={{
                    pb: matchSmall ? 3 : 2,
                    fontWeight: "light",
                    borderBottom: matchSmall
                      ? "1px solid rgba(255, 255, 255, 0.4)"
                      : "",
                  }}
                >
                  <Obfuscate
                    style={{ color: "inherit", textDecoration: "inherit" }}
                    tel={process.env.REACT_APP_OWNER_TEL}
                  />
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                sx={
                  !matchSmall
                    ? { borderRight: "1px solid rgba(255, 255, 255, 0.4)" }
                    : {}
                }
              >
                <Typography
                  variant="overline"
                  component="p"
                  align="center"
                  sx={{
                    fontWeight: "bold",
                    lineHeight: 1.3,
                    pt: matchSmall ? 1 : 0,
                  }}
                >
                  Inhaberin:
                </Typography>
                <Typography align="center" sx={{ pb: 2, fontWeight: "light" }}>
                  {process.env.REACT_APP_OWNER_NAME}
                </Typography>
                {process.env.REACT_APP_OWNER_HWK ? (
                  <>
                    <Typography
                      variant="overline"
                      component="p"
                      align="center"
                      sx={{ fontWeight: "bold", lineHeight: 1.3 }}
                    >
                      Handwerkskammer <br />
                      Betriebsnummer:
                    </Typography>
                    <Typography
                      component="p"
                      align="center"
                      sx={{
                        pb: matchSmall ? 3 : 2,
                        fontWeight: "light",
                        borderBottom: matchSmall
                          ? "1px solid rgba(255, 255, 255, 0.4)"
                          : "",
                      }}
                    >
                      {process.env.REACT_APP_OWNER_HWK}
                    </Typography>
                  </>) : null}
                {process.env.REACT_APP_INSTAGRAM ? (
                  <>
                    <Typography
                      variant="overline"
                      component="p"
                      align="center"
                      sx={{ fontWeight: "bold", lineHeight: 1.3 }}
                    >
                      Instagram:
                    </Typography>
                    <Link
                      to={{ pathname: `https://www.instagram.com/${process.env.REACT_APP_INSTAGRAM}/` }}
                      target="_blank" rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        color: "inherit",
                        textDecoration: "inherit",
                        paddingBottom: matchSmall ? 3 * parseInt(theme.spacing()) + "px" : 2 * parseInt(theme.spacing()) + "px",
                      }}
                    >
                      {process.env.REACT_APP_INSTAGRAM}
                    </Link>
                  </>) : null}
                {process.env.REACT_APP_FACEBOOK ? (
                  <>
                    <Typography
                      variant="overline"
                      component="p"
                      align="center"
                      sx={{ fontWeight: "bold", lineHeight: 1.3 }}
                    >
                      Facebook:
                    </Typography>
                    <Link
                      to={{ pathname: `https://www.facebook.com/${process.env.REACT_APP_FACEBOOK}/` }}
                      target="_blank" rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        color: "inherit",
                        textDecoration: "inherit",
                        paddingBottom: matchSmall ? 3 * parseInt(theme.spacing()) + "px" : 2 * parseInt(theme.spacing()) + "px",
                        borderBottom: matchSmall
                          ? "1px solid rgba(255, 255, 255, 0.4)"
                          : "",
                      }}
                    >
                      {process.env.REACT_APP_FACEBOOK}
                    </Link>
                  </>) : null}
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography
                  variant="overline"
                  component="p"
                  align="center"
                  sx={{
                    fontWeight: "bold",
                    lineHeight: 1.3,
                    pt: matchSmall ? 1 : 0,
                  }}
                >
                  Anschrift:
                </Typography>
                <Typography align="center" sx={{ fontWeight: "light" }}>
                  {process.env.REACT_APP_OWNER_ADRESS_STREET}
                </Typography>
                <Typography align="center" sx={{ pb: 2, fontWeight: "light" }}>
                  {process.env.REACT_APP_OWNER_ADRESS_ZIP_CITY}
                </Typography>
                <Typography
                  variant="overline"
                  component="p"
                  align="center"
                  sx={{ fontWeight: "bold", lineHeight: 1.3 }}
                >
                  E-Mail:
                </Typography>
                <Typography
                  align="center"
                  sx={{
                    pb: matchSmall ? 3 : 2,
                    fontWeight: "light",
                    borderBottom: matchSmall
                      ? "1px solid rgba(255, 255, 255, 0.4)"
                      : "",
                  }}
                >
                  <Obfuscate
                    style={{ color: "inherit", textDecoration: "inherit" }}
                    email={process.env.REACT_APP_OWNER_MAIL}
                    headers={{
                      subject: "Nachricht von Webseite",
                      body: "Sehr geehrte Damen und Herren,",
                    }}
                  />
                </Typography>
              </Grid>
              <Grid item xs={12} sx={{ textAlign: "center" }}>
                <Typography
                  variant="caption"
                  component={Link}
                  sx={{ mt: 3, mb: 0, mr: 1 }}
                  style={{ color: "inherit", textDecoration: "inherit" }}
                  to="/impressum"
                >
                  Impressum
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
                <Typography
                  variant="caption"
                  component="div"
                  sx={{ mt: 1, mb: 2 }}
                >
                  {"Copyright ?? "}
                  {new Date().getFullYear()}{" "}
                  <Link
                    style={{ color: "inherit", textDecoration: "inherit" }}
                    to="/"
                    onClick={() => handleChange("section_1")}
                  >
                    {process.env.REACT_APP_SITE_NAME}
                  </Link>
                  . Alle Rechte vorbehalten.
                </Typography>
              </Grid>
            </Grid>
          </StyledToolbar>
        </AppBar>
      </Box>
    </>
  );
}
