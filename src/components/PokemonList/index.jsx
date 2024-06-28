import React from "react";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useDispatch } from "react-redux";
import { COLORS } from "../constants";
import { setName, setShowStats } from "../../redux/pokemonSlice";

const PokemonList = ({ list, handleOffsetChange, offset }) => {
  const dispatch = useDispatch();
  return (
    <Grid container justifyContent={"center"} height={"100%"}>
      {offset >= 20 && (
        <Grid
          item
          sm={1}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <ChevronLeftIcon
            onClick={() => handleOffsetChange(false)}
            sx={{ color: COLORS.POKOLOR, cursor: "pointer" }}
          />
        </Grid>
      )}
      <Grid sm={10} item container rowGap={2} width={"80%"}>
        {list.map((element) => (
          <Grid item key={element.name} xs={6}>
            <Button
              variant="outlined"
              color="error"
              sx={{ width: "90%", height: "80px" }}
              onClick={() => dispatch(setName(element.name))}
              onDoubleClick={() => dispatch(setShowStats(true))}
            >
              {element.name}
            </Button>
          </Grid>
        ))}
      </Grid>
      {offset <= 120 && (
        <Grid sm={1} item display={"flex"} alignItems={"center"}>
          <ChevronRightIcon
            onClick={() => handleOffsetChange(true)}
            sx={{ color: COLORS.POKOLOR, cursor: "pointer" }}
          />
        </Grid>
      )}
    </Grid>
  );
};
export default PokemonList;
