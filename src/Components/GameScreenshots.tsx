import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gamePK: number;
}
const GameScreenshots = ({ gamePK }: Props) => {
  const { data, isLoading, error } = useScreenshots(gamePK);
  if(isLoading) return null;
  if(error || !data) throw error;
  console.log(data?.results);
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={5}
      textAlign={"center"}
      padding={"10px"}
      backgroundColor={'#000'}
    >
      {data?.results.map((images) => (
        <Image  key={images.id} src={images.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
