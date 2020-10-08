import React from "react";
import "./App.css";
import { Box, Button, Flex, Text, Heading, Image } from "rimble-ui";
import { ArrowForward } from "@rimble/icons";
import Container from "./container";
import Container2 from "./container2";
import ProjectCard from "./project-card";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import RimbleCS from "./rimble-cs";
import CodefiCS from "./codefi-cs";
import DeliverooCS from "./deliveroo-cs";
import BoxtCS from "./boxt-cs";
import RimbleLink from "./RimbleLink";
import Contact from "./contact";

const App = () => {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route exact path="/">
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
                  flexDirection={["column", "row"]}
                  width="100%"
                  py={4}
                >
                  <Flex alignItems="center">
                    <Text ml={[0, 4]} mb={[2, 0]} color="text">
                      <span role="img" aria-label="wave emoji">
                        👋
                      </span>{" "}
                      <strong>Ryan Cordell</strong>, Lead Content Designer
                    </Text>
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
              </Box>
              <Container>
                <Box>
                  <Box pt={5}>
                    <Image mt={5} src="/portfolio-header-image.jpg" />
                    <Flex justifyContent="center">
                      <Heading
                        color="#1A2233"
                        as={"h1"}
                        fontSize={[6, 7]}
                        pt={[4, 5]}
                        pb={3}
                      >
                        Hi I’m Ryan, content designer and doer
                      </Heading>
                    </Flex>
                    <Flex justifyContent="center">
                      <Text color="#475166" fontSize={[4, 5]} pb={5}>
                        I use words to make sure experiences solve user needs.
                        I’m into complex problems, design systems and teaching
                        folks how to design better content.{" "}
                      </Text>
                    </Flex>
                    <Text color="#475166" fontSize={[2, 3]} pb={5}>
                    <b>Current:</b> Lead Content Designer, <RimbleLink
                    lineHeight={1}
                    as="a"
                    fontSize={[2, 3]}
                    fontWeight={3}
                    color="#4F53DB"
                    href="https://ethereum.org">ethereum.org↗</RimbleLink><br />
                    <b>Last:</b> Lead Content Strategist, <RimbleLink
                    lineHeight={1}
                    as="a"
                    fontSize={[2, 3]}
                    fontWeight={3}
                    color="#4F53DB"
                    href="https://community-development.makerdao.com">MakerDAO community development↗</RimbleLink>
                  </Text>
                  </Box>
                </Box>
              </Container>
              <hr color="#DFE0E5" />
              <Container>
                <Box>
                  <Heading as={"h2"} pt={5} pb={5} fontSize={["32px", "40px"]}>
                    Work
                  </Heading>
                </Box>
              </Container>
              <section>
                <Container2>
                  <ProjectCard
                    bottomPosition={[4, 0]}
                    imageSrc="/Rimble_card.png"
                    company="Rimble"
                    roles="Content strategy, product design"
                    description="Rimble is an open-source library of components, guides and templates for designers and FE developers in the Ethereum space."
                  >
                    <Text
                      mt="-24px"
                      fontSize={["18px", "16px"]}
                      pb={[3, "40px"]}
                    >
                      Responsible for content and UX on the team, I:
                      <ul>
                        <li>
                          improved documentation through testing and creating a
                          repeatable content structure
                        </li>
                        <li>
                          prototyped and tested solutions to blockchain UX
                          problems
                        </li>
                        <li>documented components and templates</li>
                        <li>wrote long-form guides</li>
                      </ul>
                    </Text>
                    <Link
                      style={{ color: "inherit", textDecoration: "inherit" }}
                      to="/RimbleCS"
                    >
                      <Button
                        size={["medium", "large"]}
                        borderRadius="16px"
                        mb={3}
                        mr={3}
                        mainColor="#1A2233"
                      >
                        Read case study
                      </Button>
                    </Link>
                    <Button.Outline
                      size={["medium", "large"]}
                      as="a"
                      href="https://rimble.consensys.design"
                      mainColor="text"
                      borderRadius="16px"
                      border={1}
                      borderWidth="2px"
                      borderColor="#9498F7"
                    >
                      Check out Rimble↗
                    </Button.Outline>
                  </ProjectCard>
                  <ProjectCard
                    topPosition={["0", "-32rem"]}
                    bottomPosition={[4, 0]}
                    imageSrc="/Codefi-card.png"
                    company="Codefi"
                    roles="Design systems, service design"
                    description="ConsenSys Codefi is a suite of decentralized finance products with varying origin stories and identities. We started the design system team to help consolidate the look and feel of these products and make design and development more efficient to help products get to market sooner."
                    extendedDescription="Working closely with other designers in the organisation, I designed and documented design tokens, components and patterns for Codefi products to use. I also worked closely with stakeholders to:"
                  >
                    <Text
                      mt="-24px"
                      fontSize={["18px", "16px"]}
                      pb={[3, "40px"]}
                    >
                      <ul>
                        <li>get buy-in for the design system </li>
                        <li>design our team’s processes and workflows</li>
                      </ul>
                    </Text>
                    <Link
                      style={{ color: "inherit", textDecoration: "inherit" }}
                      to="/CodefiCS"
                    >
                      <Button
                        size={["medium", "large"]}
                        borderRadius="16px"
                        mb={3}
                        mr={3}
                        mainColor="#1A2233"
                      >
                        Read case study{" "}
                      </Button>
                    </Link>
                  </ProjectCard>
                  <ProjectCard
                    topPosition={["0", "-32rem"]}
                    bottomPosition={[4, 0]}
                    imageSrc="/Deliveroo-card.png"
                    company="Deliveroo"
                    roles="Content design, UX"
                    description="Deliveroo is a food delivery product that lets you deliver your favourite restaurant’s food to your door. I led content design on the restaurants team, the folks responsible for building products for the restaurant managers."
                    extendedDescription="We were tasked with creating a tool that allowed restaurants to manage their own menu content. After countless iterations, some intense design collaboration and some vital research in our European markets, we built a highly flexible product that saved restaurants time and Deliveroo millions of pounds in outsourced menu creation/editing."
                  >
                    <Link
                      style={{ color: "inherit", textDecoration: "inherit" }}
                      to="/DeliverooCS"
                    >
                      <Button
                        size={["medium", "large"]}
                        borderRadius="16px"
                        mb={3}
                        mr={3}
                        mainColor="#1A2233"
                      >
                        Read case study{" "}
                      </Button>
                    </Link>
                  </ProjectCard>
                  <ProjectCard
                    topPosition={["0", "-32rem"]}
                    bottomPosition={[4, "-32rem"]}
                    imageSrc="/BOXT-card.png"
                    company="BOXT"
                    roles="Content design, UX"
                    description="BOXT is a boiler delivery and installation startup that has seriously shaken up the heating industry in the UK. After the agency I worked for at the time had built their MVP, I joined the team to supercharge their sales funnel with some UX and content design improvements. "
                    extendedDescription="Working closely with UI designers and developers, I identified, tested and built several improvements to key parts of the buying flow. This increased their sales even with summer fast approaching, a usually quiet time in this particular market."
                  >
                    <Link
                      style={{ color: "inherit", textDecoration: "inherit" }}
                      to="/BoxtCS"
                    >
                      <Button
                        size={["medium", "large"]}
                        borderRadius="16px"
                        mb={3}
                        mr={3}
                        mainColor="#1A2233"
                      >
                        Read case study
                      </Button>
                    </Link>
                  </ProjectCard>
                </Container2>
              </section>
              <hr color="#DFE0E5" />
              <Container>
                <Box pl={["0", "56px"]}>
                  <Heading as={"h2"} pt={5} pb={5} fontSize={["32px", "40px"]}>
                    Interests
                  </Heading>
                </Box>
                <Box>
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
                        Content-first design
                      </Text>
                      <Text fontSize={3}>
                        Designing for the content your user needs rather than
                        fitting content into a pre-determined design.
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex alignContent="center">
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
                        Design systems
                      </Text>
                      <Text fontSize={3}>
                        Systemising content design decisions but also the entire
                        notion of making designers think less about stuff that’s
                        already been solved and more about what’s new to solve
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
                        Blockchain UX problems
                      </Text>
                      <Text fontSize={3}>
                        Continuing to push blockchain product usability as far
                        as the tech will allow us.
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
                        Design education
                      </Text>
                      <Text fontSize={3}>
                        Fighting the good fight and making sure folks understand
                        the value in content design and design in general –
                        especially interesting in the engineer-dominated
                        blockchain space.
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex pb={5}>
                    <ArrowForward color="#777C8C" size="40px" mr={3} />
                    <Flex justifyContent="center" flexDirection="column">
                      <Text
                        lineHeight={1}
                        fontSize={["32px", "40px"]}
                        color="#1A2233"
                        mb={2}
                      >
                        Open source
                      </Text>
                      <Text fontSize={3}>
                        Sharing learnings and giving each other a helping hand.
                      </Text>
                    </Flex>
                  </Flex>
                </Box>
              </Container>
              <hr color="#DFE0E5" />
              <Container>
                <Box pl={["0", "56px"]}>
                  <Heading as={"h2"} pt={5} pb={3} fontSize={["32px", "40px"]}>
                    Speaking and writing
                  </Heading>
                  <Text fontSize={4} pb={5}>
                    I speak and write as part of my commitment to educating the
                    industry on content design and blockchain UX
                  </Text>
                  <Heading as={"h3"} pb={5} fontSize={5}>
                    Speaking
                  </Heading>
                </Box>
                <Box pb={5}>
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
                    Introducing the ethereum.org developer portal
                  </Text>
                  <Text fontSize={3} mb={3}>
                    ETHOnline, 2020
                  </Text>
                  <Flex>
                    <RimbleLink
                      lineHeight={1}
                      as="a"
                      fontSize="16px"
                      fontWeight={2}
                      color="#4F53DB"
                      href="https://www.youtube.com/watch?v=CvRjBbsPpUY"
                      target="_blank"
                      mb={2}
                    >
                      Video↗
                    </RimbleLink>
                  </Flex>
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
                        Design better dApps with conversation
                      </Text>
                      <Text fontSize={3} mb={3}>
                        Devcon V, Osaka, 2019
                      </Text>
                      <Flex>
                        <RimbleLink
                          lineHeight={1}
                          as="a"
                          fontSize="16px"
                          fontWeight={2}
                          mr={4}
                          color="#4F53DB"
                          href="https://www.figma.com/proto/3Ke9nkwhyYbBxHfkin5iT0/Devcon-V-Conversational-design-workshop?node-id=17%3A0&viewport=281%2C212%2C0.05299120396375656&scaling=min-zoom"
                          target="_blank"
                          mb={2}
                        >
                          Figma deck↗
                        </RimbleLink>
                        <RimbleLink
                          lineHeight={1}
                          as="a"
                          fontSize="16px"
                          fontWeight={2}
                          color="#4F53DB"
                          href="https://www.youtube.com/watch?v=dXrPDSoQ8TQ"
                          target="_blank"
                          mb={2}
                        >
                          Video↗
                        </RimbleLink>
                      </Flex>
                    </Flex>
                  </Flex>
                  <Flex alignContent="center">
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
                        The state of transaction states
                      </Text>
                      <Text fontSize={3} mb={3}>
                        Devcon V, Osaka, 2019
                      </Text>
                      <Flex>
                        <RimbleLink
                          lineHeight={1}
                          fontSize="16px"
                          fontWeight={2}
                          as="a"
                          color="#4F53DB"
                          href="https://www.figma.com/proto/dk6DlwfvXW4svJXPoH7m6e/Devcon-V-The-state-of-transaction-states?node-id=351%3A1&viewport=-23%2C418%2C0.015625&scaling=min-zoom"
                          target="_blank"
                          mb={2}
                          mr={4}
                        >
                          Figma deck↗
                        </RimbleLink>
                        <RimbleLink
                          lineHeight={1}
                          fontSize="16px"
                          fontWeight={2}
                          as="a"
                          color="#4F53DB"
                          href="https://www.youtube.com/watch?v=ZDaTl8PI7CQ"
                          target="_blank"
                          mb={2}
                        >
                          Video↗
                        </RimbleLink>
                      </Flex>
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
                        Design and Defi panel
                      </Text>
                      <Text fontSize={3}>
                        Decentralized Design, London, 2019
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
                        Conversational design
                      </Text>
                      <Text fontSize={3}>Content Deli, London, 2018</Text>
                    </Flex>
                  </Flex>
                  <Flex pb={5}>
                    <ArrowForward color="#777C8C" size="40px" mr={3} />
                    <Flex justifyContent="center" flexDirection="column">
                      <Text
                        lineHeight={1}
                        fontSize={["32px", "40px"]}
                        color="#1A2233"
                        mb={2}
                      >
                        What is Content Design?
                      </Text>
                      <Text fontSize={3} mb={3}>
                        MCE conference, Warsaw, 2018
                      </Text>
                      <RimbleLink
                        lineHeight={1}
                        fontSize="16px"
                        fontWeight={2}
                        color="#4F53DB"
                        as="a"
                        href="https://www.youtube.com/watch?v=mfibksrWu_U"
                        target="_blank"
                        mb={2}
                      >
                        Video↗
                      </RimbleLink>
                    </Flex>
                  </Flex>
                </Box>
                <Box pl={["0", "56px"]}>
                  <Heading as={"h3"} pb={5} fontSize={5}>
                    Writing
                  </Heading>
                  <Heading
                    as={"h4"}
                    color="#475166"
                    fontWeight={2}
                    pb={5}
                    fontSize={5}
                  >
                    Blockchain
                  </Heading>
                </Box>
                <Box>
                  <Flex>
                    <ArrowForward color="#777C8C" size="40px" mr={3} />
                    <Flex
                      justifyContent="center"
                      flexDirection="column"
                      pb="40px"
                    >
                      <RimbleLink
                        lineHeight={1}
                        fontSize={["32px", "40px"]}
                        fontWeight={2}
                        color="#4F53DB"
                        href="https://kauri.io/writing-for-blockchain-wallet-signature-request-me/e46374ec0fbd4403ae9ea351580caa4d/a"
                        target="_blank"
                        as="a"
                        mb={2}
                      >
                        Writing wallet signature requests↗
                      </RimbleLink>
                    </Flex>
                  </Flex>
                  <Flex alignContent="center">
                    <ArrowForward color="#777C8C" size="40px" mr={3} />
                    <Flex
                      justifyContent="center"
                      flexDirection="column"
                      pb="40px"
                    >
                      <RimbleLink
                        lineHeight={1}
                        fontSize={["32px", "40px"]}
                        fontWeight={2}
                        color="#4F53DB"
                        href="https://media.consensys.net/what-ethereum-should-learn-from-libra-a-content-perspective-63428ab5ccef"
                        target="_blank"
                        as="a"
                        mb={2}
                        pb={5}
                      >
                        What Ethereum Should Learn from Libra: A Content
                        Perspective↗
                      </RimbleLink>
                    </Flex>
                  </Flex>
                </Box>
                <Box pl={["0", "56px"]}>
                  <Heading
                    as={"h4"}
                    color="#475166"
                    fontWeight={2}
                    pb={5}
                    fontSize={5}
                  >
                    Content design
                  </Heading>
                </Box>
                <Box>
                  <Flex>
                    <ArrowForward color="#777C8C" size="40px" mr={3} />
                    <Flex
                      justifyContent="center"
                      flexDirection="column"
                      pb="40px"
                    >
                      <RimbleLink
                        lineHeight={1}
                        fontSize={["32px", "40px"]}
                        fontWeight={2}
                        color="#4F53DB"
                        href="https://medium.com/deliveroo-design/content-design-systems-need-you-82836afb4fe6?source=---------6-----------------"
                        as="a"
                        target="_blank"
                        mb={2}
                      >
                        Content, design systems need you!↗
                      </RimbleLink>
                    </Flex>
                  </Flex>
                  <Flex alignContent="center">
                    <ArrowForward color="#777C8C" size="40px" mr={3} />
                    <Flex
                      justifyContent="center"
                      flexDirection="column"
                      pb="40px"
                    >
                      <RimbleLink
                        lineHeight={1}
                        fontSize={["32px", "40px"]}
                        fontWeight={2}
                        color="#4F53DB"
                        href="https://medium.com/figma-design/how-to-do-content-design-ux-writing-in-figma-d0e0ee77661e?source=---------7------------------"
                        as="a"
                        target="_blank"
                        mb={2}
                      >
                        How to do content design / UX writing in Figma↗
                      </RimbleLink>
                    </Flex>
                  </Flex>
                  <Flex alignContent="center">
                    <ArrowForward color="#777C8C" size="40px" mr={3} />
                    <Flex
                      justifyContent="center"
                      flexDirection="column"
                      pb="40px"
                    >
                      <RimbleLink
                        lineHeight={1}
                        fontSize={["32px", "40px"]}
                        fontWeight={2}
                        color="#4F53DB"
                        href="https://medium.com/deliveroo-design/4-reasons-we-love-figma-at-deliveroo-7a6db84b5239?source=---------8------------------"
                        target="_blank"
                        as="a"
                        mb={2}
                      >
                        4 reasons we love Figma at Deliveroo↗
                      </RimbleLink>
                    </Flex>
                  </Flex>
                  <Flex alignContent="center">
                    <ArrowForward color="#777C8C" size="40px" mr={3} />
                    <Flex
                      justifyContent="center"
                      flexDirection="column"
                      pb="40px"
                    >
                      <RimbleLink
                        lineHeight={1}
                        fontSize={["32px", "40px"]}
                        fontWeight={2}
                        color="#4F53DB"
                        href="https://uxdesign.cc/3-communication-theories-that-will-help-you-write-better-microcopy-and-make-better-products-4df25571ca6f?source=---------9------------------"
                        target="_blank"
                        as="a"
                        mb={2}
                      >
                        3 communication theories that will help you write better
                        microcopy (and make better products)↗
                      </RimbleLink>
                    </Flex>
                  </Flex>
                  <Flex alignContent="center">
                    <ArrowForward color="#777C8C" size="40px" mr={3} />
                    <Flex
                      justifyContent="center"
                      flexDirection="column"
                      pb="40px"
                    >
                      <RimbleLink
                        lineHeight={1}
                        fontSize={["32px", "40px"]}
                        fontWeight={2}
                        color="#4F53DB"
                        href="https://medium.com/swlh/my-6-point-microcopy-checklist-for-non-ux-writers-634eb52b29c9?source=---------11------------------"
                        target="_blank"
                        as="a"
                        mb={2}
                      >
                        My 6-point microcopy checklist for non-UX writers↗
                      </RimbleLink>
                    </Flex>
                  </Flex>
                  <Flex alignContent="center">
                    <ArrowForward color="#777C8C" size="40px" mr={3} />
                    <Flex
                      justifyContent="center"
                      flexDirection="column"
                      pb="40px"
                    >
                      <RimbleLink
                        lineHeight={1}
                        fontSize={["32px", "40px"]}
                        fontWeight={2}
                        color="#4F53DB"
                        href="https://uxplanet.org/ux-writing-and-the-customer-experience-wont-somebody-please-think-of-the-words-f7cdefa3793a?source=---------12------------------"
                        target="_blank"
                        as="a"
                        mb={2}
                        pb={5}
                      >
                        UX writing and the customer experience: won’t somebody
                        please think of the words?↗
                      </RimbleLink>
                    </Flex>
                  </Flex>
                </Box>
              </Container>
              <hr color="#DFE0E5" />
              <Container>
                <Box pl={["0", "56px"]}>
                  <Heading as={"h2"} pt={5} pb={3} fontSize={["32px", "40px"]}>
                    Tools
                  </Heading>
                  <Text fontSize={4} pb={5}>
                    I’ve found in my work as a content designer that I’ve had to
                    get comfortable or even proficient in software that my
                    design and engineering teammates use.
                  </Text>
                </Box>
                <Box>
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
                        Pen and paper
                      </Text>
                      <Text fontSize={3}>
                        For sketching designs. However in remote roles, I’ve
                        tended to quickly mock things up in Figma or Whimsical.
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex alignContent="center">
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
                        Figma
                      </Text>
                      <Text fontSize={3}>
                        For collaborating with designers, prototyping and
                        getting engineering feedback on early-stage designs.
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
                        GitHub
                      </Text>
                      <Text fontSize={3}>
                        I use Github when on projects where I need to
                        collaborate very closely with engineers. I prefer to
                        create my own PRs to iterate on content directly in the
                        product.
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
                        Whimsical
                      </Text>
                      <Text fontSize={3}>
                        For mapping out high level user flows.
                      </Text>
                    </Flex>
                  </Flex>
                  <Flex pb={5}>
                    <ArrowForward color="#777C8C" size="40px" mr={3} />
                    <Flex justifyContent="center" flexDirection="column">
                      <Text
                        lineHeight={1}
                        fontSize={["32px", "40px"]}
                        color="#1A2233"
                        mb={2}
                      >
                        Mural
                      </Text>
                      <Text fontSize={3}>
                        For remote workshops and collaboration between
                        non-designers.
                      </Text>
                    </Flex>
                  </Flex>
                </Box>
              </Container>

              <Box px={0} bg="#FBFBFC">
                <Container>
                  <Box pl={["0", "56px"]}>
                    <Heading
                      as={"h2"}
                      pt={5}
                      pb={3}
                      fontSize={["32px", "40px"]}
                    >
                      Get in touch
                    </Heading>
                    <Text fontSize={4} pb={5}>
                      If you have a role in mind, reach out and we can chat
                      content design until we’re blue in the face*.
                    </Text>
                  </Box>
                  <Box pb={2}>
                    <Flex>
                      <ArrowForward color="#777C8C" size="40px" mr={3} />
                      <Flex
                        justifyContent="center"
                        flexDirection="column"
                        pb="40px"
                      >
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
                      <ArrowForward color="#777C8C" size="40px" mr={3} />
                      <Flex
                        justifyContent="center"
                        flexDirection="column"
                        pb="40px"
                      >
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
                      <ArrowForward color="#777C8C" size="40px" mr={3} />
                      <Flex
                        justifyContent="center"
                        flexDirection="column"
                        pb="40px"
                      >
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
                    <Text>
                      *Other topics I’d be willing to talk about until we’re
                      blue in the face: Waynes World, Philadelphia Eagles,
                      Weezer’s Blue album, Tottenham Hotspur...{" "}
                    </Text>
                  </Box>
                </Container>
              </Box>
            </Box>
          </Route>
          <Route path="/RimbleCS">
            <RimbleCS />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/CodefiCS">
            <CodefiCS />
          </Route>
          <Route path="/DeliverooCS">
            <DeliverooCS />
          </Route>
          <Route path="/BoxtCS">
            <BoxtCS />
          </Route>
        </Switch>
      </ScrollToTop>
    </Router>
  );
};

export default App;
