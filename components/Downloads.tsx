import { motion } from 'framer-motion';
import { DocumentTextIcon, PresentationChartBarIcon } from '@heroicons/react/24/outline';

const documents = [
    {
        title: "Topic Assessment Form (TAF)",
        description: "Initial assessment and approval of the research topic",
        icon: DocumentTextIcon,
        downloadUrl: "/documents/taf.pdf",
        category: "Documentation"
    },
    {
        title: "Proposal Reports Individual",
        description: "Detailed individual proposal reports for the project",
        icon: DocumentTextIcon,
        downloadUrl: "https://drive.google.com/drive/folders/1U-USfJkLAfjZxE9jLYBh1d-gBEF1XWFL?usp=drive_link",
        category: "Documentation",
        isDriveLink: true
    },
    {
        title: "Component Reports Individual",
        description: "Individual reports for each system component",
        icon: DocumentTextIcon,
        downloadUrl: "https://drive.google.com/drive/folders/1bhnxofsKz_FjD3FyDkre-4Z7h_OOGws5?usp=sharing",
        category: "Documentation",
        isDriveLink: true
    },
    {
        title: "Research Paper",
        description: "Comprehensive research paper detailing the project",
        icon: DocumentTextIcon,
        downloadUrl: "/documents/Research Paper.pdf",
        category: "Documentation"
    }
];

const presentations = [
    {
        title: "Final Presentation",
        description: "Final project presentation and defense",
        icon: PresentationChartBarIcon,
        downloadUrl: "#",
        category: "Presentation",
        isComingSoon: true
    },
    {
        title: "Progress Presentation 1",
        description: "First progress presentation showcasing initial results",
        icon: PresentationChartBarIcon,
        downloadUrl: "/presentations/Progress Presentation 1.pptx",
        category: "Presentation"
    },
    {
        title: "Progress Presentation 2",
        description: "Second progress presentation with updated results",
        icon: PresentationChartBarIcon,
        downloadUrl: "/presentations/Progress Presentation 2.pptx",
        category: "Presentation"
    },
    {
        title: "Proposal Presentation",
        description: "Initial proposal presentation to stakeholders",
        icon: PresentationChartBarIcon,
        downloadUrl: "/presentations/Proposal Presentation.pptx",
        category: "Presentation"
    }
];

export default function Downloads() {
    return (
        <section id="downloads" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-green-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Documents & Presentations
                        </h2>
                        <div className="w-20 h-0.5 bg-green-500/50 mx-auto rounded-full mb-6"></div>
                        <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                            Access our project documentation and presentations to learn more about AgroFarma&apos;s development and research.
                        </p>
                    </div>

                    {/* Documents Section */}
                    <div className="mb-16">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Documents</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {documents.map((doc, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-6 rounded-xl shadow-sm border border-green-100 hover:border-green-200 transition-all duration-300"
                                >
                                    <div className="flex items-start">
                                        <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600">
                                            <doc.icon className="h-6 w-6 text-white" />
                                        </div>
                                        <div className="ml-4 flex-1">
                                            <h4 className="text-lg font-semibold text-gray-900 mb-2">{doc.title}</h4>
                                            <p className="text-gray-600 text-sm mb-4">{doc.description}</p>
                                            <a
                                                href={doc.downloadUrl}
                                                target={doc.isDriveLink ? "_blank" : undefined}
                                                rel={doc.isDriveLink ? "noopener noreferrer" : undefined}
                                                className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700 transition-colors duration-300"
                                            >
                                                {doc.isDriveLink ? "Open in Drive" : "Download Document"}
                                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Presentations Section */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Presentations</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {presentations.map((presentation, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-6 rounded-xl shadow-sm border border-green-100 hover:border-green-200 transition-all duration-300"
                                >
                                    <div className="flex items-start">
                                        <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-green-600">
                                            <presentation.icon className="h-6 w-6 text-white" />
                                        </div>
                                        <div className="ml-4 flex-1">
                                            <h4 className="text-lg font-semibold text-gray-900 mb-2">{presentation.title}</h4>
                                            <p className="text-gray-600 text-sm mb-4">{presentation.description}</p>
                                            {presentation.isComingSoon ? (
                                                <span className="inline-flex items-center text-sm font-medium text-gray-400">
                                                    Coming Soon
                                                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </span>
                                            ) : (
                                                <a
                                                    href={presentation.downloadUrl}
                                                    className="inline-flex items-center text-sm font-medium text-green-600 hover:text-green-700 transition-colors duration-300"
                                                >
                                                    Download PPTX
                                                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                    </svg>
                                                </a>
                                            )}
                                        </div>
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