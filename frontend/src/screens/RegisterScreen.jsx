import React, { useEffect, useState } from 'react'
import { BiSolidLogIn } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { register } from '../actions/userAction';
import Loader from '../shared/Loader';
import Message from '../shared/Message';

const RegisterScreen = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [message, setMessage] = useState("")

    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split("=")[1] : '/';


    const userRegister = useSelector(state => state.userRegister)
    const { loading, error, userInfo } = userRegister

    useEffect(() => {
        if (userInfo) {
            navigate(redirect)
        }
    }, [redirect, navigate, userInfo])



    const submitHandler = (e) => {
        e.preventDefault()
        if(password !== confirmPassword){
            setMessage("password do not match")
        }else{
            dispatch(register(name, email, password))
        }
    }

    return (
        <div>
            <section class="h-full bg-white">
                <div class="h-full">
                    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                            <BiSolidLogIn size={50} className='mx-auto' />
                            {/* <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" /> */}
                            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up to your account</h2>
                        </div>

                        {loading && <Loader />}
                        {error && <Message>{message}</Message>}
                        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form class="space-y-6" onSubmit={submitHandler}>
                                <div>
                                    <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
                                    <div class="mt-2">
                                        {/* email input */}
                                        <input id="name" name="name" type="text" value={name} required onChange={(e) => setName(e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div>
                                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                    <div class="mt-2">
                                        {/* email input */}
                                        <input id="email" name="email" type="email" value={email} required onChange={(e) => setEmail(e.target.value)}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div>
                                    <div class="flex items-center justify-between">

                                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                        <div class="text-sm">
                                            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                        </div>
                                    </div>
                                    <div class="mt-2">
                                        {/* password input */}
                                        <input id="password" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div>
                                    <div class="flex items-center justify-between">

                                        <label for="cpassword" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                       
                                    </div>
                                    <div class="mt-2">
                                        {/* password input */}
                                        <input id="cpassword" name="cpassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>

                                <div>
                                    <button  type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
                                </div>
                            </form>

                            <p class="mt-10 text-center text-sm text-gray-500">
                                already have an accont?
                                <Link to={`/login`} class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign In</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default RegisterScreen