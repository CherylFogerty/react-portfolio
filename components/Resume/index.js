import React, { useState } from 'react';
import headshot from "../../assets/images/5Cln.jpg";
import resume from "../../assets/Resume_CherylFogerty.pdf"

function Resume() {

    const [tab, setTab] = useState('overview')

    let overviewContent = '';
    let professionalContent = '';
    let educationContent = '';
    let overviewTab = '';
    let professionalTab = '';
    let educationTab = '';

    if (tab === 'overview') {
        overviewContent = 'mt-6 pb-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8';
        professionalContent = 'hidden';
        educationContent = 'hidden';
        overviewTab = 'border-indigo-500 text-gray-900 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm';
        professionalTab = 'cursor-pointer border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm';
        educationTab = 'cursor-pointer border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm';
    }

    if (tab === 'professional') {
        overviewContent = 'hidden';
        professionalContent = 'mt-6 pb-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8';
        educationContent = 'hidden';
        overviewTab = 'cursor-pointer border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm';
        professionalTab = 'border-indigo-500 text-gray-900 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm';
        educationTab = 'cursor-pointer border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm';
    }

    if (tab === 'education') {
        overviewContent = 'hidden';
        professionalContent = 'hidden';
        educationContent = 'mt-6 pb-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8';
        overviewTab = 'cursor-pointer border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm';
        professionalTab = 'cursor-pointer border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm';
        educationTab = 'border-indigo-500 text-gray-900 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm';
    }


    return (
        <main className="bg-gray-50 pt-16">
            
        <article></article>
                <div>
                    <div>
                        <img className="h-32 w-full object-cover lg:h-48"
                            src={background}
                            alt="" />
                    </div>
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                            <div className="flex">
                                <img className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                                    src={headshot}
                                    alt="Headshot of Cheryl Fogerty" />
                            </div>
                            <div
                                className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                                <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
                                    <h1 className="text-2xl font-bold text-gray-900 truncate">
                                        Cheryl Fogerty
                                    </h1>
                                </div>
                                <div
                                    className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                                    <a href="mailto:cfogerty43@gmail.com">
                                        <button type="button"
                                            className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

                                            <svg className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                aria-hidden="true">
                                                <path
                                                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                            </svg>
                                            <span>Email</span>
                                        </button>
                                    </a>
                                    <a href="tel:19013382186">
                                        <button type="button"
                                            className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

                                            <svg className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                aria-hidden="true">
                                                <path
                                                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                            </svg>
                                            <span>Call</span>
                                        </button>
                                    </a>
                                    <a href={resume} target="_blank" rel="noreferrer">
                                        <button type="button"
                                            className="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

                                            <svg className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                                aria-hidden="true">
                                                <path
                                                    d="M16 11h5l-9 10-9-10h5v-11h8v11zm1 11h-10v2h10v-2z" />
                                            </svg>
                                            <span>Download Resume</span>
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
                            <h1 className="text-2xl font-bold text-gray-900 truncate">
                                Cheryl Fogerty
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="mt-6 sm:mt-2 2xl:mt-5">
                    <div className="border-b border-gray-200">
                        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                            <nav className="-mb-px flex space-x-8" aria-label="Tabs">

                                <a onClick={() => setTab('overview')}
                                    className={overviewTab}
                                    aria-current="page">
                                    Overview
                                </a>

                                <a onClick={() => setTab('professional')}
                                    className={professionalTab}>
                                    Professional Experience
                                </a>

                                <a onClick={() => setTab('education')}
                                    className={educationTab}>
                                    Education
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className={overviewContent}>
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                        <div className="sm:col-span-1">
                        </div></dl>
                    <dt className="text-sm font-medium text-gray-500">
                        Phone
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                        (636)443-3215
                    </dd>
                </div>

                <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                        Email
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                        cfogerty43@gmail.com
                    </dd>
                </div>

                <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                        Location
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                        OFallon, MO
                    </dd>
                </div>

                <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                        Birthday
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                        May 14, 1972
                    </dd>
                </div>

                <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                        Technical Skills
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                        Final Cut Pro<br />
                        Proficient with Adobe Photoshop<br />
                        Proficient with Adobe Premiere Pro<br />
                        Edius<br />
                        Avid
                    </dd>
                </div>

                <div className={professionalContent}>
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-4">
                        <div className="sm:col-span-1">
                            <dt className="text-sm font-medium text-gray-500">
                                Lorrie Morgan Spicy Chicken Coop/LME_PCB
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                2019 - Present
                            </dd>
                        </div>

                        <div className="sm:col-span-3">
                            <dt className="text-sm font-medium text-gray-500">
                                Social Media Manager/PR
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                                Create/maintain all Social media for Country singer Lorrie Morgan, both on her “Artist” page
                                and for her restaurant “Lorrie Morgan’s Spicy Hot Chicken Coop”.
                                I created her most recent logo and did a promo video that runs full time as
                                the cover of the restaurant Facebook page.<br /><br />

                                <div className="sm:col-span-1 pt-20">
                                    <dd className="w-1/2 sm:w-3/4 pb-5 sm:pb-2 mx-auto sm:mx-0">

                                    </dd>
                                    <dt className="text-sm font-medium text-gray-500">
                                        KSDK-TV
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900">
                                        1996-2021
                                    </dd>
                                </div>

                                <div className="sm:col-span-3 sm:pt-20">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Broadcast Engineer
                                    </dt>

                                    <dd className="mt-1 text-sm text-gray-900">
                                        Operations Engineer. Master Control Operator,
                                        Signal Acquisition Operator, Robotic Camera Operator,
                                        Audio Engineer. Quality Control and commercial dubbing..
                                        <br />

                                        <span className="font-medium text-gray-500">My Story at KSDK:</span><br />
                                        I worked in every aspect of the television industry over 25 years until the parent
                                        company, Tegna decided to move my job to Charlotte, NC. I was given the option to
                                        for my job and re-locate but decided it was not feasible at that time in my life.
                                        <span className="font-medium text-gray-500">Achievements:</span><br />
                                    </dd>
                                </div>
                            </dd>

                        </div>

                        <div className={educationContent}>
                            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-4">
                                <div className="sm:col-span-1">
                                    <dd className="w-1/2 sm:w-2/3 mx-auto sm:mx-0 pb-5 sm:pb-2">
                                        <img src={vandyLogo} alt="vanderbilt logo" />
                                    </dd>
                                    <dt className="text-sm font-medium text-gray-500">
                                        Vanderbilt University
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900">
                                        Nashville, TN
                                    </dd>
                                </div>

                                <div className="sm:col-span-3 self-center">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Full Stack Web Development Bootcamp
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 pb-20 sm:pb-0">
                                        Currently Enrolled
                                    </dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">
                                        The Recording Workshop
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900">
                                        Chilicothe, OH
                                    </dd>
                                </div>

                                <div className="sm:col-span-3 self-center">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Recording Engineering
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 pb-20 sm:pb-0">
                                        12/94
                                    </dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">
                                        The Broadcast Center
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900">
                                        Clayton, MO
                                    </dd>
                                </div>

                                <div className="sm:col-span-3 self-center">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Video/Audio Production/Broadcast Production
                                    </dt>
                                    <dd className="mt-1 text-sm text-gray-900 pb-20 sm:pb-0">
                                        12/92
                                    </dd>
                                </div>
                            </dl>

                        </div>
                        

                    </dl>

    </main>

    )
}
export default Resume