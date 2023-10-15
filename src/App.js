import React  from "react";
import {
  Stack,
  chakra,
  HStack,
  Divider,
  VStack,
  Icon,
  Box,
  Text,
  Heading,
  Button,
  Flex,
  Image,
  Container,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Link,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";
import shoes from "./assets/shoes.gif";
import star from "./assets/star.gif";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import "./App.css";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box bg="black">
     <Box
        position="sticky"
        top="0"
        pr="4"
        className="product-card"
        bg="#000"
        borderRadius="20px"  
        color="#FF0000" 
        zIndex="999"
      >
        <header>
          <Flex
            as="nav"
            
            justify="space-between"
            align="center"
            bg="transparent"
          >
            <Image src={star} alt="ShoeStore Logo" w={["80px", "100px"]} />
            <IconButton
              ref={btnRef}
              icon={<HamburgerIcon />}
              display={["block", "none"]}
              onClick={onOpen}
            />
            <Flex display={["none", "block"]}>
              <Button colorScheme="yellow" m={2}>
                Products
              </Button>
              <Button colorScheme="yellow" m={2}>
                About Us
              </Button>
              <Button colorScheme="green" m={2}>
                Contact
              </Button>
            </Flex>
          </Flex>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay>
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Menu</DrawerHeader>
                <DrawerBody>
                  <Flex direction="column">
                    <Link onClick={onClose} color="blue.500">
                      Products
                    </Link>
                    <Link onClick={onClose} color="blue.500">
                      About Us
                    </Link>
                    <Link onClick={onClose} color="blue.500">
                      Contact
                    </Link>
                  </Flex>
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </header>
      </Box>
      <Box as="section" mt={16} p={4}>
        <Container maxW="container.lg" centerContent>
          <Flex
            direction={["column", "row"]} // Stack elements in a column on small screens and in a row on larger screens
            justifyContent="space-between"
            align="center"
          >
            <Box
              w={["100%", "50%"]} // Take full width on small screens and 50% width on larger screens
              mb={["6", "0"]} // Add margin bottom on small screens to separate from the next section
            >
              <Heading fontSize={["2xl", "3xl"]} mb={4}>
                Step into Style
              </Heading>
              <Text fontSize="lg">
                Discover the latest collection of premium shoes designed for
                comfort and fashion.
              </Text>
              <Button mt={6} colorScheme="blue">
                Explore
              </Button>
            </Box>
            <Box
              w={["100%", "50%"]} // Take full width on small screens and 50% width on larger screens
              borderRadius="50px"
              overflow="hidden"
            >
              <Image src={shoes} alt="Shoe Animation" w="full" />
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box as="section" mt={16} p={4}>
        <Container maxW="container.lg" centerContent>
          <Heading fontSize={["3xl", "4xl"]} mb={6}>
            Featured Products
          </Heading>
          <Flex flexWrap="wrap" justifyContent="space-between">
            <Box
             w={["100%", "30%"]}
             textAlign="center"
             mb={8}
            
             // Add CSS for hover animation
             _hover={{
               transform: "scale(1.5)",
               transition: "transform 1.3s ease ",
             }}
             cursor="pointer"
            >
              <Box w="100%" h="200px" borderRadius="50px"  overflow="hidden">
                <Image
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Product 1"
                />
              </Box>
              <Text  mt={4}>Product 1 Description</Text>
            </Box>
            <Box
              w={["100%", "30%"]}
              textAlign="center"
              mb={8}
             
              // Add CSS for hover animation
              _hover={{
                transform: "scale(1.5) ",
                transition: "transform 1.3s ease",
              }}
              cursor="pointer"
            >
              <Box w="100%" h="200px"   borderRadius="50px" overflow="hidden">
                <Image
                  src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1779&q=80"
                  alt="Product 2"
                />
              </Box>
              <Text mt={4}>Product 2 Description</Text>
            </Box>
            <Box
            w={["100%", "30%"]}
            textAlign="center"
            mb={8}
          
            // Add CSS for hover animation
            _hover={{
              transform: "scale(1.5)",
              transition: "transform 1.3s ease",
            }}
            cursor="pointer"
            >
              <Box w="100%" h="200px"   borderRadius="50px" overflow="hidden">
                <Image
                  src="https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1925&q=80"
                  alt="Product 3"
                />
              </Box>
              <Text mt={4}>Product 3 Description</Text>
            </Box>
          </Flex>
        </Container>
      </Box>

      <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Box
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          mx={{
            lg: 8,
          }}
          display={{
            lg: "flex",
          }}
          maxW={{
            lg: "5xl",
          }}
          shadow={{
            lg: "lg",
          }}
          rounded={{
            lg: "lg",
          }}
        >
          <Box
            w={{
              lg: "50%",
            }}
          >
            <Box
              h={{
                base: 64,
                lg: "full",
              }}
              rounded={{
                lg: "lg",
              }}
              bgSize="cover"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')",
              }}
            ></Box>
          </Box>

          <Box
            py={12}
            px={6}
            maxW={{
              base: "xl",
              lg: "5xl",
            }}
            w={{
              lg: "50%",
            }}
          >
            <chakra.h2
              fontSize={{
                base: "2xl",
                md: "3xl",
              }}
              color="gray.800"
              _dark={{
                color: "white",
              }}
              fontWeight="bold"
            >
              Visit the collection {" "}
              <chakra.span
                color="brand.600"
                _dark={{
                  color: "brand.400",
                }}
              >
                Idea
              </chakra.span>
            </chakra.h2>
            <chakra.p
              mt={4}
              color="gray.600"
              _dark={{
                color: "gray.400",
              }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
              modi reprehenderit vitae exercitationem aliquid dolores ullam
              temporibus enim expedita aperiam mollitia iure consectetur dicta
              tenetur, porro consequuntur saepe accusantium consequatur.
            </chakra.p>

            <Box mt={8}>
              <Link
                bg="gray.900"
                color="gray.100"
                px={5}
                py={3}
                fontWeight="semibold"
                rounded="lg"
                _hover={{
                  bg: "gray.800",
                }}
              >
                Start Now
              </Link>
            </Box>
          </Box>
        </Box>
      </Flex>

      {/* shoes */}

     

      <Box as="section" mt={16} p={4}>
        <Container maxW="container.lg" centerContent>
          <Heading fontSize={["3xl", "4xl"]} mb={6}>
            About Us
          </Heading>
          <Text fontSize={["lg", "xl"]} textAlign="center">
            At the heart of our mission lies an unwavering passion for creating
            top-quality, stylish footwear that's designed to provide all-day
            comfort. We're dedicated to the art of crafting shoes that not only
            look fantastic but also prioritize your comfort and well-being,
            ensuring that every step you take is a delightful experience.
          </Text>

          <Button mt={6} colorScheme="blue">
            Contact Us
          </Button>
        </Container>
      </Box>

      <Flex
        direction={["column", "row"]} // Stack elements in a column on small screens and in a row on larger screens
        justifyContent="space-between"
        align="center"
      >
        <Flex p={50} w="full" alignItems="center" justifyContent="center">
          <Flex
            direction="column"
            justifyContent="center"
            alignItems="center"
            w="sm"
            mx="auto"
          >
            <Box
              bg="gray.300"
              h={64}
              w="full"
              rounded="lg"
              shadow="md"
              bgSize="cover"
              bgPos="center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1521903062400-b80f2cb8cb9d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80)",
              }}
            ></Box>

            <Box
              w={{
                base: 56,
                md: 64,
              }}
              bg="white"
              _dark={{
                bg: "gray.800",
              }}
              mt={-10}
              shadow="lg"
              rounded="lg"
              overflow="hidden"
            >
              <chakra.h3
                py={2}
                textAlign="center"
                fontWeight="bold"
                textTransform="uppercase"
                color="gray.800"
                _dark={{
                  color: "white",
                }}
                letterSpacing={1}
              >
                Nike Revolt
              </chakra.h3>

              <Flex
                alignItems="center"
                justifyContent="space-between"
                py={2}
                px={3}
                bg="gray.200"
                _dark={{
                  bg: "gray.700",
                }}
              >
                <chakra.span
                  fontWeight="bold"
                  color="gray.800"
                  _dark={{
                    color: "gray.200",
                  }}
                >
                  $129
                </chakra.span>
                <chakra.button
                  bg="gray.800"
                  fontSize="xs"
                  fontWeight="bold"
                  color="white"
                  px={2}
                  py={1}
                  rounded="lg"
                  textTransform="uppercase"
                  _hover={{
                    bg: "gray.700",
                    _dark: {
                      bg: "gray.600",
                    },
                  }}
                  _focus={{
                    bg: "gray.700",
                    _dark: {
                      bg: "gray.600",
                    },
                    outline: "none",
                  }}
                >
                  Add to cart
                </chakra.button>
              </Flex>
            </Box>
          </Flex>
        </Flex>
       
      </Flex>

      <Box as="section" mt={16} p={4}>
        <Container maxW="container.lg" centerContent>
          <Heading fontSize={["3xl", "4xl"]} mb={6}>
            Contact Us
          </Heading>
          <Text fontSize={["lg", "xl"]} textAlign="center">
            Have a question or need assistance? Reach out to us.
          </Text>
          <Button
            as="a"
            href="mailto:info@shoestore.com"
            colorScheme="blue"
            mt={6}
          >
            Email Us
          </Button>
        </Container>
      </Box>

      <footer>
        <Box bg="black">
          <Stack
            direction={{
              base: "column",
              lg: "row",
            }}
            w="full"
            justify="space-between"
            p={10}
          >
            <HStack
              alignItems="start"
              flex={1}
              justify="space-around"
              fontSize={{
                base: "12px",
                md: "16px",
              }}
              color="gray.800"
              _dark={{
                color: "white",
              }}
              textAlign={{
                base: "center",
                md: "left",
              }}
            >
              <Flex justify="start" direction="column">
                <Link textTransform="uppercase">Pre-Sale FAQS</Link>
                <Link textTransform="uppercase">Submit a ticket</Link>
              </Flex>
              <Flex justify="start" direction="column">
                <Link textTransform="uppercase">Services</Link>
                <Link textTransform="uppercase">Theme Tweak</Link>
              </Flex>
            </HStack>
            <HStack
              alignItems="start"
              flex={1}
              justify="space-around"
              fontSize={{
                base: "12px",
                md: "16px",
              }}
              color="gray.800"
              _dark={{
                color: "white",
              }}
              textAlign={{
                base: "center",
                md: "left",
              }}
            >
              <Flex justify="start" direction="column">
                <Link textTransform="uppercase">Show Case</Link>
                <Link textTransform="uppercase">Widget Kit</Link>
                <Link textTransform="uppercase">Support</Link>
              </Flex>
              <Flex justify="start" direction="column">
                <Link textTransform="uppercase">About Us</Link>
                <Link textTransform="uppercase">Contact Us</Link>
                <Link textTransform="uppercase">Resources</Link>
              </Flex>
            </HStack>
          </Stack>
          <Divider
            w="95%"
            mx="auto"
            color="gray.600"
            _dark={{
              color: "#F9FAFB",
            }}
            h="3.5px"
          />
          <VStack py={3}>
            <HStack justify="center">
              <Link>
                <Icon
                  color="gray.800"
                  _dark={{
                    color: "white",
                  }}
                  h="20px"
                  w="20px"
                  as={BsFacebook}
                />
              </Link>
              <Link>
                <Icon
                  color="gray.800"
                  _dark={{
                    color: "white",
                  }}
                  h="20px"
                  w="20px"
                  as={BsTwitter}
                />
              </Link>
              <Link>
                <Icon
                  _dark={{
                    color: "white",
                  }}
                  h="20px"
                  w="20px"
                  as={BsInstagram}
                />
              </Link>
              <Link>
                <Icon
                  _dark={{
                    color: "white",
                  }}
                  h="20px"
                  w="20px"
                  as={BsLinkedin}
                />
              </Link>
            </HStack>

            <Text
              textAlign="center"
              fontSize="smaller"
              _dark={{
                color: "white",
              }}
            >
              &copy; 2023 ShoeStore. All rights reserved.
            </Text>
          </VStack>
        </Box>
        ;
      </footer>
    </Box>
  );
}

export default App;
