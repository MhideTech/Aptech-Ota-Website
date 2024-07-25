import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Testimonials = () => {
  const students = [
    {
      id: 1,
      name: "Abu Godswill",
      quote:
        "Being here at aptech has been so sweet and educative. Aptech is one of the best I.T firm you can ever think of. I have learnt a lot for the past weeks, i enjoy every class.",
      image: "src/assets/testimonials/student4.jpeg",
      course: "Web App with Python",
    },
    {
      id: 2,
      name: "Bukola",
      quote:
        "Since I started this program, I have been able to take in new things and it has helped me become a better version of myself",
      image: "src/assets/testimonials/student4.jpeg",
      course: "Resp. Web",
    },
    {
      id: 3,
      name: "Adejonwo Ayomide",
      quote:
        "Being an adse student at aptech ota has helped me improve my innovation in many fields, and acquainted me with job related skills.",
      image: "src/assets/testimonials/student4.jpeg",
      course: "ADSE",
    },
    {
      id: 4,
      name: "Akinoso Israel",
      quote:
        "Being trained by a team of experts at aptech ota has helped me to grasp the latest technonologies in the I.T industry and as well make me job ready for the I.T. industry.",
      image: "src/assets/testimonials/student4.jpeg",
      course: "ADSE",
    },
    {
      id: 5,
      name: "Oguntolu Esther",
      quote:
        "Aptech Ota gave me good a foundation I.T knowlege in programming, web development, database management that prepares me for any industrial work.",
      image: "src/assets/testimonials/student4.jpeg",
      course: "Resp. Web",
    },
    {
      id: 6,
      name: "Anthonio Amirat",
      quote:
        "To be better at something, you need the right people and information-based environment. This and more are the reason why I choose Aptech ota.",
      image: "src/assets/testimonials/student4.jpeg",
      course: "Resp. Web",
    },
  ];
  return (
    <div className="bg-blue relative">
      <div className="w-11/12 mx-auto mt-20 bg-gray-800 py-10 relative">
        <div className="mx-auto mb-12 max-w-lg text-center">
          <h2 className="text-3xl font-medium capitalize text-white sm:text-4xl">
            testimonials
          </h2>

          <p className="text-white mt-4">What our students say about us</p>
        </div>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          centerMode={true}
          centerSlidePercentage={33}
          selectedItem={1}
          interval={3000}
          emulateTouch
        >
          {students.map((student) => (
            <div
              key={student.id}
              className="mx-3 h-full md:mx-4 bg-white rounded-md"
            >
              <div className="h-full rounded-lg bg-gray-50 p-6 sm:p-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 object-cover object-top">
                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="text-start">
                    <h1 className="text-xl">{student.name}</h1>
                    <p>{student.course}</p>
                  </div>
                </div>
                <p className="relative mt-4 text-center text-gray-600 sm:text-start">
                  <span className="text-xl text-aptechOrange">&ldquo;</span>{" "}
                  {student.quote}
                  <span className="text-xl text-aptechOrange">&rdquo;</span>
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
