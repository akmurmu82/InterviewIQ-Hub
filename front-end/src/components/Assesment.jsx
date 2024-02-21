import React, { useContext, useEffect, useState } from 'react';
// import questions from './questions';
import { AllDetails } from '../Context/AllDetailsContextProvider';
import Banner from './Banner';

import { Box, Button, Text } from '@chakra-ui/react';
import MCQ from './MCQ';

function Assesment() {
  const { userSkills } = useContext(AllDetails);

  const [questions, setQuestions] = useState([]);

  const handleSubmitAssesment = () => {};

  // Fetching the assessment questions from DB
  const getAssessmentQues = async () => {
    let res = await fetch(
      `https://be-interviewiq-hub.onrender.com/guests/assessment`
    );
    let data = await res.json();
    setQuestions(data.data);
    // return data.data;
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
      console.log('filtered: ', filtered);
      return filtered.slice(0, numQuestions);
    } catch (error) {
      console.log('Error: ', error);
    }
  }

  let numQuestions = 5;
  const getFilterSkills = filterQuestionsBySkills(userSkills, numQuestions);

  console.log('filtered que', getFilterSkills);
  console.log('filtered que', userSkills);

  useEffect(() => {
    getAssessmentQues();
  }, []);

  return (
    <Box>
      <Banner />
      <Text fontSize={30} fontWeight="bold">
        Assesment
      </Text>
      <hr />
      <Box>
        {getFilterSkills.map((que, i) => (
          <MCQ {...que} key={que.id} index={i} />
        ))}
      </Box>
      <hr />
      <Button margin={'20px auto '} onClick={handleSubmitAssesment}>
        Submit Assesment
      </Button>
    </Box>
  );
}

export default Assesment;
// component for creating a MCQ que with 4 options - create
// this component should render with array method and in array lot's of ques with mcqs are presents
// use filter process according to user skills
