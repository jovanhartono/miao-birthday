import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import MonkeyImage from '../public/monkey.jpg';
import {CameraIcon, ChatIcon, PaperAirplaneIcon, HeartIcon, BookmarkIcon} from "@heroicons/react/outline";
import {BadgeCheckIcon, DotsHorizontalIcon, ThumbDownIcon} from "@heroicons/react/solid";
import SwiperCore, {Autoplay, Pagination} from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import FirstPostImage from "../public/post-1.png"
import SecondPostImage from '../public/post-2.jpg';
import ThirdPostImage from '../public/post-3.jpg';
import FourthPostImage from '../public/post-4.jpg';
import {useState} from "react";

const Home: NextPage = () => {
    const username: string = 'jovanhartonoganteng.';
    const [show, setShow] = useState<boolean>(false);

    return (
        <>
            <Head>
                <title>Happy Birthday Miao 🦧!</title>
                <meta name={'description'} content={"Ada yang ulang taun nich 😗"}/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap"
                      rel="stylesheet"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,300;8..144,400;8..144,500;8..144,600;8..144,700;8..144,800&display=swap"
                    rel="stylesheet"/>
            </Head>
            <main>
                <header className={'max-w-lg mx-auto '}>
                    <div className="bg-white py-4 px-4 flex justify-between items-center">
                        <div className="w-1/4 flex justify-start">
                            <CameraIcon className={'w-6 h-6 text-black'}/>
                        </div>
                        <h1 className="flex w-1/2 justify-center text-2xl family-dancing">Happy Birthday!</h1>
                        <div className="flex space-x-5 w-1/4 justify-end">
                            <PaperAirplaneIcon className={'w-6 h-6 text-black'}/>
                        </div>
                    </div>
                    <nav className="p-2 border-t border-gray-200">
                        <ul className="list-none flex space-x-2 justify-around">
                            <li className="space-y-0.5 flex flex-col items-center justify-center">
                                <div
                                    className="relative bg-gradient-to-tr from-yellow-500 to-red-500 p-0.5 rounded-full">
                                    <div
                                        className="rounded-full border-2 border-white relative w-14 h-14 overflow-hidden">
                                        <Image src={MonkeyImage} layout={"fill"} objectFit={'cover'}/>
                                    </div>
                                    <div
                                        className="absolute bottom-0 right-0 bg-blue-500 border-white border-2 rounded-full w-5 h-5 flex items-center justify-center font-mono">
                                        <p className="text-white">+</p>
                                    </div>
                                </div>
                                <p className="text-sm font-light text-gray-900">monki🐵.</p>
                            </li>
                            <li className="space-y-0.5 flex flex-col items-center justify-center">
                                <div className="bg-gradient-to-tr from-yellow-500 to-red-500 p-0.5 rounded-full">
                                    <img className="w-14 h-14 rounded-full border-2 border-white"
                                         src="https://placekitten.com/201/200"/>
                                </div>
                                <p className="text-sm font-light text-gray-900">meong</p>
                            </li>
                            <li className="space-y-0.5 flex flex-col items-center justify-center">
                                <div className="bg-gradient-to-tr from-yellow-500 to-red-500 p-0.5 rounded-full">
                                    <img className="w-14 h-14 rounded-full border-2 border-white"
                                         src="https://placekitten.com/200/202"/>
                                </div>
                                <p className="text-sm font-light text-gray-900">maong</p>
                            </li>
                            <li className="space-y-0.5 flex flex-col items-center justify-center">
                                <div className="bg-gradient-to-tr from-yellow-500 to-red-500 p-0.5 rounded-full">
                                    <img className="w-14 h-14 rounded-full border-2 border-white"
                                         src="https://placekitten.com/200/203"/>
                                </div>
                                <p className="text-sm font-light text-gray-900">miong</p>
                            </li>
                            <li className="space-y-0.5 flex flex-col items-center justify-center">
                                <div className="bg-gradient-to-tr from-yellow-500 to-red-500 p-0.5 rounded-full">
                                    <img className="w-14 h-14 rounded-full border-2 border-white"
                                         src="https://placekitten.com/200/204"/>
                                </div>
                                <p className="text-sm font-light text-gray-900">muong</p>
                            </li>
                        </ul>
                    </nav>
                </header>
                <section className="container max-w-lg mx-auto space-y-3 px-4">
                    <div className="border-t border-gray-200">
                        <article className="flex flex-col">
                            <div className="flex justify-between w-full py-2 items-center">
                                <div className="flex items-center space-x-2">
                                    <div className="bg-gradient-to-tr from-yellow-500 to-red-500 p-0.5 rounded-full">
                                        <div
                                            className="rounded-full border-2 border-white relative w-8 h-8 overflow-hidden">
                                            <Image src={MonkeyImage} layout={"fill"} objectFit={'cover'}/>
                                        </div>
                                    </div>
                                    <p className="text-sm font-semibold text-gray-900">jovanhartonoganteng</p>
                                    <BadgeCheckIcon className="w-5 h-5 text-blue-500"/>
                                </div>
                                <DotsHorizontalIcon className="w-5 h-5 text-gray-900"/>
                            </div>
                            <div className="relative w-full aspect-square">
                                <Swiper
                                    autoplay={{
                                        delay: 5000,
                                        pauseOnMouseEnter: true,
                                        disableOnInteraction: false
                                    }}
                                    pagination={{
                                        dynamicBullets: true
                                    }}
                                    className={'mySwiper h-full '}
                                    modules={[Pagination, Autoplay]}
                                >
                                    <SwiperSlide>
                                        <Image src={FirstPostImage} layout={'fill'} objectFit={'cover'}
                                               objectPosition={'top'}/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image src={SecondPostImage} layout={'fill'} objectFit={'cover'}/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image src={ThirdPostImage} layout={'fill'} objectFit={'cover'}/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image src={FourthPostImage} layout={'fill'} objectFit={'cover'}/>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Image src={MonkeyImage} layout={'fill'} objectFit={'cover'}/>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="p-3 flex items-center justify-between">
                                <div className="flex space-x-4 items-center">
                                    <HeartIcon className="w-7 h-7 text-gray-700"/>
                                    <ChatIcon className="w-7 h-7 text-gray-700"/>
                                    <PaperAirplaneIcon className="rotate-45 -mt-1 w-7 h-7 text-gray-700"/>
                                </div>
                                <BookmarkIcon className="w-7 h-7 text-gray-700"/>
                            </div>
                            <div className="px-3 flex justify-center flex-col space-y-0.5">
                                <div className="flex space-x-1 items-center">
                                    <span className="font-light text-sm">Liked by</span>
                                    <span className="text-sm font-medium">jopan</span>
                                    <span className="font-light text-sm">and</span>
                                    <span className="text-sm font-medium">19,052,000 monki🎉.</span>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex space-x-1 items-center">
                                        <span className="text-sm font-medium">{username}</span>
                                        <span className="font-light text-sm">
                                            <span
                                                className={'family-dancing'}>Happy Birthday Patricia Maydeline! 🙂.</span>
                                        </span>
                                    </div>
                                    <div className={`${show ? 'h-full' : 'h-6'} font-light text-sm overflow-hidden`}>
                                        <span>
                                            to the most favorite person off all time 🦧. Di Umur
                                            <span
                                                className={`${show && 'hidden'} ml-auto cursor-pointer text-gray-500 font-extralight`}
                                                onClick={() => setShow(!show)}
                                            >
                                                ...more
                                            </span>
                                            <br/>
                                            yang ke-22 ini semoga lu bisa semakin dewasa, semakin bahagia kesehariannya, diberikan kelancaran dalam bisnisnya 💰,
                                            dan selalu diberikan kesabaran dalam setiap situasi.
                                            gw pgen lu selalu inget ditahun ini, ketika lu sedang kesulitan, bakal ada gw yg selalu support dalam hal apapun, gw pgen lu bisa ngandelin gw dalam suka dan duka.
                                            Mulai dari tahun ini sampai kedepannya, gw pgen setiap taun yg lu jalankan terasa spesial 😗, dan tentu bakal ada gua disamping lu hehe (karena gw spesial 😘).
                                            you are the most incredible person I know and I am so lucky and grateful to have you in my life.
                                            Nobody even comes close to how kind, thoughtful and caring you are. The more i know, the more i fell deeper. For me, you deserve all the happiness. I wish you all the best in life.
                                            Patricia Maydeline, you always and will ever be my biggest pride and purest joy. May Buddha bless you, always.
                                        </span>
                                    </div>
                                </div>
                                <p className="font-extralight text-gray-500 text-xs">View all 19,052,000
                                    comments</p>
                            </div>
                        </article>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home
