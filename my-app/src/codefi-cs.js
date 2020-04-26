import React from 'react';
import logo from './logo.svg';
import { BaseStyles, theme } from "rimble-ui";
import { ThemeProvider } from "styled-components";
import { Box, Button, Card, Flex, Text, Flash, Heading, Image } from "rimble-ui";
import { ArrowForward } from '@rimble/icons';
import Container from "./container";
import Container2 from "./container2";
import ProjectCard from "./project-card";
import { Home } from '@rimble/icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import RimbleLink from "./RimbleLink"
import App from "./App"
import RimbleCS from "./rimble-cs"
import DeliverooCS from "./deliveroo-cs"
import BoxtCS from "./boxt-cs"

const CodefiCS = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/CodefiCS'>
    <Box>
      <Box borderBottom={1} borderWidth="1px" borderColor="#F8F8F9"width="100%" zIndex="99999" bg="white" position="fixed" color="white" >
        <Flex alignItems="center" justifyContent="space-between" width="100%" pt={3} pb={3}>
        <Flex alignItems="center">
          <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">
          <Button.Text
            icon="Home"
            mainColor="#9498F7"
            color="#9498F7"
            activeColor="secondaryActive"
            hoverColor="secondaryHover"
            ml={4}
          >
          Home
          </Button.Text>
        </Link>
        </Flex>
        <Flex>
        <RimbleLink
          fontSize={2}
          fontWeight={2}
          color="#9498F7"
          activeColor="secondaryActive"
          hoverColor="secondaryHover"
          mr={4}
        >
          Get in touch
        </RimbleLink>
        </Flex>
        </Flex>
        <Box display={["block", "block", "block", "none"]} alignItems="center">
          <Flex borderTop={1} borderWidth="1px" borderColor="#F8F8F9" bg="white" alignItems="center" width="100%" position="fixed" bottom="0" justifyContent="flex-end" pt={3} pb={3}>
            <Flex>
              <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/RimbleCS"><Button.Outline mainColor="text" borderRadius="16px" border={1} borderWidth="2px" borderColor="#9498F7" mr={4}>Previous</Button.Outline></Link>
            </Flex>
          <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/DeliverooCS"><Button.Outline mainColor="text" borderRadius="16px" border={1} borderWidth="2px" borderColor="#9498F7" mr={4}>Next</Button.Outline></Link>
          </Flex>
        </Box>
      </Box>
      <Box pt="80px">
      <Image width="100%" src="/codefi-banner.png" />
      </Box>
      <Box display={["none", "none", "none", "block"]} alignItems="center">
        <Flex mt={5} alignItems="center" width="100%" position="fixed" justifyContent="space-between" pt={3} pb={3}>
          <Flex>
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/RimbleCS"><Button.Outline mainColor="text" borderRadius="8px" border={1} borderWidth="2px" borderColor="#9498F7" size="small" mx={[4, 4, "64px"]}>Previous</Button.Outline></Link>
          </Flex>
        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/RimbleCS"><Button.Outline mainColor="text" borderRadius="8px" border={1} borderWidth="2px" borderColor="#9498F7" size="small" mx={[4, 4, "64px"]}>Next</Button.Outline></Link>
        </Flex>
      </Box>
      <Container>
          <Box>
            <Flex justifyContent="center">
              <Heading color="#1A2233" as={"h1"} fontSize={7} pt={5} pb={3}>
                Creating a design language for Codefi
              </Heading>
            </Flex>
            <Flex justifyContent="center">
              <Text color="#475166" fontSize={5} pb={5}>I use words to make sure experiences solve user needs. I’m into complex problems, design systems and teaching folks how to design better content. </Text>
            </Flex>
            <Flex justifyContent="center">
              <Text color="#475166" fontSize={5} pb={5}>I use words to make sure experiences solve user needs. I’m into complex problems, design systems and teaching folks how to design better content. </Text>
            </Flex>  <Flex justifyContent="center">
                <Text color="#475166" fontSize={5} pb={5}>I use words to make sure experiences solve user needs. I’m into complex problems, design systems and teaching folks how to design better content. </Text>
              </Flex>  <Flex justifyContent="center">
                  <Text color="#475166" fontSize={5} pb={5}>I use words to make sure experiences solve user needs. I’m into complex problems, design systems and teaching folks how to design better content. </Text>
                </Flex>
          </Box>
      </Container>
    </Box>
  </Route>
  <Route path="/RimbleCS">
    <RimbleCS />
  </Route>
  <Route path="/">
    <App />
  </Route>
  <Route path="/DeliverooCS">
    <DeliverooCS />
  </Route>
  <Route path="/BoxtCS">
    <BoxtCS />
  </Route>
</Switch>
</Router>
  )
};

export default CodefiCS;
