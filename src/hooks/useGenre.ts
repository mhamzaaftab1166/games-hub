import useGenre from "./useGenres";

const useGame = (id?: number) => {
  const { data: genres } = useGenre();
  return genres?.results.find((g) => g.id === id);
};

export default useGame;
