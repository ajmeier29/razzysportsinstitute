'use client'
import { BlogPostData } from "@/data/data";
import { BlogPostsDisplay } from "./BlogPostsDisplay";
import ButtonBar from "./ButtonBar";
import Hero from "./Hero";
import { useContext } from "react";
import Subscribe from "./Subscribe";
import { SubscribeContext } from "@/lib/SubscribeContext";
import ToastMessage from "./ToastMessage";
import { PreloadStaticImage } from "./PreloadImage";
import mainWorkoutImage from '../../public/images/deadLift.webp'
import { GymService, GymServicesProps } from "./GymServices";

export const HomePage: React.FC<{ blogPosts: BlogPostData[] }> = ({ blogPosts }) => {
    const { showModal, setShowModal, showSuccessMessage } = useContext(SubscribeContext)
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <>
            <div className="relative justify-center items-center mx-2 lg:mx-40 mt-2 drop-shadow-1xl">
                <PreloadStaticImage imgSrc={mainWorkoutImage} styleProps={'h-[700px] diagonal-cut-image'} />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
                    <GymService services={gymServices} />
                </div>
                {/* <div className="flex w-full justify-center">
                    {showModal && (
                        <Subscribe closeModal={closeModal} />
                    )}
                    {showSuccessMessage ?
                        (
                            <ToastMessage message="Subscribed!" />
                        ) :
                        (<></>)}
                </div>
                <PreloadStaticImage imgSrc={heroPic} styleProps={'absolute object-cover overflow-hidden rounded-lg h-[600px] w-full z-0'}></PreloadStaticImage>
                <div className="absolute z-40">
                    <Hero subscribe />
                </div>
                <div className="slideUpFromBottomSlow">
                    <ButtonBar setSomeState={openModal} />
                </div>
                <div>
                    <BlogPostsDisplay blogPosts={blogPosts} />
                </div> */}
            </div>
        </>
    )
}

const gymServices: GymServicesProps[] = [

    {
        title: 'High-Intensity Workouts',
        description: 'Our expert coaches guide you through functional movements, strength training, and conditioning exercises.'
    },
    {
        title: 'Functional Equipment',
        description: 'Experience functional fitness at its best with our cutting-edge equipment and personalized training'
    },
    {
        title: 'Flexible Class Schedules',
        description: 'Our gym offers flexible class times to fit your busy schedule'
    }
]