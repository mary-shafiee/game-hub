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
import { Genre } from "../hooks/useGenres";
interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <GenreSkeleton />;
  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>

      <List>
        {data &&
          data.map((genre) => (
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
                  color={genre.id === selectedGenre?.id ? "#78C1F3" : ""}
                  onClick={() => {
                    onSelectedGenre(genre);
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
