import React, { useEffect } from 'react'
import { BsFillCartFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { MdDelete } from "react-icons/md";
import Message from "../shared/Message"


const CartScreen = () => {

    const { id } = useParams()
    const location = useLocation()
    const qty = location.search ? Number(location.search.split("=")[1]) : 1;
    const dispatch = useDispatch()

    useEffect(() => {
        if (id) {
            dispatch(addToCart(id, qty))
        }
    }, [dispatch, id, qty])

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

  
    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
      };
    

    return (
        <div className=''>
            <div class="h-screen bg-gray-100 pt-20">
            <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>

                {cartItems.length === 0 ? (
                    <Message>Your Cart is Empty!</Message>
                ): (
                    <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                        <div className="">
    
                            {cartItems.map(pr => (
                                <div class="rounded-lg md:w-full  ">
                                    <div class="justify-between mb-2 h-[150px] rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
    
                                        <img src={pr.image} alt="product-image" class="w-full rounded-lg sm:w-40" />
                                        <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                            <div class="mt-5 sm:mt-0">
                                                <h2 class="text-lg font-bold text-gray-900">{pr.name}</h2>
                                                <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
                                            </div>
                                            <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                                <div class="flex items-center border-gray-100">
                                                    <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                                                    <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={pr.qty} min="1" />
                                                    <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                                                </div>
                                                <div class="flex items-center space-x-4">
                                                    <p class="text-sm">$ {pr.price} </p>
                                                    <MdDelete  onClick={() => removeFromCartHandler(pr.product)}className='text-red-700' size={25} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
    
                                </div>
                            ))}
                        </div>
                        <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                            <div class="mb-2 flex justify-between">
                                <p class="text-gray-700">Subtotal</p>
                                <p class="text-gray-700">$00</p>
                            </div>
                            {/* <div class="flex justify-between">
                                 <p class="text-gray-700">Shipping</p>
                                 <p class="text-gray-700">$4.99</p>
                             </div> */}
                            <hr class="my-4" />
                            <div class="flex justify-between">
                                <p class="text-lg font-bold">Total {cartItems.reduce((acc, items) => acc + items.qty, 0)} items</p>
                                <div class="">
                                    <p class="mb-1 text-lg font-bold">$ 
                                        {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)} USD
                                    </p>
                                </div>
                            </div>
                            <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
                        </div>
                    </div>
                )
            }
              


            </div>
        </div>
    )
}

export default CartScreen