"use client";

import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import TrustedBy from "./trustedBy";

const Hero = () => {
  return (
    <div className="flex md:min-h-screen md:py-28 py-24 justify-center items-center">
      <div className="max-w-6xl mx-auto lg:px-0 px-5">
        <div className="max-w-3xl mx-auto">
          <h1 className="lg:text-[85px] md:text-[65px] text-5xl font-extrabold mb-8 lg:leading-18 text-center">
            Transforming Institutions Through{" "}
            <span className="text-primary">Digital Innovation.</span>
          </h1>
          <p className="text-center md:text-lg text-secondary/70">
            Garaad Systems delivers e-government,{" "}
            <strong className="text-secondary">digital engineering</strong>, and{" "}
            <strong className="text-secondary">
              institutional modernization solutions{" "}
            </strong>
            that strengthen public and private sector institutions across
            Ethiopia and the Horn of Africa.
          </p>

          <div className="flex justify-center gap-x-5 mt-10">
            <Button className="h-11 md:w-40 hover:bg-transparent hover:text-secondary hover:border hover:border-secondary">
              Get in touch
            </Button>
            <Button variant={"outline"} className="h-11 md:px-10!">
              See our Projects{" "}
              <ArrowRight className="bg-secondary/10 p-px ms-5 rounded-full" />{" "}
            </Button>
          </div>
        </div>

        {/* Trusted by */}
        <TrustedBy />
      </div>
    </div>
  );
};

export default Hero;
