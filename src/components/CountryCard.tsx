import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Country } from "../model";

interface Props {
  country: Country;
}

export const CountryCard: React.FC<Props> = ({ country }) => {
  const { name, flag, capital, population } = country;

  return (
    <Card className="Card" sx={{ backgroundColor: "black" }}>
      <CardActionArea>
        <CardMedia component="img" height="100" image={flag} alt={name} />
        <CardContent sx={{ color: "white" }}>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2">{`Capital: ${capital}`}</Typography>
          <Typography variant="body2">{`Population: ${population}`}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
