import Navbar from "../component/Navbar";
import { HomepageHeader } from "../component/HomepageHeader";
import Button from "../component/Button";
import { Link } from "react-router-dom";
import Testimonials from "../component/Testimonials";
import Footer from "../component/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Homepage = () => {
  const popularCourses = [
    {
      id: 1,
      title: "aptech ACNS career courses",
      img: "src/assets/course-acns.jpg",
      delay: 100,
      animation: "fade-up",
      link: "acns",
    },
    {
      id: 2,
      title: "aptech ADSE career courses",
      img: "src/assets/course-adse.jpg",
      delay: 400,
      animation: "fade-up",
      link: "adse",
    },
    {
      id: 3,
      title: "aptech smart professional courses",
      img: "src/assets/course-smartpro.jpg",
      delay: 800,
      animation: "fade-up",
      link: "smart-pro",
    },
  ];

  return (
    <>
      <Navbar />
      <HomepageHeader />

      {/* WHY CHOOSE US */}
      <section className=" mx-auto mt-20 text-center bg-blue py-20">
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
      <section className="flex gap-5 bg-yellow py-10">
        <div className="w-11/12 mx-auto flex flex-wrap justify-between items-center">
          <aside className="w-full md:w-1/2 lg:py-16 lg:px-8">
            <h1 className="text-3xl md:text-4xl  font-semibold">
              Why should I enroll?
            </h1>
            <p className="mt-4 ">
              A career in programming is actually possible whether you are old
              or young, male or female and one of the very best reasons to
              become a computer programmer is the bounty of jobs out there. And
              because we are an increasingly technologically reliant society it
              is also apparent that there will be jobs in the programming sector
              for a long time to come. As other industries decline and cease to
              be, programming is growing and expanding into almost all areas of
              life.
            </p>
          </aside>
          <aside className="w-full md:w-1/2 h-fit mt-8 sm:mt-0">
            <Carousel
              showThumbs={false}
              infiniteLoop={true}
              interval={3000}
              autoPlay={true}
              transitionTime={1500}
              showIndicators={false}
              showArrows={false}
              showStatus={false}
              className="relative"
            >
              <div className="w-full h-[450px] object-cover object-top">
                <img
                  src="src/assets/enroll-section.jpeg"
                  alt=""
                  className="w-full h-full"
                />
              </div>
              <div className="w-full h-[450px] object-cover object-top">
                <img
                  src="src/assets/enroll-section.jpeg"
                  alt=""
                  className="w-full h-full"
                />
              </div>
              <div className="w-full h-[450px] object-cover object-top">
                <img
                  src="src/assets/enroll-section.jpeg"
                  alt=""
                  className="w-full h-full"
                />
              </div>
            </Carousel>
          </aside>
        </div>
      </section>

      {/* NEWS */}
      <section className="lg:w-7/12 mx-auto shadow-md my-24 p-6">
        <div className="flex justify-between items-center">
          <h1>Latest News</h1>
          <span className="inline-flex items-center gap-x-1.5 rounded-full bg-gray-800 py-1 px-3 text-xs font-semibold text-white bg-blue">
            New
          </span>
        </div>

        <div className="space-y-4 p-6">
          <img
            src="https://guardian.ng/wp-content/uploads/2023/12/IMG-20231202-WA0005-1-748x598.jpg"
            alt="News banner"
            className="h-72 w-full rounded-lg object-cover"
            width="300"
            height="200"
            style={{ aspectRatio: "300/200", objectFit: "cover" }}
            // style="aspect-ratio: 300 / 200; object-fit: cover;"
          />
          <h3 className="text-2xl font-semibold leading-7 text-gray-900">
            Aptech Ota Students Shines at the 4th Edition of Global IT
            Competition
          </h3>
          <p className="text-base font-medium leading-6 text-gray-500 line-clamp-2">
            Aptech successfully concluded the 4th Edition of TechWiz,
            one-of-its-kind global IT competition offering a platform where
            student skillsets are put to the test. Around 3200 participants made
            680 teams and over 580 projects were submitted for this competition.
            Industry experts reviewed the entries, and winners shared prizes
            from a total prize pool of USD 43,200.
          </p>

          <a
            className="feature-btn mt-5 inline-flex items-center rounded bg-white py-2 text-black"
            href="https://guardian.ng/news/nigerian-students-shines-at-the-4th-edition-of-global-it-competition-aptech-techwiz/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-sm font-medium"> Read More </span>
            <svg
              className="ml-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* MOST CHOOSEN COURSES */}
      <section className="mt-12 text-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold capitalize sm:text-4xl">
              most chosen courses
            </h2>

            <p className="mt-1 text-gray-600">
              A few of our most popular courses
            </p>
          </div>
          <div className="container mx-auto mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {popularCourses.map((course) => (
              <div
                className="border border-blue p-5 rounded-3xl relative"
                key={course.id}
              >
                <div
                  key={course.id}
                  className="block h-[40vh] overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat md:h-[30vh]"
                  style={{
                    backgroundImage: `linear-gradient(62deg,rgba(0, 0, 0, 0.2) 50%,rgba(0, 0, 0, 0.2) 50%),url(${course.img})`,
                  }}
                ></div>
                <h1 className="capitalize my-3 font-semibold text-lg">
                  {course.title}
                </h1>
                <Link
                  to={course.link}
                  className="bg-blue text-white block text-center py-2 rounded-md mt-8"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button to="/courses">View Courses</Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* COLLABORATION */}
      <div className="py-20">
        <h6 className="text-center text-3xl font-semibold mb-8">
          In Collaboration with
        </h6>
        <img
          src="src/assets/schools-banner.png"
          alt="Schools Banner"
          className="pointer-events-none mx-auto w-fit"
        />
      </div>

      <Footer />
    </>
  );
};

export default Homepage;
