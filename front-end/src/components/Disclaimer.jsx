import React, { useState, useContext } from 'react';
import {
  Box,
  Text,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react';

import { AllDetails } from '../Context/AllDetailsContextProvider';

function Disclaimer() {
  const [isOpen, setIsOpen] = useState(true);

  const { isTrue } = useContext(AllDetails);

  const handleClose = event => {
    // Prevent closing the dialog if the click is inside the dialog content
    if (event.target.closest('.chakra-modal__content')) {
      return;
    }

    setIsOpen(false);
  };

  function TextCreater({ heading, para }) {
    return (
      <Text mb={3} color={'#505050'}>
        <Text display="inline" color="#af2b2b" fontWeight={600}>
          {heading}
        </Text>
        {para}
      </Text>
    );
  }
  //  && isTrue
  return (
    <Box width={{ base: '90%', sm: '70%', md: 'max-content' }}>
      {/*  */}
      <AlertDialog isOpen={isOpen && isTrue} onClose={() => {}}>
        <AlertDialogOverlay onClick={handleClose}>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold" color="#af2b2b">
              Disclaimer - Read carefully 📖🔍
            </AlertDialogHeader>

            <AlertDialogBody>
              <hr />
              <hr />
              <hr />
              <TextCreater
                heading="🕒 Time Limit"
                para=": You have 5 minutes for this assessment."
              />
              <TextCreater
                heading="❓Questions Number"
                para=": You have to attempt 5 Questions!"
              />
              <TextCreater
                heading="🎯Selected Skills"
                para=": Questions are based on your selected skills only."
              />
              <TextCreater
                heading="🔒 Mandatory Questions"
                para=": All questions must be attempted."
              />
              <TextCreater
                heading="🚫 Editing Answers"
                para=": Answers cannot be edited once submitted."
              />
              <TextCreater
                heading="⏳ Remaining on Page"
                para=": Stay on this page during the test."
              />
              <TextCreater
                heading="🎉 Joining as a Guest"
                para=": Pass this test to join our challenge as a guest."
              />
              <hr />
              <hr />
              <hr />
              This is a disclaimer message. Do you agree to proceed?
            </AlertDialogBody>

            <AlertDialogFooter>
              {/* <Button onClick={onClose}>Cancel</Button> */}
              <Button
                colorScheme="teal"
                ml={3}
                onClick={() => setIsOpen(false)}
              >
                Agree
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
}

export default Disclaimer;
