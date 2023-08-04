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
        loading ? <div className='flex justify-center items-center h-screen'>
          <div
          class="inline-block h-12 text-white font-bold w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status">
          <span
            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
          >Loading...</span
          >
        </div>
        </div>

          : error ? <h2>{error}</h2> : <>
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