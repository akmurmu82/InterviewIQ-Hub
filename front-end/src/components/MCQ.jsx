import React, { useEffect, useState, useRef, useContext } from 'react';
import { Box, Text, Stack, Radio, Button } from '@chakra-ui/react';
import { AllDetails } from '../Context/AllDetailsContextProvider';
import useTotalMarks from './helper/setTotalMarks';

function MCQ({ index, question, options, answer, active }) {
  const [selectedOption, setSelectedOption] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const { updateTotalMarks } = useTotalMarks();

  const checkAnswerRef = useRef(null);

  let { handleMarks } = useContext(AllDetails);

  const handleOptionChange = option => {
    setSelectedOption(option);
  };

  const handleSubmit = () => {
    setIsCorrect(selectedOption === answer);

    setIsAnswered(true);
  };

  useEffect(() => {
    if (isAnswered) {
      checkAnswerRef.current.style.color = isCorrect ? 'teal' : 'red';
      handleMarks.current = isCorrect ? 1 : 0;
    }
    if (selectedOption === answer) {
      updateTotalMarks();
    }
  }, [isAnswered, isCorrect]);
  return (
    <Box>
      <hr />
      <Box p={4} textAlign={'left'}>
        <Text fontSize="xl" ref={checkAnswerRef}>
          {index + 1}. {question}
        </Text>
        <Stack spacing={2} mt={4}>
          {options.map((option, index) => (
            <Radio
              width={'max-content'}
              maxWidth={'80%'}
              key={index}
              isChecked={selectedOption === option}
              onChange={() => handleOptionChange(option)}
              isDisabled={isAnswered}
              _hover={{ textDecoration: 'underline' }}
            >
              {option}
            </Radio>
          ))}
        </Stack>
        <Button
          mt={4}
          colorScheme="teal"
          onClick={handleSubmit}
          disabled={isAnswered}
          cursor={isAnswered ? 'not-allowed' : 'pointer'}
        >
          Submit {isAnswered && (isCorrect ? '✅' : '❌')}
        </Button>
      </Box>
    </Box>
  );
}

export default MCQ;
