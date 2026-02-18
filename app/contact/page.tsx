import ContactForm from "@/components/contact/contactForm";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="flex min-h-[90dvh] items-center justify-center md:py-0 py-24">
      <div className="max-w-6xl mx-auto lg:px-0 px-5">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h1 className="font-bold text-4xl mb-5">
              Let's get down to business
            </h1>
            <p className="text-secondary/50">
              We'd love to chat! if you fill out the information below. someone
              from the team will reach out right away.
            </p>

            <div className="flex justify-center items-center mt-14">
              <Image
                src={"/images/case.png"}
                alt="Case"
                width={500}
                height={500}
                className="md:w-full w-40"
              />
            </div>
          </div>
          <div className="md:col-span-2 md:border-l md:px-20 w-full mt-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
