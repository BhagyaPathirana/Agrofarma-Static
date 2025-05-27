import { motion } from 'framer-motion';
import { CodeBracketIcon, CommandLineIcon, CpuChipIcon, DocumentTextIcon, ServerIcon } from '@heroicons/react/24/outline';
import { FaPython, FaReact } from 'react-icons/fa';
import { SiTensorflow, SiScikitlearn, SiPandas } from 'react-icons/si';
import { IconType } from 'react-icons';
import { ComponentType, SVGProps } from 'react';

type IconComponent = IconType | ComponentType<SVGProps<SVGSVGElement>>;

interface Technology {
    name: string;
    icon: IconComponent | null;
    description: string;
}

// Helper function to get a generic icon or initials if a specific one isn't provided
const getTechIcon = (techName: string, specificIcon: IconComponent | null) => {
    if (specificIcon) {
        const Icon = specificIcon;
        return <Icon className="h-5 w-5 text-white" />;
    }
    // Fallback to initials if no icon
    const initials = techName.split(' ').map((n: string) => n[0]).join('').substring(0, 2).toUpperCase();
    return <span className="text-white text-xs font-bold">{initials}</span>;
};

const technologyCategories = [
    {
        category: 'AI & Machine Learning Core',
        icon: CpuChipIcon,
        technologies: [
            { name: 'Python', icon: FaPython, description: 'Primary language for ML development and data processing' },
            { name: 'XGBoost', icon: null, description: 'For market price prediction and forecasting' },
            { name: 'LSTM', icon: null, description: 'For fuel price forecasting and time series analysis' },
            { name: 'Logistic Regression', icon: null, description: 'For crop suitability analysis' },
            { name: 'CNN', icon: null, description: 'For plant disease detection from images' },
            { name: 'TensorFlow', icon: SiTensorflow, description: 'Deep learning framework for model development' },
        ] as Technology[],
        color: 'from-green-500 to-green-600',
    },
    {
        category: 'Data Processing & Analysis',
        icon: CommandLineIcon,
        technologies: [
            { name: 'Pandas', icon: SiPandas, description: 'For data manipulation and preprocessing' },
            { name: 'Scikit-learn', icon: SiScikitlearn, description: 'For model training and evaluation' },
            { name: 'MongoDB', icon: null, description: 'For storing and querying agricultural data' },
            { name: 'APIs', icon: null, description: 'For real-time market data, weather, and soil information' },
            { name: 'Data Visualization', icon: null, description: 'For presenting insights and predictions' },
        ] as Technology[],
        color: 'from-green-500 to-green-600',
    },
    {
        category: 'Web Platform & Frontend',
        icon: ServerIcon,
        technologies: [
            { name: 'Next.js', icon: null, description: 'React framework for building the user interface' },
            { name: 'React', icon: FaReact, description: 'For interactive UI components and data visualization' },
            { name: 'Node.js', icon: null, description: 'Backend runtime for API development' },
            { name: 'REST APIs', icon: null, description: 'For seamless data flow between components' },
        ] as Technology[],
        color: 'from-green-500 to-green-600',
    },
    {
        category: 'Evaluation & Deployment',
        icon: CodeBracketIcon,
        technologies: [
            { name: 'Model Evaluation', icon: null, description: 'For assessing prediction accuracy and model performance' },
            { name: 'Performance Metrics', icon: null, description: 'For monitoring system efficiency and reliability' },
            { name: 'User Testing', icon: null, description: 'For gathering farmer feedback and improving usability' },
            { name: 'Continuous Integration', icon: null, description: 'For automated testing and deployment' },
        ] as Technology[],
        color: 'from-green-500 to-green-600',
    },
];

export default function Technologies() {
    return (
        <section id="technologies" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-green-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Our Tech Stack
                        </h2>
                        <div className="w-20 h-0.5 bg-green-500/50 mx-auto rounded-full mb-6"></div>
                        <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                            A powerful combination of cutting-edge technologies working together to deliver
                            intelligent solutions for modern agriculture in Sri Lanka.
                        </p>
                    </div>

                    {/* Technology Categories */}
                    <div className="mb-16">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {technologyCategories.map((category, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-6 rounded-xl shadow-sm border border-green-100 hover:border-green-200 transition-all duration-300"
                                >
                                    <div className="flex items-center mb-6">
                                        <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600">
                                            <category.icon className="h-6 w-6 text-white" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-900 ml-4">{category.category}</h3>
                                    </div>
                                    <div className="space-y-4">
                                        {category.technologies.map((tech, techIndex) => (
                                            <div key={techIndex} className="flex items-start group">
                                                <div className={`w-10 h-10 flex-shrink-0 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center ${!tech.icon && 'p-1'} group-hover:scale-110 transition-transform duration-300`}>
                                                    {getTechIcon(tech.name, tech.icon)}
                                                </div>
                                                <div className="ml-4">
                                                    <p className="text-gray-900 font-medium text-sm group-hover:text-green-600 transition-colors duration-300">{tech.name}</p>
                                                    <p className="text-gray-600 text-xs mt-0.5">{tech.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Tech Stack Overview */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-green-100">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Technology Integration</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center p-4">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                                    <CpuChipIcon className="h-8 w-8 text-white" />
                                </div>
                                <h4 className="text-lg font-medium text-gray-900 mb-2">Machine Learning</h4>
                                <p className="text-gray-600 text-sm">Advanced algorithms for predictions and analysis</p>
                            </div>
                            <div className="text-center p-4">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                                    <ServerIcon className="h-8 w-8 text-white" />
                                </div>
                                <h4 className="text-lg font-medium text-gray-900 mb-2">Web Platform</h4>
                                <p className="text-gray-600 text-sm">Modern, responsive, and user-friendly interface</p>
                            </div>
                            <div className="text-center p-4">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                                    <DocumentTextIcon className="h-8 w-8 text-white" />
                                </div>
                                <h4 className="text-lg font-medium text-gray-900 mb-2">Data Management</h4>
                                <p className="text-gray-600 text-sm">Efficient storage and processing of agricultural data</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}