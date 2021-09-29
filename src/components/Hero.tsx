import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import ReactPlayer from "react-player";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from "@mui/material/useMediaQuery";
/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

type HeroProps = {
  onChange: (section: string) => void
}

export default function Hero({ onChange }: HeroProps) {
  const theme = useTheme();
  const matchMedium = useMediaQuery(theme.breakpoints.down('md'));
  const matchSmall = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box
      component="section"
      css={css`
        position: relative;
        & video {
          object-fit: cover;
        }
      `}
    >
      <ReactPlayer
        url={`${window.location.href}/video.mp4`}
        playing
        loop
        muted
        width="100%"
        height={matchSmall ? "70vw" : matchMedium ? "60vw" : "47vw"}
      />
      <Box
        css={css`
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.2);
        `}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            color: "#fff"
          }}
        >
          <Typography
            variant={matchSmall ? "h5" : matchMedium ? "h4" : "h3"}
            component="h1"
            sx={{ pb: matchSmall ? 2 : matchMedium ? 3 : 4, textShadow: "2px 2px 1px rgba(0, 0, 0, 0.8)" }}
            textAlign="center"
          >
            {process.env.REACT_APP_SITE_HERO_TITLE_PART_1}<br/>
            {process.env.REACT_APP_SITE_HERO_TITLE_PART_2}
          </Typography>
          <Button
            color="primary"
            variant="contained"
            size={matchSmall ? "small" : matchMedium ? "medium" : "large"}
            component={Link}
            to="/"
            onClick={() => {
              onChange && onChange("section_5");
            }}
          >
            JETZT ANGEBOT EINHOLEN
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
