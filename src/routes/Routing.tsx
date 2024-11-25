import { Routes, Route } from 'react-router-dom';
import AllDrinks from '@/pages/AllDrinks';
import DrinkDetails from '@/pages/DrinkDetails';
import SiteLayout from '@/components/SiteLayout';

const Routing = () => {
  return (
    <SiteLayout>
      <Routes>
        <Route path="*" element={<AllDrinks />} />
        <Route path="/drinks/:id" element={<DrinkDetails />} />
      </Routes>
    </SiteLayout>
  );
};

export default Routing;
