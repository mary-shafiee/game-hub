import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./Components/NavBar";
import GameGrid from "./Components/GameGrid";
import GenreList from "./Components/GenreList";
import { useState } from 'react';
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./Components/PlatformSelector";
import { Platform } from './hooks/usePlatform';


export interface GameQuery{
  genre : Genre | null ;
  platform : Platform | null
}
function App() {
  const [gameQuery , setGameQuery] = useState<GameQuery>({} as GameQuery)
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base : '1fr',
        lg : '280px 1fr'
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList  onSelectedGenre={(genre) => setGameQuery({...gameQuery , genre})} selectedGenre={gameQuery.genre}/>
        </GridItem>
      </Show>
      <GridItem area="main" >
        <PlatformSelector onSelectPlatform={(platform) => setGameQuery({ ...gameQuery , platform})} selectedPlatform={gameQuery.platform}/>
        <GameGrid  gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
