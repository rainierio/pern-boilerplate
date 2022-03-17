import React from 'react';
import { Link } from 'react-router-dom';

// Chakra imports
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
// Assets
import googleLogin from 'assets/svg/auth/icons8-google.svg';
import facebookLogin from 'assets/svg/auth/icons8-facebook-circled.svg';
import linkedInLogin from 'assets/svg/auth/icons8-linkedin-circled.svg';

function SignUp() {
  const titleColor = useColorModeValue('blue.400', 'blue.300');
  const textColor = useColorModeValue('gray.400', 'white');
  const bgColor = useColorModeValue('white', 'gray.700');
  const bgIcons = useColorModeValue('blue.300', 'rgba(255, 255, 255, 0.5)');
  return (
    <Flex direction="column" alignSelf="center" justifySelf="center" overflow="hidden">
      <Box
        position="absolute"
        minH={{ base: '70vh', md: '50vh' }}
        w={{ md: 'calc(100vw - 50px)' }}
        borderRadius={{ md: '15px' }}
        bgGradient="linear(to-r, blue.400, teal.200)"
        left="0"
        right="0"
        bgRepeat="no-repeat"
        overflow="hidden"
        zIndex="-1"
        top="0"
        bgSize="cover"
        mx={{ md: 'auto' }}
        mt={{ md: '14px' }}
      />
      <Flex direction="column" textAlign="center" justifyContent="center" align="center" mt="6.5rem" mb="30px">
        <Text fontSize="4xl" color="white" fontWeight="bold">
          Welcome!
        </Text>
        <Text
          fontSize="md"
          color="white"
          fontWeight="normal"
          mt="10px"
          mb="26px"
          w={{
            base: '90%',
            sm: '60%',
            lg: '40%',
            xl: '30%',
          }}
        >
          Use these awesome form to create new account for free.
        </Text>
      </Flex>
      <Flex alignItems="center" justifyContent="center" mb="60px" mt="20px">
        <Flex
          direction="column"
          w="445px"
          background="transparent"
          borderRadius="15px"
          p="40px"
          mx={{ base: '100px' }}
          bg={bgColor}
          boxShadow="0 20px 27px 0 rgb(0 0 0 / 10%)"
        >
          <Text fontSize="xl" color={textColor} fontWeight="bold" textAlign="center" mb="22px">
            Register With
          </Text>
          <HStack spacing="15px" justify="center" mb="22px">
            <Flex
              justify="center"
              align="center"
              w="75px"
              h="75px"
              borderRadius="15px"
              border="1px solid lightgray"
              cursor="pointer"
              transition="all .25s ease"
              _hover={{ filter: 'shaddow(xl)', bg: bgIcons }}
            >
              <Link to="test">
                <Image boxSize="40px" src={googleLogin} alt="Google" />
              </Link>
            </Flex>
            <Flex
              justify="center"
              align="center"
              w="75px"
              h="75px"
              borderRadius="15px"
              border="1px solid lightgray"
              cursor="pointer"
              transition="all .25s ease"
              _hover={{ filter: 'brightness(100%)', bg: bgIcons }}
            >
              <Link to="test">
                <Image boxSize="40px" src={facebookLogin} alt="Google" />
              </Link>
            </Flex>
            <Flex
              justify="center"
              align="center"
              w="75px"
              h="75px"
              borderRadius="15px"
              border="1px solid lightgray"
              cursor="pointer"
              transition="all .25s ease"
              _hover={{ filter: 'brightness(120%)', bg: bgIcons }}
            >
              <Link to="test">
                <Image boxSize="40px" src={linkedInLogin} alt="Google" />
              </Link>
            </Flex>
          </HStack>
          <Text fontSize="lg" color="gray.400" fontWeight="bold" textAlign="center" mb="22px">
            or
          </Text>
          <FormControl>
            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              Name
            </FormLabel>
            <Input fontSize="sm" ms="4px" borderRadius="15px" type="text" placeholder="Your full name" mb="24px" size="lg" />
            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              Email
            </FormLabel>
            <Input
              fontSize="sm"
              ms="4px"
              borderRadius="15px"
              type="email"
              placeholder="Your email address"
              mb="24px"
              size="lg"
            />
            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              Password
            </FormLabel>
            <Input
              fontSize="sm"
              ms="4px"
              borderRadius="15px"
              type="password"
              placeholder="Your password"
              mb="24px"
              size="lg"
            />
            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              Repeat Password
            </FormLabel>
            <Input
              fontSize="sm"
              ms="4px"
              borderRadius="15px"
              type="password"
              placeholder="Your password"
              mb="24px"
              size="lg"
            />
            <Button
              type="submit"
              bg="blue.400"
              fontSize="10px"
              color="white"
              fontWeight="bold"
              w="100%"
              h="45"
              mb="24px"
              _hover={{
                bg: 'blue.200',
              }}
              _active={{
                bg: 'blue.400',
              }}
            >
              SIGN UP
            </Button>
          </FormControl>
          <Flex flexDirection="column" justifyContent="center" alignItems="center" maxW="100%" mt="0px">
            <Text color={textColor} fontWeight="medium">
              Already have an account?
              <Text color={titleColor} as="span" ms="5px" fontWeight="bold">
                <Link to="/signin">Sign In</Link>
              </Text>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SignUp;
