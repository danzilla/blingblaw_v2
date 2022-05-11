import React from 'react';
import {
  Text,
  Code,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  FormControl,
  Stack,
} from '@chakra-ui/react';

function PasswordInput() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <FormControl>
      <Stack spacing={4}>
        <InputGroup size="lg">
          <Input id="userName" type="text" placeholder="Username" />
        </InputGroup>
        <InputGroup size="lg">
          <Input
            id="password"
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </Stack>
    </FormControl>
  );
}

function Login() {
  return (
    <>
      <Text>
        Edit
        <Code fontSize="xl">src/Login.js</Code>
        and save to reload.
      </Text>
      <PasswordInput />
    </>
  );
}

export default Login;
