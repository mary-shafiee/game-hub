import { AspectRatio, Box } from "@chakra-ui/react";
import useTriler from "../hooks/useTrailers";
import { Trailer } from "../entities/Trailer";

interface Props {
  id: number;
}
const GameTrailer = ({ id }: Props) => {
  const { data: movie, isLoading, error } = useTriler(id);
  if (isLoading) return null;
  if (error) throw error;
  const first = movie?.results[0];

  return first ? (
    <video src={first.data[480]} poster={first.preview} controls />
  ) : null;
};

export default GameTrailer;
