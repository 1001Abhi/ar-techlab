import React from 'react'

export const FeatureSection = () => {
    return (
        <section className="bg-black text-gray-100 py-12 lg:py-24" id='features'>
            <div className="container mx-auto py-4 space-y-2 text-center">
                <h2 className="text-5xl font-bold">Our Services</h2>
                <p className="text-gray-400">Discover the features that set AR-TechLab apart</p>
            </div>
            <div className="container mx-auto my-6 grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-violet-400">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                    </svg>
                    <h3 className="my-3 text-3xl font-semibold text-center">Static Website</h3>
                    <div className="space-y-1 leading-tight my-6">
                        <p>Craft visually stunning and highly functional static websites tailored to your needs. We ensure a seamless user experience with fast load times and modern designs.</p>
                    </div>
                    <div>
                        <a target="_blank" className="inline-block px-4 py-2 mt-4 text-sm font-semibold text-white transition duration-200 ease-in-out bg-violet-500 rounded-lg hover:bg-violet-600" href="/services#web-development">Learn more</a>
                    </div>
                </div>
                <div className="flex flex-col items-center p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-violet-400">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                    </svg>
                    <h3 className="my-3 text-3xl font-semibold">Website Maintenance</h3>
                    <div className="space-y-1 leading-tight my-6">
                        <p>Keep your website running smoothly with our maintenance services. We handle updates, security patches, and performance optimization to ensure your site is always at its best.</p>
                    </div>
                    <div>
                        <a target="_blank" className="inline-block px-4 py-2 mt-4 text-sm font-semibold text-white transition duration-200 ease-in-out bg-violet-500 rounded-lg hover:bg-violet-600" href="/services#maintenance">Learn more</a>
                    </div>
                </div>
                <div className="flex flex-col items-center p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-violet-400">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                    </svg>
                    <h3 className="my-3 text-3xl font-semibold text-center">Reliable Hosting Solutions</h3>
                    <div className="space-y-1 leading-tight my-6">
                        <p>Experience hassle-free hosting with our reliable and secure solutions. We offer fast loading times, 24/7 support, and scalable options to meet your growing needs.</p>
                    </div>
                    <div>
                        <a target="_blank" className="inline-block px-4 py-2 mt-4 text-sm font-semibold text-white transition duration-200 ease-in-out bg-violet-500 rounded-lg hover:bg-violet-600" href="/services#hosting">Learn more</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
