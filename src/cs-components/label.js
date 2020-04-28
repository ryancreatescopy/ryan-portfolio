import React from "react";
import { Box, Flex, Heading } from "rimble-ui";

const Label = ({ color, label }) => {
  return (
    <Box>
    <Flex
      style={{ transform: "rotateZ(-5deg)" }}
      bg={color}
      px={4}
      py={3}
      display="inline-flex"
      borderRadius={3}
      boxShadow="0px 12px 24px rgba(0, 0, 0, 0.1)"
    >
      <Heading as={"h3"}
        fontSize={["32px","40px"]}
        fontWeight={4}
        color="white"
      >
        {label}
      </Heading>
    </Flex>
    </Box>
)
};
export default Label;
