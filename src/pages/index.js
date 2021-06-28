import { Flex, Center, Box, Spacer } from "@chakra-ui/react";
import React from "react";
import EmailForm from "../components/index/EmailForm";
import Header from "../components/index/Header";
import ColorPalette from "../constants/ColorPalette";
export default function Index() {
  return (
    <Flex {...StyleProps.wrapper}>
      <Center>
        <Box {...StyleProps.emailAuthContainer}>
          <Flex height={"full"} flex={1} direction={"column"}>
            <Box {...StyleProps.emailHeaderContainer}>{Header()}</Box>
            <Spacer />
            <Box {...StyleProps.emailFormContainer}>
              <Center>{EmailForm()}</Center>
            </Box>
            <Spacer />
          </Flex>
        </Box>
      </Center>
    </Flex>
  );
}

const StyleProps = {
  wrapper: {
    height: "100vh",
    direction: "row",
    bgColor: ColorPalette.black,
    justifyContent: "center",
  },
  emailAuthContainer: {
    height: "xs",
    width: "sm",
    bgColor: ColorPalette.grey,
    borderRadius: "lg",
    shadow: "lg",
  },
  emailHeaderContainer: {
    width: "full",
    paddingTop: "5",
    paddingBottom: "5",
    backgroundColor: ColorPalette.mintGreen,
    borderRadius: "lg",
  },
  emailFormContainer: {
    width: "full",
    paddingX: "10",
  },
};
