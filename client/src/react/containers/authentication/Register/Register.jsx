import React from 'react';
import { FormControl, Input } from '@chakra-ui/react';

function Register() {
  return (
    <FormControl>
      <Input id="email" type="email" placeholder="Username" />
    </FormControl>
  );
}

export default Register;
