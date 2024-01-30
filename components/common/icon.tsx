import { Image } from "react-native";

export const IconUser = ({
  imageSrc,
  size = 50,
}: {
  imageSrc: any;
  size?: number;
}) => {
  return (
    <Image
      source={imageSrc}
      style={{
        width: size,
        height: size,
        borderRadius: 50,
        objectFit: "cover",
      }}
    />
  );
};
