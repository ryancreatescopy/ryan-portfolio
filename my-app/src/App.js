import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BaseStyles, theme } from "rimble-ui";
import { ThemeProvider } from "styled-components";
import { Box, Button, Card, Flex, Text, Flash, Link, Heading, Image } from "rimble-ui";
import { ArrowForward } from '@rimble/icons';

function App() {
  return (
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
      </Box>
      <Box px={7}>
          <Box px={6}>
            <Flex pt={5} justifyContent="center">
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
          <Flex justifyContent="center" flexDirection="column" pb={5}>
            <Image src="/Rimble_card.png" />
            <Box>
              <Card style={{position: 'relative', top: '-560px', left: '563px', right: '0', bottom: 0, justifyContent: 'center', alignItems: 'center'}} width="560px" borderRadius="8px" border={1} borderColor="#000A28" borderWidth="2px">
                <Text
                  fontWeight={4}
                  fontSize="40px"
                  pb={1}
                >
                  Rimble
                </Text>
                <Text
                  fontSize={5}
                  pb={4}
                >
                  Content strategy, product design
                </Text>
                <Text
                  fontSize={2}
                  fontWeight={3}
                  pb="24px"
                >
                Rimble is an open-source library of components, guides and templates for designers and FE developers in the Ethereum space.
                </Text>
                <Text
                  fontSize={2}
                  pb="40px"
                >
                  Responsible for content and UX on the team, I:
                  <ul>
                    <li>improved documentation through testing and creating a repeatable content structure</li>
                    <li>prototyped and tested solutions to blockchain UX problems</li>
                    <li>documented components and templates</li>
                    <li>wrote long-form guides</li>
                  </ul>
                </Text>
                <Button borderRadius="16px" mb={3} mainColor="#1A2233">Read case study</Button>
                <Button.Outline mainColor="#9498F7" borderRadius="16px" border={1} borderWidth="2px" borderColor="#9498F7">Check out Rimble</Button.Outline>
              </Card>
            </Box>
          </Flex>

          <Flex style={{position: 'relative', top: '-200px', left: '0', right: '0', bottom: 0, justifyContent: 'center', alignItems: 'center'}} justifyContent="center" flexDirection="column" pb={5}>
            <Image src="/Rimble_card.png" />
            <Box>
              <Card style={{position: 'relative', top: '-560px', left: '563px', right: '0', bottom: 0, justifyContent: 'center', alignItems: 'center'}} width="560px" borderRadius="8px" border={1} borderColor="#000A28" borderWidth="2px">
                <Text
                  fontWeight={4}
                  fontSize="40px"
                  pb={1}
                >
                  Rimble
                </Text>
                <Text
                  fontSize={5}
                  pb={4}
                >
                  Content strategy, product design
                </Text>
                <Text
                  fontSize={2}
                  fontWeight={3}
                  pb="24px"
                >
                Rimble is an open-source library of components, guides and templates for designers and FE developers in the Ethereum space.
                </Text>
                <Text
                  fontSize={2}
                  pb="40px"
                >
                  Responsible for content and UX on the team, I:
                  <ul>
                    <li>improved documentation through testing and creating a repeatable content structure</li>
                    <li>prototyped and tested solutions to blockchain UX problems</li>
                    <li>documented components and templates</li>
                    <li>wrote long-form guides</li>
                  </ul>
                </Text>
                <Button borderRadius="16px" mb={3} mainColor="#1A2233">Read case study</Button>
                <Button.Outline mainColor="#9498F7" borderRadius="16px" border={1} borderWidth="2px" borderColor="#9498F7">Check out Rimble</Button.Outline>
              </Card>
            </Box>
          </Flex>
          <Flex style={{position: 'relative', top: '-200px', left: '0', right: '0', bottom: 0, justifyContent: 'center', alignItems: 'center'}} justifyContent="center" flexDirection="column" pb={5}>
            <Image src="/Rimble_card.png" />
            <Box>
              <Card style={{position: 'relative', top: '-560px', left: '263px', right: '0', bottom: 0, justifyContent: 'center', alignItems: 'center'}} width="560px" borderRadius="8px" border={1} borderColor="#000A28" borderWidth="2px">
                <Text
                  fontWeight={4}
                  fontSize="40px"
                  pb={1}
                >
                  Rimble
                </Text>
                <Text
                  fontSize={5}
                  pb={4}
                >
                  Content strategy, product design
                </Text>
                <Text
                  fontSize={2}
                  fontWeight={3}
                  pb="24px"
                >
                Rimble is an open-source library of components, guides and templates for designers and FE developers in the Ethereum space.
                </Text>
                <Text
                  fontSize={2}
                  pb="40px"
                >
                  Responsible for content and UX on the team, I:
                  <ul>
                    <li>improved documentation through testing and creating a repeatable content structure</li>
                    <li>prototyped and tested solutions to blockchain UX problems</li>
                    <li>documented components and templates</li>
                    <li>wrote long-form guides</li>
                  </ul>
                </Text>
                <Button borderRadius="16px" mb={3} mainColor="#1A2233">Read case study</Button>
                <Button.Outline mainColor="#9498F7" borderRadius="16px" border={1} borderWidth="2px" borderColor="#9498F7">Check out Rimble</Button.Outline>
              </Card>
            </Box>
          </Flex>
          <Flex style={{position: 'relative', top: '-200px', left: '0', right: '0', bottom: 0, justifyContent: 'center', alignItems: 'center'}} justifyContent="center" flexDirection="column" pb={5}>
            <Image src="/Rimble_card.png" />
            <Box>
              <Card style={{position: 'relative', top: '-560px', left: '563px', right: '0', bottom: 0, justifyContent: 'center', alignItems: 'center'}} width="560px" borderRadius="8px" border={1} borderColor="#000A28" borderWidth="2px">
                <Text
                  fontWeight={4}
                  fontSize="40px"
                  pb={1}
                >
                  Rimble
                </Text>
                <Text
                  fontSize={5}
                  pb={4}
                >
                  Content strategy, product design
                </Text>
                <Text
                  fontSize={2}
                  fontWeight={3}
                  pb="24px"
                >
                Rimble is an open-source library of components, guides and templates for designers and FE developers in the Ethereum space.
                </Text>
                <Text
                  fontSize={2}
                  pb="40px"
                >
                  Responsible for content and UX on the team, I:
                  <ul>
                    <li>improved documentation through testing and creating a repeatable content structure</li>
                    <li>prototyped and tested solutions to blockchain UX problems</li>
                    <li>documented components and templates</li>
                    <li>wrote long-form guides</li>
                  </ul>
                </Text>
                <Button borderRadius="16px" mb={3} mainColor="#1A2233">Read case study</Button>
                <Button.Outline mainColor="#9498F7" borderRadius="16px" border={1} borderWidth="2px" borderColor="#9498F7">Check out Rimble</Button.Outline>
              </Card>
            </Box>
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
          </Box>
          <Box pl="72px">
            <Flex>
              <ArrowForward color="#777C8C" size="40px" mr={3}/>
              <Flex justifyContent="center" flexDirection="column" pb="40px">
                <Text lineHeight={1} fontSize="40px" color="#1A2233" mb={2}>Content-first design</Text>
                <Text fontSize={3}>Designing for the content your user needs rather than fitting content into a pre-determined design.</Text>
              </Flex>
            </Flex>
            <Flex alignContent="center">
              <ArrowForward color="#777C8C" size="40px" mr={3}/>
              <Flex justifyContent="center" flexDirection="column" pb="40px">
                <Text lineHeight={1} fontSize="40px" color="#1A2233" mb={2}>Design systems</Text>
                <Text fontSize={3}>Systemising content design decisions but also the entire notion of making designers think less about stuff that’s already been solved and more about what’s new to solve</Text>
              </Flex>
            </Flex>
            <Flex>
              <ArrowForward color="#777C8C" size="40px" mr={3}/>
              <Flex justifyContent="center" flexDirection="column" pb="40px">
                <Text lineHeight={1} fontSize="40px" color="#1A2233" mb={2}>Blockchain UX problems</Text>
                <Text fontSize={3}>Continuing to push blockchain product usability as far as the tech will allow us.</Text>
              </Flex>
            </Flex>
            <Flex>
              <ArrowForward color="#777C8C" size="40px" mr={3}/>
              <Flex justifyContent="center" flexDirection="column" pb="40px">
                <Text lineHeight={1} fontSize="40px" color="#1A2233" mb={2}>Design education</Text>
                <Text fontSize={3}>Fighting the good fight and making sure folks understand the value in content design and design in general – especially interesting in the engineer-dominated blockchain space.</Text>
              </Flex>
            </Flex>
            <Flex pb={5}>
              <ArrowForward color="#777C8C" size="40px" mr={3}/>
              <Flex justifyContent="center" flexDirection="column">
                <Text lineHeight={1} fontSize="40px" color="#1A2233" mb={2}>Open source</Text>
                <Text fontSize={3}>Sharing learnings and giving each other a helping hand.</Text>
              </Flex>
            </Flex>
          </Box>
          <hr color="#DFE0E5" />
          <Box px={6}>
            <Heading as={"h2"} pt={5} pb={3} fontSize="40px">
              Speaking and writing
            </Heading>
            <Text fontSize={4} pb={5}>
              I speak and write as part of my commitment to educating the industry on content design and blockchain UX
            </Text>
            <Heading as={"h3"} pb={5} fontSize={5}>
              Speaking
            </Heading>
          </Box>
          <Box pl="72px" pb={5}>
            <Flex>
              <ArrowForward color="#777C8C" size="40px" mr={3}/>
              <Flex justifyContent="center" flexDirection="column" pb="40px">
                <Link
                  lineHeight={1}
                  fontSize="40px"
                  fontWeight={2}
                  color="#9498F7"
                  activeColor="secondaryActive"
                  hoverColor="secondaryHover"
                  href="https://www.figma.com/proto/3Ke9nkwhyYbBxHfkin5iT0/Devcon-V-Conversational-design-workshop?node-id=17%3A0&viewport=281%2C212%2C0.05299120396375656&scaling=min-zoom"
                  target="_blank"
                   mb={2}
                >
                  Design better dApps with conversation↗
                </Link>
                <Text fontSize={3}>Devcon V, Osaka, 2019</Text>
              </Flex>
            </Flex>
            <Flex alignContent="center">
              <ArrowForward color="#777C8C" size="40px" mr={3}/>
              <Flex justifyContent="center" flexDirection="column" pb="40px">
                <Link
                  lineHeight={1}
                  fontSize="40px"
                  fontWeight={2}
                  color="#9498F7"
                  activeColor="secondaryActive"
                  hoverColor="secondaryHover"
                  href="https://www.figma.com/proto/dk6DlwfvXW4svJXPoH7m6e/Devcon-V-The-state-of-transaction-states?node-id=351%3A1&viewport=-23%2C418%2C0.015625&scaling=min-zoom"
                  target="_blank"
                  mb={2}
                >
                  The state of transaction states↗
                </Link>
                <Text fontSize={3}>Devcon V, Osaka, 2019</Text>
              </Flex>
            </Flex>
            <Flex>
              <ArrowForward color="#777C8C" size="40px" mr={3}/>
              <Flex justifyContent="center" flexDirection="column" pb="40px">
                <Text lineHeight={1} fontSize="40px" color="#1A2233" mb={2}>Design and Defi panel</Text>
                <Text fontSize={3}>Decentralized Design, London, 2019</Text>
              </Flex>
            </Flex>
            <Flex>
              <ArrowForward color="#777C8C" size="40px" mr={3}/>
              <Flex justifyContent="center" flexDirection="column" pb="40px">
                <Text lineHeight={1} fontSize="40px" color="#1A2233" mb={2}>Conversational design</Text>
                <Text fontSize={3}>Content Deli, London, 2018</Text>
              </Flex>
            </Flex>
            <Flex pb={5}>
              <ArrowForward color="#777C8C" size="40px" mr={3}/>
              <Flex justifyContent="center" flexDirection="column">
                <Link
                  lineHeight={1}
                  fontSize="40px"
                  fontWeight={2}
                  color="#9498F7"
                  activeColor="secondaryActive"
                  hoverColor="secondaryHover"
                  href="https://www.youtube.com/watch?v=mfibksrWu_U"
                  target="_blank"
                  mb={2}
                >
                  What is Content Design?↗
                </Link>
                <Text fontSize={3}>MCE conference, Warsaw, 2018</Text>
              </Flex>
            </Flex>
          </Box>
          <Box px={6}>
            <Heading as={"h3"} pb={5} fontSize={5}>
              Writing
            </Heading>
            <Heading as={"h4"} color="#475166" fontWeight={2} pb={5} fontSize={5}>
              Blockchain
            </Heading>
          </Box>
          <Box pl="72px">
            <Flex>
              <ArrowForward color="#777C8C" size="40px" mr={3}/>
              <Flex justifyContent="center" flexDirection="column" pb="40px">
                <Link
                  lineHeight={1}
                  fontSize="40px"
                  fontWeight={2}
                  color="#9498F7"
                  activeColor="secondaryActive"
                  hoverColor="secondaryHover"
                  href="https://kauri.io/writing-for-blockchain-wallet-signature-request-me/e46374ec0fbd4403ae9ea351580caa4d/a"
                  target="_blank"
                   mb={2}
                >
                  Writing wallet signature request s↗
                </Link>
              </Flex>
            </Flex>
            <Flex alignContent="center">
              <ArrowForward color="#777C8C" size="40px" mr={3}/>
              <Flex justifyContent="center" flexDirection="column" pb="40px">
                <Link
                  lineHeight={1}
                  fontSize="40px"
                  fontWeight={2}
                  color="#9498F7"
                  activeColor="secondaryActive"
                  hoverColor="secondaryHover"
                  href="https://media.consensys.net/what-ethereum-should-learn-from-libra-a-content-perspective-63428ab5ccef"
                  target="_blank"
                  mb={2}
                  pb={5}
                >
                  What Ethereum Should Learn from Libra: A Content Perspective↗
                </Link>
              </Flex>
            </Flex>
          </Box>
          <Box px={6}>
            <Heading as={"h4"} color="#475166" fontWeight={2} pb={5} fontSize={5}>
              Content design
            </Heading>
          </Box>
          <Box pl="72px">
            <Flex>
              <ArrowForward color="#777C8C" size="40px" mr={3}/>
              <Flex justifyContent="center" flexDirection="column" pb="40px">
                <Link
                  lineHeight={1}
                  fontSize="40px"
                  fontWeight={2}
                  color="#9498F7"
                  activeColor="secondaryActive"
                  hoverColor="secondaryHover"
                  href="https://medium.com/deliveroo-design/content-design-systems-need-you-82836afb4fe6?source=---------6-----------------"
                  target="_blank"
                   mb={2}
                >
                  Content, design systems need you!↗
                </Link>
              </Flex>
            </Flex>
            <Flex alignContent="center">
              <ArrowForward color="#777C8C" size="40px" mr={3}/>
              <Flex justifyContent="center" flexDirection="column" pb="40px">
                <Link
                  lineHeight={1}
                  fontSize="40px"
                  fontWeight={2}
                  color="#9498F7"
                  activeColor="secondaryActive"
                  hoverColor="secondaryHover"
                  href="https://medium.com/figma-design/how-to-do-content-design-ux-writing-in-figma-d0e0ee77661e?source=---------7------------------"
                  target="_blank"
                  mb={2}
                >
                  How to do content design / UX writing in Figma↗︎
                </Link>
              </Flex>
            </Flex>
            <Flex alignContent="center">
              <ArrowForward color="#777C8C" size="40px" mr={3}/>
              <Flex justifyContent="center" flexDirection="column" pb="40px">
                <Link
                  lineHeight={1}
                  fontSize="40px"
                  fontWeight={2}
                  color="#9498F7"
                  activeColor="secondaryActive"
                  hoverColor="secondaryHover"
                  href="https://medium.com/deliveroo-design/4-reasons-we-love-figma-at-deliveroo-7a6db84b5239?source=---------8------------------"
                  target="_blank"
                  mb={2}
                >
                  4 reasons we love Figma at Deliveroo↗
                </Link>
              </Flex>
            </Flex>
            <Flex alignContent="center">
              <ArrowForward color="#777C8C" size="40px" mr={3}/>
              <Flex justifyContent="center" flexDirection="column" pb="40px">
                <Link
                  lineHeight={1}
                  fontSize="40px"
                  fontWeight={2}
                  color="#9498F7"
                  activeColor="secondaryActive"
                  hoverColor="secondaryHover"
                  href="https://uxdesign.cc/3-communication-theories-that-will-help-you-write-better-microcopy-and-make-better-products-4df25571ca6f?source=---------9------------------"
                  target="_blank"
                  mb={2}
                >
                  3 communication theories that will help you write better microcopy (and make better products)↗
                </Link>
              </Flex>
            </Flex>
            <Flex alignContent="center">
              <ArrowForward color="#777C8C" size="40px" mr={3}/>
              <Flex justifyContent="center" flexDirection="column" pb="40px">
                <Link
                  lineHeight={1}
                  fontSize="40px"
                  fontWeight={2}
                  color="#9498F7"
                  activeColor="secondaryActive"
                  hoverColor="secondaryHover"
                  href="https://medium.com/swlh/my-6-point-microcopy-checklist-for-non-ux-writers-634eb52b29c9?source=---------11------------------"
                  target="_blank"
                  mb={2}
                >
                  My 6-point microcopy checklist for non-UX writers↗
                </Link>
              </Flex>
            </Flex>
            <Flex alignContent="center">
              <ArrowForward color="#777C8C" size="40px" mr={3}/>
              <Flex justifyContent="center" flexDirection="column" pb="40px">
                <Link
                  lineHeight={1}
                  fontSize="40px"
                  fontWeight={2}
                  color="#9498F7"
                  activeColor="secondaryActive"
                  hoverColor="secondaryHover"
                  href="https://uxplanet.org/ux-writing-and-the-customer-experience-wont-somebody-please-think-of-the-words-f7cdefa3793a?source=---------12------------------"
                  target="_blank"
                  mb={2}
                  pb={5}
                >
                  UX writing and the customer experience: won’t somebody please think of the words?↗
                </Link>
              </Flex>
            </Flex>
          </Box>
          <hr color="#DFE0E5" />
          <Box px={[2, 6]}>
            <Heading as={"h2"} pt={5} pb={3} fontSize="40px">
              Tools
            </Heading>
            <Text fontSize={4} pb={5}>
              I’ve found in my work as a content designer that I’ve had to get comfortable or even proficient in software that my design and engineering teammates use.
            </Text>
          </Box>
          <Box pl="72px">
            <Flex>
              <ArrowForward color="#777C8C" size="40px" mr={3}/>
              <Flex justifyContent="center" flexDirection="column" pb="40px">
                <Text lineHeight={1} fontSize="40px" color="#1A2233" mb={2}>Pen and paper</Text>
                <Text fontSize={3}>For sketching designs. However in remote roles, I’ve tended to quickly mock things up in Figma or Whimsical.</Text>
              </Flex>
            </Flex>
            <Flex alignContent="center">
              <ArrowForward color="#777C8C" size="40px" mr={3}/>
              <Flex justifyContent="center" flexDirection="column" pb="40px">
                <Text lineHeight={1} fontSize="40px" color="#1A2233" mb={2}>Figma</Text>
                <Text fontSize={3}>For collaborating with designers, prototyping and getting engineering feedback on early-stage designs.</Text>
              </Flex>
            </Flex>
            <Flex>
              <ArrowForward color="#777C8C" size="40px" mr={3}/>
              <Flex justifyContent="center" flexDirection="column" pb="40px">
                <Text lineHeight={1} fontSize="40px" color="#1A2233" mb={2}>GitHub</Text>
                <Text fontSize={3}>I use Github when on projects where I need to collaborate very closely with engineers. I prefer to create my own PRs to iterate on content directly in the product.</Text>
              </Flex>
            </Flex>
            <Flex>
              <ArrowForward color="#777C8C" size="40px" mr={3}/>
              <Flex justifyContent="center" flexDirection="column" pb="40px">
                <Text lineHeight={1} fontSize="40px" color="#1A2233" mb={2}>Whimsical</Text>
                <Text fontSize={3}>For mapping out high level user flows.</Text>
              </Flex>
            </Flex>
            <Flex pb={5}>
              <ArrowForward color="#777C8C" size="40px" mr={3}/>
              <Flex justifyContent="center" flexDirection="column">
                <Text lineHeight={1} fontSize="40px" color="#1A2233" mb={2}>Mural</Text>
                <Text fontSize={3}>For remote workshops and collaboration between non-designers.</Text>
              </Flex>
            </Flex>
          </Box>
        </Box>
      <Box px={0} bg="#FBFBFC">
        <Box px={7}>
          <Box px={6}>
            <Heading as={"h2"} pt={5} pb={3} fontSize="40px">
              Get in touch
            </Heading>
            <Text fontSize={4} pb={5}>
              If you have a role in mind, reach out and we can chat content design until we’re blue in the face*.
            </Text>
          </Box>
          <Box pl="72px" pb={2}>
              <Flex>
                <ArrowForward color="#777C8C" size="40px" mr={3}/>
                <Flex justifyContent="center" flexDirection="column" pb="40px">
                  <Link
                    lineHeight={1}
                    fontSize="40px"
                    fontWeight={2}
                    color="#9498F7"
                    activeColor="secondaryActive"
                    hoverColor="secondaryHover"
                    href="https://twitter.com/ryancreatescopy"
                    target="_blank"
                     mb={2}
                  >
                    @ryancreatescopy↗
                  </Link>
                </Flex>
              </Flex>
              <Flex>
                <ArrowForward color="#777C8C" size="40px" mr={3}/>
                <Flex justifyContent="center" flexDirection="column" pb="40px">
                  <Link
                    lineHeight={1}
                    fontSize="40px"
                    fontWeight={2}
                    color="#9498F7"
                    activeColor="secondaryActive"
                    hoverColor="secondaryHover"
                    href="mailto:ryancordell92@gmail.com"
                    target="_blank"
                    mb={2}
                  >
                    ryancordell92@gmail.com↗
                  </Link>
                </Flex>
              </Flex>
              <Flex>
                <ArrowForward color="#777C8C" size="40px" mr={3}/>
                <Flex justifyContent="center" flexDirection="column" pb="40px">
                  <Link
                    lineHeight={1}
                    fontSize="40px"
                    fontWeight={2}
                    color="#9498F7"
                    activeColor="secondaryActive"
                    hoverColor="secondaryHover"
                    href="https://www.linkedin.com/in/ryancordell1/"
                    target="_blank"
                    mb={2}
                  >
                    LinkedIn↗
                  </Link>
                </Flex>
              </Flex>
            </Box>
            <Box px={6} pb={5}>
              <Text>*Other topics I’d be willing to talk about until we’re blue in the face: Waynes World, Philadelphia Eagles, Weezer’s Blue album, Tottenham Hotspur... </Text>
          </Box>
        </Box>
    </Box>
  </Box>
  );
}

export default App;
