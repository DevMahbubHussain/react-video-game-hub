import { SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import CriticScore from "./CriticScore";
import DefinationItems from "./DefinationItems";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2}>
      <DefinationItems term="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinationItems>

      <DefinationItems term="Metascore">
        <CriticScore score={game.metacritic}></CriticScore>
      </DefinationItems>

      <DefinationItems term="Genres">
        {game.genres?.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinationItems>
      <DefinationItems term="Publishers">
        {game.publishers?.map((publisher) => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </DefinationItems>
    </SimpleGrid>
  );
};

export default GameAttributes;
