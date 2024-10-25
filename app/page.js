import LandingPage from "./LandingPage/page";
import Rooms from "./Rooms/page";
import Gallery from "./Gallery/page";

export default function Home() {
  return (
    <div>
      <div className="bg-[url('/Landing-BG.png')] bg-cover bg-center h-screen">
        <LandingPage />
        <Rooms />
        <Gallery />
      </div>
    </div>
  );
}
