import { services } from "@/constants/services";
import { CheckCheck, Dot } from "lucide-react";

const Services = () => {
  return (
    <div id="services" className="lg:py-28 py-12">
      <div className="max-w-6xl mx-auto mb-20">
        <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold mb-10 text-center uppercase">
          Our Services
        </h1>
        <p className="text-center lg:text-lg md:text-base text-sm md:px-10 px-5">
          Garaad Systems provides integrated digital transformation and
          institutional modernization services that enable governments and
          organizations to operate efficiently, deliver better services, and
          thrive in the digital era. Our work spans strategy, system design,
          implementation, and capacity development, ensuring sustainable and
          measurable impact across Ethiopia and the Horn of Africa.
        </p>
      </div>

      {services.map((s, i) => (
        <div
          key={s.title}
          className={`border-b border-secondary/10 ${i === 0 ? "border-t" : ""}`}
        >
          <div className="max-w-6xl mx-auto lg:px-0 md:px-10 px-5">
            <div className="grid lg:grid-cols-3 items-center">
              <p className="font-semibold lg:pt-0! pt-10 group-hover:text-black text-zinc-500">
                0{i + 1}
              </p>

              <div className="col-span-2 space-y-2 lg:py-12 pt-8 pb-12 group">
                <h2 className="md:text-3xl text-2xl font-semibold">
                  {s.title}
                </h2>

                <p className="text-secondary/60 font-medium mt-3 md:text-lg">
                  {s.outcome}
                </p>

                <p className="lg:mb-5 mt-2 text-secondary/60 md:text-base text-sm">
                  {s.desc}
                </p>

                {/* Key Offering */}
                <div className="overflow-hidden lg:max-h-0 lg:opacity-0 translate-y-4 transition-all duration-700 ease-out lg:group-hover:max-h-96 lg:group-hover:opacity-100 lg:group-hover:translate-y-0">
                  <p className="font-semibold lg:text-lg lg:mb-5 mb-4">
                    Key Offering
                  </p>

                  {s.keyOfferings.map((k) => (
                    <div key={k} className="flex items-center gap-4 mb-2">
                      <CheckCheck size={20} className="text-primary" />
                      <p className="md:text-base text-sm">{k}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
