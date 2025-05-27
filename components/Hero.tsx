import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
            {/* Background with Dark Overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('/images/heroagro.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Main Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <span className="inline-block px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-sm font-medium mb-6">
                                Smart Agriculture Platform
                            </span>
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                Transforming Agriculture with <span className="text-green-400">Data-Driven</span> Insights
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                Empowering Sri Lankan farmers with intelligent solutions for crop management,
                                market predictions, and sustainable farming practices.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <motion.a
                                    href="#about"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300"
                                >
                                    Get Started
                                    <FiArrowRight className="ml-2 h-5 w-5" />
                                </motion.a>
                                {/* <motion.a
                                    href="#"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl text-white bg-white/10 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-300"
                                >
                                    <FiPlay className="h-5 w-5 mr-2" />
                                    Watch Demo
                                </motion.a> */}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Feature Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                        {[
                            {
                                title: "Crop Analysis",
                                description: "Advanced algorithms for crop suitability and yield prediction"
                            },
                            {
                                title: "Market Insights",
                                description: "Real-time market price forecasting and trend analysis"
                            },
                            {
                                title: "Disease Detection",
                                description: "AI-powered plant disease identification and treatment"
                            },
                            {
                                title: "Smart Planning",
                                description: "Data-driven recommendations for optimal farming decisions"
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300"
                            >
                                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-300">{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
} 