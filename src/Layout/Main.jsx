import React from 'react';
import './Main.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import Navbar from '../Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
        }, 1000)
    }, [])

    return (
        <div >
            {
                loader ?
                    <div className="flex justify-center items-center h-screen">
                        <ClipLoader color="#0000ff" size="50" loader={loader} />
                    </div>
                    :
                    <div>
                        <Navbar></Navbar>
                        <div className='bottom'>
                            <Outlet></Outlet>
                        </div>
                        <Footer></Footer>
                    </div>
            }
        </div>

    );
};

export default Main;