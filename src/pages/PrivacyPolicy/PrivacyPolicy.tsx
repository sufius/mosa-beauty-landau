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
      <Container maxWidth="lg" sx={{ mb: 13 }}>
        <Card>
          <CardHeader
            title="Datenschutzerkl√§rung"
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
            <p>
              Verantwortliche(r) im Sinne der Datenschutzgesetze, insbesondere der
              EU-Datenschutzgrundverordnung (DSGVO), ist:
            </p>
            <p>{process.env.REACT_APP_OWNER_NAME}</p>
            <h2>Ihre Betroffenenrechte</h2>
            <p>
              Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten
              k√∂nnen Sie jederzeit folgende Rechte aus√ľben:
            </p>
            <ul>
              <li>
                Auskunft √ľber Ihre bei uns gespeicherten Daten und deren
                Verarbeitung (Art. 15 DSGVO),
              </li>
              <li>
                Berichtigung unrichtiger personenbezogener Daten (Art. 16
                DSGVO),
              </li>
              <li>
                L√∂schung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO),
              </li>
              <li>
                Einschr√§nkung der Datenverarbeitung, sofern wir Ihre Daten
                aufgrund gesetzlicher Pflichten noch nicht l√∂schen d√ľrfen (Art.
                18 DSGVO),
              </li>
              <li>
                Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21
                DSGVO) und
              </li>
              <li>
                Daten√ľbertragbarkeit, sofern Sie in die Datenverarbeitung
                eingewilligt haben oder einen Vertrag mit uns abgeschlossen
                haben (Art. 20 DSGVO).
              </li>
            </ul>
            <p>
              Sofern Sie uns eine Einwilligung erteilt haben, k√∂nnen Sie diese
              jederzeit mit Wirkung f√ľr die Zukunft widerrufen.
            </p>
            <p>
              Sie k√∂nnen sich jederzeit mit einer Beschwerde an eine
              Aufsichtsbeh√∂rde wenden, z. B. an die zust√§ndige Aufsichtsbeh√∂rde
              des Bundeslands Ihres Wohnsitzes oder an die f√ľr uns als
              verantwortliche Stelle zust√§ndige Beh√∂rde.
            </p>
            <p>
              Eine Liste der Aufsichtsbeh√∂rden (f√ľr den nicht√∂ffentlichen
              Bereich) mit Anschrift finden Sie unter:{" "}
              <a
                href="https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                https://www.bfdi.bund.de/DE/Service/Anschriften/Laender/Laender-node.html
              </a>
              .
            </p>
            <h2>Kontaktformular</h2>
            <h3>Art und Zweck der Verarbeitung:</h3>
            <p>
              Die von Ihnen eingegebenen Daten werden zum Zweck der
              individuellen Kommunikation mit Ihnen gespeichert. Hierf√ľr ist die
              Angabe einer validen E-Mail-Adresse sowie Ihres Namens
              erforderlich. Diese dient der Zuordnung der Anfrage und der
              anschlie√üenden Beantwortung derselben. Die Angabe weiterer Daten
              ist optional.
            </p>
            <h3>Rechtsgrundlage:</h3>
            <p>
              Die Verarbeitung der in das Kontaktformular eingegebenen Daten
              erfolgt auf der Grundlage eines berechtigten Interesses (Art. 6
              Abs. 1 lit. f DSGVO).
            </p>
            <p>
              Durch Bereitstellung des Kontaktformulars m√∂chten wir Ihnen eine
              unkomplizierte Kontaktaufnahme erm√∂glichen. Ihre gemachten Angaben
              werden zum Zwecke der Bearbeitung der Anfrage sowie f√ľr m√∂gliche
              Anschlussfragen gespeichert.
            </p>
            <p>
              Sofern Sie mit uns Kontakt aufnehmen, um ein Angebot zu erfragen,
              erfolgt die Verarbeitung der in das Kontaktformular eingegebenen
              Daten zur Durchf√ľhrung vorvertraglicher Ma√ünahmen (Art. 6 Abs. 1
              lit. b DSGVO).
            </p>
            <h3>Empf√§nger:</h3>
            <p>Empf√§nger der Daten sind ggf. Auftragsverarbeiter.</p>
            <h3>Speicherdauer:</h3>
            <p>
              Daten werden sp√§testens 6 Monate nach Bearbeitung der Anfrage
              gel√∂scht.
            </p>
            <p>
              Sofern es zu einem Vertragsverh√§ltnis kommt, unterliegen wir den
              gesetzlichen Aufbewahrungsfristen nach HGB und l√∂schen Ihre Daten
              nach Ablauf dieser Fristen.{" "}
            </p>
            <h3>Bereitstellung vorgeschrieben oder erforderlich:</h3>
            <p>
              Die Bereitstellung Ihrer personenbezogenen Daten erfolgt
              freiwillig. Wir k√∂nnen Ihre Anfrage jedoch nur bearbeiten, sofern
              Sie uns Ihren Namen, Ihre E-Mail-Adresse und den Grund der Anfrage
              mitteilen.
            </p>
            <h2>Verwendung von Google Analytics</h2>
            <p>
              Soweit Sie ihre Einwilligung gegeben haben, wird auf dieser
              Webseite Google Analytics eingesetzt, ein Webanalysedienst der
              Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043 USA
              (nachfolgend: ‚ÄěGoogle‚Äú). Google Analytics verwendet sog.
              ‚ÄěCookies‚Äú, also Textdateien, die auf Ihrem Computer gespeichert
              werden und die eine Analyse der Benutzung der Webseite durch Sie
              erm√∂glichen. Die durch das Cookie erzeugten Informationen √ľber
              Ihre Benutzung dieser Webseite werden in der Regel an einen Server
              von Google in den USA √ľbertragen und dort gespeichert. Aufgrund
              der Aktivierung der IP-Anonymisierung auf diesen Webseiten, wird
              Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten
              der Europ√§ischen Union oder in anderen Vertragsstaaten des
              Abkommens √ľber den Europ√§ischen Wirtschaftsraum zuvor gek√ľrzt. Nur
              in Ausnahmef√§llen wird die volle IP-Adresse an einen Server von
              Google in den USA √ľbertragen und dort gek√ľrzt. Die im Rahmen von
              Google Analytics von Ihrem Browser √ľbermittelte IP-Adresse wird
              nicht mit anderen Daten von Google zusammengef√ľhrt.{" "}
            </p>
            <p>
              N√§here Informationen zu Nutzungsbedingungen und Datenschutz finden
              Sie unter{" "}
              <a
                href="https://www.google.com/analytics/terms/de.html"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                https://www.google.com/analytics/terms/de.html
              </a>{" "}
              und unter{" "}
              <a
                href="https://policies.google.com/?hl=de"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                https://policies.google.com/?hl=de
              </a>
              .{" "}
            </p>
            <p>
              Im Auftrag des Betreibers dieser Webseite wird Google diese
              Informationen benutzen, um Ihre Nutzung der Webseite auszuwerten,
              um Reports √ľber die Webseitenaktivit√§ten zusammenzustellen und um
              weitere mit der Webseitenutzung und der Internetnutzung verbundene
              Dienstleistungen gegen√ľber dem Webseitenbetreiber zu erbringen.{" "}
            </p>
            <p>
              Die von uns gesendeten und mit Cookies, Nutzerkennungen (z. B.
              User-ID) oder Werbe-IDs verkn√ľpften Daten werden nach 14 Monaten
              automatisch gel√∂scht. Die L√∂schung von Daten, deren
              Aufbewahrungsdauer erreicht ist, erfolgt automatisch einmal im
              Monat.
            </p>
            <h3>Widerruf der Einwilligung:</h3>
            <p>
              Sie k√∂nnen dar√ľber hinaus die Speicherung der Cookies durch eine
              entsprechende Einstellung Ihrer Browser-Software verhindern; wir
              weisen Sie jedoch darauf hin, dass Sie in diesem Fall
              gegebenenfalls nicht s√§mtliche Funktionen dieser Webseite
              vollumf√§nglich werden nutzen k√∂nnen.{" "}
            </p>
            <p>
              Sie k√∂nnen dar√ľber hinaus die Erfassung der durch das Cookie
              erzeugten und auf Ihre Nutzung der Webseite bezogenen Daten (inkl.
              Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten
              durch Google verhindern, indem sie das unter dem folgenden Link
              verf√ľgbare Browser-Plugin herunterladen und installieren:{" "}
              <a
                href="http://tools.google.com/dlpage/gaoptout?hl=de"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                Browser Add On zur Deaktivierung von Google Analytics
              </a>
              .
            </p>
            <h2>Verwendung von Scriptbibliotheken (Google Webfonts)</h2>
            <p>
              Um unsere Inhalte browser√ľbergreifend korrekt und grafisch
              ansprechend darzustellen, verwenden wir auf dieser Webseite
              ‚ÄěGoogle Web Fonts‚Äú der Google LLC (1600 Amphitheatre Parkway,
              Mountain View, CA 94043, USA; nachfolgend ‚ÄěGoogle‚Äú) zur
              Darstellung von Schriften.
            </p>
            <p>
              Weitere Informationen zu Google Web Fonts finden Sie unter{" "}
              <a
                href="https://developers.google.com/fonts/faq"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                https://developers.google.com/fonts/faq
              </a>{" "}
              und in der Datenschutzerkl√§rung von Google:{" "}
              <a
                href="https://www.google.com/policies/privacy/"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                https://www.google.com/policies/privacy/
              </a>
              .
            </p>
            <h2>Verwendung von Google Maps</h2>
            <p>
              Auf dieser Webseite nutzen wir das Angebot von Google Maps. Google
              Maps wird von Google LLC, 1600 Amphitheatre Parkway, Mountain
              View, CA 94043, USA (nachfolgend ‚ÄěGoogle‚Äú) betrieben. Dadurch
              k√∂nnen wir Ihnen interaktive Karten direkt in der Webseite
              anzeigen und erm√∂glichen Ihnen die komfortable Nutzung der
              Karten-Funktion.
              <br />
              N√§here Informationen √ľber die Datenverarbeitung durch Google
              k√∂nnen Sie den Google-Datenschutzhinweisen entnehmen:{" "}
              <a
                href="https://policies.google.com/privacy"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                https://policies.google.com/privacy
              </a>
              . Dort k√∂nnen Sie im Datenschutzcenter auch Ihre pers√∂nlichen
              Datenschutz-Einstellungen ver√§ndern.
            </p>
            <p>
              Ausf√ľhrliche Anleitungen zur Verwaltung der eigenen Daten im
              Zusammenhang mit Google-Produkten finden Sie hier:{" "}
              <a
                href="https://www.dataliberation.org/"
                rel="noopener noreferrer nofollow"
                target="_blank"
              >
                https://www.dataliberation.org
              </a>
            </p>
            <p>
              Durch den Besuch der Webseite erh√§lt Google Informationen, dass
              Sie die entsprechende Unterseite unserer Webseite aufgerufen
              haben. Dies erfolgt unabh√§ngig davon, ob Google ein Nutzerkonto
              bereitstellt, √ľber das Sie eingeloggt sind, oder ob keine
              Nutzerkonto besteht. Wenn Sie bei Google eingeloggt sind, werden
              Ihre Daten direkt Ihrem Konto zugeordnet.{" "}
            </p>
            <p>
              Wenn Sie die Zuordnung in Ihrem Profil bei Google nicht w√ľnschen,
              m√ľssen Sie sich vor Aktivierung des Buttons bei Google ausloggen.
              Google speichert Ihre Daten als Nutzungsprofile und nutzt sie f√ľr
              Zwecke der Werbung, Marktforschung und/oder bedarfsgerechter
              Gestaltung seiner Webseites. Eine solche Auswertung erfolgt
              insbesondere (selbst f√ľr nicht eingeloggte Nutzer) zur Erbringung
              bedarfsgerechter Werbung und um andere Nutzer des sozialen
              Netzwerks √ľber Ihre Aktivit√§ten auf unserer Webseite zu
              informieren. Ihnen steht ein Widerspruchsrecht zu gegen die
              Bildung dieser Nutzerprofile, wobei Sie sich zur Aus√ľbung dessen
              an Google richten m√ľssen.{" "}
            </p>
            <h3>Widerruf der Einwilligung:</h3>
            <p>
              Vom Anbieter wird derzeit keine M√∂glichkeit f√ľr einen einfachen
              Opt-out oder ein Blockieren der Daten√ľbertragung angeboten. Wenn
              Sie eine Nachverfolgung Ihrer Aktivit√§ten auf unserer Webseite
              verhindern wollen, widerrufen Sie bitte im Cookie-Consent-Tool
              Ihre Einwilligung f√ľr die entsprechende Cookie-Kategorie oder alle
              technisch nicht notwendigen Cookies und Daten√ľbertragungen. In
              diesem Fall k√∂nnen Sie unsere Webseite jedoch ggfs. nicht oder nur
              eingeschr√§nkt nutzen.
            </p>
            <h2>Eingebettete YouTube-Videos</h2>
            <p>
              Auf unserer Webseite betten wir YouTube-Videos ein. Betreiber der
              entsprechenden Plugins ist die YouTube, LLC, 901 Cherry Ave., San
              Bruno, CA 94066, USA (nachfolgend ‚ÄěYouTube‚Äú). Die YouTube, LLC ist
              einer Tochtergesellschaft der Google LLC, 1600 Amphitheatre Pkwy,
              Mountain View, CA 94043, USA (nachfolgend ‚ÄěGoogle‚Äú). Wenn Sie eine
              Seite mit dem YouTube-Plugin besuchen, wird eine Verbindung zu
              Servern von YouTube hergestellt. Dabei wird YouTube mitgeteilt,
              welche Seiten Sie besuchen. Wenn Sie in Ihrem YouTube-Account
              eingeloggt sind, kann YouTube Ihr Surfverhalten Ihnen pers√∂nlich
              zuzuordnen. Dies verhindern Sie, indem Sie sich vorher aus Ihrem
              YouTube-Account ausloggen.{" "}
            </p>
            <p>
              Wird ein YouTube-Video gestartet, setzt der Anbieter Cookies ein,
              die Hinweise √ľber das Nutzerverhalten sammeln.{" "}
            </p>
            <p>
              Weitere Informationen zu Zweck und Umfang der Datenerhebung und
              ihrer Verarbeitung durch YouTube erhalten Sie in den
              Datenschutzerkl√§rungen des Anbieters, Dort erhalten Sie auch
              weitere Informationen zu Ihren diesbez√ľglichen Rechten und
              Einstellungsm√∂glichkeiten zum Schutze Ihrer Privatsph√§re (
              <a href="https://policies.google.com/privacy">
                https://policies.google.com/privacy
              </a>
              ).{" "}
            </p>
            <h3>Widerruf der Einwilligung:</h3>
            <p>
              Vom Anbieter wird derzeit keine M√∂glichkeit f√ľr einen einfachen
              Opt-out oder ein Blockieren der Daten√ľbertragung angeboten. Wenn
              Sie eine Nachverfolgung Ihrer Aktivit√§ten auf unserer Webseite
              verhindern wollen, widerrufen Sie bitte im Cookie-Consent-Tool
              Ihre Einwilligung f√ľr die entsprechende Cookie-Kategorie oder alle
              technisch nicht notwendigen Cookies und Daten√ľbertragungen. In
              diesem Fall k√∂nnen Sie unsere Webseite jedoch ggfs. nicht oder nur
              eingeschr√§nkt nutzen.
            </p>
            <hr />
            <h2>Information √ľber Ihr Widerspruchsrecht nach Art. 21 DSGVO</h2>
            <h3>Einzelfallbezogenes Widerspruchsrecht</h3>
            <p>
              Sie haben das Recht, aus Gr√ľnden, die sich aus Ihrer besonderen
              Situation ergeben, jederzeit gegen die Verarbeitung Sie
              betreffender personenbezogener Daten, die aufgrund Art. 6 Abs. 1
              lit. f DSGVO (Datenverarbeitung auf der Grundlage einer
              Interessenabw√§gung) erfolgt, Widerspruch einzulegen; dies gilt
              auch f√ľr ein auf diese Bestimmung gest√ľtztes Profiling im Sinne
              von Art. 4 Nr. 4 DSGVO.
            </p>
            <p>
              Legen Sie Widerspruch ein, werden wir Ihre personenbezogenen Daten
              nicht mehr verarbeiten, es sei denn, wir k√∂nnen zwingende
              schutzw√ľrdige Gr√ľnde f√ľr die Verarbeitung nachweisen, die Ihre
              Interessen, Rechte und Freiheiten √ľberwiegen, oder die
              Verarbeitung dient der Geltendmachung, Aus√ľbung oder Verteidigung
              von Rechtsanspr√ľchen.
            </p>
            <h3>Empf√§nger eines Widerspruchs</h3>
            <hr />
            <h2>√Ąnderung unserer Datenschutzbestimmungen</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerkl√§rung anzupassen, damit
              sie stets den aktuellen rechtlichen Anforderungen entspricht oder
              um √Ąnderungen unserer Leistungen in der Datenschutzerkl√§rung
              umzusetzen, z.B. bei der Einf√ľhrung neuer Services. F√ľr Ihren
              erneuten Besuch gilt dann die neue Datenschutzerkl√§rung.
            </p>
            <h2>Fragen an den Datenschutzbeauftragten</h2>
            <p>
              Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte
              eine E-Mail oder wenden Sie sich direkt an die f√ľr den Datenschutz
              verantwortliche Person in unserer Organisation:
            </p>
            <p>
              <em>
                Die Datenschutzerkl√§rung wurde mithilfe der activeMind AG
                erstellt, den Experten f√ľr{" "}
                <a
                  href="https://www.activemind.de/datenschutz/datenschutzbeauftragter/"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  externe Datenschutzbeauftragte
                </a>{" "}
                (Version #2020-09-30).
              </em>
            </p>
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
              to="/impressum"
            >
              Impressum
            </Typography>
            <Typography variant="caption" component="div" sx={{ mt: 1, mb: 2 }}>
              {"Copyright ¬© "}
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
