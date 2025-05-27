import { motion } from 'framer-motion';
import { CheckCircleIcon, ClockIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const milestones = [
    {
        title: "Brainstorming Workshop",
        date: "March 2024",
        description: "Initial project planning and research direction discussion",
        status: "completed",
        deliverables: ["Research objectives", "Initial scope", "Team formation"]
    },
    {
        title: "Registration of Group",
        date: "April 2024",
        description: "Official registration of the research group",
        status: "completed",
        deliverables: ["Group registration", "Supervisor assignment", "Initial timeline"]
    },
    {
        title: "TAF & Project Charter",
        date: "May 2024",
        description: "Development of Topic Assessment Form and Project Charter",
        status: "completed",
        deliverables: ["Topic Assessment Form", "Project Charter", "Initial methodology"]
    },
    {
        title: "Proposal Presentation",
        date: "July 2024",
        description: "Presentation of project proposal to stakeholders",
        status: "completed",
        deliverables: ["Proposal slides", "Research plan", "Resource requirements"]
    },
    {
        title: "Proposal Reports",
        date: "August 2024",
        description: "Submission of detailed proposal reports",
        status: "completed",
        deliverables: ["Technical proposal", "Literature review", "Methodology document"]
    },
    {
        title: "Component Research & Implementation",
        date: "Sept - Nov 2024",
        description: "Individual component research and development phase",
        status: "completed",
        deliverables: ["ML models", "Data processing", "System architecture"]
    },
    {
        title: "Progress Presentation 01",
        date: "December 2024",
        description: "First progress presentation showcasing initial results",
        status: "completed",
        deliverables: ["Progress report", "Initial results", "Next steps"]
    },
    {
        title: "Research Paper & Documentation",
        date: "Jan - Feb 2025",
        description: "Writing research paper and system documentation",
        status: "completed",
        deliverables: ["Research paper", "System documentation", "User manual"]
    },
    {
        title: "Progress Presentation 02",
        date: "March 2025",
        description: "Second progress presentation and paper submission",
        status: "completed",
        deliverables: ["Updated results", "Paper submission", "Final adjustments"]
    },
    {
        title: "Draft Final Report",
        date: "April 2025",
        description: "Preparation of draft final report",
        status: "completed",
        deliverables: ["Draft report", "System evaluation", "Future work"]
    },
    {
        title: "Final Presentation & Viva",
        date: "May 2025",
        description: "Final presentation and viva voce examination",
        status: "completed",
        deliverables: ["Final presentation", "Viva preparation", "Project defense"]
    },
    {
        title: "Final Thesis Reports",
        date: "June 2025",
        description: "Submission of final thesis reports",
        status: "completed",
        deliverables: ["Final thesis", "Complete documentation", "Project artifacts"]
    }
];

export default function Milestones() {
    return (
        <section id="milestones" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-green-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Project Timeline
                        </h2>
                        <div className="w-20 h-0.5 bg-green-500/50 mx-auto rounded-full mb-6"></div>
                        <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                            A comprehensive journey from concept to completion, tracking our progress
                            through each phase of the AgroFarma project development.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-green-500 to-green-300"></div>

                        {/* Milestones */}
                        <div className="space-y-12">
                            {milestones.map((milestone, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-green-600 border-4 border-white shadow-lg"></div>

                                    {/* Content */}
                                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                                        <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100 hover:border-green-200 transition-all duration-300">
                                            <div className="flex items-center mb-4">
                                                <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600">
                                                    <DocumentTextIcon className="h-6 w-6 text-white" />
                                                </div>
                                                <div className="ml-4">
                                                    <h3 className="text-lg font-semibold text-gray-900">{milestone.title}</h3>
                                                    <p className="text-sm text-gray-500">{milestone.date}</p>
                                                </div>
                                            </div>
                                            <p className="text-gray-600 text-sm mb-4">{milestone.description}</p>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {milestone.deliverables.map((deliverable, dIndex) => (
                                                    <span
                                                        key={dIndex}
                                                        className="px-3 py-1 text-xs rounded-full bg-green-50 text-green-600 border border-green-100"
                                                    >
                                                        {deliverable}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="flex items-center">
                                                <div className="p-1.5 rounded-lg bg-green-100">
                                                    <CheckCircleIcon className="h-4 w-4 text-green-500" />
                                                </div>
                                                <span className="text-sm text-green-600 font-medium ml-2">{milestone.status}</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Timeline Summary */}
                    <div className="mt-16 bg-white p-8 rounded-xl shadow-sm border border-green-100">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Project Phases</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center p-4">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                                    <DocumentTextIcon className="h-8 w-8 text-white" />
                                </div>
                                <h4 className="text-lg font-medium text-gray-900 mb-2">Planning Phase</h4>
                                <p className="text-gray-600 text-sm">March - August 2024</p>
                            </div>
                            <div className="text-center p-4">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                                    <ClockIcon className="h-8 w-8 text-white" />
                                </div>
                                <h4 className="text-lg font-medium text-gray-900 mb-2">Development Phase</h4>
                                <p className="text-gray-600 text-sm">September - December 2024</p>
                            </div>
                            <div className="text-center p-4">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                                    <CheckCircleIcon className="h-8 w-8 text-white" />
                                </div>
                                <h4 className="text-lg font-medium text-gray-900 mb-2">Finalization Phase</h4>
                                <p className="text-gray-600 text-sm">January - June 2025</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
} 