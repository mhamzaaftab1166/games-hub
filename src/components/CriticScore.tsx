import { Badge } from "@chakra-ui/react";
import React from "react";
interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  let color = score >= 90 ? "green" : score >= 85 ? "yellow" : "red";
  return (
    <Badge colorScheme={color} paddingX={2} borderRadius={2} fontSize={16}>
      {score}
    </Badge>
  );
};

export default CriticScore;
