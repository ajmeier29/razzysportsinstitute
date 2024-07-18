'use client'
import { BlogPostData } from "@/data/data";
import { useContext } from "react";
import { SubscribeContext } from "@/lib/SubscribeContext";
import { PreloadStaticImage } from "./PreloadImage";
import mainWorkoutImage from '../../public/images/deadLift.webp'
import { GymService, GymServicesProps } from "./GymServices";
import dumbellImage from '../../public/images/weight.png'
import workoutImage from '../../public/images/workout.png'
import scheduleImage from '../../public/images/calendar.png'

export const HomePage: React.FC<{ blogPosts: BlogPostData[] }> = ({ blogPosts }) => {
    const { showModal, setShowModal, showSuccessMessage } = useContext(SubscribeContext)
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <>
            <div className="relative justify-center items-center mt-2 drop-shadow-1xl">

                <PreloadStaticImage imgSrc={mainWorkoutImage} styleProps={'h-[700px] w-[150%] diagonal-cut-mobile  relative'} />
                <div className="flex place-content-center justify-center">
                    <div className="absolute top-0 z-20 max-w-5xl mx-auto mt:8 md:mt-24 px-4 text-center">
                        <div className="w-full max-w-3xl mx-auto">
                            <h1 className="text-4xl text-white font-bold mt-2 mb-6">Let us take the work out of working out.<br />by simplifying the workout.</h1>
                            <p className="px-4 text-white leading-relaxed">Propiti provides you with a quick, simple way to reach multiple estate
                                agents.<br />Allowing you to spend less time trawling through property portals,<br />giving you more time on the other things you enjoy.
                            </p>
                            <p className="mb-8 mt-4 px-4 leading-relaxed text-white">Oh, and the best bit...
                                <span className="text-pink-600 font-bold">It's free!</span></p>
                            <div>
                                <a className="inline-block py-4 px-8 leading-none text-black bg-white bg-opacity-85 hover:bg-pink-600 rounded shadow text-sm font-bold"
                                    href="#">Sign-up for free</a>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="grid grid-cols-1 gap-4 mt-10 mx-40">
                    <div className="flex place-content-center w-full flex-col">
                        <div className="rounded-box grid h-10 text-2xl place-items-center">Sport Training Services</div>
                        <div className="divider"></div>
                        <div className="flex">
                            <div className="card bg-base-300 rounded-box grid w-2/3 h-20 place-items-center">image</div>
                            <div className="card bg-base-300 rounded-box grid h-20 w-full place-items-center">description</div>
                        </div>
                        <div className="divider"></div>
                        <div className="rounded-box grid h-10 text-2xl place-items-center">Adult Metabolic Classes</div>
                        <div className="divider"></div>
                        <div className="flex">
                            <div className="card bg-base-300 rounded-box grid w-2/3 h-20 place-items-center">image</div>
                            <div className="card bg-base-300 rounded-box grid h-20 w-full place-items-center">description</div>
                        </div>
                    </div>
                    {/* <GymService services={gymServices} /> */}
                </div>
            </div>
        </>
    )
}

const gymServices: GymServicesProps[] = [

    {
        title: 'High-Intensity Workouts',
        image: workoutImage,
        description: 'Our expert coaches guide you through functional movements, strength training, and conditioning exercises.'
    },
    {
        title: 'Functional Equipment',
        image: dumbellImage,
        description: 'Experience functional fitness at its best with our cutting-edge equipment and personalized training'
    },
    {
        title: 'Flexible Class Schedules',
        image: scheduleImage,
        description: 'Our gym offers flexible class times to fit your busy schedule'
    }
]