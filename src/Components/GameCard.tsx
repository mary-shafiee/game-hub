import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import { Game, Platform } from '../hooks/useGame';
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card borderTopRadius={10} overflow={"hidden"}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
       <PlatformIconList platforms={game.parent_platforms?.map(p=> (p.platform))}/>
      </CardBody>
    </Card>
  );
};

export default GameCard;
