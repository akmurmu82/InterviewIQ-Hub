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
import useTotalMarks from './helper/setTotalMarks';

function WarningMsg({ setActive }) {
  const [isOpen, setIsOpen] = useState(true);
  const { marksRef } = useTotalMarks();

  const { isTrue } = useContext(AllDetails);

  const handleClose = event => {
    // Prevent closing the dialog if the click is inside the dialog content
    if (event.target.closest('.chakra-modal__content')) {
      return;
    }

    setIsOpen(false);
    setActive(true);
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
              ⚠️🚫 Prohibited
            </AlertDialogHeader>

            <AlertDialogBody>
              <hr />
              <TextCreater
                heading="⚠️ Welcome back! "
                para="Please note that leaving the assessment again will result in loss of progress. Please ensure to complete the assessment in one session to avoid any issues."
              />
              This is a warning message. Do you agree to proceed?
            </AlertDialogBody>

            <hr />
            <AlertDialogFooter>
              {/* <Button onClick={onClose}>Cancel</Button> */}
              <Button
                colorScheme="teal"
                ml={3}
                onClick={() => {
                  if (isOpen) {
                    marksRef.current = 0;
                  }
                  setIsOpen(false);
                }}
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

export default WarningMsg;
