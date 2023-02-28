import axios from 'axios'
import React, { useState, useRef, useEffect } from 'react'
import styles from "../styles/SignUp.module.css"
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Login, queryClient, SignUp } from "../api"
import { useAccessTokenStore, userStore, useUserStore } from '@/components/store'

function SignInComponent({ role }: { role: string }) {
    const [signIn, setSignIn] = useState(true)
    const [error, seterror] = useState(false)
    const [errMessage, seterrMessage] = useState("")
    const [success, setsuccess] = useState(false)
    const username = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    // const dispatch = useDispatch()
    const router = useRouter()
    const accessToken = useAccessTokenStore((state: any) => state.access_token);
    const setAccessToken = useAccessTokenStore((s: any) => s.setAccessToken);
    const addUser = useUserStore((s: userStore) => s.addUser);
    const user = useUserStore((s: userStore) => s.user);

    function SetMessage(message: string, type: boolean) {
        if (type) {
            setsuccess(true);
            setTimeout(() => {
                setsuccess(false)
            }, 3000);
        } else {
            seterror(true)
            seterrMessage(message)
            setTimeout(() => {
                seterror(false)
            }, 3000);
        }
    }

    const handleSubmit = async () => {
        const usern = (username.current != null && username.current!.value != null) ? username.current!.value : "";
        const e = (email.current != null && email.current!.value != null) ? email.current!.value : "";
        const pass = (password.current != null && password.current!.value != null) ? password.current!.value : "";

        if (e == "" || pass == "") {
            SetMessage("All fields are required!", false);
            return
        }

        if (signIn) {
            try {
                var { login } = await queryClient.fetchQuery("login", () => Login({ email: e, password: pass }));
                setAccessToken(login!["access_token"]);
                addUser(login!["user"]!);
                router.push("/")
            } catch (error) {

            }
        } else {
            const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/user`, {
                username: usern,
                email: e,
                password: pass,
                role: role
            }, {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(({ data }) => {
                SetMessage("", true)

                localStorage.setItem("user", JSON.stringify(data))
                // dispatch(setUserData({ id: parseInt(data.id), email: data.email, access_token: data.access_token, username: data.username, photo: data.photo }))
                router.push("/")
            }).catch(err => {
                console.log(err)
                if (err.response.status == 403) {
                    SetMessage("Username and Email should be unique.", false)
                } else if (err.response.status == 400) {
                    SetMessage("All the fields are compulsory", false)
                }
            })
        }
    }

    return (
        <div className={`${styles.signup} text-black flex flex-col justify-center items-center m-4 bg-blend-exclusion bg-gray-400 p-4 w-1/2`} >
            <div className=' font-semibold mb-2'>
                {!signIn ? "Sign Up" : "Sign In"}
            </div>

            <div className='flex flex-col w-full'>
                {!signIn && <div className='flex flex-col mb-2'>
                    <label htmlFor="username" className='mb-2'>Username :</label>
                    <input type="text" id='username' ref={username} className='p-2 rounded-lg outline-none' placeholder='Please enter your Username.' />
                </div>}
                <div className='flex flex-col mb-2'>
                    <label htmlFor="username" className='mb-2'>Email :</label>
                    <input type="text" id='username' ref={email} className='p-2 rounded-lg outline-none' placeholder='Please enter your email.' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="username" className='mb-2'>Password :</label>
                    <input type="text" id='username' ref={password} className='p-2 rounded-lg outline-none' placeholder='Please enter your password.' />
                </div>

                {error && <p className='text-sm text-red-900 my-4'>{errMessage}</p>}
                {success && <p className='text-sm text-green-600 my-4'>Signed up successfully</p>}

                <div className='flex mt-4'>
                    <p>Create Account ?</p>
                    <input onChange={() => setSignIn(!signIn)} className='ml-4' type="checkbox" name="signIn" id="signIn" />
                </div>

                <button onClick={handleSubmit} className={`mt-4 p-2 bg-green-700 rounded-lg`}>Submit</button>
            </div>
        </div >
    )
}

export default SignInComponent