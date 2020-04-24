import React from "react";
import { Box, Flex, Text, Image, Button, Card } from "rimble-ui";
import { ArrowForward } from '@rimble/icons';

const ProjectCard = ({ company, roles, description, extendedDescription, url, children, imageSrc, topPosition, bottomPosition }) => {
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
        width={["90%", "50%"]}
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
            fontSize="40px"
            pb={1}
          >
            {company}
          </Text>
          <Text
            fontSize={5}
            pb={4}
          >
            {roles}
          </Text>
          <Text
            fontSize={2}
            fontWeight={3}
            pb="24px"
          >
          {description}
          </Text>
          <Text
            fontSize={2}
            pb="40px"
          >
            {extendedDescription}
          </Text>
          <Button size="large" as="a" href={url} borderRadius="16px" mb={3} mr={3} mainColor="#1A2233">Read case study <ArrowForward color="#9498F7" size="24px" /></Button>
          {children}
      </Card>
    </Flex>
  );
};

export default ProjectCard;
