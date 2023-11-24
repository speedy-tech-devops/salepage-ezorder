import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <header className="bg-white box-shodow" >
            <div className="container">
                <div className="d-flex justify-content-between align-items-center py-3">
                    <img src="images/EZLOGO.webp" />
                    <Link  style={{ fontSize: 22 }}className='btn  bg_dark_blue text-white' href={'https://www.ez-order.co/'}>
                        ติดต่อพนักงานขาย
                    </Link>
                </div>
            </div>
        </header>
    )
}


