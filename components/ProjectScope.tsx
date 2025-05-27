import { motion } from 'framer-motion';
import { ChartBarIcon, ExclamationTriangleIcon, LightBulbIcon, FlagIcon } from '@heroicons/react/24/outline';

const literatureSurvey = [
    {
        title: 'Traditional Agriculture Methods',
        content: 'Traditional farming practices in Sri Lanka rely heavily on manual methods and experience-based decisions, leading to reduced operational efficiency and inconsistent crop yields. Conventional approaches often involve trial-and-error methods and static farming calendars [1].'
    },
    {
        title: 'Market Price Prediction Challenges',
        content: 'Conventional market price evaluations often neglect seasonal trends and current market changes, impacting long-term revenue forecasts. The absence of automated tools limits strategic decision-making for farmers [6, 7].'
    },
    {
        title: 'Crop Planning & Disease Management',
        content: 'Traditional crop planning struggles with adapting to changing weather conditions and soil quality. Current methods often fail to understand evolving agricultural needs. Disease management emphasizes early detection and treatment to avoid crop losses [8, 9].'
    },
    {
        title: 'Technology Integration Gaps',
        content: 'Traditional farming evaluations are often inefficient. Predictive analytics and ML-based assessment tools are needed for continuous crop monitoring to minimize losses and ensure sustainable farming [10].'
    }
];

const researchGaps = [
    "Manual farming decisions leading to suboptimal crop selection and resource allocation.",
    "Existing methods lack automation and real-time analysis for market price predictions.",
    "Fragmented data sources, subjective opinions, and varied farming practices.",
    "Non-integrated real-time analytics and prediction models hindering accurate yield forecasting.",
    "Traditional crop planning neglects dynamic weather patterns and soil conditions.",
    "Disease detection tools have restricted accuracy and limited integration with treatment plans.",
    "Lack of a unified intelligent farming system merging multiple agricultural aspects.",
    "Insufficient automation in crop rotation and seasonal planning."
];

const researchObjectives = [
    {
        title: "Predict Market Prices",
        description: "Develop XGBoost models to forecast vegetable prices in Pettah and Dambulla markets, helping farmers make informed selling decisions."
    },
    {
        title: "Forecast Fuel Prices",
        description: "Implement LSTM models to predict fuel prices, enabling accurate transport cost estimation for better logistics planning."
    },
    {
        title: "Assess Crop Suitability",
        description: "Use Logistic Regression to analyze soil and weather data, determining optimal crops for specific locations and conditions."
    },
    {
        title: "Detect Plant Diseases",
        description: "Implement CNN models for automated plant disease detection from images, providing timely treatment recommendations and care plans."
    }
];

export default function ProjectScope() {
    return (
        <section id="domain" className="py-12 sm:py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Domain Analysis
                        </h2>
                        <div className="w-20 h-0.5 bg-green-500/50 mx-auto rounded-full"></div>
                    </div>

                    {/* Literature Survey */}
                    <div className="mb-16">
                        <div className="flex items-center mb-8">
                            <ChartBarIcon className="h-8 w-8 text-green-500 mr-4" />
                            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">Literature Survey</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            {literatureSurvey.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-green-50 p-6 rounded-lg border border-green-100"
                                >
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.content}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* References from Paper */}
                        <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                            <h4 className="text-green-600 font-semibold mb-4">Key References (from paper)</h4>
                            <div className="space-y-2 text-gray-600 text-sm">
                                <p>[1] S. R. Momin Mukherjee, &ldquo;Smart Agriculture: A Review of Current Technologies and Future Trends,&rdquo; INTERNATIONAL JOURNAL OF AGRICULTURAL TECHNOLOGY, vol. 2, no. 4, p. 100, 2023.</p>
                                <p>[6] C. A. H. Nicholas Achilike, &ldquo;The role of AI in modern farming practices,&rdquo; International Journal of Agricultural Research, vol. 7, no. 5, p. 170, 2023.</p>
                                <p>[7] E. P. J. A. P. C. H. Rizki Puspita Dewanti, &ldquo;Market Price Prediction in Agriculture Using Machine Learning,&rdquo; International Journal of Sustainable Agriculture, vol. 17, no. 6, p. 1871, 2023.</p>
                                <p>[8] Α. Ε. Μ. Μ. M. I. E. Mostafa Ali Benzaghta, &ldquo;Plant Disease Detection Using Deep Learning,&rdquo; Journal of Agricultural Technology, vol. 6, no. 1, p. 73, 2023.</p>
                                <p>[9] J. M. G. Ruhe, &ldquo;Crop Planning and Seasonal Analysis,&rdquo; in IEEE, Big Island, HI, USA, 2023.</p>
                                <p>[10] A. A. A. R. M. I. Katharina Bause, &ldquo;Smart Farming Technologies in Developing Countries,&rdquo; Procedia Agriculture, vol. 21, p. 478, 2023.</p>
                            </div>
                        </div>
                    </div>

                    {/* Research Gap */}
                    <div className="mb-16">
                        <div className="flex items-center mb-8">
                            <ExclamationTriangleIcon className="h-8 w-8 text-green-500 mr-4" />
                            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">Research Gap</h3>
                        </div>
                        <div className="bg-green-50 p-6 sm:p-8 rounded-lg border border-green-100">
                            <p className="text-gray-600 mb-6 text-lg">
                                Based on the literature, the following gaps are identified in current agricultural practices in Sri Lanka:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {researchGaps.map((gap, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-start"
                                    >
                                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                        <span className="text-gray-600 text-sm">{gap}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Research Problem & Solution */}
                    <div className="mb-16">
                        <div className="flex items-center mb-8">
                            <LightBulbIcon className="h-8 w-8 text-green-500 mr-4" />
                            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">Research Problem & Solution</h3>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="bg-green-50 p-6 sm:p-8 rounded-lg border border-green-100">
                                <h4 className="text-xl font-bold text-green-600 mb-4">The Problem</h4>
                                <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
                                    Sri Lankan farmers face challenges with unpredictable market prices, poor access to crop suitability information, lack of guidance on alternative crops, and inability to detect or treat crop diseases early. They often rely on traditional methods without data support, leading to suboptimal yields and financial losses. Existing tools are fragmented and don&apos;t provide comprehensive support for decision-making.
                                </p>
                            </div>
                            <div className="bg-green-50 p-6 sm:p-8 rounded-lg border border-green-100">
                                <h4 className="text-xl font-bold text-green-600 mb-4">Our Solution: AgroFarma Smart Agriculture Platform</h4>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    AgroFarma is an intelligent, research-backed decision support system that combines AI-powered forecasting, smart crop planning, and real-time agricultural support to improve yield, reduce risks, and promote sustainable farming.
                                </p>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <span className="text-green-600 font-semibold">Price Forecasting:</span>
                                        <span className="text-gray-600"> Uses XGBoost and LSTM to forecast vegetable prices and fuel costs, enabling smarter harvest timing and logistics planning.</span>
                                    </div>
                                    <div>
                                        <span className="text-green-600 font-semibold">Crop Suitability:</span>
                                        <span className="text-gray-600"> Analyzes soil and weather data using Logistic Regression to determine if a crop will grow successfully in a specific location.</span>
                                    </div>
                                    <div>
                                        <span className="text-green-600 font-semibold">Alternative Planning:</span>
                                        <span className="text-gray-600"> Recommends optimal substitute crops based on rotation logic, seasonal fit, and market demand using CatBoost.</span>
                                    </div>
                                    <div>
                                        <span className="text-green-600 font-semibold">Disease Detection:</span>
                                        <span className="text-gray-600"> Uses CNN to detect tomato leaf diseases and provides personalized treatment plans and care schedules.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Research Objectives */}
                    <div>
                        <div className="flex items-center mb-8">
                            <FlagIcon className="h-8 w-8 text-green-500 mr-4" />
                            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">Research Objectives</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {researchObjectives.map((objective, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-green-50 p-6 rounded-lg border border-green-100"
                                >
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3">{objective.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{objective.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}