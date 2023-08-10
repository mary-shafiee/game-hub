import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GamecardSkeleton from "./GamecardSkeleton";
import GameCardContainer from "./GameCardContainer";

import { GameQuery } from "../App";
interface Props{
  gameQuery : GameQuery
}
const GameGrid = ({gameQuery} : Props) => {
  const { data, error, isLoading } = useGame(gameQuery);
  const skeletons = [1, 2, 3, 4, 5];

  if(error) return <Text>{error.message}</Text>
  return (

    
      
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={5}
        padding={"10px"}
        textAlign={"center"}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GamecardSkeleton />
            </GameCardContainer>
          ))}
        {data?.results.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
   
  );
};

export default GameGrid;
