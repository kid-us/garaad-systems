import Image from "next/image";

const trustedCompanies = [
  "/images/github.png",
  "/images/google.png",
  "/images/meta.png",
  "/images/windows.png",
  "/images/uber.png",
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
          <Image
            src={t}
            key={t}
            alt="Trusted Company"
            width={150}
            height={150}
            className="grayscale md:w-12 w-5"
          />
        ))}
      </div>
    </div>
  );
};

export default TrustedBy;
