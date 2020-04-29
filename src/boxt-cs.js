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
import DeliverooCS from "./deliveroo-cs";
import Label from "./cs-components/label";
import Caption from "./cs-components/caption";
import Contact from "./contact";

const BoxtCS = () => {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route exact path="/BoxtCS">
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
                        to="/DeliverooCS"
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
                      to="/"
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
                <Image id="top" width="100%" src="/boxt-banner.png" />
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
                      to="/DeliverooCS"
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
                    to="/"
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
                    >
                      Next
                    </Button.Outline>
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
                      Using UX to shift more boilers for BOXT
                    </Heading>
                  </Flex>
                  <Flex justifyContent="center">
                    <Text
                      color="#475166"
                      fontSize={["24px", "40px"]}
                      mb={[5, 6]}
                    >
                      BOXT wanted to improve their online conversion to 2% of
                      site visitors with incremental improvements to the
                      purchase flow UX.
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
                  No one buys a boiler in the summer
                </Heading>
                <Text fontSize={["20px", "24px"]} color="text" mb={6}>
                  With summer fast approaching in their first year of
                  operations, boiler startup BOXT wanted to increase the
                  conversion rate of their website to see them through the
                  toastier summer months. My team undertook a project to make
                  incremental data-driven UX improvements to their sales funnel
                  to help make that happen.
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
                        Heuristic review and data dive
                      </Text>
                      <Text
                        fontSize={["20px", "24px"]}
                        mt="24px"
                        color="#1A2233"
                      >
                        I needed to understand where to make improvements so I
                        did a best practice review and dug into the data to see
                        where people were quitting the sales flow.
                      </Text>
                      <Box bg="#FBFBFC" mt="40px" p="24px">
                        <Image src="/cs-images/BOXT-data-pres.png" />
                        <Image mt="24px" src="/cs-images/BOXT-data-pres2.png" />
                      </Box>
                      <Caption>
                        Data-driven decisions we delivered back to stakeholders.
                      </Caption>
                      <Text fontSize={["20px", "24px"]} color="#1A2233">
                        Through this I identified two areas for improvement:
                      </Text>
                      <Text
                        fontSize={["20px", "24px"]}
                        mt="24px"
                        color="#1A2233"
                      >
                        <ul>
                          <li>
                            the homepage – how might we get more people entering
                            the sales funnel?
                          </li>
                          <li>
                            review order flow (after the user had selected a
                            boiler) – how might we minimise abandonment?
                          </li>
                        </ul>
                      </Text>
                      <Text
                        fontSize={["20px", "24px"]}
                        mt="24px"
                        color="#1A2233"
                      >
                        I took two slightly different approaches to exploring
                        these design problems.
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
                        Google experiments
                      </Text>
                      <Text
                        fontSize={["20px", "24px"]}
                        mt="24px"
                        color="#1A2233"
                      >
                        For the homepage we decided to take a more data-led
                        approach and conduct some testing. We brainstormed a
                        series of improvements based on our heuristic review and
                        impact mapped them to present a list of tasks to the
                        product owner. They could then make a call about whether
                        to tackle the meatier problems or the low hanging fruit.
                      </Text>
                      <Image
                        mt="40px"
                        src="/cs-images/boxt-impact-mapping.png"
                      />
                      <Caption>
                        All ideas were plotted on this matrix to identify low
                        hanging fruit.
                      </Caption>
                      <Text fontSize={["20px", "24px"]} color="#1A2233">
                        Next I worked with a data analyst to design some
                        experiments like copy changes and the addition of new
                        modules that we could set up using Google experiments.
                        This allows you to make small HTML changes to a page and
                        A/B or multivariate test with portions of your users.
                      </Text>
                      <Text
                        fontSize={["20px", "24px"]}
                        mt="40px"
                        color="#1A2233"
                      >
                        We used a hypothesis canvas to ensure that we could
                        identify stastical significance before making any
                        changes for good.
                      </Text>
                      <Box bg="#FBFBFC" mt="40px" p="24px">
                        <Image src="/cs-images/boxt-hypotheses-canvas.png" />
                      </Box>
                      <Caption>
                        This canvas helped us properly frame our experiments and
                        get buy in from stakeholders.
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
                        Prototyping and testing
                      </Text>
                      <Text
                        fontSize={["20px", "24px"]}
                        mt="24px"
                        color="#1A2233"
                      >
                        For the review order flow we wanted to make more
                        wholesale changes so I felt it would be better to carry
                        out a more thorough design exploration. Our main insight
                        we could derive from the data was that users were going
                        back in the flow (presumably to check previously entered
                        information). So I wanted to turn this 4 page flow (pick
                        a boiler, pick a date, enter your address, enter your
                        payment details) into a 1 page experience.
                      </Text>
                      <Text
                        fontSize={["20px", "24px"]}
                        mt="40px"
                        color="#1A2233"
                      >
                        I led a crazy 8s sketching session to come up with
                        initial ideas, then worked with the UI designer to turn
                        our idea into a clickable prototype. I then tested it
                        with a series of homeowners and landlords who own a
                        boiler.
                      </Text>
                      <Text
                        fontSize={["20px", "24px"]}
                        mt="40px"
                        color="#1A2233"
                      >
                        I used a highlighter test to help identify where the
                        content was filling users with confidence about their
                        purchase and where it was confusing them. And I also
                        pitted a more conversational style of content against a
                        more traditional read-only version of a form.
                      </Text>
                      <Box bg="#FBFBFC" mt="40px" p="24px">
                        <Image src="/cs-images/Boxt-highlighter-test.png" />
                      </Box>
                      <Caption>
                        The task I asked participants to complete. I used a
                        highlighter test to assess how well the content helped
                        push users through the flow. Green for helpful content,
                        red for anything that didn’t help or was confusing.
                      </Caption>
                      <Box bg="#FBFBFC" p="24px">
                        <Image src="/cs-images/Boxt-testing-findings.png" />
                      </Box>
                      <Caption>
                        Recommendations from testing delivered back to
                        stakeholders.
                      </Caption>
                      <Text fontSize={["20px", "24px"]} color="#1A2233">
                        In the end, the traditional read-only form won out as
                        the clearer option. Our one page design, created in 2017
                        is still live in some updated colors and with the
                        friendly addition of a Meet your installer step.
                      </Text>
                      <Box bg="#FBFBFC" mt="40px" p="24px">
                        <Image src="/cs-images/Boxt-present-day.png" />
                      </Box>
                      <Caption>
                        The all-in-one checkout experience we designed and
                        tested, 4 years later.
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
                      Conversion hits highs of over 2%{" "}
                      <span
                        role="img"
                        aria-label="chart with upwards trend emoji"
                      >
                        📈
                      </span>
                    </Text>
                    <Text fontSize={["20px", "24px"]} mt="64px" color="#1A2233">
                      These changes plus some other initiatives such as
                      revamping the product emails and introducing referral
                      programs led to a 2% increase in conversion from site
                      visitors. This project was a great experience in making
                      design decisions based on data and using experiments and
                      qualitative testing as part of the design process.
                    </Text>
                    <Image mt="64px" src="/cs-images/Boxt-too-good.png" />
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
          <Route path="/CodefiCS">
            <CodefiCS />
          </Route>
          <Route path="/DeliverooCS">
            <DeliverooCS />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </ScrollToTop>
    </Router>
  );
};

export default BoxtCS;
