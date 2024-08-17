import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  return (
    <>
      <Badge
        borderRadius={10}
        fontSize={14}
        colorScheme={score > 75 ? "green" : "red"}
      >
        {score}
      </Badge>
    </>
  );
};

export default CriticScore;
