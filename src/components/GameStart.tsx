import React from "react";
import Backdrop from "@mui/material/Backdrop";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";

const images = [
  {
    url: "https://res.cloudinary.com/de2ymful4/image/upload/v1652308988/side-projects/americas_k2vqmd.png",
    title: "Americas",
    width: "clamp(200px, 95vw, 300px)",
  },
  {
    url: "https://res.cloudinary.com/de2ymful4/image/upload/v1652309309/side-projects/europe_zefk2b.png",
    title: "Europe",
    width: "clamp(200px, 95vw, 300px)",
  },
  {
    url: "https://res.cloudinary.com/de2ymful4/image/upload/v1652309383/side-projects/asia_nnpema.png",
    title: "Asia",
    width: "clamp(200px, 95vw, 300px)",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

interface Props {
  handleStartGame: (area: string) => void;
}

export const GameStart: React.FC<Props> = ({ handleStartGame }) => {
  return (
    <React.Fragment>
      <Backdrop
        className="GameStart"
        sx={{
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "rgba(0, 0, 0, .7)",
          display: "flex",
          flexDirection: "column",
        }}
        open={true}
        // onClick={() => setStartGame(false)}
      >
        <div className="gameRules">
          <h1>Memory Game!</h1>
          <ul>
            <li>Select proffered map below</li>
            <li>Click on any country</li>
            <li>Don't click on that country again!</li>
          </ul>
        </div>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            minWidth: 300,
            width: "100%",
          }}
        >
          <div className="imageButtonContainer">
            {images.map((image) => (
              <ImageButton
                focusRipple
                key={image.title}
                style={{
                  width: image.width,
                  minHeight: "150px",
                }}
              >
                <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                <ImageBackdrop className="MuiImageBackdrop-root" />
                <Image>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    sx={{
                      position: "relative",
                      p: 4,
                      pt: 2,
                      pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                    }}
                    onClick={() => handleStartGame(image.title)}
                  >
                    {image.title}
                    <ImageMarked className="MuiImageMarked-root" />
                  </Typography>
                </Image>
              </ImageButton>
            ))}
          </div>
        </Box>
        <p>click on any map to get started...</p>
      </Backdrop>
    </React.Fragment>
  );
};
