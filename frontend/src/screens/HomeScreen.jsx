import React, { useEffect } from 'react'
import ProductScreen from './ProductScreen'
import { listProducts } from "../actions/productActions"
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../shared/Loader';
import Message from '../shared/Message';

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
        loading ? <Loader />

          : error ? <div className='my-4 max-w-[1240px] mx-auto' ><Message>{error}</Message></div> : <>
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