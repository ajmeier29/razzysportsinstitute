import dumbell from '../../public/images/weight.png'
import { PreloadStaticImage } from './PreloadImage';
import Image from 'next/image';

type GymServicesProps =
    {
        title: string;
        description: string;
    }

export const GymService: React.FC<{ services: GymServicesProps[] }> = ({ services }) => {
    return (
        <>
            {services ? (
                <>
                    {services.map(({ title, description }) => {
                        return (
                            <div className='grid grid-cols-1 rounded-lg p-9 w-full ease-out duration-1000 delay-1000 cardShadow border-slate-700'>
                                <div className='flex place-content-center'>
                                    <Image
                                        src={dumbell}
                                        alt=''
                                        height={70}
                                        width={70}
                                    />
                                </div>
                                <div className='text-center text-2xl mb-2'>
                                    {title}
                                </div>
                                <div className='text-center'>
                                    {description}
                                </div>
                            </div>
                        )
                    })}
                </>
            ) :
                (
                    <>
                        <div>
                            Uh Oh!
                        </div>
                    </>
                )}
        </>
    )
}

export type { GymServicesProps };