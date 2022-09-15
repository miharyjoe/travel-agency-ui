import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
  } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/NavBar';
import { useDataProvider } from '../../config/ApiContext';


  export default function Login() {
    const { login , instance}= useDataProvider();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [roles, setRoles] = useState('');

    const handleChange = event => {
      setEmail(event.target.value);
  
      console.log('value is:', event.target.value);
    };
    const handleChangeP = event => {
      setPassword(event.target.value);
  
      console.log('value is:', event.target.value);
    };
    const handleChangeR = event => {
      setRoles(event.target.value);
  
      console.log('value is:', event.target.value);
    };
    const click = () =>  {

    }
    useEffect(() => {
      login(email,password,roles);
  }, []);
    return (
      <>
      <Navbar/>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'2xl'}>Sign in to your account</Heading>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={handleChange}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" onChange={handleChangeP}/>
            </FormControl>
            <FormControl id="roles">
              <FormLabel>Roles</FormLabel>
              <Input type="text" onChange={handleChangeR} />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.500'}>Forgot password?</Link>
              </Stack>
              <Button colorScheme={'blue'} variant={'solid'} onClick={login}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'contain'}
            src=
              'https://images.pexels.com/photos/7891883/pexels-photo-7891883.jpeg?auto=compress&cs=tinysrgb&w=600'
            
          />
        </Flex>
      </Stack>
      <Footer/>
      </>
    );
  }
  