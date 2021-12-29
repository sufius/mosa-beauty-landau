import { CSSProperties } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Parallax, Pagination, Navigation } from "swiper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "./dcpCarousel.css";

// install Swiper modules
SwiperCore.use([Autoplay, Parallax, Pagination, Navigation]);

export default function DcpCarousel() {
  const theme = useTheme();
  const matchMedium = useMediaQuery(theme.breakpoints.down("md"));
  const matchSmall = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "inherit",
            "--swiper-pagination-color": "inherit",
          } as CSSProperties
        }
        speed={600}
        loop={false}
        parallax={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: function(index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        }}
        navigation={true}
        className="dcpCarousel"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage: "url(/background_testimonials.jpg)",
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <Box
            className="content"
            sx={{ maxWidth: matchSmall ? 200 : matchMedium ? 330 : 400 }}
          >
            <div data-swiper-parallax="-300">
              <Typography
                component="h4"
                paragraph
                sx={{ fontSize: matchSmall ? 16 : matchMedium ? 20 : 24 }}
              >
                Gesichtsbehandlung
              </Typography>
            </div>
            <div data-swiper-parallax="-100">
              <Typography
                sx={{ fontSize: matchSmall ? 14 : 16 }}
                paragraph
                align="justify"
              >
                Also das war meine erste Behandlung und ich bin so Happy 🥰🥰🥰 Du bist die Beste, werde das ab sofort regelmäßig bei dir machen. Du hast mich überzeugt, kommt selten vor, Danke 😘😘😘
              </Typography>
            </div>
            <div data-swiper-parallax="-200">
              <Typography
                component="h5"
                align="right"
                sx={{ fontSize: matchSmall ? 14 : matchMedium ? 16 : 18 }}
              >
                - Jasmina
              </Typography>
            </div>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            className="content"
            sx={{ maxWidth: matchSmall ? 200 : matchMedium ? 330 : 400 }}
          >
            <div data-swiper-parallax="-300">
              <Typography
                component="h4"
                paragraph
                sx={{ fontSize: matchSmall ? 16 : matchMedium ? 20 : 24 }}
              >
                Lasern
              </Typography>
            </div>
            <div data-swiper-parallax="-100">
              <Typography
                sx={{ fontSize: matchSmall ? 14 : 16 }}
                paragraph
                align="justify"
              >
              Hallo liebe samar💕 <br/>
              Du bist nicht nur 💗 die beste in Lasern sondern auch ein toller Mensch.💗
              </Typography>
            </div>
            <div data-swiper-parallax="-200">
              <Typography
                component="h5"
                align="right"
                sx={{ fontSize: matchSmall ? 14 : matchMedium ? 16 : 18 }}
              >
                - Husti
              </Typography>
            </div>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            className="content"
            sx={{ maxWidth: matchSmall ? 200 : matchMedium ? 330 : 400 }}
          >
            <div data-swiper-parallax="-300">
              <Typography
                component="h4"
                paragraph
                sx={{ fontSize: matchSmall ? 16 : matchMedium ? 20 : 24 }}
              >
                Haarentfernung
              </Typography>
            </div>
            <div data-swiper-parallax="-100">
              <Typography
                sx={{ fontSize: matchSmall ? 14 : 16 }}
                paragraph
                align="justify"
              >
                Ich bin zufrieden! Erste Ergebnisse nach dem ersten mal schon. 💗
              </Typography>
            </div>
            <div data-swiper-parallax="-200">
              <Typography
                component="h5"
                align="right"
                sx={{ fontSize: matchSmall ? 14 : matchMedium ? 16 : 18 }}
              >
                - Samishk
              </Typography>
            </div>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            className="content"
            sx={{ maxWidth: matchSmall ? 200 : matchMedium ? 330 : 400 }}
          >
            <div data-swiper-parallax="-300">
              <Typography
                component="h4"
                paragraph
                sx={{ fontSize: matchSmall ? 16 : matchMedium ? 20 : 24 }}
              >
                Lasern
              </Typography>
            </div>
            <div data-swiper-parallax="-100">
              <Typography
                sx={{ fontSize: matchSmall ? 14 : 16 }}
                paragraph
                align="justify"
              >
                Beste Laserin 🌸
              </Typography>
            </div>
            <div data-swiper-parallax="-200">
              <Typography
                component="h5"
                align="right"
                sx={{ fontSize: matchSmall ? 14 : matchMedium ? 16 : 18 }}
              >
                - Sino
              </Typography>
            </div>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
