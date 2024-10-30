import { AboutContent } from "../Helpers/Data";

const page = () => {
  return (
    <div className="bg-black text-white p-14">
      <div className=" flex  items-center flex-col">
        <h1 className="text-3xl  ">About</h1>
        <h2 className="text-2xl font-bold mt-4">
          Luxury Accommodation in Lahore
        </h2>
      </div>
      <div>
        {AboutContent.map((content, index) => (
          <div key={index} className="w-full  pt-12">
            <span className="text-2xl">{content.span}</span>
            <p className="w-[90%] pt-4">{content.p}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
