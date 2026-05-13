import Spinner from "../components/Spinner";
import { useEffect, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

export default function Projects() {   // Capital letter P

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  const projectsData = [
    {
      _id: "1",
      title: "Portfolio Website",
      slug: "portfolio-website",
      images: ["/assets/Portfolio.png"],
      category: "Website Development",
      link: "/project/portfolio-website",
    },
    {
      _id: "2",
      title: "Arveeta Jewellery Website",
      slug: "arveeta-jewellery",
      images: ["/assets/arveeta.png"],
      category: "Website Development",
      link: "https://arveeta.com"
    },
    {
      _id: "3",
      title: "Design ToDO Dashboard",
      slug: "Add Tasks ",
      images: ["/assets/designDashboard.png"],
      category: "Design ToDo Dashboard",
      link: "",
    },
    
    {
      _id: "4",
      title: "Web and Mobile App Design",
      slug: "Pet care website and Application",
      images: ["/assets/Vetician.png"],
      category: "Website Development & App Development",
      link: "https://vetician.com/",
    },
    // {
    //   _id: "5",
    //   title: "Web and Mobile App Design",
    //   slug: "video-editing-reel",
    //   images: ["/assets/Vetician.png"],
    //   category: "Video Editing",
    //   link: "/project/video-editing-reel",
    // },
  ];
  

  const filteredProjects = selectedCategory === "All" 
    ? projectsData 
    : projectsData.filter((pro) => pro.category === selectedCategory);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second ke baad loading false

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <title>Project</title>
      
      <div className="projectpage">
        <div className="projects">
          <div className="container">
            <div className="project_titles">
              <h2>My Recent Works</h2>
              <p>
                We put your ideas and thus your wishes in the form of a unique
                web project that inspires you and your customers.
              </p>
            </div>

            <div className="project_buttons">
              <button
                className={selectedCategory === "All" ? "active" : ""}
                onClick={() => setSelectedCategory("All")}
              >
                All
              </button>
              <button
                className={selectedCategory === "Website Development" ? "active" : ""}
                onClick={() => setSelectedCategory("Website Development")}
              >
                Website
              </button>
              <button
                className={selectedCategory === "App Development" ? "active" : ""}
                onClick={() => setSelectedCategory("App Development")}
              >
                Apps
              </button>
              <button
                className={selectedCategory === "Design System" ? "active" : ""}
                onClick={() => setSelectedCategory("Design System")}
              >
                Design
              </button>
              <button
                className={selectedCategory === "Video Editing" ? "active" : ""}
                onClick={() => setSelectedCategory("Video Editing")}
              >
                Editing
              </button>
            </div>

            <div className="projects_cards">
              {loading ? (
                <div className="flex flex-center wh_100">
                  <Spinner />
                </div>
              ) : filteredProjects.length === 0 ? (
                <h1 className="w-100 flex flex-center mt-3">
                  No Project Found
                </h1>
              ) : (
                filteredProjects.map((pro) => (
                  <a
                    href={pro.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="procard"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                  >
                    <div className="proimgbox">
                      <img src={pro.images[0]} alt={pro.title} />
                    </div>
                    <div className="procontentbox">
                      <h2>{pro.title}</h2>
                      <GoArrowUpRight />
                    </div>
                  </a>
                ))
              )}
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
