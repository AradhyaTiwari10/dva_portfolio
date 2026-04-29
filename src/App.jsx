import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaLink,
  FaLinkedin,
  FaGithub,
  FaSearch,
  FaCode,
} from "react-icons/fa";

function ProjectCard({ title, desc, tags, img, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-[#161b22] border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500 transition cursor-pointer h-full"
      >
        {/* HEADER */}
        <div className="p-4 flex justify-between items-center">
          <h3 className="font-semibold">{title}</h3>
          <FaGithub className="text-gray-400 hover:text-white" />
        </div>

        {/* DESC */}
        <p className="text-gray-400 text-sm px-4">{desc}</p>

        {/* TAGS */}
        <div className="flex gap-2 px-4 mt-2 flex-wrap">
          {tags.map((tag, i) => (
            <span key={i} className="text-xs bg-blue-600 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>

        {/* IMAGE */}
        <img src={img} className="w-full h-40 object-cover mt-3" />
      </motion.div>
    </a>
  );
}

export default function App() {
  const [search, setSearch] = useState("");
  const baseURL = import.meta.env.BASE_URL;

  const projects = [
    {
      title: "Olist Delay Lens",
      desc: "Olist Delay Lens analyzes e‑commerce order delays using Python, pandas, and machine learning to identify root causes. It builds reproducible data pipelines, exploratory notebooks, and interactive visualizations to inform operational decisions and reduce delivery latency across marketplaces with measurable impact.",
      tags: ["Python", "EDA", "Visualization"],
      img: `https://i.postimg.cc/pTpRyptK/image.png`,
      link: "https://github.com/Harsith-Panda/E_G2_OlistDelayLens",
    },
    {
      title: "Cardiovascular Risk Assessment",
      desc: "This project analyzes cardiovascular risk using patient health data to evaluate whether smoking and diabetes impact disease occurrence, heart rate, and cholesterol. It highlights single-factor correlations and emphasizes multivariate modeling, enabling data-driven healthcare decisions through interactive dashboards and analytical frameworks.",
      tags: ["Python", "ML", "Data Analysis"],
      img: `https://i.postimg.cc/FHvqPd8W/image.png`,
      link: "https://github.com/RahulDwivedi205/G11_DVA_Capstone",
    },
  ];

  const filtered = projects.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="flex min-h-screen bg-[#0d1117] text-white">
      {/* SIDEBAR */}
      <div className="w-[300px] p-6 border-r border-gray-800 flex flex-col items-center">
        <img
          src="https://i.postimg.cc/43jNHQ2P/photo2.jpg"
          alt="Profile"
          className="w-40 h-40 rounded-full mb-4"
        />

        <h2 className="text-xl font-bold">Aradhya Tiwari</h2>
        <p className="text-gray-400">@AradhyaTiwari10</p>

        <p className="text-gray-400 text-sm text-center mt-3 leading-relaxed">
          AI/ML Engineer and aspiring data scientist. Passionate about
          transforming data into actionable insights and building intelligent
          systems.
        </p>

        <button className="w-full mt-4 py-2 bg-green-600 rounded hover:bg-green-500">
          Follow
        </button>

        {/* SOCIAL */}
        <div className="flex gap-3 w-full mt-3">
          <a
            href="https://www.linkedin.com/in/aradhya-tiwari-751990252/"
            target="_blank"
            className="flex-1 bg-[#161b22] border border-gray-700 py-2 rounded text-center"
          >
            <FaLinkedin className="mx-auto" />
          </a>

          <a
            href="https://github.com/AradhyaTiwari10"
            target="_blank"
            className="flex-1 bg-[#161b22] border border-gray-700 py-2 rounded text-center"
          >
            <FaGithub className="mx-auto" />
          </a>
        </div>

        <div className="w-full border-t border-gray-800 my-6"></div>

        {/* CONTACT */}
        <div className="w-full text-gray-300 text-sm space-y-4">
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-lg text-gray-400 flex-shrink-0" />
            <span>Jaipur, Rajasthan</span>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-lg text-gray-400 flex-shrink-0" />
            <a
              href="mailto:aradhya.upadhyay2024@nst.rishihood.edu.in"
              className="text-blue-400 hover:text-blue-300 break-all"
            >
              aradhya.tiwari2024@nst.rishihood.edu.in
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FaPhone className="text-lg text-gray-400 flex-shrink-0" />
            <a
              href="tel:+918604068920"
              className="text-blue-400 hover:text-blue-300"
            >
              +91 9588929748
            </a>
          </div>

          <div className="flex items-start gap-3">
            <FaLink className="text-lg text-gray-400 flex-shrink-0 mt-0.5" />
            <a
              href="https://aradhya-two.vercel.app"
              target="_blank"
              className="text-blue-400 hover:text-blue-300 break-all"
            >
              aradhya-two.vercel.app
            </a>
          </div>
        </div>

        <div className="w-full border-t border-gray-800 my-6"></div>

        {/* TECH STACK */}
        <div className="w-full">
          <p className="text-gray-400 text-sm mb-2">TECH STACK</p>

          <div className="flex flex-wrap gap-2">
            {["Excel", "Python", "SQL", "Tableau", "MERN", "ML"].map((t, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs border border-gray-700 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="flex-1 p-8">
        <div className="flex items-center gap-3 pb-4 border-b-2 border-orange-500">
          <FaCode className="text-2xl text-gray-300" />
          <h1 className="text-2xl font-bold">Repositories</h1>
          <span className="bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-sm font-semibold">
            {projects.length}
          </span>
        </div>

        {/* SEARCH */}
        <div className="flex items-center gap-2 mt-4 mb-6">
          <div className="flex items-center bg-[#161b22] border border-gray-700 px-3 py-2 rounded w-[300px]">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Find a project..."
              className="bg-transparent outline-none text-sm w-full"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <button className="bg-blue-600 px-3 py-1 rounded">All</button>
        </div>

        {/* PROJECT GRID */}
        <div className="grid grid-cols-2 gap-6">
          {filtered.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
}
