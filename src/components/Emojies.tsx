import bullsEye from "../assets/Bulls-eye.png";
import thumbup from "../assets/thumbs-up.png";
import meh from "../assets/meh.jpg";
import { Image, ImageProps } from "@chakra-ui/react";
interface Props {
  rating: number;
}

const Emojies = ({ rating }: Props) => {
  if (rating < 3) return null;
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "Meh" },
    4: { src: thumbup, alt: "Recommended" },
    5: { src: bullsEye, alt: "Exceptional" },
  };
  return (
    <Image
      {...emojiMap[rating]}
      boxSize={"25px"}
      borderRadius={4}
      marginTop={1}
    ></Image>
  );
};

export default Emojies;
