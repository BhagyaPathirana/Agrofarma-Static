import { motion } from 'framer-motion';
import { UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const teamMembers = [
    {
        name: 'Prof. Pradeep Abeygunawardhana',
        role: 'Supervisor',
        department: 'Faculty of Computing',
        institution: 'SLIIT | Sri Lanka Institute of Information Technology',
        location: 'Malabe, Sri Lanka',
        email: 'pradeep.a@sliit.lk',
        image: '/images/supervisor.jpg',
        color: 'from-green-500 to-green-600',
    },
    {
        name: 'Mr. Didula Chamara',
        role: 'Co-Supervisor',
        department: 'Faculty of Computing',
        institution: 'SLIIT | Sri Lanka Institute of Information Technology',
        location: 'Malabe, Sri Lanka',
        email: 'didula.c@sliit.lk',
        image: '/images/co-supervisor.jpg',
        color: 'from-green-500 to-green-600',
    },
    {
        name: 'Anjana Prabhath',
        role: 'Group Member',
        department: 'Faculty of Computing',
        institution: 'SLIIT | Sri Lanka Institute of Information Technology',
        location: 'Malabe, Sri Lanka',
        email: 'it21158490@my.sliit.lk',
        image: '/images/leader.jpg',
        color: 'from-green-500 to-green-600',
    },
    {
        name: 'Sandani Amasha',
        role: 'Group Member',
        department: 'Faculty of Computing',
        institution: 'SLIIT | Sri Lanka Institute of Information Technology',
        location: 'Malabe, Sri Lanka',
        email: 'it21172632@my.sliit.lk',
        image: '/images/member1.png',
        color: 'from-green-500 to-green-600',
    },
    {
        name: 'Bhagya Sewwandi',
        role: 'Group Member',
        department: 'Faculty of Computing',
        institution: 'SLIIT | Sri Lanka Institute of Information Technology',
        location: 'Malabe, Sri Lanka',
        email: 'it21171956@my.sliit.lk',
        image: '/images/member2.jpg',
        color: 'from-green-500 to-green-600',
    },
    {
        name: 'Hasitha Jagoda',
        role: 'Group Member',
        department: 'Faculty of Computing',
        institution: 'SLIIT | Sri Lanka Institute of Information Technology',
        location: 'Malabe, Sri Lanka',
        email: 'it21174926@my.sliit.lk',
        image: '/images/member3.png',
        color: 'from-green-500 to-green-600',
    },
];

const achievements = [
    "Smart Agriculture Platform for Sri Lankan Farmers",
    "Advanced AI and Machine Learning Models for Crop Analysis",
    "Real-time Market Price and Fuel Cost Forecasting",
    "Intelligent Crop Suitability Prediction System",
    "Automated Plant Disease Detection with CNN",
    "Comprehensive Research and Documentation"
];

export default function About() {
    return (
        <section id="about" className="py-12 sm:py-16 md:py-20 bg-green-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            About Our Team
                        </h2>
                        <div className="w-20 h-0.5 bg-green-500/50 mx-auto rounded-full"></div>
                    </div>

                    {/* Project Overview */}
                    <div className="mb-16">
                        <div className="bg-white p-6 sm:p-8 rounded-lg border border-green-100">
                            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6 text-center">
                                Meet Our Team!
                            </h3>
                            <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed text-center">
                                AgroFarma is developed by a dedicated team from the Faculty of Computing at Sri Lanka Institute of Information Technology (SLIIT).
                                Under the guidance of experienced supervisors, we are committed to creating innovative solutions for smart agriculture
                                through advanced AI, machine learning, and data analytics technologies.
                            </p>
                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-center">
                                Our team combines expertise in computing and agriculture, focusing on developing cutting-edge technology
                                that enables intelligent farming decisions, predictive analytics, and data-driven crop management systems
                                for Sri Lankan farmers.
                            </p>
                        </div>
                    </div>

                    {/* Team Members */}
                    <div className="mb-16">
                        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8 text-center">
                            Our Team
                        </h3>
                        <div className="space-y-8">
                            {/* First row - Supervisors (2 cards) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center max-w-4xl mx-auto">
                                {teamMembers.slice(0, 2).map((member, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="bg-white p-6 rounded-lg border border-green-100 hover:border-green-200 transition-colors duration-200"
                                    >
                                        <div className="text-center mb-4">
                                            <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden ring-2 ring-green-200 mb-4">
                                                <Image
                                                    src={member.image}
                                                    alt={member.name}
                                                    fill
                                                    className="object-cover"
                                                    onError={(e) => {
                                                        const target = e.target as HTMLImageElement;
                                                        target.style.display = 'none';
                                                        target.nextElementSibling?.classList.remove('hidden');
                                                    }}
                                                />
                                                <div className="hidden w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                                    <UserGroupIcon className="h-10 w-10 text-gray-400" />
                                                </div>
                                            </div>
                                            <h4 className="text-lg font-semibold text-gray-900">{member.name}</h4>
                                            <p className="text-sm text-green-500 mb-1">{member.role}</p>
                                            <p className="text-xs text-gray-500 mb-1">{member.department}</p>
                                            <p className="text-xs text-gray-500 mb-1">{member.institution}</p>
                                            <p className="text-xs text-gray-500 mb-2">{member.location}</p>
                                            <p className="text-xs text-green-500 break-all">{member.email}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Second row - Students (4 cards) */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {teamMembers.slice(2).map((member, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="bg-white p-6 rounded-lg border border-green-100 hover:border-green-200 transition-colors duration-200"
                                    >
                                        <div className="text-center mb-4">
                                            <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden ring-2 ring-green-200 mb-4">
                                                <Image
                                                    src={member.image}
                                                    alt={member.name}
                                                    fill
                                                    className="object-cover"
                                                    onError={(e) => {
                                                        const target = e.target as HTMLImageElement;
                                                        target.style.display = 'none';
                                                        target.nextElementSibling?.classList.remove('hidden');
                                                    }}
                                                />
                                                <div className="hidden w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                                    <UserGroupIcon className="h-10 w-10 text-gray-400" />
                                                </div>
                                            </div>
                                            <h4 className="text-lg font-semibold text-gray-900">{member.name}</h4>
                                            <p className="text-sm text-green-500 mb-1">{member.role}</p>
                                            <p className="text-xs text-gray-500 mb-1">{member.department}</p>
                                            <p className="text-xs text-gray-500 mb-1">{member.institution}</p>
                                            <p className="text-xs text-gray-500 mb-2">{member.location}</p>
                                            <p className="text-xs text-green-500 break-all">{member.email}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-16">
                        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8 text-center">
                            Project Achievements
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {achievements.map((achievement, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-6 rounded-lg border border-green-100 hover:border-green-200 transition-colors duration-200"
                                >
                                    <div className="flex items-center">
                                        <div className="p-2 rounded-lg bg-green-100 border border-green-200">
                                            <AcademicCapIcon className="h-6 w-6 text-green-500" />
                                        </div>
                                        <p className="ml-4 text-gray-600">{achievement}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 