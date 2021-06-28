import { Text, Center } from "@chakra-ui/react";
import React from "react";
import ColorPalette from "../../constants/ColorPalette";

export default function Header() {
  return (
    <Center>
      <Text fontSize={"2xl"} fontWeight={"bold"} color={ColorPalette.white}>
        🚨 ACCESS VERIFICATION 🚨
      </Text>
    </Center>
  );
}
