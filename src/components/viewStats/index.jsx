import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { styled } from "@mui/material/styles";

const ViewStats = ({ showStats, pokemonStats }) => {
  const { name, height, base_experience, types, abilities, stats } =
    pokemonStats;

  const ColorButton = styled(Button)(() => ({
    backgroundColor: "#2b74ba",
    width: "100%",
  }));
  return (
    <Box width={"80%"} margin={"10%"}>
      <ChevronLeftIcon
        onClick={() => showStats(false)}
        style={{ cursor: "pointer" }}
      />
      <Grid container>
        <Grid item>
          <h1 style={{ textTransform: "capitalize" }}>{name}</h1>
        </Grid>
        <Grid item container direction={"column"}>
          <Grid item>Height: {height}m</Grid>
          <Grid item>Experience: {base_experience}</Grid>
          <hr></hr>
        </Grid>
        <Grid item container direction={"column"}>
          <h3>Type</h3>

          <Grid item container width={"100%"}>
            {types?.map((type) => (
              <Grid item sm={12 / types.length} key={type.slot}>
                <ColorButton variant="contained">{type.type.name}</ColorButton>
              </Grid>
            ))}
          </Grid>
          <Grid item container width={"100%"}>
            <h3>Abilities</h3>
            <Grid item container width={"100%"}>
              {abilities?.map((ability) => (
                <Grid item sm={12 / abilities.length} key={ability.slot}>
                  <ColorButton key={ability.slot} variant="contained">
                    {ability.ability.name}
                  </ColorButton>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Grid item container>
          <h3>Stats</h3>
          {stats?.map((stat) => (
            <Grid item container key={stat.stat.name}>
              <Grid item sm={2}>
                {stat.stat.name}
              </Grid>
              <Grid item sm={5}>
                <LinearProgress
                  sx={{ height: 10 }}
                  variant="determinate"
                  value={stat.base_stat / 2.52}
                />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};
export default ViewStats;
