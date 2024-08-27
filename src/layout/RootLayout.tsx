import Navbar from '@/common/navbar/Navbar'
import Footer from '@/components/Footer'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}
