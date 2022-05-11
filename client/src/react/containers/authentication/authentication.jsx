import React from 'react';
import {
  ChakraProvider, Box, VStack, Grid, theme,
} from '@chakra-ui/react';
import ColorModeSwitcher from '../../ColorModeSwitcher';

import Login from './Login/Login';
import Register from './Register/Register';

function Authentication() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Login />
            <Register />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default Authentication;
