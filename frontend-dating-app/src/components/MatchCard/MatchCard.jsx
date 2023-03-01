import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { textAlign } from "@mui/system";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function MatchCard() {
  return (
    <div>
      <Card sx={{ minWidth: "50vw", textAlign: "center" }} variant="outlined">
        <CardContent>
          <Typography
            sx={{ fontSize: "3.5vw" }}
            color="text.secondary"
            gutterBottom
          >
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography
            variant="body2"
            sx={{ textAlign: "center", justifyContent: "center" }}
          >
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <br></br>
        <CardActions sx={{ justifyContent: "center" }}>
          <IconButton
            color="secondary"
            aria-label="add an alarm"
            sx={{ marginRight: 20 }}
            size="large"
          >
            <AlarmIcon fontSize="large" />
          </IconButton>
          <IconButton color="primary" aria-label="add to shopping cart">
            <AddShoppingCartIcon fontSize="large" />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
