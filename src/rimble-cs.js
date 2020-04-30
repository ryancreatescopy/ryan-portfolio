import React from "react";
import { Box, Button, Flex, Text, Heading, Image } from "rimble-ui";
import { ArrowForward } from "@rimble/icons";
import Container from "./container";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import RimbleLink from "./RimbleLink";
import App from "./App";
import CodefiCS from "./codefi-cs";
import DeliverooCS from "./deliveroo-cs";
import BoxtCS from "./boxt-cs";
import Label from "./cs-components/label";
import Caption from "./cs-components/caption";
import Images from "./cs-components/images";
import Contact from "./contact";

const RimbleCS = () => {
  return (
    <Router>
      <ScrollToTop>
        <Switch>
          <Route exact path="/RimbleCS">
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
                          Previous
                        </Button.Outline>
                      </Link>
                    </Flex>
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
                        Next
                      </Button.Outline>
                    </Link>
                  </Flex>
                </Box>
              </Box>
              <Box pt="80px">
                <Image id="top" width="100%" src="/rimble-header-cs.png" />
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
                      to="/"
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
                    to="/CodefiCS"
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
                <Box mb={[5, "128px"]}>
                  <Flex justifyContent="center">
                    <Heading
                      color="#1A2233"
                      as={"h1"}
                      fontSize={[5, 7]}
                      mt={[4, 5]}
                      mb={["32px", "40px"]}
                    >
                      Making good blockchain UX easier with Rimble
                    </Heading>
                  </Flex>
                  <Flex justifyContent="center">
                    <Text
                      color="#475166"
                      fontSize={["24px", "40px"]}
                      mb={[4, 5]}
                    >
                      The Ethereum ecosystem is thriving. 2 million smart
                      contracts were deployed on Ethereum this March during a
                      global crisis (Source: Dune analytics). But anyone in the
                      space knows that usability and design often comes second
                      (or not at all).{" "}
                    </Text>
                  </Flex>
                  <Text
                    color="text"
                    fontSize={["20px", "24px"]}
                    mb={["32px", "40px"]}
                  >
                    Rimble was created to address the lack of designers and
                    design skills in the space, by giving builders accessible
                    and beautifully designed components suitable for building
                    blockchain applications.{" "}
                  </Text>
                  <Text color="text" fontSize={["20px", "24px"]}>
                    But when I joined, Rimble was just a v.0.something with a
                    small list of components readily available on Bootstrap or
                    Material design, so we had our work cut out...
                  </Text>
                  <Image
                    mt={["40px", "64px"]}
                    src="/cs-images/old-rimble.png"
                  />
                </Box>
                <Label color="#9498F7" label="PROBLEM" />
                <Heading
                  as={"h4"}
                  fontWeight={3}
                  fontSize={["32px", "40px"]}
                  mb={[2, 3]}
                  mt={5}
                >
                  Limited documentation
                </Heading>
                <Text fontSize={["20px", "24px"]} color="text" mb={6}>
                  Even with the best components in the world, there are still
                  plenty of design mistakes you can make that are easily
                  avoidable. I wanted to make sure that anyone using our
                  components had design guidance immediately at hand, so we
                  could help our user understand how and when to use a
                  component.
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
                        Get a sense of where we’re at
                      </Text>
                      <Text
                        fontSize={["20px", "24px"]}
                        mt="24px"
                        color="#1A2233"
                      >
                        First things first, I arranged some interviews with some
                        developers and designer/ developers working at
                        ConsenSys. I wanted to hear what they look for in
                        component documentation and get a sense of how they
                        rated our current Storybook offering, which was very
                        MVP. From this we got some great feedback about features
                        that we were missing, like being able to play with the
                        code examples within the documentation.
                      </Text>
                      <Text
                        fontSize={["20px", "24px"]}
                        mt="40px"
                        color="#1A2233"
                      >
                        To make the most of our sessions, I also prototyped some
                        new documentation with additional content types such as
                        design and content guidance and ran a highlighter test.
                        Immediately I could tell that this type of content was
                        really wanted and I fed that into the documentation
                        templates I created as part of my docs content strategy.
                      </Text>
                      <Box bg="#FBFBFC" p="24px">
                        <Images
                          src="/cs-images/proto-documentation.png"
                          src2="/cs-images/highlighter-test.png"
                        />
                      </Box>
                      <Caption>
                        A highlighter test is a way to gauge the success of your
                        content. Ask participants to highlight content that
                        supports their goals in green, content that’s confusing
                        or unnecessary in red and stuff you want to know more
                        about in orange.
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
                        Align the team on a docs content strategy
                      </Text>
                      <Text
                        fontSize={["20px", "24px"]}
                        mt="24px"
                        color="#1A2233"
                      >
                        Due to our remote structure the whole team couldn’t be
                        present for that round of discovery interviews, so I
                        wrote up my findings in the form of a proposed
                        documentation framework. I hoped this would help create
                        a consistent template for our documentation moving
                        forward. We ran through the framework as a team and
                        iterated on a final version together.
                      </Text>
                      <Box bg="#FBFBFC" p="24px">
                        <Images
                          src="/cs-images/docs-framework.png"
                          src2="/cs-images/docs-framework2.png"
                        />
                      </Box>
                      <Caption>
                        Documentation framework including best practice
                        examples, meeting notes and feedback from usability
                        testing to prompt team discussion.
                      </Caption>
                      <Box bg="#FBFBFC" p="24px">
                        <Images
                          src="/cs-images/docs-template.png"
                          src2="/cs-images/docs-template2.png"
                        />
                      </Box>
                      <Caption>
                        A template for authoring Rimble documentation. Includes
                        what sections you need and guidance for how to write the
                        content.
                      </Caption>
                      <Text
                        fontSize={["20px", "24px"]}
                        mt="40px"
                        color="#1A2233"
                      >
                        We all agreed that this was the sort of documentation
                        that our users really wanted but Storybook, where our
                        docs were currently hosted, wasn’t really fexible enough
                        to add all this rich new content. Knowing that this
                        documentation would have to be close by in order for it
                        to be read, we embarked on a process of migrating our
                        docs over to a Gatsby MDX solution to give us greater
                        flexibility in documentation.
                      </Text>
                      <Text
                        fontSize={["20px", "24px"]}
                        mt="40px"
                        color="#1A2233"
                      >
                        It was really encouraging that we were making
                        design/technical decisions based on content and user
                        needs and not compromising on content for an existing
                        technical solution.
                      </Text>
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
                      Better documentation, better docs site{" "}
                      <span role="img" aria-label="documents emoji">
                        📑
                      </span>
                    </Text>
                    <Text fontSize={["20px", "24px"]} mt="64px" color="#1A2233">
                      Our new docs site allowed authors to combine Markdown and
                      React so you could provide guidance in context with the
                      component you were showing. I could now bring our docs
                      strategy to life by creating documentation complete with
                      usage guidelines, design guidance and more.
                    </Text>
                    <Text fontSize={["20px", "24px"]} mt="40px" color="#1A2233">
                      This was a much more flexible playground where we could
                      make continous improvements to our documentation product.
                      Some of those include:
                    </Text>
                    <Text fontSize={["20px", "24px"]} mt="40px" color="#1A2233">
                      <ul>
                        <li>
                          the additon of do/don’t card to make our advice more
                          tangible
                        </li>
                        <li>
                          introduction of docs search and improvements to the
                          navigation
                        </li>
                        <li>
                          introducing documentation of other things like
                          templates and guides.
                        </li>
                      </ul>
                    </Text>
                    <Image
                      mt="40px"
                      src="/cs-images/Rimble-components-page.png"
                    />
                    <Image
                      mt="40px"
                      src="/cs-images/Rimble-component-page.png"
                    />
                  </Box>
                </Container>
              </Box>
              <Container>
                <Box mt="128px">
                  <Label color="#9498F7" label="PROBLEM" />
                  <Heading
                    as={"h4"}
                    fontWeight={3}
                    fontSize={["32px", "40px"]}
                    mb={3}
                    mt={5}
                  >
                    Limited offering
                  </Heading>
                  <Text fontSize={["20px", "24px"]} color="text" mb={6}>
                    Components are only the building blocks of your product and
                    although our components went a long way in improving the
                    visual output of our user’s products, we weren’t solving the
                    real design challenges presented by blockchain. We weren’t
                    helping devepers help their users connect their wallets or
                    monitor their transactions. This is the sort of advice that
                    a developer couldn’t google, yet...
                  </Text>
                  <Label color="#FA9476" label="WHAT WE DID" />
                  <Box mt={5} ml={["0", "-56px"]}>
                    <Flex>
                      <ArrowForward color="#777C8C" size="40px" mr={3} />
                      <Flex justifyContent="center" flexDirection="column">
                        <Text
                          lineHeight={1}
                          fontSize={["32px", "40px"]}
                          color="#1A2233"
                          mb={2}
                        >
                          Overcome stasis
                        </Text>
                        <Text
                          fontSize={["20px", "24px"]}
                          mt="24px"
                          color="#1A2233"
                        >
                          We didn’t move quickly enough on this venture because
                          of a few problems:
                          <ul>
                            <li>
                              we were in the business of components and a lot of
                              these problems required backends or logic
                            </li>
                            <li>
                              our designs couldn’t be too opinionated or we risk
                              alienating developers that favour certain
                              tools/frameworks
                            </li>
                          </ul>
                        </Text>
                        <Text
                          fontSize={["20px", "24px"]}
                          mt="40px"
                          color="#1A2233"
                        >
                          But I we looked back at our mission:{" "}
                          <strong>
                            to help users build blockchain products with better
                            UX
                          </strong>
                          , I realised we could help without building
                          components.
                        </Text>
                        <Text
                          fontSize={["20px", "24px"]}
                          mt="40px"
                          color="#1A2233"
                        >
                          We could design, test and build open-source demos that
                          reflect our research-led advice. And to top it all
                          off, I could write up a handy guide to walk developers
                          through our thinking so they could extend it further
                          for their use cases.
                        </Text>
                      </Flex>
                    </Flex>
                  </Box>
                  <Box mt={5} ml={["0", "-56px"]}>
                    <Flex>
                      <ArrowForward color="#777C8C" size="40px" mr={3} />
                      <Flex justifyContent="center" flexDirection="column">
                        <Text
                          lineHeight={1}
                          fontSize={["32px", "40px"]}
                          color="#1A2233"
                          mb={2}
                        >
                          Design, test, learn share
                        </Text>
                        <Text
                          fontSize={["20px", "24px"]}
                          mt="24px"
                          color="#1A2233"
                        >
                          Wallet connection was an interaction that any
                          decentralized application would have to design for.
                        </Text>
                        <Text
                          fontSize={["20px", "24px"]}
                          mt="40px"
                          color="#1A2233"
                        >
                          Our users are building all kinds of different apps
                          with different use-cases, so we needed to really focus
                          on the fundamentals. So I set out to find out the
                          general do’s and don’ts that any application should
                          follow, whatever the use case.
                        </Text>
                        <Text
                          fontSize={["20px", "24px"]}
                          mt="40px"
                          color="#1A2233"
                        >
                          Starting with user flows, I soon realised that wallet
                          connection overlaps significantly with interactions
                          concerning your network and your balance. For example
                          a good connection flow should check if you’re on the
                          correct network. And if you’re being prompted to
                          connect because you’re trying to start a transaction,
                          you should also be warned about not having enough
                          Ether (ETH).
                        </Text>
                        <Image
                          mt="40px"
                          src="/cs-images/connection-user-flow.png"
                        />
                        <Caption>
                          A user flow exploring the permutations of connecting a
                          wallet to a decentralized applications
                        </Caption>
                        <Text
                          fontSize={["20px", "24px"]}
                          mt="40px"
                          color="#1A2233"
                        >
                          I designed the content and the flow and prototyped the
                          whole thing in Figma.
                        </Text>
                        <Image
                          mt="40px"
                          src="/cs-images/connection-figma-prototype.png"
                        />
                        <Caption>
                          Figma “prototype spaghetti” for one of the many
                          iterations of the wallet connection prototype we
                          tested.
                        </Caption>
                        <Images
                          src="/cs-images/prototype-verify-screen.png"
                          src2="/cs-images/prototype-install-mm.png"
                        />
                        <Caption>
                          Screens to help users with the connection process.
                          Left: helping users know what a signature request is.
                          Right: letting users know how to enable Web3 in their
                          browser using MetaMask.
                        </Caption>
                        <Text
                          fontSize={["20px", "24px"]}
                          mt="40px"
                          color="#1A2233"
                        >
                          I put it in front of users with the help of our design
                          research team and got a lot of really helpful data.
                          All the learnings went into our guide on connecting to
                          a wallet and connection demo.
                        </Text>
                        <RimbleLink
                          fontSize={["20px", "24px"]}
                          fontWeight={2}
                          color="#4F53DB"
                          mt="32px"
                          href="https://rimble.consensys.design/guides/ux/connect-a-wallet-conditions"
                        >
                          Connecting a wallet guide↗
                        </RimbleLink>
                        <RimbleLink
                          fontSize={["20px", "24px"]}
                          fontWeight={2}
                          color="#4F53DB"
                          mt="32px"
                          href="https://rimble-app-demo.netlify.com/"
                        >
                          Connecting a wallet demo↗
                        </RimbleLink>
                        <Text
                          fontSize={["20px", "24px"]}
                          mt="40px"
                          color="#1A2233"
                        >
                          Another interaction common to nearly every
                          decentralized application is monitoring a transaction,
                          so I followed the exact same process of designing,
                          prototyping and testing. Out of that came a
                          transaction states guide, a demo and a talk at Devcon
                          V.
                        </Text>
                        <RimbleLink
                          fontSize={["20px", "24px"]}
                          fontWeight={2}
                          color="#4F53DB"
                          mt="32px"
                          href="https://rimble.consensys.design/guides/ux/transaction-states"
                        >
                          Transaction states guide↗
                        </RimbleLink>
                        <RimbleLink
                          fontSize={["20px", "24px"]}
                          fontWeight={2}
                          color="#4F53DB"
                          mt="32px"
                          href="https://rimble-devcon-demo.netlify.app/"
                        >
                          Transaction states demo↗
                        </RimbleLink>
                        <RimbleLink
                          fontSize={["20px", "24px"]}
                          fontWeight={2}
                          color="#4F53DB"
                          mt="32px"
                          href="https://www.figma.com/proto/dk6DlwfvXW4svJXPoH7m6e/Devcon-V-The-state-of-transaction-states?node-id=351%3A1&viewport=-23%2C418%2C0.015625&scaling=min-zoom"
                        >
                          Transaction states talk↗
                        </RimbleLink>
                        <Image
                          mt="40px"
                          src="/cs-images/transaction-prototype.png"
                        />
                        <Caption>
                          A huge prototype for testing designs that communicate
                          transaction events to a user.
                        </Caption>
                        <Images
                          src="/cs-images/tx-prototype-confirm.png"
                          src2="/cs-images/tx-prototype-progress.png"
                        />
                        <Images
                          src="/cs-images/tx-prototype-progress2.png"
                          src2="/cs-images/tx-prototype-success.png"
                        />
                        <Caption>
                          I designed a demo based on the user testing to show
                          how to communicate the different states of a
                          transaction. Top left: Confirmation, Top right/Bottom
                          left: In progress, Bottom right: success!
                        </Caption>
                        <Image src="/cs-images/tx-prototype-guide.png" />
                        <Caption>
                          The guide I wrote based on the design, testing and
                          demoing
                        </Caption>
                      </Flex>
                    </Flex>
                    <Flex>
                      <ArrowForward color="#777C8C" size="40px" mr={3} />
                      <Flex justifyContent="center" flexDirection="column">
                        <Text
                          lineHeight={1}
                          fontSize={["32px", "40px"]}
                          color="#1A2233"
                          mb={2}
                        >
                          Improve developer experience
                        </Text>
                        <Text
                          fontSize={["20px", "24px"]}
                          mt="24px"
                          color="#1A2233"
                        >
                          Although our guides gave our users plenty of insights
                          into designing for these interactions, we knew we
                          could help them further.
                        </Text>
                        <Text
                          fontSize={["20px", "24px"]}
                          mt="40px"
                          color="#1A2233"
                        >
                          Based on data from our dev interviews, I knew that a
                          lot of developer’s preferred methods of consuming
                          documentation is by playing with the code. Rimble
                          templates were born out of this need to make our
                          guides more interactive. Our users had spoken about
                          wanting ready-made templates that they could tweak and
                          customise – a lot of them were backend devs forced
                          into doing front end.
                        </Text>
                        <Text
                          fontSize={["20px", "24px"]}
                          mt="40px"
                          color="#1A2233"
                        >
                          So I set out on building ready-made templates for the
                          screens and interactions described in our guides,
                          accompanied with design rationale and other guidance.
                          Users could edit the code within our docs to play with
                          the layout and content, but they got good/tested
                          defaults if they didn’t want to change anything.
                        </Text>
                        <Text
                          fontSize={["20px", "24px"]}
                          mt="40px"
                          color="#1A2233"
                        >
                          Now our design and research was directly contributing
                          to component design, guide writing, and demo and
                          template creation.
                        </Text>
                        <Images
                          src="/cs-images/tx-progress-bar.png"
                          src2="/cs-images/tx-progress-bar-anatomy.png"
                        />
                        <Caption>
                          A template for a transaction progress banner.
                          Developers can grab the code and see the anatomy of
                          the template’s design decisions.
                        </Caption>
                        <Images
                          src="/cs-images/tx-summary-modal.png"
                          src2="/cs-images/tx-summary-modal-anatomy.png"
                        />
                        <Caption>
                          A template for a transaction summary modal. Developers
                          can grab the code and see the anatomy of the
                          template’s design decisions.
                        </Caption>
                      </Flex>
                    </Flex>
                  </Box>
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
                      One-stop design shop for Ethereum{" "}
                      <span role="img" aria-label="convenience store emoji">
                        🏪
                      </span>
                    </Text>
                    <Text fontSize={["20px", "24px"]} mt="64px" color="#1A2233">
                      Rimble is now a one-stop design shop for anyone building
                      front ends in the Ethereum space.   It’s an open-source
                      library of:
                    </Text>
                    <Text fontSize={["20px", "24px"]} mt="40px" color="#1A2233">
                      <ul>
                        <li>
                          sleek, themeable React components for your building
                          blocks, documented with accompanying design
                          guidelines 
                        </li>
                        <li>
                          Figma UI kit for designing and prototyping your ideas
                        </li>
                        <li>
                          demos and templates to see how we solved common,
                          tricky Web3 UX challenges
                        </li>
                        <li>
                          in-depth guides on content and decentralized app
                          design patterns
                        </li>
                      </ul>
                    </Text>
                    <Text
                      fontSize={["20px", "24px"]}
                      mt="40px"
                      mb="40px"
                      color="#1A2233"
                    >
                      Rimble is used by 300+ products incl. Moloch, Civil,
                      uPort, openZeppelin, Burner wallet plus ETH Hackathon
                      winners, IDLE, Affogato network and more.
                    </Text>
                    <RimbleLink
                      fontSize={["20px", "24px"]}
                      fontWeight={2}
                      color="#4F53DB"
                      mt="32px"
                      href="https://github.com/ConsenSys/rimble-ui/network/dependents?package_id=UGFja2FnZS0yMDQxMTQyOTE%3D"
                    >
                      See complete list↗
                    </RimbleLink>
                    <Image mt="64px" src="/cs-images/rimble-homepage.png" />
                    <Image
                      mt="40px"
                      src="/cs-images/rimble-conversational.png"
                    />
                    <Image mt="40px" src="/cs-images/rimble-templates.png" />
                    <Image mt="40px" src="/cs-images/rimble-ux-guides.png" />
                  </Box>
                </Container>
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
            </Box>
          </Route>
          <Route path="/CodefiCS">
            <CodefiCS />
          </Route>
          <Route path="/">
            <App />
          </Route>
          <Route path="/DeliverooCS">
            <DeliverooCS />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/BoxtCS">
            <BoxtCS />
          </Route>
        </Switch>
      </ScrollToTop>
    </Router>
  );
};

export default RimbleCS;
