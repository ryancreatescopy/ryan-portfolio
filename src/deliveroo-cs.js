import React from "react";
import { Box, Button, Flex, Text, Heading, Image } from "rimble-ui";
import { ArrowForward } from "@rimble/icons";
import Container from "./container";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import RimbleLink from "./RimbleLink";
import App from "./App";
import RimbleCS from "./rimble-cs";
import CodefiCS from "./codefi-cs";
import BoxtCS from "./boxt-cs";
import Label from "./cs-components/label";
import Caption from "./cs-components/caption";
import Contact from "./contact";

const DeliverooCS = () => {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route exact path="/DeliverooCS">
            <Box>
              <Box
                borderBottom={1}
                borderWidth="1px"
                borderColor="#F8F8F9"
                width="100%"
                zIndex="99999"
                bg="white"
                position="fixed"
                color="white"
              >
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  width="100%"
                  pt={3}
                  pb={3}
                >
                  <Flex alignItems="center">
                    <Link
                      style={{ color: "inherit", textDecoration: "inherit" }}
                      to="/"
                    >
                      <Button.Text icon="Home" color="#4F53DB" ml={4}>
                        Home
                      </Button.Text>
                    </Link>
                  </Flex>
                  <Flex>
                    <Link
                      style={{ color: "inherit", textDecoration: "inherit" }}
                      to="/contact"
                    >
                      <RimbleLink
                        fontSize={2}
                        fontWeight={2}
                        color="#4F53DB"
                        mr={4}
                      >
                        Get in touch
                      </RimbleLink>
                    </Link>
                  </Flex>
                </Flex>
                <Box
                  display={["block", "block", "block", "none"]}
                  alignItems="center"
                >
                  <Flex
                    borderTop={1}
                    borderWidth="1px"
                    borderColor="#F8F8F9"
                    bg="white"
                    alignItems="center"
                    width="100%"
                    position="fixed"
                    bottom="0"
                    justifyContent="flex-end"
                    pt={3}
                    pb={3}
                  >
                    <Flex>
                      <Link
                        style={{ color: "inherit", textDecoration: "inherit" }}
                        to="/CodefiCS"
                      >
                        <Button.Outline
                          mainColor="text"
                          borderRadius="16px"
                          border={1}
                          borderWidth="2px"
                          borderColor="#9498F7"
                          mr={4}
                        >
                          Previous
                        </Button.Outline>
                      </Link>
                    </Flex>
                    <Link
                      style={{ color: "inherit", textDecoration: "inherit" }}
                      to="/BoxtCS"
                    >
                      <Button.Outline
                        mainColor="text"
                        borderRadius="16px"
                        border={1}
                        borderWidth="2px"
                        borderColor="#9498F7"
                        mr={4}
                      >
                        Next
                      </Button.Outline>
                    </Link>
                  </Flex>
                </Box>
              </Box>
              <Box pt="80px">
                <Image id="top" width="100%" src="/deliveroo-banner.png" />
              </Box>
              <Box
                display={["none", "none", "none", "block"]}
                alignItems="center"
              >
                <Flex
                  mt={5}
                  alignItems="center"
                  width="100%"
                  position="fixed"
                  justifyContent="space-between"
                  pt={3}
                  pb={3}
                >
                  <Flex>
                    <Link
                      style={{ color: "inherit", textDecoration: "inherit" }}
                      to="/CodefiCS"
                    >
                      <Button.Outline
                        icon="ArrowBack"
                        mainColor="text"
                        borderRadius="8px"
                        border={1}
                        borderWidth="2px"
                        borderColor="#9498F7"
                        size="small"
                        mx={[4, 4, "64px"]}
                      >
                        Previous
                      </Button.Outline>
                    </Link>
                  </Flex>
                  <Link
                    style={{ color: "inherit", textDecoration: "inherit" }}
                    to="/BoxtCS"
                  >
                    <Button.Outline
                      icon="ArrowForward"
                      iconpos="right"
                      mainColor="text"
                      borderRadius="8px"
                      border={1}
                      borderWidth="2px"
                      borderColor="#9498F7"
                      size="small"
                      mx={[4, 4, "64px"]}
                    ></Button.Outline>
                  </Link>
                </Flex>
              </Box>
              <Container>
                <Box>
                  <Flex justifyContent="center">
                    <Heading
                      color="#1A2233"
                      as={"h1"}
                      fontSize={[5, 7]}
                      mt={[4, 5]}
                      mb={["32px", "40px"]}
                    >
                      Serving up a new tool for Deliveroo restaurants
                    </Heading>
                  </Flex>
                  <Flex justifyContent="center">
                    <Text
                      color="#475166"
                      fontSize={["24px", "40px"]}
                      mb={[5, 6]}
                    >
                      Deliveroo needed a way to cut business costs and give
                      their restaurant partners more control. Throw in an
                      impending legal deadline and you’ve got a recipe for heaps
                      of learnings.
                    </Text>
                  </Flex>
                </Box>
                <Label color="#9498F7" label="PROBLEM" />
                <Heading
                  as={"h4"}
                  fontWeight={3}
                  fontSize={["32px", "40px"]}
                  mb={3}
                  mt={5}
                >
                  Menus = money
                </Heading>
                <Text fontSize={["20px", "24px"]} color="text" mb={6}>
                  Creating menus was one of the most costly parts of Deliveroo
                  operations. A large majority of this work was outsourced and
                  time-consuming leading to a not insignificant amount of human
                  error. Many restaurants wanted the ability to make quick edits
                  to their menu whenever they wanted and resented having to go
                  via their account manager. My team’s task was to remove this
                  business overhead and solve this user need.
                </Text>
                <Label color="#FA9476" label="WHAT WE DID" />
                <Box mt={5} ml={["0", "-56px"]}>
                  <Flex>
                    <ArrowForward color="#777C8C" size="40px" mr={3} />
                    <Flex
                      justifyContent="center"
                      flexDirection="column"
                      pb="40px"
                    >
                      <Text
                        lineHeight={1}
                        fontSize={["32px", "40px"]}
                        color="#1A2233"
                        mb={2}
                      >
                        Get to know our users
                      </Text>
                      <Text
                        fontSize={["20px", "24px"]}
                        mt="24px"
                        color="#1A2233"
                      >
                        Working with design research, a product designer, design
                        researcher and I carried out 15 user interviews to
                        really identify who are restaurant users were. We
                        managed to split them into the following groups:
                      </Text>
                      <Text
                        fontSize={["20px", "24px"]}
                        mt="40px"
                        color="#1A2233"
                      >
                        <ul>
                          <li>
                            <strong>Central management</strong> – typically
                            technically skilled staff with financial
                            responsibility but little involvement in the
                            day-to-day
                          </li>
                          <li>
                            <strong>Small business owner</strong> – sole or part
                            business owner with limited involvement in
                            day-to-day but are financially liable
                          </li>
                          <li>
                            <strong>Owner-manager</strong> – sole or part
                            business owner who also runs the restaurant and is
                            financially liable
                          </li>
                          <li>
                            <strong>General manager</strong> – staff member,
                            employed to run business day-to-day and is
                            financially responsible
                          </li>
                        </ul>
                      </Text>
                      <Text
                        fontSize={["20px", "24px"]}
                        mt="40px"
                        color="#1A2233"
                      >
                        Not forgetting our internal users: our account managers
                        and partner sevice reps who were measured on the speed
                        and quality of their menu edits. We needed to make our
                        solution helped them too.
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex>
                    <ArrowForward color="#777C8C" size="40px" mr={3} />
                    <Flex
                      justifyContent="center"
                      flexDirection="column"
                      pb="40px"
                    >
                      <Text
                        lineHeight={1}
                        fontSize={["32px", "40px"]}
                        color="#1A2233"
                        mb={2}
                      >
                        Documenting as we went
                      </Text>
                      <Text
                        fontSize={["20px", "24px"]}
                        mt="24px"
                        color="#1A2233"
                      >
                        Any insights we gained from our interviews plus any
                        early exploration was documented in our design doc. This
                        was a shared source of truth for anyone working on the
                        solution. This helped keep designers and stakeholders
                        aligned.
                      </Text>
                      <Image mt="40px" src="/cs-images/design-doc.gif" />
                      <Text
                        fontSize={["20px", "24px"]}
                        mt="40px"
                        color="#1A2233"
                      >
                        If you want to know more, Deliveroo’s design team wrote
                        about {""}
                        <RimbleLink
                          fontSize={["20px", "24px"]}
                          fontWeight={2}
                          color="#4F53DB"
                          href="https://medium.com/deliveroo-design/the-power-of-the-design-doc-fbf5070163f8"
                          as="a"
                        >
                          the power of design docs↗
                        </RimbleLink>
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex>
                    <ArrowForward color="#777C8C" size="40px" mr={3} />
                    <Flex
                      justifyContent="center"
                      flexDirection="column"
                      pb="40px"
                    >
                      <Text
                        lineHeight={1}
                        fontSize={["32px", "40px"]}
                        color="#1A2233"
                        mb={2}
                      >
                        Kicking things off with conversation
                      </Text>
                      <Text
                        fontSize={["20px", "24px"]}
                        mt="24px"
                        color="#1A2233"
                      >
                        The product designer and I wanted to create the most
                        natural experience for restaurants to make their menu
                        changes, so I thought we should try conversational
                        design. This is a process whereby you script out an
                        interaction before designing it to identify the content
                        you need and any edge cases. It’s a great,
                        cost-effective way to start prototyping with real
                        content.
                      </Text>
                      <Text
                        fontSize={["20px", "24px"]}
                        mt="40px"
                        color="#1A2233"
                      >
                        The designer pretended to be Deliveroo while I played
                        the part of the restaurant. It helped us to identify
                        some important content for the first iterations of the
                        product and remove Deliveroo jargon in the process.
                      </Text>
                      <Text
                        fontSize={["20px", "24px"]}
                        mt="40px"
                        color="#1A2233"
                      >
                        I explain this in more detail in my {""}
                        <RimbleLink
                          fontSize={["20px", "24px"]}
                          fontWeight={2}
                          color="#4F53DB"
                          href="https://rimble.consensys.design/guides/content/conversational-design"
                          target="_blank"
                          as="a"
                        >
                          conversational design guide↗
                        </RimbleLink>
                      </Text>
                      <Image
                        mt="40px"
                        src="/cs-images/conversational-design.png"
                      />
                    </Flex>
                  </Flex>
                  <Flex>
                    <ArrowForward color="#777C8C" size="40px" mr={3} />
                    <Flex
                      justifyContent="center"
                      flexDirection="column"
                      pb="40px"
                    >
                      <Text
                        lineHeight={1}
                        fontSize={["32px", "40px"]}
                        color="#1A2233"
                        mb={2}
                      >
                        First time in Figma
                      </Text>
                      <Text
                        fontSize={["20px", "24px"]}
                        mt="24px"
                        color="#1A2233"
                      >
                        We took our conversation script and turned that into
                        screens in Figma using the Delivero design system. The
                        product designer and I riffed on the design a lot in
                        Figma. It was Deliveroo’s first project to use Figma and
                        we were massively enjoying the collaborative benefits.
                      </Text>
                      <Image mt="40px" src="/cs-images/Figma.gif" />
                      <Caption>
                        Us playing around in Figma. We even wrote an article on
                        how much it helped us on this project and all the ways{" "}
                        <RimbleLink
                          fontSize="16px"
                          fontWeight={2}
                          color="#4F53DB"
                          href="https://medium.com/deliveroo-design/4-reasons-we-love-figma-at-deliveroo-7a6db84b5239"
                          target="_blank"
                        >
                          we loved using Figma↗
                        </RimbleLink>
                      </Caption>
                      <Image mt="40px" src="/cs-images/menus-mvp.png" />
                      <Caption>The MVP of the menu tool.</Caption>
                    </Flex>
                  </Flex>
                  <Flex>
                    <ArrowForward color="#777C8C" size="40px" mr={3} />
                    <Flex
                      justifyContent="center"
                      flexDirection="column"
                      pb="40px"
                    >
                      <Text
                        lineHeight={1}
                        fontSize={["32px", "40px"]}
                        color="#1A2233"
                        mb={2}
                      >
                        Usability testing
                      </Text>
                      <Text
                        fontSize={["20px", "24px"]}
                        mt="24px"
                        color="#1A2233"
                      >
                        We took our prototype to restaurants and account
                        managers in 3 markets: UK, Germany and Italy. We
                        designed a series of tasks for users to do so we could
                        see how well the current iteration performed. The
                        testing had mixed results but gave us some incredible
                        ideas to work on back in London. Specifically doubling
                        down on bulk actions and creating a view that allows the
                        restaurant to edit the menu as it appears on Deliveroo,
                        separate from a more process-focused UI for internal
                        Deliveroo users who are managing 100s of menus.
                      </Text>
                      <Image mt="40px" src="/cs-images/testing-findings.png" />
                      <Caption>
                        An excerpt from the research report on how well the MVP
                        performed with internal users.
                      </Caption>
                      <Image mt="40px" src="/cs-images/menus-sketching.png" />
                      <Caption>
                        Sketches the product designer and I made in the Berlin
                        office inbetween testing sessions. Patterns were already
                        emerging about the need to bulk manage items while also
                        persistently being able to see the in-progress menu.
                        This formed our vision for the iteration.
                      </Caption>
                    </Flex>
                  </Flex>
                  <Flex>
                    <ArrowForward color="#777C8C" size="40px" mr={3} />
                    <Flex
                      justifyContent="center"
                      flexDirection="column"
                      pb="40px"
                    >
                      <Text
                        lineHeight={1}
                        fontSize={["32px", "40px"]}
                        color="#1A2233"
                        mb={2}
                      >
                        The food safety curveball
                      </Text>
                      <Text
                        fontSize={["20px", "24px"]}
                        mt="24px"
                        color="#1A2233"
                      >
                        While we were working on this project, the law in
                        Germany was changing around displaying allergens in
                        online food apps. Restaurants had to either add allergen
                        information to their menu themselves or approve allergen
                        information added by Deliveroo. We had to pivot to focus
                        purely on managing this food safety information.
                      </Text>
                      <Text
                        fontSize={["20px", "24px"]}
                        mt="40px"
                        color="#1A2233"
                      >
                        One insight we’d got from our usability testing was that
                        account managers were really good at Google sheets. This
                        was how they were currently doing their menu work.
                      </Text>
                      <Text
                        fontSize={["20px", "24px"]}
                        mt="40px"
                        color="#1A2233"
                      >
                        So we set about designing a solution that met them in
                        the tools they were already using. We designed a feature
                        that allowed them to update the food safety information
                        in a Google sheet and send to the restaurant for
                        approval. I wrote the steps to help our users get this
                        done.
                      </Text>
                      <Image mt="40px" src="/cs-images/food-safety.png" />
                      <Caption>
                        Users could make all the edits they needed in an
                        auto-generated Google sheet. They then import and send
                        it fo the restaurant to approve, passing the liability
                        onto them.
                      </Caption>
                      <Image
                        mt="40px"
                        src="/cs-images/food-safety-publish.png"
                      />
                      <Caption>
                        If information was missing, we’d flag it and explain
                        what needs to be fixed before a menu could be published
                        onto the Deliveroo platform.
                      </Caption>
                    </Flex>
                  </Flex>
                </Box>
              </Container>
              <Box px={0} bg="#FBFBFC">
                <Container>
                  <Box py="64px">
                    <Label color="#69BFA0" label="RESULT" />
                    <Text
                      mt="64px"
                      fontSize={["40px", "64px"]}
                      lineHeight={["48px", "80px"]}
                      color="text"
                      fontWeight={"bold"}
                    >
                      Launch in Germany on time and 100% legal{" "}
                      <span role="img" aria-label="police car emoji">
                        🚓
                      </span>
                    </Text>
                    <Text fontSize={["20px", "24px"]} mt="64px" color="#1A2233">
                      It was a great project for figuring out how to best
                      balance business requirements and user needs. It was also
                      a great example for how product designers, content
                      designers and researchers should collaborate on solving a
                      highly complex problem. It was great working on a project
                      where we got so much research support. I left Deliveroo
                      for ConsenSys shortly after launch but I’m certain this
                      product will be having really positive effects on
                      Deliveroo’s bottom line.
                    </Text>
                    <Image mt="64px" src="/cs-images/menus-final.png" />
                  </Box>
                </Container>
              </Box>
              <hr color="#DFE0E5" />
              <Box
                textAlign="center"
                p="32px"
                mb={["80px", "80px", "80px", "0"]}
              >
                <RimbleLink as="a" color="#4F53DB" href="#top">
                  Back to top{" "}
                  <span role="img" aria-label="point up emoji">
                    👆
                  </span>
                </RimbleLink>
              </Box>
            </Box>
          </Route>
          <Route path="/RimbleCS">
            <RimbleCS />
          </Route>
          <Route path="/">
            <App />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/CodefiCS">
            <CodefiCS />
          </Route>
          <Route path="/BoxtCS">
            <BoxtCS />
          </Route>
        </Switch>
      </ScrollToTop>
    </Router>
  );
};

export default DeliverooCS;
