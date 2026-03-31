'use client';

import React, { useEffect, useState } from 'react';
import {  Button, Typography } from '@mui/material';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../firebase/firebase';
import { FcGoogle } from "react-icons/fc";
import './signup.css';
import { useRouter } from 'next/navigation';
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import {  googleLogin } from '../redux/slices/authSlice';


export default function Login() {
    const router = useRouter();
    const { enqueueSnackbar } = useSnackbar();
    const dispatch = useDispatch<AppDispatch>();
    const [showPassword, setShowPassword] = useState(false);
    const { loading, isLoggedIn, currentUser, error } = useSelector((state: RootState) => state.auth)


    const googleSign = async () => {
        try {
            const firebaseUser = (await signInWithPopup(auth, googleProvider)).user;
            console.log(firebaseUser)
            const User = {
                fullname: firebaseUser.displayName,
                email: firebaseUser.email,
                firebase_id: firebaseUser.uid,

            }
            await dispatch(googleLogin(User))

        } catch (error: any) {
            console.log(error)
        }

    };
    return (
        <div className="linkedin-page-container">

            <main className="linkedin-card">
                <Typography variant="h2" className="linkedin-heading">
                    Sign in
                </Typography>


                <Button
                    variant="outlined"
                    className="linkedin-btn-secondary"
                    fullWidth
                    disabled={loading}
                    onClick={googleSign}
                >
                    <span style={{ marginRight: '10px' }}>
                        <FcGoogle size={25} />
                    </span>
                    Sign in with Google
                </Button>
            </main>


        </div>
    );
}

