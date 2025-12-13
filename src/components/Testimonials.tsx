import './Gallery.css';

export default function Testimonials() {
  const testimonials = [
    {
      text: "We are absolutely delighted with the air conditioning. Thank you for doing such a neat job",
      author: "Mrs F Swallow",
      location: "London"
    },
    {
      text: "Sam is a true professional. His knowledge of refrigerant systems, work ethic and attention to detail is by far the best I've seen. He listens and provides sound advice. My system looks and works great. I would highly recommend him for any project",
      author: "Mr Bertolo",
      location: "Etobicoke"
    },
    {
      text: "Heard some very good feedback about the work you and your guys have done at Rouge Valley [Hospital], thought you would like to know seeing as we usually only hear the bad things. Well done",
      author: "James Findlay P. Eng",
      location: "Black Creek Mechanical"
    },
    {
      text: "Really appreciate this system and your workmanship",
      author: "Mr & Mrs Reis",
      location: "Bowmanville"
    },
    {
      text: "The air con is simply fabulous! At last we have hit a semi-heatwave so tested the system to the full. It's made such a difference",
      author: "Gill",
      location: "To The Point Ltd"
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2>What Our Clients Say</h2>
        <p className="testimonials-subtitle">
          Trusted by businesses across the GTA for quality ductless installations
        </p>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <span className="author-name">{testimonial.author}</span>
                <span className="author-location">{testimonial.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
