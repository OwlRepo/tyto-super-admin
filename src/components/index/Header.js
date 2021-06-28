import { Text, Center } from "@chakra-ui/react";
import React from "react";
import ColorPalette from "../../constants/ColorPalette";
import HeaderStyles from "./style-props/HeaderStyles";

export default function Header() {
  return (
    <Center>
      <Text {...HeaderStyles.text}>🚨 ACCESS VERIFICATION 🚨</Text>
    </Center>
  );
}
