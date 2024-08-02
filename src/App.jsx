import { useEffect, useState } from 'react'
import './App.css'
import SingleProductItem from './components/SingleProductItem';
import { Grid} from '@mui/material';
import SingleProductDialog from './components/SingleProductDialog';
import { useContext } from 'react';
import { AppGlobalContext } from './contexts/AppGlobalState';

function App() {

  const [productsList, setProductsList] = useState([]);
  const [count, setCount] = useState(0);
  const { setOpen, setSingleProductItem } = useContext(AppGlobalContext);
  
  // Get Products
  async function getProducts(){
    const apiResponse = await fetch('https://dummyjson.com/products');
    const result = await apiResponse.json();
    setProductsList(result.products);
  }

  // Execute when App Loads
  useEffect( () => {
    console.log("First Time")
  }, [])

  // Execute when count > 5
  useEffect( () => {
    if(count > 5){
      console.log("Hi Count > 5")
    }
  }, [count])

  const handleCount = () => {
    setCount( count + 1 )
  }

  // Handle Single Product Click
  const handleProductDetailsClick = (singleProduct) => {
    setOpen(true);
    setSingleProductItem(singleProduct);
  }

  return (
    <>
      <button onClick={handleCount}>Increase Count {count}</button>
      <button onClick={getProducts}>Load Products</button>
      {
        <Grid container spacing={2}>
          {productsList.map(singleProduct => (
            <Grid item xs={12} sm={6} md={4} key={singleProduct.id}>
                <SingleProductItem product={singleProduct} btnEvent={handleProductDetailsClick}/>
            </Grid>
          ))}
        </Grid>
      }

      {/* Dialog Component */}
      <SingleProductDialog />
    </>
  )
}

export default App
