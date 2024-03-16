import { useState } from "react";
import "./App.css";
import videoBg from "./assets/coming_soon_compressed_2.mp4";
import SubscribePopupModal from "./components/SubscribePopupModal";
import comingSoonGIF from "./assets/coming_soon_gif_without_bg.gif";
import lightDecoGIF from "./assets/light_deco_gif.gif";

function App() {
  const [openSubscribeModal, setOpenSubscribeModal] = useState(false);
  return (
    <>
    <div className="main-container">
        <video
          className="bg-video"
          src={videoBg}
          effect={blur}
          autoPlay
          loop
          muted
        />
        <div className="logo-img">
          <img src="logo_lit.png" alt="alt" effect={blur} />
        </div>
        <div className="content">
          <div className="coming-soon-img-title">
            <div className="top-content-container">
              <div className="company-title">LUXURY IN TASTE</div>
              <div className="coming-soon-img">
                <img src={comingSoonGIF} alt="coming soon" effect={blur} />
              </div>

              <div className="options-container">
                <div className="option">FAST FASHION</div>
                <div className="option">SUSTAINABLE FASHION</div>
                <div className="option">LUXURY FASHION</div>
                <div className="option">SNEAKER FASHION</div>
              </div>
            </div>
          </div>
          <div>
            <div className="subscribe-content">
              <div className="subscribe-title">
                <p>SUBSCRIBE TO OUR </p>
                <p>NEWSLETTER</p>
              </div>
              <div className="subscribe-now-txt">SUBSCRIBE NOW</div>
              <div className="subscribe-btn-container">
                <button
                  className="subscribe-btn"
                  onClick={() => {
                    setOpenSubscribeModal(true);
                  }}
                >
                  SUBSCRIBE
                </button>
                {openSubscribeModal && (
                  <SubscribePopupModal
                    openSubscribeModal={openSubscribeModal}
                    setOpenSubscribeModal={setOpenSubscribeModal}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
