import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const socialLinks = [
    {
        name: 'GitHub',
        url: 'https://github.com/agrofarma',
        icon: FaGithub,
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/company/agrofarma',
        icon: FaLinkedin,
    },
    {
        name: 'Twitter',
        url: 'https://twitter.com/agrofarma',
        icon: FaTwitter,
    },
];

const footerLinks = [
    {
        title: 'Platform',
        links: [
            { name: 'What is AgroFarma', href: '#about' },
            { name: 'Domain', href: '#domain' },
            { name: 'Documents', href: '#documents' },
            { name: 'Presentations', href: '#presentations' },
        ],
    },
    {
        title: 'Resources',
        links: [
            { name: 'User Manual', href: '/documents/user-manual.pdf' },
            { name: 'API Documentation', href: '/documents/api-docs.pdf' },
            { name: 'GitHub Repository', href: 'https://github.com/agrofarma' },
            { name: 'System Documentation', href: '/documents/system-docs.pdf' },
        ],
    },
    {
        title: 'Legal',
        links: [
            { name: 'Privacy Policy', href: '/legal/privacy-policy' },
            { name: 'Terms of Service', href: '/legal/terms-of-service' },
            { name: 'Cookie Policy', href: '/legal/cookie-policy' },
            { name: 'License', href: '/legal/license' },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="bg-green-50 border-t border-green-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">AgroFarma</h2>
                        <p className="text-gray-600 mb-6">
                            Smart Agriculture Platform - An intelligent, data-driven decision support system for Sri Lankan farmers, combining AI-powered forecasting, smart crop planning, and real-time agricultural support.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-green-500 transition-colors duration-300"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <social.icon className="h-6 w-6" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Links Sections */}
                    {footerLinks.map((section, index) => (
                        <div key={index}>
                            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                                {section.title}
                            </h3>
                            <ul className="space-y-3">
                                {section.links.map((link, linkIndex) => (
                                    <li key={linkIndex}>
                                        <a
                                            href={link.href}
                                            className="text-gray-600 hover:text-green-500 transition-colors duration-300"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-8 border-t border-green-100">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-600 text-sm">
                            © {new Date().getFullYear()} AgroFarma. All rights reserved.
                        </p>
                        <p className="text-gray-600 text-sm mt-4 md:mt-0">
                            Developed by{' '}
                            <a
                                href="https://github.com/agrofarma"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-500 hover:text-green-600 transition-colors duration-300"
                            >
                                AgroFarma Team
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
} 