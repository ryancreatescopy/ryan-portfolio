import React from "react";
import { Flex, Text, Image, Card } from "rimble-ui";

const ProjectCard = ({ company, roles, description, extendedDescription, children, imageSrc, topPosition, bottomPosition }) => {
  return (
    <Flex
      justifyContent="center"
      flexDirection="column"
      position={["auto", "relative"]}
      mt={topPosition}
      mb={bottomPosition}
    >
      <Image
        src={imageSrc}
      />
      <Card
        position={["relative", "relative"]}
        bottom={["4rem", "580px"]}
        left={["0", "360px"]}
        width={["96%", "50%"]}
        mx={"auto"}
        mt={4}
        mb={[1, 5]}
        borderRadius="8px"
        border={1}
        borderColor="#000A28"
        borderWidth="2px"
      >
        <Text
            fontWeight={4}
            fontSize={[4, "40px"]}
            pb={1}
          >
            {company}
          </Text>
          <Text
            fontSize={[3, 5]}
            pb={4}
          >
            {roles}
          </Text>
          <Text
            fontSize={["18px", "16px"]}
            fontWeight={3}
            pb={[3, "24px"]}
          >
          {description}
          </Text>
          <Text
            fontSize={["18px", "16px"]}
            pb={[4,"40px"]}
          >
            {extendedDescription}
          </Text>
          {children}
      </Card>
    </Flex>
  );
};

export default ProjectCard;
