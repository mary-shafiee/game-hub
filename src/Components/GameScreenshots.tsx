import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
  gamePK: number;
}
const GameScreenshots = ({ gamePK }: Props) => {
  const { data, isLoading, error } = useScreenshots(gamePK);
  console.log(data?.results);
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3 }}
      spacing={5}
      textAlign={"center"}
      padding={"10px"}
    >
      {data?.results.map((images) => (
        <Image key={images.id} src={images.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
