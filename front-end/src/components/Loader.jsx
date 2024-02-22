import { Spinner, Box } from '@chakra-ui/react';

function Loader() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding={10}
    >
      <Spinner
        thickness="4px"
        speed="0.55s"
        emptyColor="gray.200"
        color="blue.300"
        size="xl"
      />
    </Box>
  );
}

export default Loader;
