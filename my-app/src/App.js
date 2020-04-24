import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BaseStyles, theme } from "rimble-ui";
import { ThemeProvider } from "styled-components";
import { Box, Button, Flex, Text, Link, Heading, Image } from "rimble-ui";
import { ArrowForward } from '@rimble/icons';

function App() {
  return (
    <Box px={7}>
      <Box px={6}>
        <Flex justifyContent="center">
          <Image src="/portfolio-header-image.jpg" />
        </Flex>
        <Flex justifyContent="center">
          <Heading color="#1A2233" as={"h1"} fontSize={7} pt={5} pb={3}>
            Hi I’m Ryan, content designer and doer
          </Heading>
        </Flex>
        <Flex justifyContent="center">
          <Text color="#475166" fontSize={5} pb={5}>I use words to make sure experiences solve user needs. I’m into complex problems, design systems and teaching folks how to design better content. </Text>
        </Flex>
      </Box>
      <hr color="#DFE0E5" />
      <Box px={6}>
        <Heading as={"h2"} pt={5} pb={5} fontSize="40px">
          Work
        </Heading>
      </Box>
      <Flex justifyContent="center" pb={5}>
        <Image src="/Rimble_card.png" />
      </Flex>
      <Flex justifyContent="center" pb={5}>
        <Image src="/Codefi-card.png" />
      </Flex>
      <Flex justifyContent="center" pb={5}>
        <Image src="/Deliveroo-card.png" />
      </Flex>
      <Flex justifyContent="center" pb={5}>
        <Image src="/Boxt-card.png" />
      </Flex>
      <hr color="#DFE0E5" />
      <Box px={6}>
        <Heading as={"h2"} pt={5} pb={5} fontSize="40px">
          Interests
        </Heading>
        <Flex>
          <Icon color="#777C8C" name="ArrowForward" size="40px"/>
          <Flex justifyContent="center" flexDirection="column" pb="40px">
            <Text fontSize="40px" color="#1A2233">Content-first design</Text>
            <Text fontSize={3}>Designing for the content your user needs rather than fitting content into a pre-determined design.</Text>
          </Flex>
        </Flex>
        <Flex justifyContent="center" flexDirection="column" pb="40px">
          <Text fontSize="40px" color="#1A2233">Design systems</Text>
          <Text fontSize={3}>Systemising content design decisions but also the entire notion of making designers think less about stuff that’s already been solved and more about what’s new to solve</Text>
        </Flex>
        <Flex justifyContent="center" flexDirection="column" pb="40px">
          <Text fontSize="40px" color="#1A2233">Blockchain UX problems</Text>
          <Text fontSize={3}>Continuing to push blockchain product usability as far as the tech will allow us.</Text>
        </Flex>
        <Flex justifyContent="center" flexDirection="column" pb="40px">
          <Text fontSize="40px" color="#1A2233">Design education</Text>
          <Text fontSize={3}>Fighting the good fight and making sure folks understand the value in content design and design in general – especially interesting in the engineer-dominated blockchain space.</Text>
        </Flex>
        <Flex justifyContent="center" flexDirection="column">
          <Text fontSize="40px" color="#1A2233">Open source</Text>
          <Text fontSize={3}>Sharing learnings and giving each other a helping hand.</Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default App;
