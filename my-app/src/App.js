import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BaseStyles, theme } from "rimble-ui";
import { ThemeProvider } from "styled-components";
import { Box, Button, Flex, Text, Link, Heading } from "rimble-ui";

function App() {
  return (
    <Box px={4}>
      <Heading as={"h1"} pt={5} pb={3}>
        Ryan is a designer and writer working on decentralized applications.
      </Heading>
      <hr />
      <Box p={2} mt={5} borderLeft={1} borderWidth={3} borderColor="primary">
      <Heading pl={3} as={"h4"}>Design systems lead</Heading>
      <Text pl={3}>
        Helped put together the ConsenSys Codefi design systems
      </Text>
      <Text>
      <ul>
        <li>Designed components</li>
        <li>Wrote documentation</li>
        <li>Project managed</li>
      </ul>
      </Text>
      </Box>
      <Flex py={3} flexDirection="Column">
        <Link>Twitter</Link>
        <Link>Medium</Link>
        <Link>Figma</Link>
        <Link>Github</Link>
      </Flex>
    </Box>
  );
}

export default App;
