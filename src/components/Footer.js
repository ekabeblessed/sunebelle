import React from "react";
import { Typography } from "@mui/material";

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      Sun Flower Foundation <br />
      {"Copyright"} {new Date().getFullYear()}
    </Typography>
  );
}

const Footer = () => {
  return <Copyright />;
};

export default Footer;
