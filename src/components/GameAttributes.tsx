import Game from "../entities/Game";
import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import ItemDefinition from "./ItemDefinition";
interface Props {
  game: Game;
}
const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid as={"dl"} columns={2}>
      <ItemDefinition item="Platforms">
        {game?.parent_platforms.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </ItemDefinition>
      <ItemDefinition item={"MetaScore"}>
        <CriticScore score={Number(game?.metacritic)}></CriticScore>
      </ItemDefinition>
      <ItemDefinition item={"Genre"}>
        {game?.genres.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </ItemDefinition>
      <ItemDefinition item={"Publishers"}>
        {game?.publishers.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </ItemDefinition>
    </SimpleGrid>
  );
};

export default GameAttributes;
