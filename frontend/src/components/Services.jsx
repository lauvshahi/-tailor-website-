import "../styles/Services.css";

function Services() {

  const services = [
    {
      id: 1,
      title: "Coat Pant",
      description: "Perfect formal suits for business and events."
    },
    {
      id: 2,
      title: "Daura Suruwal",
      description: "Traditional Nepali dress with perfect fitting."
    },
    {
      id: 3,
      title: "Wedding Suit",
      description: "Premium design for your special day."
    },
    {
      id: 4,
      title: "School Uniform",
      description: "Comfortable and durable school wear."
    },
    {
      id: 5,
      title: "Custom Tailoring",
      description: "Design your own unique outfit."
    }
  ];

  return (
    <section className="services">
      <h2>Our Services</h2>

      <div className="services-container">

        {services.map((item) => (
          <div key={item.id} className="service-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Services;