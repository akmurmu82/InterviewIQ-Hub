import {
  Box,
  FormControl,
  Input,
  Checkbox,
  Text,
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  RadioGroup,
  Radio,
  Stack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import React, { useState, useContext, useReducer, useEffect } from 'react';
import { AllDetails } from '../Context/AllDetailsContextProvider';
import useTotalMarks from './helper/setTotalMarks';

const GUEST_REGISTER_API =
  'https://be-interviewiq-hub.onrender.com/guests/register';

let initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNo: '',
  techStack: [],
  englishFluency: 0,
  marks: 0,
};

let adminEmail = 'admin@dashboard.panel';

let adminState = {
  firstName: 'Admin',
  lastName: 'Dashboard',
  email: adminEmail,
};

function reducer(state, { type, payload }) {
  switch (type) {
    case 'firstName': {
      return {
        ...state,
        firstName: payload,
      };
    }
    case 'lastName': {
      return {
        ...state,
        lastName: payload,
      };
    }
    case 'email': {
      return {
        ...state,
        email: payload,
      };
    }
    case 'phoneNo': {
      return {
        ...state,
        phoneNo: payload,
      };
    }
    case 'set_skills': {
      return {
        ...state,
        techStack: payload,
      };
    }
    case 'set_fluency': {
      return {
        ...state,
        englishFluency: payload,
      };
    }
    case 'set_marks': {
      return {
        ...state,
        marks: payload,
      };
    }
    default: {
      throw new Error('Invalid');
    }
  }
}

function Form() {
  const { setIsTrue, setUserSkills, isAdmin, setIsAdmin, emailRef } =
    useContext(AllDetails);
  const navigate = useNavigate();

  const [formData, dispatch] = useReducer(reducer, initialState);

  const [selectedSkills, setSelectedSkills] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const [value, setValue] = useState('0');

  const [errors, setErrors] = useState({
    email: '',
    phoneNo: '',
  });
  const { marksRef } = useTotalMarks();

  async function userRegister() {
    try {
      const name = `${formData.firstName} ${formData.lastName}`;
      const bodyData = {
        name,
        ...formData,
      };
      const fetchTheData = await fetch(GUEST_REGISTER_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyData),
      });
    } catch (error) {
      console.log('error', error);
    }
  }

  useEffect(() => {
    // Update techStack in formData whenever selectedSkills changes
    dispatch({ type: 'set_skills', payload: selectedSkills });
    dispatch({ type: 'set_marks', payload: marksRef.current });
    emailRef.current = formData.email;

    if (
      formData.email === adminState.email &&
      formData.firstName === adminState.firstName &&
      formData.lastName === adminState.lastName
    ) {
      setIsAdmin(true);
    }
  }, [
    selectedSkills,
    formData.email,
    formData.firstName,
    formData.lastName,
    setIsAdmin,
    marksRef.current,
  ]);

  const handleCheckboxChange = skill => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
    // Update the techStack in the form state
    dispatch({ type: 'set_skills', payload: selectedSkills });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (selectedSkills.length >= 2 && value !== '0') {
      if (isAdmin) {
        navigate('/admin');
      } else {
        // Proceed with form submission or other action
        setUserSkills(selectedSkills);
        setIsTrue(true);
        userRegister();
        navigate('/assessment');
      }
    } else {
      setIsOpen(true);
    }
  };

  const handleFluencyChange = newValue => {
    setValue(newValue);
    dispatch({ type: 'set_fluency', payload: newValue });
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Box width={{ base: '90%', md: '80%' }} margin="20px auto">
      <form>
        <FormControl>
          <Box
            display={{ base: 'grid', md: 'flex' }}
            mb={5}
            gap={{ base: 3, md: 3 }}
          >
            <Input
              type="text"
              placeholder="First Name"
              name="firstName"
              borderColor={'#bbb'}
              onChange={e => {
                dispatch({ type: e.target.name, payload: e.target.value });
              }}
              required
            />
            <Input
              type="text"
              placeholder="Last Name"
              name="lastName"
              borderColor={'#bbb'}
              onChange={e => {
                dispatch({ type: e.target.name, payload: e.target.value });
              }}
              required
            />
          </Box>
        </FormControl>
        <FormControl>
          <Input
            type="email"
            placeholder="Enter Email"
            name="email"
            mb={5}
            borderColor={'#bbb'}
            onChange={e => {
              dispatch({ type: e.target.name, payload: e.target.value });

              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!emailRegex.test(e.target.value)) {
                setErrors(prevErrors => ({
                  ...prevErrors,
                  email: 'Please enter a valid email address',
                }));
              } else {
                setErrors(prevErrors => ({ ...prevErrors, email: '' }));
              }
            }}
            required
          />
          {errors.email && (
            <Text color="red.500" fontSize="sm">
              {errors.email}
            </Text>
          )}
        </FormControl>
        <FormControl>
          <Input
            type="number"
            name="phoneNo"
            placeholder="Ex. +918736839401 - Enter Phone Number (including country code)"
            borderColor={errors.phoneNo ? 'red.500' : '#bbb'}
            onChange={e => {
              dispatch({ type: e.target.name, payload: e.target.value });

              // Validate phone number format
              const phoneRegex = /^\+[0-9]{1,3}[0-9]{5,14}$/;
              if (!phoneRegex.test(e.target.value)) {
                setErrors(prevErrors => ({
                  ...prevErrors,
                  phoneNo:
                    'Please enter a valid phone number with country code (do refer placeholder example)',
                }));
              } else {
                setErrors(prevErrors => ({ ...prevErrors, phoneNo: '' }));
              }
            }}
            required
          />
          {errors.phoneNo && (
            <Text color="red.500" fontSize="sm">
              {errors.phoneNo}
            </Text>
          )}
        </FormControl>
        <Box
          margin="20px auto"
          textAlign={'left'}
          border={'1px solid #bbb'}
          borderRadius={5}
          p={2}
        >
          <Text fontSize="16px" textAlign="left" color="#3a3e48">
            💡Select your Skills (Min - 2):
          </Text>
          <Box
            display={{ base: 'grid', lg: 'flex' }}
            gap={6}
            padding={2}
            color="#3a3e48"
          >
            <Checkbox
              colorScheme="green"
              onChange={() => handleCheckboxChange('HTML')}
            >
              HTML
            </Checkbox>
            <Checkbox
              colorScheme="green"
              onChange={() => handleCheckboxChange('CSS')}
            >
              CSS
            </Checkbox>
            <Checkbox
              colorScheme="green"
              onChange={() => handleCheckboxChange('JavaScript')}
            >
              JavaScript
            </Checkbox>
            <Checkbox
              colorScheme="green"
              onChange={() => handleCheckboxChange('Advanced Js')}
            >
              Advanced Js
            </Checkbox>
            <Checkbox
              colorScheme="green"
              onChange={() => handleCheckboxChange('React (Basic)')}
            >
              React (Basic)
            </Checkbox>
          </Box>
        </Box>

        <Box
          margin="10px auto"
          textAlign={'left'}
          border={'1px solid #bbb'}
          borderRadius={5}
          p={2}
        >
          <Text fontSize="16px" textAlign="left" mb={3} color="#3a3e48">
            💬 Select your English Fluency Level:
          </Text>
          <RadioGroup onChange={handleFluencyChange} value={value}>
            <Stack direction={{ base: 'column', lg: 'row' }}>
              <Radio value="1">Begginer</Radio>
              <Radio value="2">Intermediate</Radio>

              <Radio value="3">Advanced</Radio>
            </Stack>
          </RadioGroup>
        </Box>
        <Button
          type="submit"
          onClick={handleSubmit}
          disabled={selectedSkills.length < 2 || value === '0'}
        >
          {isAdmin ? 'Welcome Admin' : 'Submit & Start Assessment'}
        </Button>
      </form>
      <AlertDialog isOpen={isOpen} onClose={handleClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Select Skills & English Level
            </AlertDialogHeader>
            <AlertDialogBody>Please do fill all requirements.</AlertDialogBody>
            <AlertDialogFooter>
              <Button colorScheme="blue" onClick={handleClose}>
                OK
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
}

export default Form;
