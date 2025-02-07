import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Lazy loading components
const Home = lazy(() => import("./pages/home"));
const EventsPage = lazy(() => import("./pages/EventsPage"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const AccommodationPage = lazy(() => import("./components/Accommodation"));
const Event = lazy(() => import("./pages/events"));
const Merch = lazy(() => import("./components/Merch"));
const CallForSponsors = lazy(() => import("./components/CallForSponsors/page"));
const Sponsors = lazy(() => import("./pages/Sponsors"));
const Contact = lazy(() => import("./pages/Contact"));
const ComingSoon = lazy(() => import("./pages/comingSoon"));
const SplashCursor = lazy(() => import("./components/SplashCursor"));

// Fallback UI while components load
const Loading = () => <div>Loading...</div>;

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SplashCursor />
                <Home />
              </>
            }
          />
          <Route
            path="/events"
            element={
              <>
                <SplashCursor />
                <EventsPage />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <SplashCursor />
                <AboutUs />{" "}
              </>
            }
          />
          <Route
            path="/accommodation"
            element={
              <>
                <SplashCursor />
                <AccommodationPage />
              </>
            }
          />
          <Route
            path="/event/:name"
            element={
              <>
                <SplashCursor />
                <Event />
              </>
            }
          />
          <Route
            path="/merch"
            element={
              <>
                <SplashCursor />
                <Merch />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <SplashCursor />
                <Contact />
              </>
            }
          />
          <Route
            path="/call-for-sponsors"
            element={
              <>
                <SplashCursor />
                <CallForSponsors />
              </>
            }
          />
          <Route
            path="/sponsors"
            element={
              <>
                <SplashCursor />
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
