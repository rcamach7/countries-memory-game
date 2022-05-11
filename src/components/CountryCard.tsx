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
    <Card className="Card" sx={{ maxWidth: 200 }}>
      <CardActionArea>
        <CardMedia component="img" height="100" image={flag} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Capital: ${capital}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`Population: ${population}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
