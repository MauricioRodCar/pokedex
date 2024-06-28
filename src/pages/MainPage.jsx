import React, { useEffect, useState } from "react";
import ImageDisplay from "../components/ImageDisplay";
import PokemonList from "../components/PokemonList";
import ViewStats from "../components/viewStats";
import axios from "axios";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setShowStats } from "../redux/pokemonSlice";

const MainPage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [pokemonStats, setPokemonStats] = useState({});
  const [offset, setOffset] = useState(0);
  const [canShowStats, setCanShowStats] = useState(false);
  const pokemonName = useSelector((state) => state.pokemon.name);
  const showStats = useSelector((state) => state.pokemon.showStats.payload);

  const dispatch = useDispatch();

  const handleOffsetChange = (isNext) => {
    if ((isNext && offset >= 140) || (!isNext && offset <= 0)) return;
    setOffset((prevState) => {
      return isNext ? prevState + 20 : prevState - 20;
    });
  };

  const handleViewStats = (show) => {
    if (!canShowStats) return;
    dispatch(setShowStats(show));
  };

  useEffect(() => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${
          offset >= 140 ? "11" : "20"
        }`
      )
      .then((res) => {
        setPokemonList(res.data.results);
      });
  }, [offset]);

  useEffect(() => {
    if (pokemonName !== "") {
      axios
        .get("https://pokeapi.co/api/v2/pokemon/" + pokemonName)
        .then((res) => {
          setPokemonStats(res.data);
          setSelectedImage(res.data.sprites.front_default);
          setCanShowStats(true);
        });
    }
  }, [pokemonName]);

  return (
    <Grid container height={"100vh"} overflow={"hidden"}>
      <Grid item xs={6}>
        <Box sx={{ backgroundColor: "#e41f25" }} height={"100%"} padding={2}>
          <ImageDisplay image={selectedImage} />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box>
          {showStats ? (
            <ViewStats
              showStats={handleViewStats}
              pokemonStats={pokemonStats}
            />
          ) : (
            <PokemonList
              list={pokemonList}
              showStats={handleViewStats}
              handleOffsetChange={handleOffsetChange}
              offset={offset}
            />
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default MainPage;
