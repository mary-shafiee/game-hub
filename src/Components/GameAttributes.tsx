import { SimpleGrid, Badge , Text } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import DefinitionItem from "./DefinitionItem";

interface Prop {
  game: Game;
}
const GameAttributes = ({ game }: Prop) => {
  const color =
    game.metacritic > 75 ? "green" : game.metacritic > 60 ? "yellow" : "red";
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionItem term="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <Badge
          colorScheme={color}
          fontSize={"14px"}
          paddingX={2}
          borderRadius={"4px"}
        >
          {game.metacritic}
        </Badge>
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publisher">
        {game.publishers?.map((publish) => (
          <Text key={publish.name}>{publish.name}</Text>
        ))}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
