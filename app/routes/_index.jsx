import { chakra } from "@chakra-ui/react";
import { 
  Box,
  Text, 
  Center, 
  Card, CardHeader, CardBody, CardFooter,
  Heading,
  Button, 
  FormControl, FormLabel, Input, FormHelperText, FormErrorMessage } from '@chakra-ui/react'
import ValidateInput from "../components/validation";
import React from 'react';

import Add_account from "../db/db_working";



export const meta = () => {
  return [
    { title: "Aims Roller" },
    { name: "description", content: "Welcome to Aims Roller!" },
  ];
};



export default function Index() {
  let isLoginError;
  let isEmailError;
  let isPasswordError;
  let isSubmitErrors;
  
  
  const [login, setLogin] = React.useState('');
  const handleLogin = (event) => setLogin(event.target.value);

  const [email, setEmail] = React.useState('');
  const handleEmail = (event) => setEmail(event.target.value);

  const [password, setPassword] = React.useState('');
  const handlePassword = (event) => setPassword(event.target.value);

  const [submit, setSubmit] = React.useState('');
  function handleSubmit (){
    if (!login || isLoginError!='') {
      isSubmitErrors='error';
    } else if (!email || isEmailError!=''){
      isSubmitErrors='error';
    } else if (!password || isPasswordError!=''){
      isSubmitErrors='error';
    }
    setSubmit(Add_account(login, email, password));
    if (submit){
      isSubmitErrors=submit;
    }
  };


  
  if (ValidateInput({login:login})==='OK') {
    isLoginError = '';
  } else {
    isLoginError = ValidateInput({login:login});
  }
  console.log(ValidateInput({login:login}));
  
  if (ValidateInput({email:email})==='OK') {
    isEmailError = '';
  } else {
    isEmailError = ValidateInput({email:email});
  }

  if (ValidateInput({password:password})==='OK') {
    isPasswordError = '';
  } else {
    isPasswordError = ValidateInput({password:password});
  }
  
  
 
  //console.log(validChecking);
  console.log(login);
  console.log(isLoginError);

  console.log(email);

  console.log(password);
 
  

  return (
    <Box w='100%' h='700px' bgGradient='linear(to-r, gray.300, yellow.400, pink.200)' >
      <Center>
        <Card background='#E8C64D' boxShadow='dark-lg' border="none" borderRadius="6px" alignItems="center" m={[2,6,12]}>
          <CardHeader>
            <Heading textTransform='uppercase' fontSize = 'xl'>Authorization</Heading>
          </CardHeader>
          <CardBody>
            <FormControl alignItems="center" isInvalid={isLoginError}>
              <FormLabel>Login</FormLabel>
              <Input 
              
                placeholder='Login'
                focusBorderColor='grey'
                size='lg' 
                variant='filled'
                opacity='60%'
                onChange={handleLogin}
                value={login}
              />
              {isLoginError ?(
              <FormErrorMessage>{isLoginError}</FormErrorMessage>):(
              <FormHelperText> </FormHelperText>)}
              
              </FormControl>
              <FormControl isInvalid={isEmailError}>
              <FormLabel>Email address</FormLabel>
              <Input 
                
                placeholder='email'
                focusBorderColor='grey'
                type='email' 
                size='lg' 
                variant='filled'
                opacity='60%'
                onChange={handleEmail}
                value={email}
              />
              {isEmailError ?(
              <FormErrorMessage>{isEmailError}</FormErrorMessage>):(
              <FormHelperText> </FormHelperText>)}
              </FormControl>
              <FormControl isInvalid={isPasswordError}>
              <FormLabel>Password</FormLabel>
              <Input 
                
                placeholder='password'
                focusBorderColor='grey'
                type='password' 
                size='lg' 
                variant='filled'
                opacity='60%'
                onChange={handlePassword}
                value={password}
              />
              {isPasswordError ?(
              <FormErrorMessage>{isPasswordError}</FormErrorMessage>):(
              <FormHelperText> </FormHelperText>)}
            </FormControl>
            <FormControl isInvalid={isSubmitErrors}>
              <Center>
                <Button colorScheme='blackAlpha' 
                  m={2}
                  onClick={handleSubmit}>Submit
                </Button>
              </Center> 
              {isSubmitErrors ?(
              <FormErrorMessage>{isSubmitErrors}</FormErrorMessage>):(
              <FormHelperText> </FormHelperText>)}
            </FormControl>
          </CardBody>
          <CardFooter>
          </CardFooter>
        </Card>
      </Center>
    </Box>
  );
}
