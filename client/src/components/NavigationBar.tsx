import React from 'react'
import InstagramNameLogo from "../../public/instagram.svg"
import Home from "../../public/Home.svg"
import Messages from "../../public/messages.svg"
import Notifications from "../../public/notifications.svg"
import Search from "../../public/search.svg"
import CreatePost from "../../public/edit.svg"
import LogIN from "../../public/logIn.svg"
import Link from 'next/link'

function NavigationBar() {
    return (
        <div className='m-8 lg:flex'>
            <div>
                <div className='mb-8'>
                    <InstagramNameLogo />
                </div>
                <div className='flex w-40 justify-between mb-4 hover:bg-slate-400 p-2 rounded-full hover:text-black'>
                    <Home />
                    <div>Home</div>
                </div>
                <div className='flex w-40 justify-between mb-4 hover:bg-slate-400 p-2 rounded-full hover:text-black'>
                    <Search />
                    <div>Search</div>
                </div>
                <div className='flex w-40 justify-between mb-4 hover:bg-slate-400 p-2 rounded-full hover:text-black'>
                    <Messages />
                    <div>Messages</div>
                </div>
                <div className='flex w-40 justify-between mb-4 hover:bg-slate-400 p-2 rounded-full hover:text-black'>
                    <Notifications />
                    <div>Notification</div>
                </div>
                <div className='flex w-40 justify-between mb-4 hover:bg-slate-400 p-2 rounded-full hover:text-black'>
                    <CreatePost fill={"white"} width={30} height={30} />
                    <div>Create Post</div>
                </div>
                <div className='flex w-40 justify-between mb-4 hover:bg-slate-400 p-2 rounded-full hover:text-black'>
                    <div className='w-6 rounded-full bg-cyan-400'></div>
                    <div>Profile</div>
                </div>
                <Link href={"/signin"} className='flex w-40 justify-between mb-4 hover:bg-slate-400 p-2 rounded-full hover:text-black'>
                    <LogIN fill={"white"} width={30} height={30} />
                    <div>LogIn/SignUp</div>
                </Link>
            </div>
        </div >
    )
}

export default NavigationBar