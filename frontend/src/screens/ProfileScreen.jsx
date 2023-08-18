import React, { useEffect, useState } from 'react'
import { BiSolidLogIn } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getUserDetails } from '../actions/userAction';
import Loader from '../shared/Loader';
import Message from '../shared/Message';

const ProfileScreen = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [message, setMessage] = useState("")

    const dispatch = useDispatch();

    const userDetails = useSelector((state) => state.userDetails);
    const { loading, error, user } = userDetails;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

     useEffect(() => {
    if (!userInfo) {
     navigate ("/login");
    } else {
      if (!user.name) {
        dispatch(getUserDetails("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [history, userInfo, user, dispatch]);



    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage("  password do not match")
        } else {
            dispatch(register(name, email, password))
        }
    }

    return (
        <div>
          
        </div>
    )
}

export default ProfileScreen