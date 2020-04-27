import React from "react";
import { Flex, Image, Box } from "rimble-ui";

const Images = ({ src, src2, alt, alt2 }) => {
  return (

    <Flex flexDirection={["column", "row"]} mt="24px">
      <Box width={[1, 1/2]} pr={[0, "8px"]}>
        <Image src={src} alt={alt} />
      </Box>
      <Box width={[1, 1/2]} pl={[0, "8px"]}>
        <Image src={src2} alt={alt2} />
      </Box>
    </Flex>

)
};
export default Images;
