import { Box, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';

function Timer({ handleSubmitAssesment }) {
  const [minutes, setMinutes] = useState(4);
  const [seconds, setSeconds] = useState(59);

  useEffect(() => {
    const secondsInterval = setInterval(() => {
      if (seconds === 0) {
        setSeconds(59);

        setMinutes(prevMinutes => prevMinutes - 1);
      } else {
        setSeconds(prevSeconds => prevSeconds - 1);
      }
    }, 1000);

    return () => {
      clearInterval(secondsInterval);
    };
  }, [seconds]);

  if (minutes === 0 && seconds === 0) {
    handleSubmitAssesment();
  }

  return (
    <Box>
      <Text color={minutes === 0 ? '#af2b2b' : 'teal'}>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </Text>
    </Box>
  );
}

export default Timer;
