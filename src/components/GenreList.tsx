import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/images-url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
  if (isLoading) return <Spinner />;
  return (
    <>
      {error && <div>{error.message}</div>}
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
                objectFit={"cover"}
              />
              <Button
                fontWeight={genre.id === selectedGenreId ? "bold " : "normal"}
                color={genre.id === selectedGenreId ? "red.500" : ""}
                onClick={() => setSelectedGenreId(genre.id)}
                fontSize="lg"
                variant="link"
                whiteSpace={"normal"}
                textAlign={"left"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
