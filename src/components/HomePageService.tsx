import Image from "next/image";

type ServiceProp =
    {
        src: any;
        title: string;
        description: string;
    }

export default function HomePageService({ src, title, description }: ServiceProp) {
    return (
        <>
            <div className="flex ">
                <div className="relative card bg-base-300 rounded-box grid w-1/3 h-32 place-items-center overflow-hidden">
                    <Image
                        alt=''
                        fill
                        sizes={''}
                        src={src}
                        style={{
                            objectFit: 'cover'
                        }}
                    />
                </div>
                <div className="card mx-5 rounded-box h-20 w-full">
                    <h2 className="text-lg font-bold block">
                        {title}
                    </h2>
                    {description}
                </div>
            </div>
        </>
    )
}

export type { ServiceProp };

