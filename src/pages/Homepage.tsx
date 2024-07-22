import Navbar from "../component/Navbar";
import HomepageHeader from "../component/HomepageHeader";
import Button from "../component/Button";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <HomepageHeader />

      {/* WHY CHOOSE US */}
      <section className=" mx-auto my-20 text-center bg-blue py-20">
        <h1 className="text-4xl font-bold leading-normal text-white">
          Why Choose Us?
        </h1>
        <p className=" text-white">
          Here are a few reasons why you should choose Aptech
        </p>
        <div className=" w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-3 items-center gap-4 mt-10">
          <div className="sm:col-span-3 col-span-1 flex justify-center">
            <div className="p-6 rounded-lg w-full max-w-md flex flex-col justify-center h-72 items-center shadow-md bg-white text-black">
              <span className="block text-3xl">🛑</span>
              <h1 className="font-bold my-3 text-xl">
                Aptech's Certificates Enjoy Global Recognition
              </h1>
              <p className="text-sm opacity-65">
                Aptech’s courses lead to professional I.T. certifications from
                leading I.Tbrands such as Microsoft and from Aptech itself. Each
                course includes classroom learning as well as practical sessions
                in the lab. Students are given optimum time in the lab and can
                work on their projects/assignments whenever they wish.
              </p>
            </div>
          </div>
          <div className="p-6 rounded-lg flex flex-col justify-center h-72 items-center shadow-md bg-white text-black">
            <span className="block text-3xl">🛑</span>
            <h1 className="font-bold my-3 text-xl">
              Our Interntional Education Alliances
            </h1>
            <p className="text-sm opacity-65">
              Aptech has alliance with the best international Universities and
              institutes across the globe to benefit Aptech students. It helps
              students pursue an international ICT degree staying in Nigeria or
              at our partner universities in UK, Australia, Dubai, Malta,
              Ireland or Malaysia. Get set and register with Aptech, Enquire
              now!
            </p>
          </div>
          <div className="p-6 rounded-lg flex flex-col justify-center h-72 items-center">
            <Button to="/contact" variant="secondary">
              Make Enquiry
            </Button>
          </div>
          <div className="p-6 rounded-lg flex flex-col justify-center h-72 items-center shadow-md bg-white text-black">
            <span className="block text-3xl">🛑</span>
            <h1 className="font-bold my-3 text-xl">Aptech's Mission</h1>
            <p className="text-sm opacity-65">
              I.T. is an empowering tool, which when appropriately utilized,
              leads to an increase in productivity improvements and prosperity
              at the individual, organizational, societal, national and global
              levels. Education is also an enabler, which leads to continued
              improvement in productivity and prosperity.
            </p>
          </div>
        </div>
      </section>

      {/* WHY SHOULD I ENROLL */}
      <section className="w-11/12 mx-auto flex justify-between gap-5">
        <aside className="w-1/2 bg-blue">a</aside>
        <aside className="w-1/2 bg-red">
          <div className="h-96 w-11/12 rounded-2xl">
            <img src="src\assets\enroll-section.jpeg" alt="Aptech Computer Education" className="h-full w-full object-cover object-center" />
          </div>
        </aside>
      </section>
    </>
  );
};

export default Homepage;
