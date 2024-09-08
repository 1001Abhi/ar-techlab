"use client"

import { Switch } from '@headlessui/react';
import React, { useState } from 'react';

export const PricingSection = () => {
    const [isYearly, setIsYearly] = useState(false);

    return (
        <section className="py-20text-gray-100 m:py-12 lg:py-24" id='pricing'>
            <div className="container px-4 mx-auto">
                <div className="max-w-2xl mx-auto mb-16 text-center">
                    <span className="font-bold tracking-wider uppercase text-violet-400">Pricing</span>
                    <h2 className="text-4xl font-bold lg:text-5xl">Our Plans</h2>
                </div>

                {/* Yearly or Monthly Toggle */}
                <div className="flex justify-center items-center mb-12">
                    <span className="mr-3 text-lg font-medium">Monthly</span>
                    <Switch
                        checked={isYearly}
                        onChange={setIsYearly}
                        className={`${isYearly ? 'bg-violet-600' : 'bg-gray-700'} relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300`}
                    >
                        <span className="sr-only">Toggle Plan Duration</span>
                        <span
                            className={`${isYearly ? 'translate-x-6' : 'translate-x-1'
                                } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300`}
                        />
                    </Switch>
                    <span className="ml-3 text-lg font-medium">Yearly</span>
                </div>

                {/* Pricing Cards */}
                <div className="flex w-full md:justify-between items-center max-w-6xl mx-auto flex-wrap justify-center">
                    {/* Free Plan */}
                    <div className="w-full p-4 mb-8 sm:mx-40 lg:mx-0 lg:w-1/3 lg:mb-0">
                        <div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 min-h-[475px] min-w-[300px] bg-gray-800">
                            <div className="space-y-2">
                                <h4 className="text-3xl font-bold mb-6">Basic</h4>
                                <span className="text-6xl font-bold">
                                    {isYearly ? "₹7,999" : "₹799"}
                                    <span className="ml-1 text-sm tracking-wid text-violet-400">
                                        {isYearly ? "yearly" : "monthly"}
                                    </span>
                                </span>
                            </div>
                            <p className="mt-3 leading-relaxed text-lg font-bold text-gray-400">Features</p>
                            <ul className="flex-1 mb-6 text-gray-400">
                                <li className="flex mb-2 space-x-2">Up to 5 static pages</li>
                                <li className="flex mb-2 space-x-2">Mobile-friendly, responsive design</li>
                                <li className="flex mb-2 space-x-2">Basic SEO (meta tags, titles)</li>
                                <li className="flex mb-2 space-x-2">Contact form (with basic form submission email integration)</li>
                                <li className="flex mb-2 space-x-2">1 round of design revisions</li>
                            </ul>
                            <button type="button" className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-violet-400 text-gray-900">Get Started</button>
                        </div>
                    </div>

                    {/* Pro Plan */}
                    <div className="w-full p-4 mb-8 sm:mx-40 lg:mx-0 lg:w-1/3 lg:mb-0">
                        <div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 min-h-[530px] min-w-[300px] bg-violet-600">
                            <div className="space-y-2">
                                <h4 className="text-3xl font-bold mb-6">Standard</h4>
                                <span className="text-6xl font-bold">
                                    {isYearly ? "₹14,999" : "₹1,499"}
                                    <span className="ml-1 text-sm tracking-wid text-gray-900">
                                        {isYearly ? "yearly" : "monthly"}
                                    </span>
                                </span>
                            </div>
                            <p className="mt-3 leading-relaxed text-lg font-bold text-gray-900">Features</p>
                            <ul className="flex-1 mb-6 text-gray-900 font-semibold">
                                <li className="flex mb-2 space-x-2">Everything in the Basic Plan, plus</li>
                                <li className="flex mb-2 space-x-2">Up to 10 static pages</li>
                                <li className="flex mb-2 space-x-2">Custom static design (color schemes, fonts)</li>
                                <li className="flex mb-2 space-x-2">Intermediate SEO (sitemaps, structured data)</li>
                                <li className="flex mb-2 space-x-2">2 rounds of design revisions</li>
                            </ul>
                            <button type="button" className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-gray-900 text-violet-400">Get Started</button>
                        </div>
                    </div>

                    {/* Enterprise Plan */}
                    <div className="w-full p-4 mb-8 sm:mx-40 lg:mx-0 lg:w-1/3 lg:mb-0">
                        <div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 min-h-[475px] min-w-[300px] bg-gray-800">
                            <div className="space-y-2">
                                <h4 className="text-3xl font-bold mb-6">Advanced</h4>
                                <span className="text-6xl font-bold">
                                    {isYearly ? "₹29,999" : "₹2,999"}
                                    <span className="ml-1 text-sm tracking-wid text-violet-400">
                                        {isYearly ? "yearly" : "monthly"}
                                    </span>
                                </span>
                            </div>
                            <p className="mt-3 leading-relaxed text-lg font-bold text-gray-400">Features</p>
                            <ul className="flex-1 mb-6 text-gray-400">
                                <li className="flex mb-2 space-x-2">Everything in the Standard Plan, plus</li>
                                <li className="flex mb-2 space-x-2">Up to 20 static pages</li>
                                <li className="flex mb-2 space-x-2">Advanced SEO (keyword optimization, performance tuning)</li>
                                <li className="flex mb-2 space-x-2">Multi-language support (multiple static versions of the site)
                                </li>
                                <li className="flex mb-2 space-x-2">4 rounds of design revisions
                                </li>
                            </ul>
                            <button type="button" className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-violet-400 text-gray-900">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
