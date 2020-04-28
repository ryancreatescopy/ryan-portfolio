import React from 'react';
import { Box, Button, Flex, Text, Heading, Image } from "rimble-ui";
import { ArrowForward } from '@rimble/icons';
import Container from "./container";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import RimbleLink from "./RimbleLink"
import App from "./App"
import RimbleCS from "./rimble-cs"
import CodefiCS from "./codefi-cs"
import BoxtCS from "./boxt-cs"
import DeliverooCS from "./deliveroo-cs"

const Contact = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/contact'>
        <Box>
          <Box borderBottom={1} borderWidth="1px" borderColor="#F8F8F9"width="100%" zIndex="99999" bg="white" position="fixed" color="white" >
            <Flex alignItems="center" justifyContent="space-between" width="100%" pt={3} pb={3}>
            <Flex alignItems="center">
              <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/">
              <Button.Text
                icon="Home"
                color="#4F53DB"
                ml={4}
              >
              Home
              </Button.Text>
            </Link>
            </Flex>
            </Flex>
          </Box>
          <Container>
              <Box pt={5}>
                  <Image mt={5} src="/get-in-touch.png" />
            </Box>
          </Container>
            <Container>
                <Box pl={["0", "56px"]}>
                  <Heading as={"h2"} pt={5} pb={3} fontSize={["32px", "40px"]}>
                    Get in touch
                  </Heading>
                  <Text fontSize={4} pb={5}>
                    If you have a role in mind, reach out and we can chat content design until we’re blue in the face*.
                  </Text>
                </Box>
              <Box pb={2}>
                  <Flex>
                    <ArrowForward color="#777C8C" size="40px" mr={3}/>
                    <Flex justifyContent="center" flexDirection="column" pb="40px">
                    <RimbleLink
                      lineHeight={["40px", 1]}
                      fontSize={["24px", "40px"]}
                      fontWeight={2}
                      color="#4F53DB"
                      href="https://twitter.com/ryancreatescopy"
                      target="_blank"
                      as="a"
                      mb={[1, 2]}
                    >
                      @ryancreatescopy↗
                    </RimbleLink>
                  </Flex>
                </Flex>
                <Flex>
                  <ArrowForward color="#777C8C" size="40px" mr={3}/>
                  <Flex justifyContent="center" flexDirection="column" pb="40px">
                    <RimbleLink
                      lineHeight={["40px", 1]}
                      fontSize={["24px", "40px"]}
                      fontWeight={2}
                      color="#4F53DB"
                      href="mailto:ryancordell92@gmail.com"
                      as="a"
                      target="_blank"
                      mb={[1, 2]}
                    >
                      ryancordell92@gmail.com↗
                    </RimbleLink>
                  </Flex>
                </Flex>
                <Flex>
                  <ArrowForward color="#777C8C" size="40px" mr={3}/>
                  <Flex justifyContent="center" flexDirection="column" pb="40px">
                    <RimbleLink
                      lineHeight={["40px", 1]}
                      fontSize={["24px", "40px"]}
                      fontWeight={2}
                      color="#4F53DB"
                      href="https://www.Linkedin.com/in/ryancordell1/"
                      as="a"
                      target="_blank"
                      mb={[1, 2]}
                    >
                      LinkedIn↗
                    </RimbleLink>
                    </Flex>
                  </Flex>
                </Box>
                <Box pl={["0", "56px"]} pb={5}>
                  <Text>*Other topics I’d be willing to talk about until we’re blue in the face: Waynes World, Philadelphia Eagles, Weezer’s Blue album, Tottenham Hotspur... </Text>
                </Box>
              </Container>
        </Box>
  </Route>
  <Route path="/RimbleCS">
    <RimbleCS />
  </Route>
  <Route path="/BoxtCS">
    <BoxtCS />
  </Route>
  <Route path="/">
    <App />
  </Route>
  <Route path="/CodefiCS">
    <CodefiCS />
  </Route>
  <Route path="/DeliverooCS">
    <DeliverooCS />
  </Route>
  </Switch>
  </Router>
  )
  };

export default Contact;
