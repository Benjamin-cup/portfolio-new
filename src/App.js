import logo from './logo.svg';
import "./index.css";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ChevronDown } from "lucide-react";
import hotel from "./hotel.png";
import moviebird from "./moviebird.png";
import solanatradingbot from "./solanatradingbot.jpg";
import singular from "./singular.png";
import bostoto from "./bostoto.png";
import atjii from "./atjii.png";
import wooshi from "./wooshi.png";
import pepearab from "./pepearab.png";
import pumpfunforking from "./pumpfunforking.png";
import cpmmforking from "./cpmmforking.png";
import apestore from "./apestore.png";
import traider from "./traider.png";
import crocrash from "./crocrash.png";
import healthcare from "./healthcare.png";
import lastsender from "./lastsender.png";
import kiki from "./kiki.png";
import solanapumpfunsniper from "./solanapumpfunsniper.png";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Header />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}



function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="navbar"
    >
      <div className="nav-content">
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="https://drive.google.com/file/d/1S2gEqg2bEhUEg2SMvF0rLxwXNDXFydm4/view?usp=drive_link">Resume</a>
      </div>
    </motion.nav>
  );
}

function Header() {
  return (
    <header className="header">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="headerContent"
      >
        <h1 className="title">
          Hi, I'm <span className="highlight">Benjamin Martin</span>
        </h1>
        <p className="subtitle">Full Stack WEb Developer • Blockchain • Data Science • DevOps Enthusiast</p>
        <p className="about">
          I enjoy solving problems and creating codes that live on the internet. 
          As a senior fullstack developer, ihave full experience in building Blockchain and Web apps, designs. For 8 years of experience about fullstack developement, could provide excellent programming skills, effective commmunication skills and high quality product.
          Fast-forward to today, i've had the privilege of working at a huge manufacturing company, a start-up, export-import companies, also freelancing and Passion and enthusiasm of development, push me to levelup & teach myself. Experienced in Desktop & Development with blockchain Development.
        </p>

        <motion.div
          className="contactLinks"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a href="mailto:benjamin.bigdev@gmail.com" className="contact-link">
            <Mail />
          </a>
          {/* <a
            href="https://drive.google.com/file/d/1S2gEqg2bEhUEg2SMvF0rLxwXNDXFydm4/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="contact-link "
          >
            Resume
          </a> */}
          <a
            href="https://github.com/Benjamin-cup"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <Github />
          </a>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={32} />
        </motion.div>
      </motion.div>
    </header>
  );
}

function Skills() {
  const skills = [
    {
      title: "HTML",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    },
    {
      title: "CSS",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    },
    
    {
      title: "JavaScript",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    },
    {
      title: "Typescript",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    },
    {
      title: "React.js",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      title: "NextJs",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
    },
    {
      title: "Git",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
    },
    {
      title: "Flutter",
      image:
        "https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a59cd1cf16282.png",
    },
    {
      title: "NodeJS",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    },
    {
      title: "Python",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
    },
    {
      title: "Rust",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-original.svg",
    },
    {
      title: "MySQL",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
    },
    {
      title: "Firebase",
      image: "https://brandeps.com/logo-download/F/Firebase-logo-02.png",
    },
    {
      title: "MongoDB",
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    },
    {
      title: "Tailwind CSS",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
    },
    {
      title: "VS Code",
      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
    },
     {
      title: "Bootstrap",
      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg",
    },
     {
      title: "C",
      image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
    },
  ];

  return (
    <section id="skills" className="section">
      <motion.h2
        className="sectionTitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>
      <div className="skillsGrid">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="skill-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <img src={skill.image} alt={skill.title} className="skillImg" />
            <p className="skill-title">{skill.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
     {
      title: "Kiki Koalas",
      desc: "Kiki Koala Website",
      img: kiki,
      link: "https://kiki-koala.vercel.app/",
      github: "https://github.com/Benjamin-cup/Kiki-frontend",
    },
    {
      title: "Solana Pumpfun Sniper",
      desc: "Solana Pumpfun Meme Coin Sniper",
      img: solanapumpfunsniper,
      // link: "https://kiki-koala.vercel.app/",
      github: "https://github.com/Benjamin-cup/Solana-Pumpfun-Sniper-Total",
    },
    {
      title: "BOSTOTO",
      desc: "SOLANA NFT CONBINATOR",
      img: bostoto,
      link: "https://vlonesite.com/",
      // github: "https://github.com/vasudevsoni/multi-search",
    },
    {
      title: "Ape.store",
      desc: "Pump.fun forking",
      img: apestore,
      link: "https://ape.store/",
      // github: "https://github.com/vasudevsoni/multi-search",
    },
    {
      title: "Solana Trading Bots",
      desc: "Snipers, Volume bots, Bundlers, Copy trading bots and so on",
      img: solanatradingbot,
      // link: "https://vasudevsoni.github.io/pizza-menu/",
      github: "https://github.com/Benjamin-cup/Solana-Trading-Bots",
    },
    {
      title: "Agents.Land (Pumpfun Forking)",
      desc: "Pump.fun forking",
      img: pumpfunforking,
      link: "https://agents.land/",
      // github: "https://github.com/vasudevsoni/multi-search",
    },
    {
      title: "Singular",
      desc: "The ModularNFT Marketplace",
      img: singular,
      link: "https://singular.app/",
      // github: "https://github.com/vasudevsoni/city-reviews-app",
    },
    {
      title: "Healthcare Blockchain",
      desc: "Healthcare Blockchain",
      img: healthcare,
      link: "https://provider.drode.xyz/",
      // github: "https://github.com/vasudevsoni/city-reviews-app",
    },
    {
      title: "Traider",
      desc: "TrAIder is an advanced trading platform.",
      img: traider,
      link: "https://www.traider.vip/",
      // github: "https://github.com/vasudevsoni/multi-search",
    },
    {
      title: "Betting Site",
      desc: "Ethereum Betting site with depositing token.",
      img: crocrash,
      link: "https://crocrash.io/",
      // github: "https://github.com/vasudevsoni/multi-search",
    },
    {
      title: "Solana 9mm Dex",
      desc: "Raydium cpmm forking(Token2022 support)",
      img: cpmmforking,
      link: "https://dev.bojabat.com/",
      // github: "https://github.com/vasudevsoni/use-popcorn",
    },
    {
      title: "Last sender",
      desc: "Web3 game project: the last sender is the winner.",
      img: lastsender,
      link: "https://lastsender.pro/",
      // github: "https://github.com/vasudevsoni/eat-n-split",
    },
    {
      title: "ATUJII",
      desc: "NFT art Marketplace",
      img: atjii,
      link: "https://atujii.com/",
      // github: "https://github.com/vasudevsoni/use-popcorn",
    },
    {
      title: "Wooshi World Home",
      desc: "Web3 NFT Project",
      img: wooshi,
      link: "https://www.wooshi.world/",
      // github: "https://github.com/vasudevsoni/eat-n-split",
    },
    {
      title: "PepeArab Presale",
      desc: "Memecoin launching a Meme-focused exchange",
      img: pepearab,
      link: "https://www.pepearab.com/",
      // github: "https://github.com/vasudevsoni/pizza-menu",
    },
    {
      title: "Hotel",
      desc: "Website checks the hotel reservations of the customers",
      img: hotel,
      // link: "https://vasudevsoni.github.io/pizza-menu/",
      github: "https://github.com/Benjamin-cup/reservation-hotel",
    },
    {
      title: "Movie-Bird",
      desc: "The movie online Database ",
      img: moviebird,
      // link: "https://vasudevsoni.github.io/pizza-menu/",
      github: "https://github.com/Benjamin-cup/Movie-Db-online",
    },
    
  ];

  return (
    <section id="projects" className="section">
      <motion.h2
        className="sectionTitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="project-image-container">
              <img src={p.img} alt={p.title} className="projectImg" />
            </div>
            <div className="project-content">
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-buttons">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View Project
                </a>
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="github-link"
                  >
                    Github Repo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Thanks for visiting ✨
      </motion.p>
    </footer>
  );
}

export default App;
