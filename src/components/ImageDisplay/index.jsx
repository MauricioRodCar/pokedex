import React from "react";
import Grid from "@mui/material/Grid";

const ImageDisplay = ({ image }) => {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Grid item width={"100%"} display="flex" justifyContent="center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
          alt="logo"
          style={{ width: "50%" }}
        />
      </Grid>
      <Grid item width={"100%"} display="flex" justifyContent="center">
        <img
          src={
            image === ""
              ? "https://cdn.pixabay.com/photo/2016/07/23/13/21/pokemon-1536855_1280.png"
              : image
          }
          style={{ maxWidth: "50%", borderRadius: 9999, height: 450 }}
          alt="pokemonImage"
        />
      </Grid>
    </Grid>
  );
};
export default ImageDisplay;
