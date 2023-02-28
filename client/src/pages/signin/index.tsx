import React, { useEffect, useState } from 'react'
import SignInComponent from '../../components/SigninComponent'
import { useRouter } from "next/router"
import { useSelector } from 'react-redux';
import { useCookies } from "react-cookie"
import { NextPageContext } from 'next';
import Cookie from "js-cookie"

function SignUp() {
    const router = useRouter();
    const [role, setrole] = useState("user")
    // const userState: UserState = useSelector((state: RootState) => state.user);
    const [cookie, setCookie] = useCookies(["cookieToken"])

    const checkToken = async () => {
        if (cookie.cookieToken) {
            router.replace("/")
        }
        const { role } = router.query;
        if (role == "") {
            router.push("/notfound")
        }
    }

    useEffect(() => {
        checkToken()
    }, [cookie])


    return (
        <div className='flex justify-center items-center bg-gradient-to-r from-purple-600 to-blue-600 w-full h-screen'>
            <SignInComponent role={role} />
        </div>
    )
}

SignUp.getInitialProps = async ({ req, res }: NextPageContext) => {
    return {
        data: ""
    }
}

export default SignUp