import React from 'react';
import { Link } from 'react-router-dom';

// Chakra imports
import {
  Box,
  Flex,
  Button,
  Center,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Image,
  Switch,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
// Assets
import signInImage from 'assets/img/signInImage.png';
import googleLogin from 'assets/svg/auth/icons8-google.svg';
import facebookLogin from 'assets/svg/auth/icons8-facebook-circled.svg';
import linkedInLogin from 'assets/svg/auth/icons8-linkedin-circled.svg';

function SignIn() {
  // Chakra color mode
  const titleColor = useColorModeValue('blue.400', 'blue.300');
  const textColor = useColorModeValue('gray.400', 'white');
  return (
    <Flex position="relative" mb="40px">
      <Flex
        h={{ sm: 'initial', md: '75vh', lg: '85vh' }}
        w="100%"
        maxW="1044px"
        mx="auto"
        justifyContent="space-between"
        mb="30px"
        pt={{ sm: '100px', md: '0px' }}
      >
        <Flex
          alignItems="center"
          justifyContent="start"
          style={{ userSelect: 'none' }}
          w={{ base: '100%', md: '50%', lg: '42%' }}
        >
          <Flex direction="column" w="100%" background="transparent" p="48px" mt={{ md: '150px', lg: '80px' }}>
            <Heading color={titleColor} fontSize="32px" mb="10px">
              Login
            </Heading>
            <Text mb="36px" ms="4px" color={textColor} fontWeight="bold" fontSize="14px">
              Enter your email and password to sign in or simply use your connected account
            </Text>
            <Divider />
            <Center h="100px" color="black">
              <Image boxSize="50px" m={4} src={googleLogin} alt="Google" />
              <Image boxSize="50px" m={4} src={facebookLogin} alt="Google" />
              <Image boxSize="50px" m={4} src={linkedInLogin} alt="Google" />
            </Center>
            <Divider />
            <FormControl pt={4}>
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Email
              </FormLabel>
              <Input borderRadius="15px" mb="24px" fontSize="sm" type="text" placeholder="Your email adress" size="lg" />
              <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                Password
              </FormLabel>
              <Input borderRadius="15px" mb="36px" fontSize="sm" type="password" placeholder="Your password" size="lg" />
              <FormControl display="flex" alignItems="center">
                <Switch id="remember-login" colorScheme="blue" me="10px" />
                <FormLabel htmlFor="remember-login" mb="0" ms="1" fontWeight="normal">
                  Remember me
                </FormLabel>
              </FormControl>
              <Button
                fontSize="10px"
                type="submit"
                bg="blue.400"
                w="100%"
                h="45"
                mb="20px"
                color="white"
                mt="20px"
                _hover={{
                  bg: 'blue.200',
                }}
                _active={{
                  bg: 'blue.400',
                }}
              >
                SIGN IN
              </Button>
            </FormControl>
            <Flex flexDirection="column" justifyContent="center" alignItems="center" maxW="100%" mt="0px">
              <Text color={textColor} fontWeight="medium">
                Don't have an account?
                <Text color={titleColor} as="span" ms="5px" fontWeight="bold">
                  <Link to="/signup">Sign up</Link>
                </Text>
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Box display={{ base: 'none', md: 'block' }} overflowX="hidden" h="100%" w="40vw" position="absolute" right="0px">
          <Box
            bgImage={signInImage}
            w="100%"
            h="100%"
            bgSize="cover"
            bgPosition="50%"
            position="absolute"
            borderBottomLeftRadius="20px"
          />
        </Box>
      </Flex>
    </Flex>
  );
}

export default SignIn;
