import React from 'react';
import logo from './logo.svg';
import { BaseStyles, theme } from "rimble-ui";
import { ThemeProvider } from "styled-components";
import { Box, Button, Card, Flex, Text, Flash, Link, Heading, Image } from "rimble-ui";
import { ArrowForward } from '@rimble/icons';
import Container from "./container";
import Container2 from "./container2";
import ProjectCard from "./project-card";

const RimbleCS = () => (
    <Box>
      <Box zIndex="99999" width="100%" bg="white" position="fixed" justifyContent="center" color="white" >
        <Flex justifyContent="center" pt={3} pb={3}>
        <Link
          fontSize={2}
          fontWeight={3}
          color="#9498F7"
          activeColor="secondaryActive"
          hoverColor="secondaryHover"
        >
          Get in touch
        </Link>
        </Flex>
        <Image width="100%"src="/rimble-header-cs.png" />
      </Box>
      <Container>
          <Box>
            <Flex justifyContent="center">
              <Heading color="#1A2233" as={"h1"} fontSize={7} pt={5} pb={3}>
                Making good blockchain UX easier with Rimble
              </Heading>
            </Flex>
            <Flex justifyContent="center">
              <Text color="#475166" fontSize={5} pb={5}>I use words to make sure experiences solve user needs. I’m into complex problems, design systems and teaching folks how to design better content. </Text>
            </Flex>
          </Box>
      </Container>
    </Box>
  );

export default RimbleCS;
