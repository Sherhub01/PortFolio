import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import axios from "axios";
// import useFetchData from "@/hooks/useFetchData";

// import Head from "next/head";

export default function gallery() {
  const [alldata, setAlldata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        // Dummy data simulate
        const dummyData = [
          // {
          //   _id: "1",
          //   title: "Photo A",
          //   slug: "photo-a",
          //   images: ["/assets/a.jpeg"],
          //   category: "Nature",
          // },
          // {
          //   _id: "2",
          //   title: "Photo B",
          //   slug: "photo-b",
          //   images: ["/assets/b.jpeg"],
          //   category: "Adventure",
          // },
          {
            _id: "3",
            title: "Photo C",
            slug: "photo-c",
            images: ["/assets/c.jpeg"],
            category: "Urban",
          },
          {
            _id: "4",
            title: "Photo D",
            slug: "photo-d",
            images: ["/assets/d.jpeg"],
            category: "Urban",
          },
          {
            _id: "5",
            title: "Photo E",
            slug: "photo-e",
            images: ["/assets/e.jpeg"],
            category: "Urban",
          },
          {
            _id: "6",
            title: "Photo F",
            slug: "photo-f",
            images: ["/assets/f.jpeg"],
            category: "Urban",
          },
          {
            _id: "7",
            title: "Photo G",
            slug: "photo-g",
            images: ["/assets/g.jpeg"],
            category: "Urban",
          },
          {
            _id: "8",
            title: "Photo H",
            slug: "photo-h",
            images: ["/assets/h.jpeg"],
            category: "Urban",
          },
          {
            _id: "9",
            title: "Photo I",
            slug: "photo-i",
            images: ["/assets/i.jpeg"],
            category: "Urban",
          },
          // {
          //   _id: "10",
          //   title: "Photo J",
          //   slug: "photo-j",
          //   images: ["/assets/j.jpeg"],
          //   category: "Nature",
          // },
          {
            _id: "11",
            title: "Photo K",
            slug: "photo-k",
            images: ["/assets/k.jpeg"],
            category: "Adventure",
          },
          {
            _id: "12",
            title: "Photo L",
            slug: "photo-l",
            images: ["/assets/l.jpeg"],
            category: "Urban",
          },
        ];
        
        // Simulating API response delay
        await new Promise((resolve) => setTimeout(resolve, 1000)); 
  
        setAlldata(dummyData);
      } catch (error) {
        console.error("Error fetching photos:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchPhotos();
  }, []);
  

  // useEffect(() => {
  //   const fetchPhotos = async () => {
  //     try {
  //       const res = await axios.get('/api/photos');
  //       setAlldata(res.data);
  //     } catch (error) {
  //       console.error("Error fetching photos:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchPhotos();
  // }, []);

  return (
    <>
      <title>Sher Ali : Gallery Photos</title>

      <div className="gallerypage">
        <div className="container">
          <div className="gallerytopsec">
            <div className="topphonesec">
              <div className="lefttitlesec">
                <h4>Sher's GALLERY PHOTOS</h4>
                <h1>
                  Sher Ali <br /> photographes
                </h1>
                <a href="#galleryimages">
                  <button>VIEW MORE</button>
                </a>
              </div>
              <div className="rightimgsec">
                <img src="/assets/c.jpeg" alt="" />
                <div className="r_img_top">
                  <img src="/assets/d.jpeg" alt="" />
                  <img src="/assets/e.jpeg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" gallerybtmphotos" id="galleryimages">
          <div className="container">
            <div className="gbtmtitles text-center">
              <h3>
                <span>01//</span>OUR PORTFOLIO
              </h3>
              <h2>
                Sher's capture<span> All of your</span>
                <br />
                beautiful memories
              </h2>
            </div>
            <div className="gallery_image_grid" >
              {loading ? (
                <Spinner />
              ) : (
                <>
                  {alldata.map((photo) => (
                    <div className="image-item" key={photo._id} 
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000"
                    >
                      <img src={photo.images[0]} alt={photo.title} />
                      <div className="galeryimgiteminfo">
                        <h2>{photo.title}</h2>
                        <p>by Sher Ali</p>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
