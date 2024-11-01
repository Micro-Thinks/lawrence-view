function page() {
  return (
    <div className="bg-black text-white p-4 ">
      <div className="text-center">
        <h1>Contact</h1>
        <span className="block">
          Explore our range of comfortable rooms, each thoughtfully designed for
          relaxation and convenience. From cozy single rooms to spacious suites,
          all accommodations feature modern amenities, plush bedding, and
          beautiful views. Select the perfect room to suit your style and
          budget, ensuring a memorable stay. Book now to enjoy luxury and
          comfort at exceptional rates.
        </span>
      </div>
      <div className="flex justify-center p-4">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.095101821856!2d74.3261954744265!3d31.54900454572886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904ba19c196e3%3A0x54ae9e130d37d85a!2sLawrence%20View%20Hotel%2C%20Lahore!5e0!3m2!1sen!2s!4v1730447313760!5m2!1sen!2s"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          className=" h-[60vh] rounded-xl"
        />
      </div>
      <div className="flex py-12 px-4 w-[100vw]">
        <div className="w-[40vw]">
          <h2 className="uppercase">How to contact</h2>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s
          </span>
        </div>
        <div className="w-[60vw] flex justify-center">
          <form className="rounded-md w-full max-w-md space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name*"
                className="w-full p-2 rounded-md border border-[#C4A053] text-black placeholder-gray-400 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="w-full p-2 rounded-md border border-[#C4A053] text-black placeholder-gray-400 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address*"
                className="w-full p-2 rounded-md border border-[#C4A053] text-black placeholder-gray-400 focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone*"
                className="w-full p-2 rounded-md border border-[#C4A053] text-black placeholder-gray-400 focus:outline-none"
              />
            </div>
            <textarea
              placeholder="Write your message..."
              className="w-full p-2 rounded-md border border-[#C4A053]  text-black placeholder-gray-400 focus:outline-none  h-32 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-[#C4A053] text-black font-bold py-2 px-4 rounded-md  focus:outline-none w-[1/6] translate-x-44"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default page;
