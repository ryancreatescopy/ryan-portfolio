import React from "react";
import { Box, Text } from "rimble-ui";

const Caption = ({ children }) => {
  return (
    <Box mb="40px" mt={3}>
    <Text
    fontSize={2}
    color="#475166"
    >
      {children}
    </Text>
    </Box>
)
};
export default Caption;
