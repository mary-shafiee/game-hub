import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../Services/image-url";

const GenreList = () => {
  const { data } = useGenres();
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
