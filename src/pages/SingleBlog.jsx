import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import AOS from "aos";
import 'aos/dist/aos.css';

export default function SingleBlog() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    // Dummy blog data - in real app this would come from API
    const dummyBlogs = [
      {
        _id: "1",
        title: "Getting Started with React",
        slug: "react-basics",
        images: ["/assets/slugbg.jpg"],
        blogcategory: ["React"],
        createdAt: new Date().toISOString(),
        content: "React is a popular JavaScript library for building user interfaces. This comprehensive guide will help you get started with React development, covering the basics of components, state management, and props."
      },
      {
        _id: "2",
        title: "Building Web Applications",
        slug: "web-apps",
        images: ["/assets/webapp.png"],
        blogcategory: ["Web Development"],
        createdAt: new Date().toISOString(),
        content: "Learn how to build modern web applications using the latest technologies and best practices. This article covers everything from planning your application to deployment and maintenance."
      },
      {
        _id: "3",
        title: "Full Stack Development Tips",
        slug: "fullstack-tips",
        images: ["/assets/Portfolio.png"],
        blogcategory: ["Full Stack"],
        createdAt: new Date().toISOString(),
        content: "Master the art of full-stack development with these essential tips and techniques. From frontend frameworks to backend APIs, this guide covers the complete development stack."
      },
    ];

    const foundBlog = dummyBlogs.find(b => b.slug === slug);
    setBlog(foundBlog);
    setLoading(false);
  }, [slug]);

  if (loading) {
    return <Spinner />;
  }

  if (!blog) {
    return (
      <div className="container" style={{ padding: "100px 0", textAlign: "center" }}>
        <h1>Blog Post Not Found</h1>
        <p>The blog post you're looking for doesn't exist.</p>
        <Link to="/blogs" className="btn">Back to Blogs</Link>
      </div>
    );
  }

  const formatDate = (date) => {
    if (!date || isNaN(date)) return '';
    const options = { day: 'numeric', month: 'long', year: 'numeric', hour12: true };
    return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
  };

  return (
    <>
      <title>{blog.title} - Sher Ali</title>

      <div className="singleblogpage">
        <div className="container">
          <div className="singleblogcontent">
            <div className="blogimage" data-aos="fade-up">
              <img src={blog.images[0]} alt={blog.title} />
            </div>

            <div className="bloginfo" data-aos="fade-up">
              <div className="blogcategory">
                {blog.blogcategory.map((cat, index) => (
                  <span key={index} className="category-tag">{cat}</span>
                ))}
              </div>

              <h1>{blog.title}</h1>

              <div className="blogmeta">
                <div className="author">
                  <img src="/assets/c.jpeg" alt="Author" />
                  <span>By Sher Ali</span>
                </div>
                <div className="date">
                  <span>{formatDate(blog.createdAt)}</span>
                </div>
              </div>

              <div className="blogtext">
                <p>{blog.content}</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <h3>Key Points:</h3>
                <ul>
                  <li>Understanding the fundamentals</li>
                  <li>Best practices and patterns</li>
                  <li>Common pitfalls to avoid</li>
                  <li>Resources for further learning</li>
                </ul>
              </div>
            </div>

            <div className="blogback">
              <Link to="/blogs" className="backbtn">← Back to Blogs</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}