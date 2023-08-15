import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../Services/image-url";
import GenreSkeleton from "./GenreSkeleton";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;
  if (isLoading) return <GenreSkeleton />;
  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>

      <List>
        {data &&
          data.results.map((genre) => (
            <ListItem key={genre.id} paddingY={2}>
              <HStack gap={1}>
                <Image
                  objectFit={"cover"}
                  borderRadius={10}
                  boxSize={"54px"}
                  src={getCroppedImageUrl(genre.image_background)}
                />
                <Button
                  textAlign="left"
                  whiteSpace="normal"
                  color={genre.id === selectedGenreId ? "#78C1F3" : ""}
                  onClick={() => {
                    setGenreId(genre.id);
                  }}
                  fontSize="lg"
                  variant="link"
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
