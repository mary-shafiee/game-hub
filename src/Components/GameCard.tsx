import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import PlatformIconList from "./PlatformIconList";
import getCroppedImageUrl from "../Services/image-url";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <PlatformIconList
          metacritic={game.metacritic}
          platforms={game.parent_platforms?.map((p) => p.platform)}
        />
        <Heading fontSize={"2xl"} marginY={2}>
          <Link to={"/games/" + game.slug}>{game.name}</Link>
        </Heading>
        <Emoji rating={game.rating_top} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
