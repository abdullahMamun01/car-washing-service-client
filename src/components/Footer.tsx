import React from 'react'
import { Car } from 'lucide-react'
export default function Footer() {
    return (
        <section className="relative pt-24 pb-28 bg-sky-600 text-white overflow-hidden px-30">
            <img className="absolute right-0 top-0" src="flaro-assets/images/footers/gradient2.svg" alt="" />
            <div className="relative z-10 container px-4 mx-auto">
                <div className="flex flex-wrap justify-between -m-8">
                    <div className="w-full sm:w-1/2 lg:w-2/12 p-8">
                        <a className="inline-block" href="#">
                            {/* <img src={Logo} alt="" /> */}
                            <Car className='w-35 h-35' />
                            <h1 className='text-slate-800'>CarSpa Service</h1>
                        </a>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-2/12 p-8">
                        <h3 className="mb-6 font-semibold leading-normal">Product</h3>
                        <ul>
                            <li className="mb-3.5"><a className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed" href="#">Careers</a></li>
                            <li className="mb-3.5"><a className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed" href="#">About Us</a></li>
                            <li className="mb-3.5"><a className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed" href="#">Insights</a></li>
                            <li className="mb-3.5"><a className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed" href="#">PCI Compliance</a></li>
                            <li className="mb-3.5"><a className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed" href="#">Intro Articles</a></li>
                            <li><a className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed" href="#">Pricing</a></li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-2/12 p-8">
                        <h3 className="mb-6 font-semibold leading-normal">For Developers</h3>
                        <ul>
                            <li className="mb-3.5"><a className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed" href="#">Docs</a></li>
                            <li className="mb-3.5"><a className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed" href="#">Knowledge Base</a></li>
                            <li className="mb-3.5"><a className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed" href="#">System Status</a></li>
                            <li><a className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed" href="#">Security</a></li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-2/12 p-8">
                        <h3 className="mb-6 font-semibold leading-normal">Resources</h3>
                        <ul>
                            <li className="mb-3.5"><a className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed" href="#">About</a></li>
                            <li className="mb-3.5"><a className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed" href="#">Leadership</a></li>
                            <li className="mb-3.5"><a className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed" href="#">Press/News</a></li>
                            <li className="mb-3.5"><a className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed" href="#">Careers/Team</a></li>
                            <li><a className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed" href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-2/12 p-8">
                        <h3 className="mb-6 font-semibold leading-normal">Legal</h3>
                        <ul>
                            <li className="mb-3.5"><a className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed" href="#">Docs</a></li>
                            <li className="mb-3.5"><a className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed" href="#">Knowledge Base</a></li>
                            <li className="mb-3.5"><a className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed" href="#">System Status</a></li>
                            <li><a className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed" href="#">Security</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
