import Image from 'next/image';
import React from 'react';

export const TestimonialSection = () => {
    const testimonials = [
        {
            name: "Ravi Kumar",
            feedback: "AR TechLab's innovative augmented reality solutions helped us completely redefine our customer engagement. Their technology allowed us to offer a virtual showroom, which significantly increased footfall and led to a 40% rise in conversions. Highly professional and forward-thinking team.",
            image: "/images/ravi_kumar.jpg" // Replace with actual image path or URL
        },
        {
            name: "Priya Sharma",
            feedback: "The AR training solutions developed by AR TechLab were a game changer for our company. They delivered an immersive training experience for our employees, allowing us to reduce training time by 25% and improve overall skill retention. We couldn't be more pleased with the results.",
            image: "/images/priya_sharma.jpg" // Replace with actual image path or URL
        },
        {
            name: "Anil Deshmukh",
            feedback: "Our retail business was transformed thanks to AR TechLab’s virtual try-on technology. We saw a significant reduction in product returns and an overall increase in customer satisfaction. Their expertise in AR is unmatched in the industry.",
            image: "/images/anil_deshmukh.jpg" // Replace with actual image path or URL
        },
        {
            name: "Sneha Iyer",
            feedback: "Working with AR TechLab was a fantastic experience. Their AR solutions provided us with a cutting-edge way to present our products online, leading to a substantial increase in our online engagement and sales. Their team is highly professional and delivered excellent results on time.",
            image: "/images/sneha_iyer.jpg" // Replace with actual image path or URL
        }
    ];

    return (
        <section className="bg-black text-gray-100 py-12 lg:py-24">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-semibold">What Our Clients Say</h1>
                <p className="mt-4 text-lg">Testimonials from our valued clients</p>
            </div>
            <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="flex flex-col items-center mx-12 lg:mx-0">
                        <div className="flex items-center">
                            <Image
                                alt={`${testimonial.name}`}
                                className="inline-block h-32 w-32 rounded-full"
                                src={testimonial.image}
                                loading="lazy"
                                height={32}
                                width={32}
                            />
                        </div>
                        <div className="relative text-center mt-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 text-gray-700">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>
                            <p className="px-6 py-1 text-lg italic">&#34;{testimonial.feedback}&#34;</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 text-gray-700">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </div>
                        <span className="w-12 h-1 my-2 rounded-lg bg-violet-400"></span>
                        <p>{testimonial.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
