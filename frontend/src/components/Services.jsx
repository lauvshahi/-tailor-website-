import { 
  FaBriefcase, 
  FaCrown, 
  FaRing, 
  FaGraduationCap, 
  FaCut 
} from 'react-icons/fa';

function Services() {
  const services = [
    {
      id: 1,
      title: "Coat Pant",
      description: "Perfect formal suits for business and events.",
      icon: FaBriefcase
    },
    {
      id: 2,
      title: "Daura Suruwal",
      description: "Traditional Nepali dress with perfect fitting.",
      icon: FaCrown
    },
    {
      id: 3,
      title: "Wedding Suit",
      description: "Premium design for your special day.",
      icon: FaRing
    },
    {
      id: 4,
      title: "School Uniform",
      description: "Comfortable and durable school wear.",
      icon: FaGraduationCap
    },
    {
      id: 5,
      title: "Custom Tailoring",
      description: "Design your own unique outfit.",
      icon: FaCut
    }
  ];

  return (
    <section className="py-20 px-4 min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-wider text-gray-900 uppercase mb-3">
            Our Services
          </h2>
          <div className="w-16 h-0.5 bg-gray-900 mx-auto"></div>
          <p className="text-gray-500 font-light tracking-wide mt-4">
            Premium tailoring crafted to perfection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative bg-white border border-gray-100 p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gray-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-light text-gray-400 tracking-widest">
                    {String(item.id).padStart(2, '0')}
                  </span>
                  <Icon 
                    size={22} 
                    className="text-gray-400 group-hover:text-gray-900 transition-colors duration-300" 
                  />
                </div>

                <h3 className="text-xl font-light tracking-wide text-gray-900 mb-3 group-hover:tracking-wider transition-all duration-300">
                  {item.title}
                </h3>
                
                <p className="text-gray-500 font-light text-sm leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-6 flex items-center">
                  <span className="text-xs font-light text-gray-400 tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;