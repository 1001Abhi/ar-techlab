import Image from 'next/image'
import React from 'react'

export const MainSection = () => {
    return (
        <section className="bg-black text-gray-100" >
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-lg lg:max-w-md xl:max-w-lg lg:text-left">
                    <div>
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl mb-8">
                            Empowering Your Digital Presence with <span className="text-violet-400">AR-TechLab</span>
                        </h1>
                    </div>
                    <div>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">
                            At <span className="text-violet-400">AR-TechLab</span>, we specialize in <span className="text-violet-400">static website development</span>, <span className="text-violet-400">maintenance</span>, and <span className="text-violet-400">hosting solutions</span>. Let&apos;s build something amazing together!
                        </p>
                    </div>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a className="px-8 py-3 text-lg font-semibold border rounded border-gray-100" href="#pricing">See Pricing</a>
                        <a className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 text-gray-900" href="#contact">Get in Touch</a>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <Image alt="none provided" loading="lazy" width="600" height="600" decoding="async" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" src="https://exciting-gift-8e69796398.media.strapiapp.com/undraw_woman_ffrd_b3ac24fb06.svg"

                    />
                </div>
            </div>
        </section>
    )
}
