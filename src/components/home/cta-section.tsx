"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, Send, CheckCircle } from "lucide-react"
import { Label } from "@/components/ui/label"

export const CtaSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsSubmitting(true)
        // Simulating form submission
        await new Promise(resolve => setTimeout(resolve, 2000))
        setIsSubmitting(false)
        setIsSubmitted(true)

    }

    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                                Let&apos;s Create Your Dream Website
                            </h2>
                            <p className="max-w-[600px] text-gray-400 md:text-xl">
                                Ready to take your online presence to the next level? Get in touch with us today and let&apos;s bring your vision to life.
                            </p>
                        </div>
                        <ul className="grid gap-6 md:grid-cols-2">
                            <li>
                                <div className="flex items-center space-x-4 rounded-lg bg-gray-800/50 p-4 transition-colors hover:bg-gray-800/70">
                                    <Phone className="h-6 w-6 text-gray-400" />
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium leading-none text-white">Phone</p>
                                        <a href="tel:+15550000000" className="text-sm text-gray-400 hover:text-white transition-colors">+1 (555) 000-0000</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center space-x-4 rounded-lg bg-gray-800/50 p-4 transition-colors hover:bg-gray-800/70">
                                    <Mail className="h-6 w-6 text-gray-400" />
                                    <div className="space-y-1">
                                        <p className="text-sm font-medium leading-none text-white">Email</p>
                                        <a href="mailto:hello@example.com" className="text-sm text-gray-400 hover:text-white transition-colors">hello@example.com</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold tracking-tighter sm:text-2xl text-white">
                                Contact Us
                            </h3>
                            <p className="text-gray-400">
                                Fill out the form below and we&apos;ll get back to you as soon as possible.
                            </p>
                        </div>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="text-sm font-medium text-gray-300">
                                        Name
                                    </Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="Enter your name"
                                        required
                                        className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:ring-gray-500 focus:border-gray-500"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="phone" className="text-sm font-medium text-gray-300">
                                        Phone
                                    </Label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        placeholder="Enter your phone number"
                                        className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:ring-gray-500 focus:border-gray-500"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-sm font-medium text-gray-300">
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    type="email"
                                    required
                                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:ring-gray-500 focus:border-gray-500"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message" className="text-sm font-medium text-gray-300">
                                    Message
                                </Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    placeholder="Enter your message"
                                    required
                                    className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:ring-gray-500 focus:border-gray-500"
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-full bg-white text-black hover:bg-gray-200 transition-colors"
                                disabled={isSubmitting || isSubmitted}
                            >
                                {isSubmitting ? (
                                    "Sending..."
                                ) : isSubmitted ? (
                                    <>
                                        <CheckCircle className="mr-2 h-4 w-4" />
                                        Sent
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="ml-2 h-4 w-4" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}