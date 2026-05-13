import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";

export default function Blogs() {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(6);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading] = useState(false);

  const allDummyBlogs = [
    {
      _id: "1",
      title: "Personal Portfolio Website",
      slug: "portfolio-website",
      status: "publish",
      images: ["/assets/Portfolio.png"],
      blogcategory: ["Website"],
      author: "Sher Ali",
      publishedDate: "2026-05-10",
      excerpt:
        "A polished portfolio experience highlighting my skills, case studies, and service offerings.",
      keyPoints: [
        "Clean and modern design",
        "Responsive layout",
        "Interactive animations",
      ],
    },
    {
      _id: "2",
      title: "Arveeta Jewellery Website",
      slug: "arveeta-jewellery",
      status: "publish",
      images: ["/assets/arveeta.png"],
      blogcategory: ["E-commerce"],
      author: "Sher Ali",
      publishedDate: "2026-04-28",
      excerpt:
        "A premium storefront design built for seamless product discovery and elegant brand storytelling.",
      keyPoints: [
        "E-commerce integration",
        "Product showcase",
        "Secure checkout flow",
      ],
    },
    {
      _id: "3",
      title: "Design System for Dashboard",
      slug: "dashboard-design-system",
      status: "publish",
      images: ["/assets/designDashboard.png"],
      blogcategory: ["Design"],
      author: "Sher Ali",
      publishedDate: "2026-04-15",
      excerpt:
        "A modern dashboard system focused on clarity, consistency, and improved data visualization.",
      keyPoints: [
        "Comprehensive design patterns",
        "Reusable components",
        "Data-driven interface",
      ],
    },
    {
      _id: "4",
      title: "Vetician Project",
      slug: "vetician-project",
      status: "publish",
      images: ["/assets/Vetician.png"],
      blogcategory: ["Platform"],
      author: "Sher Ali",
      publishedDate: "2026-04-10",
      excerpt:
        "A modern platform designed for seamless user engagement and intuitive interface design.",
      keyPoints: [
        "Clean interface design",
        "User-friendly navigation",
        "Professional features",
      ],
    },
  ];

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const filteredBlogs =
    searchQuery.trim() === ""
      ? allDummyBlogs
      : allDummyBlogs.filter((blog) =>
          blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          blog.blogcategory.some((cat) =>
            cat.toLowerCase().includes(searchQuery.toLowerCase())
          )
        );

  const indexOfFirstBlog = (currentPage - 1) * perPage;
  const indexOfLastblog = currentPage * perPage;

  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastblog);
  const publishedData = currentBlogs.filter((ab) => ab.status === "publish");
  const sliderpubdata = allDummyBlogs.filter((ab) => ab.status === "publish");

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredBlogs.length / perPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > pageNumbers.length) return;
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <title>Blogs</title>
      <div className="blogpage">
        <section className="tophero">
          <div className="container">
            <div className="toptitle">
              <div className="toptitlecont flex">
                <div className="hero-text">
                  <p className="eyebrow">Explore my projects</p>
                  <h1>
                    My Recent <span>Works & Experiences</span>
                  </h1>
                  <p className="hero-copy">
                    Discover the projects I've built with modern design, clean code, and real-world impact.
                  </p>
                </div>
                <form className="search-form" onSubmit={(e) => e.preventDefault()}>
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search projects or categories"
                    type="text"
                  />
                  <button type="submit">Search</button>
                </form>
              </div>
            </div>

            <div className="featured">
              <div className="border"></div>
              <div className="featuredposts">
                <div className="fetitle flex">
                  <div>
                    <p className="eyebrow">Featured Projects</p>
                    <h3>Showcase of my best work</h3>
                  </div>
                </div>
                <div className="feposts flex">
                  <Swiper
                    slidesPerView={"auto"}
                    freeMode={true}
                    spaceBetween={30}
                    className="mySwiper"
                    modules={[FreeMode]}
                  >
                    {loading ? (
                      <Spinner />
                    ) : (
                      sliderpubdata.slice(0, 4).map((project) => (
                        <SwiperSlide key={project._id}>
                          <article className="fpost" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                            <Link to="/projects" className="fpost-image">
                              <img src={project.images[0]} alt={project.title} />
                            </Link>
                            <div className="fpostinfo">
                              <div className="tegs flex">
                                {project.blogcategory.map((cat) => (
                                  <span key={cat} className="category-tag">
                                    {cat}
                                  </span>
                                ))}
                              </div>
                              <h2>
                                <Link to="/projects">{project.title}</Link>
                              </h2>
                              <p>{project.excerpt}</p>
                              <div className="fpostmeta flex">
                                <span>{project.author}</span>
                                <span>{new Date(project.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                              </div>
                            </div>
                          </article>
                        </SwiperSlide>
                      ))
                    )}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="latestpostsec">
          <div className="container">
            <div className="border"></div>
            <div className="latestpostsdata">
              <div className="fetitle">
                <p className="eyebrow">All Projects</p>
                <h3>Complete project collection</h3>
              </div>
              <div className="latestposts">
                {loading ? (
                  <Spinner />
                ) : (
                  publishedData.map((project) => (
                    <article className="lpost" key={project._id} data-aos="fade-up">
                      <div className="lpostimg">
                        <Link to="/projects">
                          <img src={project.images[0]} alt={project.title} />
                        </Link>
                        <div className="tegs">
                          {project.blogcategory.map((cat) => (
                            <span key={cat} className="category-tag">
                              {cat}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="lpostinfo">
                        <div className="lpost-header">
                          <h3>
                            <Link to="/projects">{project.title}</Link>
                          </h3>
                          <p className="excerpt">{project.excerpt}</p>
                        </div>
                        <div className="lpost-details">
                          <div className="author-date">
                            <span>By {project.author}</span>
                            <span>{new Date(project.publishedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                          </div>
                          <ul className="keypoints">
                            {project.keyPoints.map((point) => (
                              <li key={point}>{point}</li>
                            ))}
                          </ul>
                          <Link to="/projects" className="read-more">
                            View project
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))
                )}
              </div>

              {pageNumbers.length > 1 && (
                <div className='blogspaginationbtn flex flex-center mt-3'>
                  <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                    Previous
                  </button>
                  {pageNumbers.map((number) => (
                    <button
                      key={number}
                      onClick={() => paginate(number)}
                      className={`${currentPage === number ? 'active' : ''}`}
                    >
                      {number}
                    </button>
                  ))}
                  <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === pageNumbers.length}>
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

