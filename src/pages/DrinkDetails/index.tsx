import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { useSearch } from '../../context/SearchContext';
import DrinkContent from './DrinkContent';
import DrinkHeader from './DrinkHeader';
import NoResult from '@/components/NoResult';
import DefaultLoading from '@/components/DefaultLoading';

const DrinkDetails = () => {
  const { id } = useParams();
  const { fetchDrinkDetails, drinkDetails, drinkDetailsLoading } = useSearch();

  useEffect(() => {
    if (id) {
      fetchDrinkDetails(id);
    }
  }, [id]);

  if (drinkDetailsLoading) {
    return <DefaultLoading />;
  }

  if (!id || !drinkDetails) {
    return <NoResult />;
  }

  return (
    <Box display="flex" justifyContent="center">
      <Box>
        <Box sx={{ mt: 6 }}>
          <DrinkHeader drink={drinkDetails} />
        </Box>
        <Box sx={{ mt: 3 }}>
          <DrinkContent drink={drinkDetails} />
        </Box>
      </Box>
    </Box>
  );
};

export default DrinkDetails;