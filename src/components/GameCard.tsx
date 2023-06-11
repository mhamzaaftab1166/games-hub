import { Game } from "../entities/Game";
import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emojies from "./Emojies";
import { Link } from "react-router-dom";
interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <HStack marginBottom={1} justifyContent="space-between">
          {game.parent_platforms && (
            <PlatformIconList
              platforms={game.parent_platforms.map((plat) => plat.platform)}
            ></PlatformIconList>
          )}

          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize="2xl">
          <Link to={"/games/" + game.slug}> {game.name}</Link>
          <Emojies rating={game.rating_top}></Emojies>
        </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
