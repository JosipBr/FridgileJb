/* written by Josip Brljevic */
import './App.css';
import Recipes from './pages/Recipes';
import { Route, Routes } from 'react-router-dom';
import Breakfast from './pages/Breakfast/Breakfast';
import Lunch from './pages/Lunch/Lunch';
import Dinner from './pages/Dinner/Dinner';
import AllRecipes from './pages/AllRecipes/AllRecipes';
import Products from './pages/Products/Products';
import MissingAndFoundPage from './pages/MissingAndFound/MissingAndFoundPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Recipes />} />
      <Route path='/breakfast' element={<Breakfast />}></Route>
      <Route path='/lunch' element={<Lunch />}></Route>
      <Route path='/dinner' element={<Dinner />}></Route>
      <Route path='/allrecipes' element={<AllRecipes />}></Route>
      <Route path='/products' element={<Products />}></Route>
      <Route path='/recipeproducts' element={<MissingAndFoundPage />}></Route>
    </Routes>
    
  );
}

export default App;
