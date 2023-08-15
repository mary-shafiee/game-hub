import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GenreList from "../Components/GenreList";
import GameHeading from "../Components/GameHeading";
import PlatformSelector from "../Components/PlatformSelector";
import SortSelector from "../Components/SortSelector";
import GameGrid from "../Components/GameGrid";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: ` "main"`,
        lg: ` "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "280px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={3}>
          <GameHeading />
          <Flex marginBottom={2}>
            <Box marginRight={5}>
              <PlatformSelector />
            </Box>

            <SortSelector />
          </Flex>
        </Box>

        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
