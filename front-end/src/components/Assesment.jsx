import React, { useContext, useEffect, useState } from 'react';
// import questions from './questions';
import { AllDetails } from '../Context/AllDetailsContextProvider';
import Banner from './Banner';

import { Box, Button, Text } from '@chakra-ui/react';
import MCQ from './MCQ';
import Disclaimer from './Disclaimer';
import { useNavigate } from 'react-router-dom';
import Timer from './Timer';
import WarningMsg from './WarningTabSwitching';
import Loader from './Loader';

function Assesment() {
  const redirectToEnding = useNavigate();

  const { userSkills, current } = useContext(AllDetails);

  const [questions, setQuestions] = useState([]);

  const [active, setActive] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmitAssesment = () => {
    redirectToEnding('/thankyou');
  };

  // Fetching the assessment questions from DB
  const getAssessmentQues = async () => {
    setIsLoading(true);

    try {
      let res = await fetch(
        `https://be-interviewiq-hub.onrender.com/guests/assessment`
      );
      let data = await res.json();
      setQuestions(data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  //filtering the Questions according to users skills

  function filterQuestionsBySkills(skills, numQuestions) {
    try {
      const filtered = questions.filter(ques =>
        skills.some(skill => ques.skills.includes(skill))
      );

      // Shuffle the filtered array using the Fisher-Yates shuffle algorithm
      for (let i = filtered.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
      }
      return filtered.slice(0, numQuestions);
    } catch (error) {
      console.log('Error: ', error);
    }
  }

  let numQuestions = 5;
  const getFilterSkills = filterQuestionsBySkills(userSkills, numQuestions);

  document.addEventListener('visibilitychange', handleVisibilityChange);

  // Event handler function
  function handleVisibilityChange() {
    if (document.visibilityState === 'visible') {
      // Document is now visible (tab is active)
      setActive(true);

      // Resume any paused activities or notify the server
    } else {
      // Document is now hidden (tab is inactive)

      setActive(false);
      // Pause animations or take appropriate action
    }
  }

  useEffect(() => {
    getAssessmentQues();
  }, []);

  return (
    <Box>
      <Disclaimer />
      <Banner />
      {!active ? null : <WarningMsg setActive={setActive} />}

      <Text fontSize={30} fontWeight="bold" color="#af2b2b" m={'20px auto'}>
        Assessment Time{' '}
        <Timer
          handleSubmitAssesment={handleSubmitAssesment}
          isLoading={isLoading}
        />
      </Text>
      <hr />
      {isLoading ? (
        <Loader />
      ) : (
        <Box>
          {getFilterSkills.map((que, i) => (
            <MCQ {...que} key={que.id} index={i} marks={current} />
          ))}
        </Box>
      )}

      <hr />
      <Button
        margin={'20px auto '}
        disabled={isLoading}
        onClick={handleSubmitAssesment}
      >
        Submit Assesment
      </Button>
    </Box>
  );
}

export default Assesment;
