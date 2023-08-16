import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../Components/ExpandableText";
import GameAttributes from "../Components/GameAttributes";
import useGame from "../hooks/useGame";
import GameTriler from "../Components/GameTrailer";
import GameScreenshots from "../Components/GameScreenshots";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug || "");

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2  ,}} spacing={5}>
      <GridItem>
        <Heading>{game?.name}</Heading>
        <ExpandableText>{game?.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTriler id={game.id} />
        <GameScreenshots gamePK={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailsPage;
