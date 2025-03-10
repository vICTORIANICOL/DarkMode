import { useState, useRef } from "react";
import styles from "./section5.module.css";
import { IoMoonOutline } from "react-icons/io5";
import { TbEyeSearch } from "react-icons/tb";
import { FaBatteryThreeQuarters } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { RiSmartphoneFill } from "react-icons/ri"; 
import { WiDaySunny } from "react-icons/wi";
import { RiComputerFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { IoKeypad } from "react-icons/io5";
import { MdLiveTv } from "react-icons/md";
import { TbEyeSpark } from "react-icons/tb";
import Section6 from "../section6/Section6";


const Section5 = () => {
  const [position, setPosition] = useState(0);
  const containerRef = useRef(null);

  const handleDrag = (e) => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const newX = e.clientX - containerRef.current.getBoundingClientRect().left;

    // Restrict movement within the container boundaries
    const maxX = containerWidth - 60; // Account for draggable width
    const boundedX = Math.max(0, Math.min(newX, maxX));
    setPosition(boundedX);
  };

  const handleMouseMove = (e) => {
    if (e.buttons !== 1) return; // Only drag when mouse button is held
    handleDrag(e);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
  };

  // Add mouse up listener to handle dragging outside container
  document.addEventListener('mouseup', handleMouseUp);

  return (
    <div>
      <section className={styles.section5}>
        <div className={styles.container}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <div
              className={styles.border}
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseDown={handleDrag}
              style={{
                backgroundColor: `rgb(${
                  20 +
                  (position / (containerRef.current?.offsetWidth || 1)) * 235
                }, ${
                  20 +
                  (position / (containerRef.current?.offsetWidth || 1)) * 235
                }, ${
                  20 +
                  (position / (containerRef.current?.offsetWidth || 1)) * 235
                })`,
              }}
            >
              <div
                className={styles.lystext}
                style={{
                  userSelect: "none",
                  color: position < 50 ? "#ffffff" : "#121212",
                }}
              >
                Lysstyrke
              </div>
              <div
                className={styles.draggable}
                style={{
                  left: `${position}px`,
                  backgroundColor: position < 50 ? "#ffffff" : "#121212",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <IoMoonOutline
                  style={{
                    pointerEvents: "none",
                    color: position > 50 ? "#ffffff" : "#121212",
                    fontSize: "26px",
                  }}
                />
              </div>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.gridContainer}>
              <div className={styles.parent}>
                <div className={`${styles.gridItem} ${styles.div1}`}>
                  <WiDaySunny className={styles.gridItemIcon} />
                  <p className={styles.gridItemText}>
                    81,9% af brugerne foretrækker mørk tilstand
                  </p>
                </div>

                <div className={`${styles.gridItem} ${styles.div2}`}>
                  <TbEyeSearch className={styles.gridItemIcon} />
                  <p className={styles.gridItemText}>
                    95% af udviklere bruger mørk tilstand
                  </p>
                </div>

                <div className={`${styles.gridItem} ${styles.div3}`}>
                  <FaBatteryThreeQuarters className={styles.gridItemIcon} />
                  <p className={styles.gridItemText}>
                    Mørk tilstand reducerer øjentræthed
                  </p>
                </div>

                <div className={`${styles.gridItem} ${styles.div4}`}>
                  <FaGoogle className={styles.gridItemIcon} />
                  <p className={styles.gridItemText}>
                    60% reduceret strømforbrug med mørk tilstand
                  </p>
                </div>

                <div className={`${styles.gridItem} ${styles.div5}`}>
                  <FaApple className={styles.gridItemIcon} />
                  <p className={styles.gridItemText}>
                    Standard UI-retningslinjer inkluderer mørk tilstand
                  </p>
                </div>

                <div className={`${styles.gridItem} ${styles.div6}`}>
                  <RiSmartphoneFill className={styles.gridItemIcon} />
                  <p className={styles.gridItemText}>
                    Sort baggrund får farver, billeder og typografi til at
                    skille sig ud
                  </p>
                </div>

                <div className={`${styles.gridItem} ${styles.div7}`}>
                  <RiComputerFill className={styles.gridItemIcon} />
                  <p className={styles.gridItemText}>
                    68% finder lange arbejdstimer mere behagelige
                  </p>
                </div>

                <div className={`${styles.gridItem} ${styles.div8}`}>
                  <IoKeypad className={styles.gridItemIcon} />
                  <p className={styles.gridItemText}>
                    CSS tilbyder prefers-color-scheme: dark for at opdage
                    brugernes præference
                  </p>
                </div>

                <div className={`${styles.gridItem} ${styles.div9}`}>
                  <MdLiveTv className={styles.gridItemIcon} />
                  <p className={styles.gridItemText}>
                    Mørk tilstand kan reducere strømforbruget med 15-60% på
                    OLED-skærme
                  </p>
                </div>

                <div className={`${styles.gridItem} ${styles.div10}`}>
                  <TbEyeSpark className={styles.gridItemIcon} />
                  <p className={styles.gridItemText}>
                    Brugere med lysfølsomhed kan have gavn af mørk tilstand
                  </p>
                </div>

                <div className={`${styles.gridItem} ${styles.div11}`}>
                  <FaTwitter className={styles.gridItemIcon} />
                  <p className={styles.gridItemText}>
                    Alle store sociale medier tilbyder mørk tilstand
                  </p>
                </div>

                <div className={`${styles.gridItem} ${styles.div12}`}>
                  <TbEyeSpark className={styles.gridItemIcon} />
                  <p className={styles.gridItemText}>
                    Et sort design kan få en hjemmeside til at føles elegant,
                    moderne og high-tech
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     <Section6 />
    </div>
  );
};

export default Section5;
