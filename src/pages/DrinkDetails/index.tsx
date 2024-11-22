import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, CircularProgress } from '@mui/material';
import axios from 'axios';
import { Drink } from '@/types/drink';
import DrinkContent from './DrinkContent';
import DrinkHeader from './DrinkHeader';


const DrinkDetails = () => {
  const { id } = useParams();
  const [drink, setDrink] = useState<null | Drink>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchDrinkDetails();
  }, [id]);

  const fetchDrinkDetails = async () => {
    setLoading(true);
    try {
      // const response = await axios.get(`API_ENDPOINT/${id}`);
      // Load the drink details from the data/cocktail_recipes.json file
      const response = await axios.get('/data/cocktail_recipes.json');
      // console.log('response', response);
      // const drinkDetails = response.data.find((d: Drink) => d.id === id);
      const drinkDetails = response.data[0]
      setDrink(drinkDetails);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <CircularProgress />
      ) : (
        drink && (
          <Box display="flex" justifyContent="center">
            <Box>
              <Box sx={{ mt: 6 }}>
                <DrinkHeader drink={drink} />
              </Box>
              <Box sx={{ mt: 3 }}>
                <DrinkContent drink={drink} />
              </Box>
            </Box>
          </Box>
        )
      )}
    </div>
  );
};

export default DrinkDetails;