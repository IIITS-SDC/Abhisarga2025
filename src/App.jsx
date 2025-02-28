import { Routes, Route } from "react-router-dom";
import { lazy, Suspense, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";

// Lazy loading components
const Home = lazy(() => import("./pages/home"));
const EventsPage = lazy(() => import("./pages/EventsPage"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const AccommodationPage = lazy(() =>
  import("./components/Accommodation")
);
const Event = lazy(() => import("./pages/events"));
const Merch = lazy(() => import("./components/Merch"));
const CallForSponsors = lazy(() =>
  import("./components/CallForSponsors/page")
);
const Sponsors = lazy(() => import("./pages/Sponsors"));
const Contact = lazy(() => import("./pages/Contact"));
const ComingSoon = lazy(() => import("./pages/comingSoon"));
// const SplashCursor = lazy(() => import("./components/SplashCursor"));

function useIsLargeScreen() {
  const [isLargeScreen, setIsLargeScreen] = useState(
    window.innerWidth > 640
  ); // sm = 640px

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 640);
    };

    window.addEventListener("resize", handleResize);
    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  return isLargeScreen;
}

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            path="/events"
            element={
              <>
                <EventsPage />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <AboutUs />
              </>
            }
          />
          <Route
            path="/accommodation"
            element={
              <>
                <AccommodationPage />
              </>
            }
          />
          <Route
            path="/event/:name"
            element={
              <>
                <Event />
              </>
            }
          />
          <Route
            path="/merch"
            element={
              <>
                <Merch />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Contact />
              </>
            }
          />
          <Route
            path="/call-for-sponsors"
            element={
              <>
                <CallForSponsors />
              </>
            }
          />
          <Route
            path="/sponsors"
            element={
              <>
                <Sponsors />
              </>
            }
          />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
