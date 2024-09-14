import { SimpleGrid, Image } from "@chakra-ui/react";
import useGameScreenshot from "../hooks/useGameScreenshot";

interface Props {
  gameId: number;
}

const GameScreenshot = ({ gameId }: Props) => {
  const { data, isLoading, error } = useGameScreenshot(gameId);
  console.log(data);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshot;
