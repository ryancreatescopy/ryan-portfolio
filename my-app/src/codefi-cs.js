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
import Label from "./cs-components/label"
import Caption from "./cs-components/caption"
import Images from "./cs-components/images"

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
            color="#4F53DB"
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
          color="#4F53DB"
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
      <Image id="top" width="100%" src="/codefi-banner.png" />
      </Box>
      <Box display={["none", "none", "none", "block"]} alignItems="center">
        <Flex mt={5} alignItems="center" width="100%" position="fixed" justifyContent="space-between" pt={3} pb={3}>
          <Flex>
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/RimbleCS"><Button.Outline icon="ArrowBack" mainColor="text" borderRadius="8px" border={1} borderWidth="2px" borderColor="#9498F7" size="small" mx={[4, 4, "64px"]}>Previous</Button.Outline></Link>
          </Flex>
        <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/DeliverooCS"><Button.Outline icon="ArrowForward" iconpos="right" mainColor="text" borderRadius="8px" border={1} borderWidth="2px" borderColor="#9498F7" size="small" mx={[4, 4, "64px"]}>Next</Button.Outline></Link>
        </Flex>
      </Box>
      <Container>
          <Box>
            <Flex justifyContent="center">
              <Heading color="#1A2233" as={"h1"} fontSize={7} mt={5} mb="40px">
                Creating a design language for Codefi
              </Heading>
            </Flex>
            <Flex justifyContent="center">
              <Text color="#475166" fontSize={5} mb={5}>Codefi wanted a design system to help them bring all their products under the Codefi brand look and feel and reduce significant duplication of effort that was going on between their many product teams. We (the Rimble team) were tasked with starting a design system to help.</Text>
            </Flex>
            <Text color="text" fontSize={5} mb={6}>Unfortunately this product was cut short due to Corona virus redundancies, but I still learned and achieved plenty that I think is worth documenting.</Text>
          </Box>
          <Label color="#9498F7" label="PROBLEM" />
          <Heading
            as={"h4"}
            fontWeight={3}
            fontSize="40px"
            mb={3}
            mt={5}
          >
            Where to begin?
          </Heading>
          <Text
            fontSize="24px"
            color="text"
            mb={6}

          >
            Codefi was like a graveyard of Figma style guides. It had inherited a bunch of these style guides, labelled as design systems, from projects past. And even these weren’t being adhered to. We knew we’d have to wrangle everything that existed and consolidate it into a new system that was easier to follow with better documentation.
          </Text>
          <Label color="#FA9476" label="WHAT WE DID" />
          <Box mt={5} ml={["0", "-56px"]}>
            <Flex>
              <ArrowForward color="#777C8C" size="40px" mr={3}/>
              <Flex justifyContent="center" flexDirection="column" pb="40px">
                <Text lineHeight={1} fontSize="40px" color="#1A2233" mb={2}>Pick a project</Text>
                <Text fontSize="24px" mt="24px" color="#1A2233">
                  We knew adoption wouldn’t be wholesale straight away so we picked a product to target. With a product in mind we could focus our efforts and prioritise components accordingly based on the product’s needs. After doing a component inventory and some design exploration myself for this product, I ran a workshop where our design system team and the product team prioritised components based on frequency and complexity to form our backlog.
                </Text>
                <Images src="/cs-images/codefi-product-visual-inventory.png" src2="/cs-images/codefi-product-visual-inventory-2.png" />
                <Image mt="40px" src="/cs-images/prioritisation-workshop-mural.png" />
                <Caption>A remote prioritisation workshop: aligning us on priorities based on component needs.</Caption>
            </Flex>
            </Flex>
            <Flex>
              <ArrowForward color="#777C8C" size="40px" mr={3}/>
              <Flex justifyContent="center" flexDirection="column" pb="40px">
                <Text lineHeight={1} fontSize="40px" color="#1A2233" mb={2}>Collaborate with other designers</Text>
                <Text fontSize="24px" mt="24px" color="#1A2233">
                  The designer on the product team had a more nuanced understanding of the user needs they were trying to solve, so I made sure to work closely with them. This involved regular syncs where we critiqued work and pairing up on the design of a number of components.
                </Text>
                <Text fontSize="24px" mt="40px" color="#1A2233">
                  It also came to my attention during this phase that another designer had already started a design system for their product with visions of helping it scale. I joined forces with them and started iterating on their existing Figma components to make sure they met the needs of our target product.
                </Text>
                <Text fontSize="24px" mt="40px" color="#1A2233">
                  Together, we designed a large range of components from simple buttons and inputs all the way through to more complex components for Ethereum addresses and accordions.
                </Text>
                <Image mt="40px" src="/cs-images/figma-directory.png" />
                <Caption>I put together this directory to help the team understand component coverage and progress.</Caption>
                <Box bg="#FBFBFC" p="24px" mb="40px">
                  <Images src="/cs-images/eth-address-component.png" src2="/cs-images/eth-address-component-2.png" />
                </Box>
                <Box bg="#FBFBFC" p="24px" mb="32px">
                  <Images src="/cs-images/flash-component.png" src2="/cs-images/accordion-component.png" />
                </Box>
                <Box ml="56px" mb="40px">
                <Text fontSize="24px" mt="24px" color="#1A2233">
                  Having a content designer in this process from the very beginning meant components were being designed with the ideal content they’d hold in mind.
                </Text>
                </Box>
              </Flex>
            </Flex>
            <Flex>
              <ArrowForward color="#777C8C" size="40px" mr={3}/>
              <Flex justifyContent="center" flexDirection="column" pb="40px">
                <Text lineHeight={1} fontSize="40px" color="#1A2233" mb={2}>Document!</Text>
                <Text fontSize="24px" mt="24px" color="#1A2233">
                  I made sure we documented as we went, even though the audience was small. This included:
                  <ul>
                    <li>clear explanations of different component states</li>
                    <li>showing the component in product examples</li>
                    <li>desktop/mobile differences</li>
                    <li>design dos/don’ts wherever necessary</li>
                  </ul>
                </Text>
                <Box bg="#FBFBFC" p="24px" mb="128px">
                  <Images src="/cs-images/Forms-documentation.png" src2="/cs-images/ethaddress-documentation.png" />
                </Box>
              </Flex>
            </Flex>
          </Box>
          <Label color="#E57AB0" label="LESSON" />
          <Text
            fontSize="24px"
            color="text"
            mb={6}
            mt="64px"

          >
            Due to timelines and the business’s desire for us to support our chosen product as soon as possible, I started designing Figma components weeks before we were able to start on the code for these components. This created a lag and meant we never really became properly in sync. Next time, I’d insist that dev and design start at the same time to ensure better collaboration.
          </Text>
        </Container>
        <Box px={0} bg="#FBFBFC">
          <Container>
            <Box py="64px">
              <Label color="#69BFA0" label="RESULT" />
              <Text
                mt="64px"
                fontSize="64px"
                lineHeight="80px"
                color="text"
                fontWeight={"bold"}
              >
                Design speed went through the roof 🚀
              </Text>
              <Text fontSize="24px" mt="64px" color="#1A2233">
                The product we chose to focus on for the design system is making great strides. As a process-heavy product, the work we did on form elements and inputs meant the designer was freer to work on making that as easy an experience as possible rather than building UIs for forms.
              </Text>
              <Text fontSize="24px" mt="40px" color="#1A2233">
                A developer/designer on another product, who after taking a look through our Figma documentation, managed to design and build Codefi’s {''}
                <RimbleLink
                  fontSize="24px"
                  fontWeight={2}
                  color="#4F53DB"
                  activeColor="secondaryActive"
                  hoverColor="secondaryHover"
                  href="http://inspect.codefi.network"
                >
                Inspect↗
                </RimbleLink>
              {''} product incredibly quickly on brand. Very handy for an organisation with so few designers.
              </Text>
              <Text fontSize="24px" mt="40px" color="#1A2233">
                I also used the components heavily in a series of prototypes I created to support Sales pitches to big financial clients too. I was able to create multiple high fidelity prototypes in a little over a week.
              </Text>
              <Image mt="64px" src="/cs-images/codefi-inspect.png" />
              <Caption>The design language being applied to the Inspect product.</Caption>
              <Image src="/cs-images/document-prototype.png" />
              <Caption>A prototype I built using the design system's Figma components.</Caption>
            </Box>
          </Container>
        </Box>
      <Container>
        <Box mt="128px">
        <Label color="#9498F7" label="PROBLEM" />
        <Heading
          as={"h4"}
          fontWeight={3}
          fontSize="40px"
          mb={3}
          mt={5}
        >
          Scaling to other products
        </Heading>
        <Text
          fontSize="24px"
          color="text"
          mb={6}
        >
          Some teams in Codefi didn’t know what a design system was or why they should use one. So I wanted to make sure that I put the time in to educate folks and sell the benefits.
        </Text>
        <Label color="#FA9476" label="WHAT WE DID" />

        <Box mt={5} ml={["0", "-56px"]}>
          <Flex>
            <ArrowForward color="#777C8C" size="40px" mr={3}/>
            <Flex justifyContent="center" flexDirection="column">
              <Text lineHeight={1} fontSize="40px" color="#1A2233" mb={2}>Sell, sell, sell</Text>
              <Text fontSize="24px" mt="24px" color="#1A2233">My main strategy for selling the design system was explaining how it laddered up to the organisation’s main objectives. By framing it in business rationale, it was hard to argue with. </Text>
              <Image mt="24px" src="/cs-images/design-system-business-rationale.png" />
              <Image mt="24px" src="/cs-images/design-system-business-rationale-annotated.png" />
              <Text fontSize="24px" mt="40px" color="#1A2233">
                In other words, investing in the design system was a way for us all to hit our goals.
              </Text>
            </Flex>
          </Flex>
        </Box>
          <Box mt={5} ml={["0", "-56px"]}>
          <Flex>
            <ArrowForward color="#777C8C" size="40px" mr={3}/>
            <Flex justifyContent="center" flexDirection="column">
              <Text lineHeight={1} fontSize="40px" color="#1A2233" mb={2}>Design the service</Text>
              <Text fontSize="24px" mt="24px" color="#1A2233">
                The other thing I needed to figure out was how the design system could exist as a service or product alongside the other product teams. How might we handle contributions? How do we identify new product needs? When is something part of the design system versus something product teams build and manage themselves?
              </Text>
              <Text fontSize="24px" mt="40px" color="#1A2233">
                I put a lot of time into designing how this could work and answering the above questions. Unfortunately this never got the chance to be properly battle-hardened.
              </Text>
              <Image mt="40px" src="/cs-images/design-system-service-design.png" />
              <Caption>Apologies for the tiny font. This diagram goes into more detail about how we feed our backlog, manage contributions and review/publish work.</Caption>
              <Image src="/cs-images/design-system-iteration.png" />
              <Caption>A diagram explaining how the design system team’s work feeds into other product team’s work and how we absorb the learnings and iterate.</Caption>
              <Image src="/cs-images/design-system-architecture.png" />
              <Caption>Showing how it all worked in Figma: master styles feed into master components which are documented and published as usable components by designers.</Caption>
            </Flex>
          </Flex>
        </Box>
        <Box mt="128px">
          <Label color="#E57AB0" label="LESSON" />
          <Text
            fontSize="24px"
            color="text"
            mb={6}
            mt="64px"

          >
            A design system team need a seat at the table that the rest of the products are at. They need to know what’s on the horizon and see concepts/ideas early so they can become an integral part of how the organisation does design.
          </Text>
        </Box>
        </Box>
      </Container>
      <Box px={0} bg="#FBFBFC">
        <Container>
          <Box py="64px">
            <Label color="#69BFA0" label="RESULT" />
            <Text
              mt="64px"
              fontSize="64px"
              lineHeight="80px"
              color="text"
              fontWeight={"bold"}
            >
              Corona won 👾
            </Text>
            <Text fontSize="24px" mt="64px" color="#1A2233">
              The design systems team was cut as part of Corona-related layoffs. So unfortunately I can’t talk about any results.
            </Text>
            <Text fontSize="24px" mt="40px" color="#1A2233">
              This piece of work taught me a lot about how design systems need to be viewed as a product and not a project-based activity that can be delivered and handed over. The governance, people and processes are an incredibly important piece to making it all work and it’s so often overlooked. Design systems aren’t just components or Figma style guides, it’s all this great stuff:
            </Text>
            <Image mt="64px" src="/cs-images/design-system-diagram.png" />
          </Box>
          </Container>
          <hr color="#DFE0E5" />
          <Box textAlign="center" p="32px" mb={["80px", "80px", "80px", "0"]}>
            <RimbleLink color="#4F53DB" href="#top">Back to top 👆</RimbleLink>
          </Box>
        </Box>
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
