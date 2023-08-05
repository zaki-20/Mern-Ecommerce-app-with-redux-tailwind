import React, { useEffect, useState } from 'react'
import Rating from '../components/Rating';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetail } from "../actions/productActions"
import Loader from '../shared/Loader';
import Message from '../shared/Message';


const ProductDetail = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { id } = useParams();
    const [qty, setQty] = useState(1)



    const productDetail = useSelector((state) => state.productDetails)
    const { loading, error, product } = productDetail

  

    useEffect(() => {
        dispatch(listProductDetail(id))
    }, [dispatch]);


    const addToCartHandler = () => {
        navigate(`/cart/${id}/?qty=${qty}`)
    }

    return (

        <>

            {loading ? <Loader /> : error ? <Message /> : <div className="container px-5 py-16 mx-auto">
                <button className=' px-3 py-2 group  bg-gradient-to-r from-blue-500 to-purple-600 ease-in duration-200 rounded-md shadow-md transform hover:scale-105'>
                    <Link to="/" className='flex items-center gap-2 text-white'>
                        <BiArrowBack className='group-hover:text-xl group-hover:text-red-700 group-hover:font-bold duration-500' />
                        <span className=''>Go Back</span>
                    </Link>
                </button>
                <div className="lg:w-4/5 mx-auto flex jus">
                    <img
                        alt="ecommerce"
                        className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200 shadow-lg"
                        src={product.image}
                    />
                    <div className="lg:w-1/2 w-full px-5 lg:py-6 mt-6 lg:mt-0 border border-gray-200  " >
                        <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
                            {product.brand}
                        </h2>

                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                            {product.name}
                        </h1>
                        <Rating value={product.rating} text={`${product.numReviews} Reviews`} className="animate-pulse" />
                        <p className="leading-relaxed mt-1">
                            {product.description}
                        </p>

                        {product.counterStock > 0 && (
                            <div className='flex justify-between items-center'>
                                <label className="title-font font-medium text-xl text-gray-900  ">Quantity:</label>
                                <select
                                    className="custom-select block w-24 mt-2 bg-gray-700 border border-gray-300  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md text-white px-4 "
                                    value={qty}
                                    onChange={(e) => setQty(e.target.value)}
                                >
                                    {[...Array(product.counterStock).keys()].map((num) => (
                                        <option key={num + 1} value={num + 1}>
                                            {num + 1}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}

                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">

                        </div>
                        <div className="flex justify-between items-center gap-5">
                            <span className="title-font font-medium text-2xl text-gray-900">
                                {`Price`}
                            </span>
                            <span className="title-font font-medium text-2xl text-gray-900">
                                {`$${product.price}`}
                            </span>

                        </div>
                        <div className="flex justify-between items-center gap-5 mt-2">
                            <span className="title-font font-medium text-2xl text-gray-900" >
                                {'Status'}
                            </span>
                            <span className={product.counterStock <= 0 ? `title-font font-medium text-2xl text-red-800` : `title-font font-medium text-2xl text-green-900`}   >
                                {product.counterStock > 0 ? `In Stock` : `Out Of Stock`}
                            </span>

                        </div>


                        <div className="flex justify-between items-center mt-5">
                            <button onClick={addToCartHandler} className="w-full  text-white bg-gradient-to-r from-blue-500 to-purple-600 border-0 py-2 px-6  focus:outline-none hover:bg-red-500 duration-500 rounded shadow-md transform hover:scale-105">
                                Add To Cart
                            </button>

                        </div>


                    </div>
                </div>
            </div>}
        </>


    )
}

export default ProductDetail