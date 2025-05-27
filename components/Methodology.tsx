import { motion } from 'framer-motion';
import { CogIcon, CloudIcon, CpuChipIcon, SignalIcon, DocumentTextIcon, AdjustmentsHorizontalIcon, TableCellsIcon, PresentationChartBarIcon } from '@heroicons/react/24/outline';

const methodologySteps = [
    {
        title: "Phase 1: Requirement Gathering",
        icon: SignalIcon,
        description: "Conducted interviews with farmers and agriculture officers in Dambulla, Gannoruwa, and Pettah to understand their needs and challenges.",
        color: "from-green-500 to-green-600"
    },
    {
        title: "Phase 2: Data Collection",
        icon: DocumentTextIcon,
        description: "Gathered market & fuel prices from Central Bank & CEYPETCO, soil data from HORDI, weather data via Open-Meteo API, and plant images from PlantVillage (Kaggle).",
        color: "from-green-500 to-green-600"
    },
    {
        title: "Phase 3: Data Preprocessing",
        icon: AdjustmentsHorizontalIcon,
        description: "Cleaned time-series, image, and soil data using normalization, encoding, and augmentation techniques for optimal model training.",
        color: "from-green-500 to-green-600"
    },
    {
        title: "Phase 4: Model Development",
        icon: CpuChipIcon,
        description: "Developed specialized models: XGBoost for price prediction, LSTM for fuel forecasting, Logistic Regression for crop suitability, CatBoost for crop ranking, and CNN for disease identification.",
        color: "from-green-500 to-green-600"
    },
    {
        title: "Phase 5: System Integration",
        icon: CloudIcon,
        description: "Implemented modular Flask backend, React-based responsive frontend, Firebase for user storage & logging, and APIs for real-time predictions.",
        color: "from-green-500 to-green-600"
    },
    {
        title: "Phase 6: Testing & Validation",
        icon: CogIcon,
        description: "Conducted accuracy testing (R², MAE, RMSE, Top-1, Top-3, NDCG, MAP), usability testing with real farmers, and functional testing with image uploads and field scenarios.",
        color: "from-green-500 to-green-600"
    }
];

const systemComponents = [
    {
        component: "Price Prediction Module",
        icon: PresentationChartBarIcon,
        description: "Uses XGBoost to predict market prices based on historical data from Central Bank and market trends.",
        technologies: ["XGBoost", "Time Series Analysis", "Market Data API"]
    },
    {
        component: "Fuel Cost Forecasting",
        icon: AdjustmentsHorizontalIcon,
        description: "Implements LSTM for accurate fuel price predictions using CEYPETCO data for transport cost estimation.",
        technologies: ["LSTM", "Deep Learning", "CEYPETCO API"]
    },
    {
        component: "Crop Suitability Analysis",
        icon: TableCellsIcon,
        description: "Combines Logistic Regression and CatBoost to analyze soil data from HORDI and recommend optimal crops.",
        technologies: ["Logistic Regression", "CatBoost", "HORDI Data"]
    },
    {
        component: "Disease Detection System",
        icon: CpuChipIcon,
        description: "Utilizes CNN models trained on PlantVillage dataset for automated plant disease identification.",
        technologies: ["CNN", "Computer Vision", "PlantVillage Dataset"]
    },
    {
        component: "Weather Integration",
        icon: CloudIcon,
        description: "Integrates real-time weather data from Open-Meteo API for enhanced crop recommendations.",
        technologies: ["Open-Meteo API", "Weather Analysis", "Data Integration"]
    },
    {
        component: "User Management & Storage",
        icon: DocumentTextIcon,
        description: "Implements Firebase for secure user data storage, authentication, and activity logging.",
        technologies: ["Firebase", "Authentication", "Cloud Storage"]
    }
];

export default function Methodology() {
    return (
        <section id="methodology" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-green-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Our Approach
                        </h2>
                        <div className="w-20 h-0.5 bg-green-500/50 mx-auto rounded-full mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            A systematic approach to developing intelligent solutions for modern agriculture
                        </p>
                    </div>

                    {/* Methodology Steps */}
                    <div className="mb-20">
                        <div className="relative">
                            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-green-200 hidden lg:block"></div>
                            <div className="space-y-12">
                                {methodologySteps.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className={`relative flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                                            }`}
                                    >
                                        <div className="lg:w-1/2">
                                            <div className="bg-white p-6 rounded-xl shadow-sm border border-green-100">
                                                <div className="flex items-center mb-4">
                                                    <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600">
                                                        <step.icon className="h-6 w-6 text-white" />
                                                    </div>
                                                    <h4 className="text-xl font-semibold text-gray-900 ml-4">{step.title}</h4>
                                                </div>
                                                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                            </div>
                                        </div>
                                        <div className="hidden lg:block">
                                            <div className="w-12 h-12 rounded-full bg-white border-4 border-green-500 flex items-center justify-center">
                                                <span className="text-green-600 font-bold">{index + 1}</span>
                                            </div>
                                        </div>
                                        <div className="lg:w-1/2"></div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* System Components */}
                    <div className="mb-20">
                        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8 text-center">
                            Core Components
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {systemComponents.map((component, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-6 rounded-xl shadow-sm border border-green-100 hover:border-green-200 transition-all duration-300"
                                >
                                    <div className="flex items-center mb-4">
                                        <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-green-600">
                                            <component.icon className="h-6 w-6 text-white" />
                                        </div>
                                        <h4 className="text-lg font-semibold text-gray-900 ml-4">{component.component}</h4>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{component.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {component.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-xs rounded-full bg-green-50 text-green-600 border border-green-100"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Testing & Validation */}
                    <div>
                        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8 text-center">
                            Quality Assurance
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-green-100">
                                <h4 className="text-xl font-semibold text-gray-900 mb-6">Performance Metrics</h4>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="p-1.5 rounded-lg bg-green-100 mr-4">
                                            <span className="w-2 h-2 bg-green-500 rounded-full block"></span>
                                        </div>
                                        <div>
                                            <h5 className="text-sm font-medium text-gray-900 mb-1">Regression Analysis</h5>
                                            <p className="text-gray-600 text-sm">R², MAE, RMSE for price and fuel predictions</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="p-1.5 rounded-lg bg-green-100 mr-4">
                                            <span className="w-2 h-2 bg-green-500 rounded-full block"></span>
                                        </div>
                                        <div>
                                            <h5 className="text-sm font-medium text-gray-900 mb-1">Classification Metrics</h5>
                                            <p className="text-gray-600 text-sm">Top-1, Top-3 accuracy for crop recommendations</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="p-1.5 rounded-lg bg-green-100 mr-4">
                                            <span className="w-2 h-2 bg-green-500 rounded-full block"></span>
                                        </div>
                                        <div>
                                            <h5 className="text-sm font-medium text-gray-900 mb-1">Ranking Evaluation</h5>
                                            <p className="text-gray-600 text-sm">NDCG, MAP for alternative crop suggestions</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-green-100">
                                <h4 className="text-xl font-semibold text-gray-900 mb-6">User Testing & Validation</h4>
                                <div className="space-y-4">
                                    <div className="flex items-start">
                                        <div className="p-1.5 rounded-lg bg-green-100 mr-4">
                                            <span className="w-2 h-2 bg-green-500 rounded-full block"></span>
                                        </div>
                                        <div>
                                            <h5 className="text-sm font-medium text-gray-900 mb-1">Field Testing</h5>
                                            <p className="text-gray-600 text-sm">Usability testing with real farmers in Dambulla, Gannoruwa, and Pettah</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="p-1.5 rounded-lg bg-green-100 mr-4">
                                            <span className="w-2 h-2 bg-green-500 rounded-full block"></span>
                                        </div>
                                        <div>
                                            <h5 className="text-sm font-medium text-gray-900 mb-1">Functional Testing</h5>
                                            <p className="text-gray-600 text-sm">Image uploads and real field scenarios validation</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="p-1.5 rounded-lg bg-green-100 mr-4">
                                            <span className="w-2 h-2 bg-green-500 rounded-full block"></span>
                                        </div>
                                        <div>
                                            <h5 className="text-sm font-medium text-gray-900 mb-1">Expert Validation</h5>
                                            <p className="text-gray-600 text-sm">System performance validation with agriculture officers and domain experts</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}