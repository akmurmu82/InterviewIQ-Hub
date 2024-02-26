import { useContext } from 'react';
import { AllDetails } from '../../Context/AllDetailsContextProvider';

const useTotalMarks = () => {
  const { handleMarks, marksRef } = useContext(AllDetails);

  const updateTotalMarks = () => {
    console.log('marksRef: ', marksRef);

    if (marksRef.current === 5) {
      marksRef.current = 0;
    }

    marksRef.current =
      handleMarks.current == 1 && marksRef.current < 5
        ? marksRef.current + 1
        : marksRef.current;
  };

  return { updateTotalMarks, marksRef };
};

export default useTotalMarks;
