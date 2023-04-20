import {
  Box,
  Button,
  HStack,
  Img,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
interface Props {
  onSelectedGenre: (genre: Genre) => void;
}
const GenreList = ({ onSelectedGenre }: Props) => {
  const { data: genres, error, isLoading } = useGenre();
  return (
    <>
      {error && null}
      <Box paddingX="50%"> {isLoading && <Spinner></Spinner>}</Box>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY={2}>
            <HStack>
              <Img
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              ></Img>
              <Button
                onClick={() => onSelectedGenre(genre)}
                variant="link"
                fontSize="lg"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
