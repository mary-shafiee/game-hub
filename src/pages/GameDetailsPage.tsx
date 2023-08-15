import React from "react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import {
  Badge,
  Box,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import ExpandableText from "../Components/ExpandableText";
import DefinitionItem from "../Components/DefinitionItem";
import GameAttributes from "../Components/GameAttributes";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug || "");

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  

  return (
    <>
      <Heading>{game?.name}</Heading>
      <ExpandableText>{game?.description_raw}</ExpandableText>
      <GameAttributes game={game}/>
      
    </>
  );
};

export default GameDetailsPage;
