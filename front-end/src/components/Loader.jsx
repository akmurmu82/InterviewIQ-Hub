import { Spinner, Box, Text } from '@chakra-ui/react';
import { AllDetails } from '../Context/AllDetailsContextProvider';
import { useContext } from 'react';

function Loader() {
  const { isAdmin } = useContext(AllDetails);
  return (
    <>
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
      <Text fontSize={20}>
        {isAdmin
          ? 'Abey Wait karrr'
          : "Please Wait...It's just take 2 minutes..."}
      </Text>
    </>
  );
}

export default Loader;
