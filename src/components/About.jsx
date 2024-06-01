'use client'
import { useEffect, useRef, useState } from 'react';


export default function About() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const top = sectionRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            setIsVisible(top < windowHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>

            <section ref={sectionRef}
                className='text-zinc-600 body-font '
                id="features">

                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1"></h2>
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-zinc-200">
                            Get the same Internet, but with more privacy.
                        </h1>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <div ref={sectionRef}
                            className={`p-4 md:w-1/3 text-zinc-600  body-font ${isVisible ? 'animate-from-left' : ''
                                }`}>
                            <div className="flex rounded-lg h-full bg-gradient-to-t from-indigo-500 to-indigo-500 bg-zinc-800 p-8 flex-col">
                                <div className="flex items-center  mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="lucide lucide-shield-check"
                                        >
                                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
                                            <path d="m9 12 2 2 4-4" />
                                        </svg>
                                    </div>
                                    <h2 className="text-zinc-300 text-lg title-font font-medium">
                                        Search Protection
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-zinc-300 text-base">
                                        Other search engines track your every search, from where you
                                        go to what you buy. We do not track you. Ever.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div ref={sectionRef}
                            className='p-4 md:w-1/3 text-zinc-600 body-font' >
                            <div className="flex rounded-lg h-full bg-gradient-to-t from-indigo-500 to-indigo-500 p-8 flex-col">
                                <div className="flex items-center mb-3 " >

                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            className="lucide lucide-audio-waveform"
                                        >
                                            <path d="M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2" />
                                        </svg>
                                    </div>
                                    <h2 className="text-zinc-300 text-lg title-font font-medium">
                                        Web Tracking Protection
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-zinc-300 text-base">
                                        We stop trackers and creepy ads before they even load,
                                        evading hidden data collectors and speeding up websites.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gradient-to-t from-indigo-500 to-indigo-500 p-8 flex-col">
                                <div className="flex  items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-eye-off"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" /><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" /><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" /><line x1="2" x2="22" y1="2" y2="22" /></svg>
                                    </div>
                                    <h2 className="text-zinc-300 text-lg title-font font-medium">
                                        App Tracking Protection
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-zinc-300 text-base">
                                        Reclaim control over your Android privacy! Many top free
                                        Android apps sell your data, tracking your every move. Stop
                                        the spying now!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gradient-to-t from-indigo-500 to-indigo-500 p-8 flex-col">
                                <div className="flex  items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail-check"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /><path d="m16 19 2 2 4-4" /></svg>
                                    </div>
                                    <h2 className="text-zinc-300 text-lg title-font font-medium">
                                        Email Privacy
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-zinc-300 text-base">
                                        Keep your email activities private. We don&apos;t scan your emails for targeted advertising or share your data with third parties.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gradient-to-t from-indigo-500 to-indigo-500 p-8 flex-col">
                                <div className="flex  items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-earth"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" /><path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17" /><path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" /><circle cx="12" cy="12" r="10" /></svg>
                                    </div>
                                    <h2 className="text-zinc-300 text-lg title-font font-medium">
                                        Anonymous Browsing Mode
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-zinc-300 text-base">
                                        Browse anonymously, shielded from tracking. Our mode keeps your online activity private, protecting your identity and information.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/3">
                            <div className="flex rounded-lg h-full bg-gradient-to-t from-indigo-500 to-indigo-500 p-8 flex-col">
                                <div className="flex  items-center mb-3">
                                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-globe-lock"><path d="M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13" /><path d="M2 12h8.5" /><path d="M20 6V4a2 2 0 1 0-4 0v2" /><rect width="8" height="5" x="14" y="6" rx="1" /></svg>
                                    </div>
                                    <h2 className="text-zinc-300 text-lg title-font font-medium">
                                        Social Media Privacy
                                    </h2>
                                </div>
                                <div className="flex-grow">
                                    <p className="leading-relaxed text-zinc-300 text-base">
                                        Shield your social media interactions. We keep them private, safeguarding you from targeted ads and data harvesting by social media platforms.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="text-zinc-600 body-font h-full w-full rounded-t-[40px] lg:rounded-t-[60px] bg-gradient-to-t from-indigo-500 to-purple-500">
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-zinc-200 mb-4">
                            It&apos;s a myth that companies need to track you to make money.
                        </h1>
                        <p className="text-base text-zinc-300 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
                            Xeoly has been free to use since day one, and private search ads
                            have kept us profitable for nearly a decade. When you search for
                            &apos;car&apos; we show you a car ad — it&apos;s that simple.
                        </p>
                    </div>
                    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-zinc-800 rounded flex p-4 h-full items-center">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="3"
                                    className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font text-zinc-200 font-medium">
                                    Search privately
                                </span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-zinc-800 rounded flex p-4 h-full items-center">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="3"
                                    className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font text-zinc-200 font-medium">
                                    Block creepy ads
                                </span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-zinc-800 rounded flex p-4 h-full items-center">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="3"
                                    className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font text-zinc-200 font-medium">
                                    Block cookie pop-ups
                                </span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-zinc-800 rounded flex p-4 h-full items-center">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="3"
                                    className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font text-zinc-200 font-medium">
                                    Block email trackers
                                </span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-zinc-800 rounded flex p-4 h-full items-center">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="3"
                                    className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font text-zinc-200 font-medium">
                                    Anonymous browsing
                                </span>
                            </div>
                        </div>
                        <div className="p-2 sm:w-1/2 w-full">
                            <div className="bg-zinc-800 rounded flex p-4 h-full items-center">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="3"
                                    className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                    <path d="M22 4L12 14.01l-3-3"></path>
                                </svg>
                                <span className="title-font text-zinc-200 font-medium">
                                    Search without being tracked
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="text-zinc-200 body-font w-full bg-gradient-to-b from-indigo-500 to-indigo-800">
                <div className="container px-5 py-10 mx-auto">
                    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text- zinc-400 mb-8" viewBox="0 0 975.036 975.036">
                            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                        </svg>
                        <p className="leading-relaxed text-lg">I&apos;m thrilled to introduce our privacy-focused search engine. At Xeoly, we prioritize your privacy by not tracking your searches or selling your data. With us, you can search the web with confidence, knowing your privacy is protected. Enjoy accurate and relevant results without sacrificing your privacy. Welcome to Xeoly.</p>
                        <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
                        <h2 className="text-zinc-900 font-medium title-font tracking-wider text-sm">Tanmoy Ganguly</h2>
                        <p className="text-zinc-400">Founder and Developer</p>
                    </div>
                </div>
            </section>
        </>
    );
}
