import { Platform } from "../hooks/usePlatform";
import { Badge, HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
  metacritic: number;
}

const PlatformIconList = ({ platforms, metacritic }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  const color = metacritic > 75 ? "green" : metacritic > 60 ? "yellow" : "red";
  return (
    <HStack justifyContent={"space-between"}>
      <HStack marginY={2}>
        {platforms?.map((platform) => (
          <Icon
            as={iconMap[platform.slug]}
            key={platform.id}
            color="gray.500"
          />
        ))}
      </HStack>
      <Badge
        colorScheme={color}
        fontSize={"14px"}
        paddingX={2}
        borderRadius={"4px"}
      >
        {metacritic}
      </Badge>
    </HStack>
  );
};

export default PlatformIconList;
