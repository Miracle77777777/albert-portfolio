import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, ArrowDown, Code, Car, User, ExternalLink } from 'lucide-react';
import './App.css';
 
const App = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };
 
   return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              className="text-xl font-semibold text-gray-700"
              whileHover={{ scale: 1.05 }}
            >
              Albert Korotaev
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1496181133206-80ce9b88a853)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
         >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="font-light mb-6 tracking-tight"
                style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)' }}>
              Albert Korotaev
            </h1>
            <motion.p 
              className="text-xl md:text-2xl mb-4 font-light"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              IT Student
            </motion.p>
            <motion.p 
              className="text-lg md:text-xl mb-12 opacity-90 max-w-2xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Transitioning from automotive sales to technology, 
              building innovative solutions with code
            </motion.p>
            
            <motion.button
              onClick={() => scrollToSection('about')}
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm 
                         px-8 py-4 rounded-full border border-white/30 hover:bg-white/30 
                         transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <span>Discover My Journey</span>
              <ArrowDown className="w-4 h-4" />
            </motion.button>
          </motion.div>
        </div>
      </section>
 
      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
                My Journey
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  From the fast-paced world of automotive sales to the innovative 
                  realm of technology, my journey represents a passion for problem-solving 
                  and continuous learning.
                </p>
                <p>
                  Currently preparing to advance into IT this summer,
                  I bring a unique perspective that combines 
                  customer-focused thinking with technical skills.
                </p>
                <p>
                  My experience in car sales taught me the importance of understanding 
                  user needs, which now drives my approach to developing technology 
                  solutions that truly serve people.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1542315192-1f61a1792f33"
                  alt="Professional workspace"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Building expertise in modern web technologies with a focus on practical applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Python', 
                level: 50, 
                icon: Code,
                description: 'Backend development and data processing'
              },
              { 
                name: 'HTML & CSS', 
                level: 50, 
                icon: Code,
                description: 'Responsive web design and styling'
              },
              { 
                name: 'Java Script', 
                level: 50, 
                icon: code,
                description: 'interactive and dynamic web applications'
              }
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <skill.icon className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{skill.name}</h3>
                </div>
                <p className="text-gray-600 mb-6">{skill.description}</p>
                <div className="relative">
                  <div className="bg-gray-200 rounded-full h-2">
                    <motion.div
                      className="bg-blue-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="text-sm text-gray-500 mt-2 block">{skill.level}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Featured Project
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Combining my automotive background with technical skills
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12">
                <div className="flex items-center mb-6">
                  <Car className="w-8 h-8 text-blue-400 mr-3" />
                  <h3 className="text-2xl font-semibold text-white">VIN Lookup Tool</h3>
                </div>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  A practical web application that allows car salesmen and enthusiasts 
                  to quickly retrieve vehicle information by entering a VIN number. 
                  This tool bridges my automotive sales experience with web development skills.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    <span>Instant vehicle data retrieval</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    <span>Clean, user-friendly interface</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    <span>Built with HTML, CSS, and JavaScript</span>
                  </div>
                </div>

                <motion.a
                  href="https://bewerbungsprojekt-epg.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 
                           text-white px-6 py-3 rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/32267491/pexels-photo-32267491.jpeg"
                  alt="Modern car in showroom"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-900/50"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to bring fresh perspective and dedication to your team
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-12 shadow-lg relative overflow-hidden"
          >
            <div 
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1487611459768-bd414656ea10)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
            
            <div className="relative z-10 text-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto">
                <motion.a
                  href="mailto:albert.korotaev@icloud.com"
                  className="flex flex-col items-center p-6 rounded-xl bg-gray-50 
                           hover:bg-gray-100 transition-colors group"
                  whileHover={{ y: -5 }}
                >
                  <Mail className="w-8 h-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-900 font-medium">Email</span>
                  <span className="text-gray-600 text-sm">albert.korotaev@icloud.com</span>
                </motion.a>
                
                <motion.a
                  href="https://github.com/miracle77777777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-6 rounded-xl bg-gray-50 
                           hover:bg-gray-100 transition-colors group"
                  whileHover={{ y: -5 }}
                >
                  <Github className="w-8 h-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-900 font-medium">GitHub</span>
                  <span className="text-gray-600 text-sm">View my code</span>
                </motion.a>
              </div>
              
              <motion.p 
                className="text-gray-600 text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                I'm always excited to discuss new opportunities and learn from experienced professionals.
                <br />
                Let's build something amazing together!
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <motion.p 
              className="text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              © 2025 Albert Korotaev. Designed with passion for clean, modern aesthetics.
            </motion.p>
          </div>
        </div>
      </footer>
     </div>
   );
};
 
export default App;