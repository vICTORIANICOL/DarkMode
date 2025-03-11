import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import video1 from "../assets/2bck.mp4";
import sec1 from "../assets/sec1.jpeg";
import sec2 from "../assets/sec2.png";
import sec3 from "../assets/1bck.mp4";
import sec4 from "../assets/web1.jpg";
import sec5 from "../assets/web2.jpg";
import sec6 from "../assets/web3.jpg";
import sec7 from "../assets/web4.jpg";
import sec8 from "../assets/web5.jpg";
import sec9 from "../assets/web6.jpg";
import sec10 from "../assets/web7.jpg";
import sec11 from "../assets/web8.jpg";
import sec12 from "../assets/web9.jpg";
import sec13 from "../assets/web10.jpg";

import "../components/section5/Section5"

import "./home.css";
import Section5 from "../components/section5/Section5";



const Home = () => {
  const [animate, setAnimate] = useState(false);
  

  // Scroll to top on component mount (initial load)
  useEffect(() => {
    window.scrollTo(0, 0); // This scrolls the page to the top on page load
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".fullpage-section");
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Image Slide-in Animation
      const imagesLeft = document.querySelectorAll(".slide-from-left");
      const imagesRight = document.querySelectorAll(".slide-from-right");

      imagesLeft.forEach((img) => {
        const rect = img.getBoundingClientRect();
        if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
          img.classList.add("animate-left");
        } else {
          img.classList.remove("animate-left"); // Reset animation
        }
      });

      imagesRight.forEach((img) => {
        const rect = img.getBoundingClientRect();
        if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
          img.classList.add("animate-right");
        } else {
          img.classList.remove("animate-right"); // Reset animation
        }
      });

      // Animation for fullpage-section (triggered when section is in view)
      if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



 





  return (
    <div className="home-page-container">
      <div
        className="arrow"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth", // Smooth scrolling effect
          });
        }}
      ></div>

      {/* Video Background Section */}
      <div className="video-container">
        <video
          src={video1}
          autoPlay
          muted
          loop
          playsInline
          className="video-container__video"
        />

        <div className="video-overlay-text">
          <h1>Den Mørke Vogter</h1>
          <p>Nyheder og Statistik om Sort Farvedesign</p>
        </div>

        <a href="/About" className="button">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Get Started
        </a>
      </div>

      {/* Dark Mode Section 1 */}
      <section className="dark-mode-section">
        <div className="dark-mode-box">
          <h2>Hvad er mørkt tilstand webdesign?</h2>
          <p>
            Mørk tilstand, mørke temaer eller mørke brugergrænseflader – uanset
            hvad du kalder det – har opnået en tværplatform og tværenheds
            kultfølge som standarden for kreative professionelle. Mørk tilstand
            design er ikke længere blot en webdesigntendens, men en ny søjle i
            godt webdesign takket være fordele som øget tilgængelighed og
            reduceret øjenbelastning.
          </p>

          {/* Animated Boxes Section */}
          <div className="animated-boxes">
            <div className="animated-box-wrapper">
              <div className="animated-box">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <img src={sec1} alt="Section 1" />
              </div>
              <div className="dark-mode-text-container">
                <p className="dark-mode-text">Fuld Mørk</p>
                <p className="dark-mode-text-p">
                  Ren sort, når det kombineres med hvid farve i UI-design, kan
                  være problematisk, da det skaber for meget kontrast.
                </p>

                <div>
                  <Link
                    to="/about#risksSection"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="buttonWrapper">
                      <button className="customButton">
                        Læs Mere
                        <div className="icon">
                          <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                              transition: "all 0.3s ease",
                            }}
                          >
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path
                              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                              fill="currentColor"
                              style={{
                                transformOrigin: "right",
                                transform: "scaleX(1)",
                                transition: "transform 0.3s ease",
                              }}
                              onMouseEnter={(e) =>
                                (e.target.style.transform = "scaleX(2.8)")
                              }
                              onMouseLeave={(e) =>
                                (e.target.style.transform = "scaleX(1)")
                              }
                            ></path>
                          </svg>
                        </div>
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="animated-box-wrapper">
              <div className="animated-box">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <img src={sec2} alt="Section 2" />
              </div>
              <div className="dark-mode-text-container">
                <p className="dark-mode-text">Ny Mørk</p>
                <p className="dark-mode-text-p">
                  Brug en mørk baggrund, der er lidt lysere end #000000 (f.eks.
                  #121212) for bedre læsbarhed, reduceret øjenbelastning og
                  forbedret kontrast.
                </p>

                <div>
                  <Link
                    to="/about#benefitsSection"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="buttonWrapper">
                      <button className="customButton">
                        Læs Mere
                        <div className="icon">
                          <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                              transition: "all 0.3s ease",
                            }}
                          >
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path
                              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                              fill="currentColor"
                              style={{
                                transformOrigin: "right",
                                transform: "scaleX(1)",
                                transition: "transform 0.3s ease",
                              }}
                              onMouseEnter={(e) =>
                                (e.target.style.transform = "scaleX(2.8)")
                              }
                              onMouseLeave={(e) =>
                                (e.target.style.transform = "scaleX(1)")
                              }
                            ></path>
                          </svg>
                        </div>
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Mode Section 2 */}

      <section className="fullpage-section">
        <div className={`content-container ${animate ? "animate" : ""}`}>
          <h2 className="animated-text">
            Moderne
            <br />
            Mørkt Tema
          </h2>
          {/* Added animate class to p tag when parent is animated */}
          <p className={`animated-text-p ${animate ? "animate" : ""}`}>
            En mørk UI kombineret med blød neon, <br /> varme nuancer eller
            dæmpede toner <br /> giver et moderne og professionelt udtryk
          </p>
          <div className="video-overlay"></div>
          <video
            src={sec3}
            autoPlay
            muted
            loop
            playsInline
            alt="Decorative"
            className="animated-video"
          />
          <div
            className="scroll-arrow"
            onClick={() => {
              document.querySelector(".section-3").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            &#129131;
          </div>
        </div>
      </section>

      {/* Section 3 - Grid of 10 images */}
      <section className="section-3">
        <div className="section-3-container">
          <img src={sec4} alt="Web 1" className="slide-from-left" />
          <img src={sec5} alt="Web 2" className="slide-from-right" />
          <img src={sec6} alt="Web 3" className="slide-from-left" />
          <img src={sec7} alt="Web 4" className="slide-from-right" />
          <img src={sec8} alt="Web 5" className="slide-from-left" />
          <img src={sec9} alt="Web 6" className="slide-from-right" />
          <img src={sec10} alt="Web 7" className="slide-from-left" />
          <img src={sec11} alt="Web 8" className="slide-from-right" />
          <img src={sec12} alt="Web 9" className="slide-from-left" />
          <img src={sec13} alt="Web 10" className="slide-from-right" />
        </div>
      </section>

      <div className="section-4-text">
        <h2 className="section-4-text-h2">
          Mørk tilstand-statistikker
          <br /> du bør kende (2025)
        </h2>
      </div>

      <Section5 />
    </div>
  );
};

export default Home;
