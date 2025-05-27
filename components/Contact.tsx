import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-green-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Get in Touch
                        </h2>
                        <div className="w-20 h-0.5 bg-green-500/50 mx-auto rounded-full mb-6"></div>
                        <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                            Have questions about our project? We&apos;d love to hear from you. Reach out to us through any of the following channels.
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-green-100">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Contact Information</h3>
                            <div className="space-y-8">
                                {/* Email */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start group"
                                >
                                    <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600 group-hover:scale-110 transition-transform duration-300">
                                        <EnvelopeIcon className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-sm font-medium text-gray-500 mb-1">Email</h4>
                                        <a
                                            href="mailto:info@sliit.lk"
                                            className="text-gray-900 hover:text-green-600 transition-colors duration-300"
                                        >
                                            info@sliit.lk
                                        </a>
                                    </div>
                                </motion.div>

                                {/* Phone */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    viewport={{ once: true }}
                                    className="flex items-start group"
                                >
                                    <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600 group-hover:scale-110 transition-transform duration-300">
                                        <PhoneIcon className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-sm font-medium text-gray-500 mb-1">Phone</h4>
                                        <a
                                            href="tel:+94117544801"
                                            className="text-gray-900 hover:text-green-600 transition-colors duration-300"
                                        >
                                            +94 11 754 4801
                                        </a>
                                    </div>
                                </motion.div>

                                {/* Address */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    viewport={{ once: true }}
                                    className="flex items-start group"
                                >
                                    <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600 group-hover:scale-110 transition-transform duration-300">
                                        <MapPinIcon className="h-6 w-6 text-white" />
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-sm font-medium text-gray-500 mb-1">Address</h4>
                                        <address className="text-gray-900 not-italic">
                                            Faculty of Computing,<br />
                                            University of SLIIT | Sri Lanka Institute of Information Technology,<br />
                                            Malabe Campus, New Kandy Rd,<br />
                                            Malabe 10115,<br />
                                            Sri Lanka
                                        </address>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 