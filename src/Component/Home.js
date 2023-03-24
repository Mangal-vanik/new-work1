import { Typography } from "@mui/material";
import React from "react";
import logo from "./image/logo.png";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
};

function Home() {
  return (
    <div style={style}>
      <div className="homeImage">
        <img src={logo} width="170px" />
        <Typography variant="h4" padding="30px" color="black">
          Made in INDIA
        </Typography>
      </div>
    </div>
  );
}

export default Home;
