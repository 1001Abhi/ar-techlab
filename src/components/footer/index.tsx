import React from 'react';

export const Footer = () => {
    return (
        <footer className="py-6 dark:bg-black dark:text-gray-50">
            <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
                <div className="grid justify-center pt-6 ">
                    <div className="flex">
                        <span className="mr-2">©2024 All rights reserved</span>
                        <ul className="flex">
                            <li><a className="text-gray-400 hover:text-gray-300 mr-2" href="/">Privacy Policy</a></li>
                            <li><a className="text-gray-400 hover:text-gray-300 mr-2" href="/">Term Of Service</a></li>
                        </ul>
                    </div>
                    {/* <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
                        <a
                            rel="noopener noreferrer"
                            href="https://strapi.io/"
                            title="Website"
                            target="_blank"
                            className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900"
                        >
                            <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M14 7C13.4477 7 13 7.44772 13 8V16C13 16.5523 13.4477 17 14 17H18C18.5523 17 19 16.5523 19 16V8C19 7.44772 18.5523 7 18 7H14ZM17 9H15V15H17V9Z" fill="currentColor"></path>
                                <path d="M6 7C5.44772 7 5 7.44772 5 8C5 8.55228 5.44772 9 6 9H10C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7H6Z" fill="currentColor"></path>
                                <path d="M6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13H10C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11H6Z" fill="currentColor"></path>
                                <path d="M5 16C5 15.4477 5.44772 15 6 15H10C10.5523 15 11 15.4477 11 16C11 16.5523 10.5523 17 10 17H6C5.44772 17 5 16.5523 5 16Z" fill="currentColor"></path>
                                <path fillRule="evenodd" clipRule="evenodd" d="M4 3C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V6C23 4.34315 21.6569 3 20 3H4ZM20 5H4C3.44772 5 3 5.44772 3 6V18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5Z" fill="currentColor"></path>
                            </svg>
                        </a>
                        <a
                            rel="noopener noreferrer"
                            href="https://www.youtube.com/@Strapi"
                            title="YouTube"
                            target="_blank"
                            className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900"
                        >
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9zM423 646V378l232 133-232 135z"></path>
                            </svg>
                        </a>
                        <a
                            rel="noopener noreferrer"
                            href="https://twitter.com/strapijs"
                            title="Twitter"
                            target="_blank"
                            className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900"
                        >
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm215.3 337.7c.3 4.7.3 9.6.3 14.4 0 146.8-111.8 315.9-316.1 315.9-63 0-121.4-18.3-170.6-49.8 9 1 17.6 1.4 26.8 1.4 52 0 99.8-17.6 137.9-47.4-48.8-1-89.8-33-103.8-77 17.1 2.5 32.5 2.5 49.6 1.2-51.1-10.2-89.6-55.2-89.6-109.1v-1.4c15.1 8.4 32.4 13.5 50.9 14.1-30.2-20.2-50.2-54.6-50.2-93.2 0-20.5 5.5-39.7 15.1-56.2 55.1 67.7 137.6 112.3 230.4 116.5-1.9-8.2-2.8-16.8-2.8-25.4 0-61.8 50.2-112.1 112.1-112.1 32.2 0 61.2 13.6 82.1 35.7 25.7-5 49.8-14.4 71.5-27.3-8.4 26.1-26.2 47.8-49.6 61.5 22.8-2.7 44.4-8.7 64.6-17.6-15.1 22.5-34.1 42.3-55.8 58.1z"></path>
                            </svg>
                        </a>
                    </div> */}
                </div>
            </div>
        </footer>
    );
};
