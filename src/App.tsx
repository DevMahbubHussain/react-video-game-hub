import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GameSort from "./components/GameSort";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelectors from "./components/PlatformSelectors";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={`nav`}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area={`aside`} paddingX={7} marginTop={50}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area={`main`} marginTop={50}>
          <GameHeading />
          <HStack spacing={10}>
            <PlatformSelectors />
            <GameSort />
          </HStack>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
