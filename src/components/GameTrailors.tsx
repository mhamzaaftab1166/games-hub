import useTrailors from "../hooks/useTrailors";
import { Spinner } from "@chakra-ui/react";
interface Props {
  gameId: number;
}
const GameTrailors = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailors(gameId);
  if (isLoading) return <Spinner></Spinner>;
  if (error) throw error;

  const first = data?.results[0];
  return first ? (
    <video src={first?.data[480]} poster={first?.preview} controls></video>
  ) : null;
};

export default GameTrailors;
