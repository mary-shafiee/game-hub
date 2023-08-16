import { SimpleGrid } from "@chakra-ui/react";
import useTriler from "../hooks/useTrailers";

interface Props {
  id: number;
}
const GameTrailer = ({ id }: Props) => {
  const { data: movie, isLoading, error } = useTriler(id);
  if (isLoading) return null;
  if (error) throw error;
  const first = movie?.results[0];

  return first ? (
    <SimpleGrid>
      <video src={first.data[480]} poster={first.preview} controls />
    </SimpleGrid>
    
  ) : null;
};

export default GameTrailer;
