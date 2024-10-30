import LandingPage from "./Components/LandingPage/page";
import Rooms from "./Components/Rooms/page";
import Gallery from "./Components/Gallery/page";
import Service from "./Components/Service/page";

export default function Home() {
  return (
    <div>
    <div className="bg-[url('/Landing-BG.webp')] bg-cover bg-center h-screen filter brightness-75 contrast-125">
  <LandingPage />
</div>


      <Rooms />
      <Gallery />
      <Service />
    </div>
  );
}
