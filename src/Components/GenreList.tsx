import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../Services/image-url";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = () => {
  const { data  , isLoading , error} = useGenres();

  if(error) return null;
  if(isLoading) return <GenreSkeleton/>;
  return (
    <List>
      {data &&
        data.map((genre) => (
          <ListItem key={genre.id} paddingY={2}>
            <HStack>
              <Image
                borderRadius={10}
                boxSize={"54px"}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize='xl'>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
    </List>
  );
};

export default GenreList;
