import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: null | Genre;
}
const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data: genres, error, isLoading } = useGenre();
  if (error) return null;
  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={2}>
        Genres
      </Heading>
      <Box paddingX="50%"> {isLoading && <Spinner></Spinner>}</Box>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY={2}>
            <HStack>
              <Image
                objectFit="cover"
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Button
                whiteSpace="normal"
                textAlign={"left"}
                fontWeight={
                  selectedGenre && genre.id === selectedGenre.id
                    ? "bold"
                    : "normal"
                }
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
