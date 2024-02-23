import portfolioPic from '../assets/images/portfoliopic.jpg';

export default function AboutMe() {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <div className="bio">
        <img src={portfolioPic} alt="Portfolio" />
        <p>Embarking on my journey with a profound mission to make a positive impact, my passion for helping others serves as the driving force that propels me to continually strive for excellence. Motivated by the belief that every day presents an opportunity for growth, I am dedicated to the pursuit of continuous improvement, aiming to enhance myself by one percent each day. My aspiration revolves around the creation of innovative applications and websites designed to elevate the work experiences of my clients. I am unwaveringly committed to learning and challenging myself on a daily basis, driven by the desire to deliver nothing short of exceptional products to my clients. Witnessing the transformative effect of my work, as it empowers others to streamline their workflows and realize the full potential of their businesses, brings me unparalleled joy. In essence, my journey is not just a personal quest for improvement; its a profound commitment to assisting others in manifesting the businesses of their dreams. </p>
      </div>
      <h2>Future Plans</h2>
      <div className="future">
        <p>Looking ahead, my next ambitious step involves delving into the realms of Deep Learning, Machine Learning, and Neural Networks, with a specific focus on specializing in Artificial Intelligence (AI). I am driven by a profound curiosity to understand the intricacies of AI, recognizing its transformative potential in shaping the future of technology. I am also almost halfway through receiving my Microsoft Azure Developer Certification and hope to move onto the Microsoft Azure DevOps Certification once the Developer Certification is completed. </p>
      </div>
    </section>
  );
}