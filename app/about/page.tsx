import { CheckCheck } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="flex= items-center justify-center lg:py-32 py-24">
      <div className="max-w-6xl mx-auto lg:px-0 px-5">
        <div className="max-w-2xl mx-auto">
          <p className="text-center font-extrabold lg:text-[80px] md:text-[70px] text-[50px] lg:leading-16 leading-10">
            Learn more About us
          </p>
        </div>

        <div className="mt-14 space-y-5">
          <p className="lg:text-xl md:text-lg text-base">
            Garaad Systems is a digital transformation and advisory firm
            dedicated to advancing e-government, digital engineering, and
            institutional modernization across Ethiopia and the Horn of Africa.
            We partner with public and private sector institutions to design and
            implement secure, scalable, and future-ready digital systems that
            improve service delivery, operational efficiency, and governance
            outcomes.
          </p>

          <p className="lg:text-xl md:text-lg text-base">
            By combining strategic insight, regional expertise, and technology
            innovation, Garaad Systems supports organizations in navigating
            complex transformation journeys — from policy and architecture to
            implementation and capacity building. Our work enables institutions
            to operate more effectively, serve citizens better, and lead
            confidently in the digital era.
          </p>
        </div>

        <div className="lg:mt-32 mt-24 grid md:grid-cols-3 grid-cols-2 mx-auto gap-10">
          <div className="text-center">
            <h1 className="lg:text-5xl text-4xl font-bold">29+</h1>
            <p className="md:text-base text-sm mt-2">Completed Projects</p>
          </div>
          <div className="text-center">
            <h1 className="lg:text-5xl text-4xl font-bold">21+</h1>
            <p className="md:text-base text-sm mt-2">Active Clients</p>
          </div>
          <div className="text-center">
            <h1 className="lg:text-5xl text-4xl font-bold">200+</h1>
            <p className="md:text-base text-sm mt-2">Client Reviews</p>
          </div>
        </div>

        {/* Who we are */}
        <div className="grid md:grid-cols-3 gap-10 lg:mt-32 mt-24 items-center">
          <p className="font-extrabold lg:text-[60px] md:text-[50px] text-[40px] lg:leading-16 md:leading-12 leading-10 uppercase lg:pe-20 text-secondary/42">
            Who we are?
          </p>
          <div className="col-span-2 space-y-5">
            <p className="md:text-lg text-base">
              Garaad Systems is a team of digital strategists, engineers, and
              institutional transformation specialists committed to
              strengthening organizations through technology and innovation. We
              understand the regional context, governance environments, and
              operational realities of institutions across Ethiopia and the Horn
              of Africa, allowing us to deliver solutions that are practical,
              sustainable, and locally relevant.
            </p>
            <p className="md:text-lg text-base">
              We believe that digital transformation is not only about
              technology — it is about people, processes, and institutions. Our
              approach integrates strategy, systems, and capacity development to
              ensure lasting impact and measurable outcomes.
            </p>
          </div>
        </div>

        {/* Our Vision */}
        <div className="grid md:grid-cols-3 gap-10 lg:mt-32 mt-24 items-center">
          <div className="md:order-1 order-2 col-span-2 space-y-5">
            <p className="md:text-lg text-base">
              To be the trusted leader in digital government and institutional
              transformation across the Horn of Africa, enabling modern,
              efficient, and citizen-centered institutions.
            </p>
          </div>
          <p className="md:order-2 order-1 font-extrabold lg:text-[60px] md:text-[50px] text-[40px] lg:leading-16 md:leading-12 leading-10 uppercase lg:pe-20 text-secondary/42">
            Our Vision
          </p>
        </div>

        {/* Our Goals */}
        <div className="grid md:grid-cols-3 gap-10 lg:mt-32 mt-24 items-center">
          <p className="font-extrabold lg:text-[60px] md:text-[50px] text-[40px] lg:leading-16 md:leading-12 leading-10 uppercase lg:pe-20 text-secondary/42">
            Our Goals
          </p>
          <div className="col-span-2 space-y-2">
            <div className="flex items-center space-x-4">
              <CheckCheck className="text-primary" />
              <p className="md:text-lg text-base">
                Strengthen public and private institutions through digital
                transformation
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <CheckCheck className="text-primary" />
              <p className="md:text-lg text-base">
                Advance e-government and digital service delivery
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <CheckCheck className="text-primary" />
              <p className="md:text-lg text-base">
                Improve institutional efficiency, transparency, and
                accountability
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <CheckCheck className="text-primary" />
              <p className="md:text-lg text-base">
                Build sustainable digital capacity within organizations
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <CheckCheck className="text-primary" />
              <p className="md:text-lg text-base">
                Support regional modernization and economic development
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <CheckCheck className="text-primary" />
              <p className="md:text-lg text-base">
                Deliver measurable impact through technology and innovation
              </p>
            </div>
          </div>
        </div>

        {/* Our Mission */}
        <div className="grid md:grid-cols-3 gap-10 lg:mt-32 mt-24 items-center">
          <div className="md:order-1 order-2 col-span-2 space-y-5">
            <p className="md:text-lg text-base">
              To design and deliver innovative digital solutions and advisory
              services that modernize institutions, enhance governance, and
              accelerate sustainable development in Ethiopia and the Horn of
              Africa.
            </p>
          </div>
          <p className="md:order-2 order-1 font-extrabold lg:text-[60px] md:text-[50px] text-[40px] lg:leading-16 md:leading-12 leading-10 uppercase lg:pe-20 text-secondary/42">
            Our Mission
          </p>
        </div>

        <p className="text-center text-lg italic mt-20 font-semibold">
          Garaad Systems combines regional insight with global standards to help
          institutions thrive in the digital age.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
