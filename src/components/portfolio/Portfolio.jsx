import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React eCommerce",
    img: "https://img.freepik.com/free-vector/ecommerce-internet-shopping-promotion-campaign_335657-2977.jpg",
    desc: "An Ecommerce Application based on MERN stack which have features like Admin Dashboard, React Stripe Payments, Cart functionality all in a single project",
    link:"https://github.com/Abhay-Narayan/Ecom"
  },
  {
    id: 2,
    title: "Next.js Ai-Blog",
    img: "https://img.freepik.com/free-vector/blogging-illustration-concept_114360-788.jpg",
    desc: "A NextJs application which uses AI to generate content for the blogs using GPT-3.5(turbo)",
    link:"https://github.com/Abhay-Narayan/AI-Blog-app"
  },
  {
    id: 3,
    title: "Social Media Application",
    img: "https://img.freepik.com/free-vector/hand-drawn-illustration-people-with-smartphone-marketing_52683-66659.jpg",
    desc: "An online Social Media platform which allows users to socially interact by sharing photos and making friends. Used MERN stack along with Tailwind CSS to design and maintain the smooth flow of the website",
    link:"https://github.com/Abhay-Narayan/Social-media"
  },
  {
    id: 4,
    title: "Chat Application",
    img: "https://img.freepik.com/free-vector/messenger-concept-illustration_114360-860.jpg",
    desc: "Developed a web application using streamchat REACT API to implement the chat functionality. Implemented the login/Signup Functionality for secure browsing of the application along with proper authentication. ",
    link:"https://github.com/Abhay-Narayan/Chat-app-frontend"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank" rel="noreferrer"><button>See Demo</button></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;