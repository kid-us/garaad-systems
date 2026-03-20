import Image from "next/image";

const trustedCompanies = [
  "/images/gebeya.png",
  "/images/flayease.png",
  "/images/mahadho.png",
  "/images/masaf-space.jpg",
  "/images/sabi.jpg",
  "/images/somalia.png",
  "/images/somalia-2.jpg",
  "/images/tabiye.jpg",
  "/images/srtv.png",
];

const TrustedBy = () => {
  return (
    <div className="mt-24">
      <div className="grid grid-cols-3 items-center">
        <div className="h-px w-full bg-secondary/10"></div>
        <p className="text-secondary uppercase text-center font-semibold md:text-sm text-xs">
          Trusted By
        </p>
        <div className="h-px w-full bg-secondary/10"></div>
      </div>

      <div className="w-full mx-auto grid grid-cols-5 md:gap-10 gap-5 justify-center items-center mt-10">
        {trustedCompanies.map((t) => (
          <div key={t} className="flex items-center justify-center">
            <Image
              src={t}
              alt="Trusted Company"
              width={150}
              height={150}
              className={`${t === "/images/gebeya.png" ? "md:w-40!" : t === "/images/flayease.png" ? "md:w-40!" : "md:w-16 w-5"} h-16 object-contain`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedBy;
