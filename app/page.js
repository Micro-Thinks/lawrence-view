import LandingPage from "./LandingPage/page";
import Rooms from "./Rooms/page";
import Gallery from "./Components/Gallery/page";
import Service from "./Service/page";

export default function Home() {
  return (
    <div>
      <div className="bg-[url('/Landing-BG.webp')] bg-cover bg-center h-screen">
        <LandingPage />
      </div>
      <Rooms />
      <Gallery />
      <Service />
    </div>
  );
}
