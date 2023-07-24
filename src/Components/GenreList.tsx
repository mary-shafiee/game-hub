import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Text,
  color,
  styled,
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
    <List>
      {data &&
        data.map((genre) => (
          <ListItem key={genre.id} paddingY={2}>
            <HStack gap={1}>
              <Image
                borderRadius={10}
                boxSize={"54px"}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                color={genre.id === selectedGenre?.id ? "blue" : ''}
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
  );
};

export default GenreList;
