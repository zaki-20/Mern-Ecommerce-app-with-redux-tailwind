import React, { useEffect } from 'react'
import ProductScreen from './ProductScreen'
import { listProducts } from "../actions/productActions"
import { useDispatch, useSelector } from 'react-redux';

const HomeScreen = () => {

  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch]);


  return (
    <div >


      {
        loading ? <h2>Loading..</h2> : error ? <h2>{error}</h2> : <> 
        <div className='font-bold text-3xl text-center mt-10 text-white'>
          <h1>Featured Products</h1>
        </div>
          <div className='w-full grid grid-cols-4 gap-4 pt-5 px-5 '>
            {
              products.map((product) => (
                <ProductScreen key={product._id} product={product} />
              ))
            }
          </div></>
      }

    </div>
  )
}

export default HomeScreen