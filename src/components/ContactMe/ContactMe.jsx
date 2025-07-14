import React, { useEffect, useRef, useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { HoverBorderGradient } from "../ui/HoverBorderGradient/HoverBorderGradient";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import Heading from "../Heading/Heading";
import SocialLink from "../shared/SocialLinks/SocialLink";
import GradientButton from "../shared/GradientButton/GradientButton";

const ContactMe = () => {
    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    console.log(serviceID, templateID, publicKey);

    const formRef = useRef();
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setSending(true);

        emailjs
            .sendForm(
                serviceID,
                templateID,
                formRef.current,
                publicKey
            )
            .then(
                () => {
                    setSending(false);
                    setSent(true);
                    formRef.current.reset();
                },
                (error) => {
                    setSending(false);
                    toast("Something went wrong: " + error.text);
                }
            );
    };

    useEffect(() => {
        if (sent) {
            toast.success("Message sent successfully!");
            setSent(false);
        }
    }, [sent]);


    return (
        <section className="bg-[#0D1321] text-white p-8 md:p-12 rounded-xl shadow-lg  mx-auto">
            {/* Heading */}
            <Heading
                heading={"Contact Me"}
                subheading={"Have a question or want to work together? Let's talk!"}
            >
            </Heading>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Info Section */}
                <div
                    data-aos="fade-up"
                    className="space-y-6"
                >
                    <div className="flex items-start space-x-4">
                        <FiMail className="text-[#00ff99] mt-1 text-xl" />
                        <div>
                            <h3 className="text-lg font-semibold">Email</h3>
                            <p className="text-gray-400">aniksarkar.cs@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <FiPhone className="text-[#00ff99] mt-1 text-xl" />
                        <div>
                            <h3 className="text-lg font-semibold">Phone</h3>
                            <p className="text-gray-400">+8801742234584</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <FiMapPin className="text-[#00ff99] mt-1 text-xl" />
                        <div>
                            <h3 className="text-lg font-semibold">Location</h3>
                            <p className="text-gray-400">Rangpur, Bangladesh</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3 mt-2'>
                        <SocialLink
                            link={"https://www.linkedin.com/in/anik-sarkar-cs"}
                            icon={<FaLinkedin />}
                        >
                        </SocialLink>
                        <SocialLink
                            link={"https://github.com/Anik-Sarkar-01"}
                            icon={<FaGithub />}
                        >
                        </SocialLink>

                        <SocialLink
                            link={"https://www.facebook.com/beinganik.87"}
                            icon={<FaFacebook />}
                        >
                        </SocialLink>
                    </div>
                </div>

                {/* Form Section */}
                <form
                    data-aos="fade-up"
                    ref={formRef}
                    onSubmit={sendEmail}
                    className="space-y-4"
                >
                    <input
                        type="text"
                        name="user_name"
                        className="w-full p-3 rounded bg-[#1A1F2E] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00ff99] text-white"
                        placeholder="Your name"
                        required
                    />
                    <input
                        type="email"
                        name="user_email"
                        className="w-full p-3 rounded bg-[#1A1F2E] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00ff99] text-white"
                        placeholder="Your email"
                        required
                    />
                    <textarea
                        name="message"
                        rows={5}
                        className="w-full p-3 rounded bg-[#1A1F2E] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00ff99] text-white"
                        placeholder="Type your message..."
                        required
                    />
                    <GradientButton
                        type="submit"
                        disabled={sending}
                        className="bg-[#00ff99] hover:bg-[#00cc7a] text-black font-semibold py-2 px-6 rounded-lg transition"
                    >
                        {sending ? "Sending..." : "Send Message"}
                    </GradientButton>
                </form>
            </div>
        </section>
    );
};

export default ContactMe;
