"use client";

import { Button } from "@/components/ui/button";
import { footerItems, socialMedias } from "@/constants/footer";
import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  return (
    <div className="relative border-t">
      <div className="max-w-7xl mx-auto border-x md:p-10 p-5">
        <div className="max-w-lg mx-auto mb-24 py-5">
          <p className="text-center font-semibold md:text-4xl text-2xl">
            Building Smarter, Digital Institutions
          </p>
          <div className="flex justify-center mt-6">
            <Button onClick={() => router.push("/contact")}>
              Get in touch
            </Button>
          </div>
        </div>

        <div className="absolute top-62 left-0 h-12 w-full border-t"></div>
        <div className="absolute lg:top-136 md:top-140 top-128 left-0 h-12 w-full border-t"></div>

        <div className="lg:flex justify-between">
          <div className="max-w-sm space-y-2">
            <Image
              src={"/images/logo.png"}
              alt="Logo"
              height={500}
              width={500}
              className="w-52"
            />
            <div className="flex justify-start gap-x-3 mt-4">
              <MapPin className="size-6" />
              <p className="text-sm">
                Burj Hasen Wali, 02, Jigjiga, Somali Region, Ethiopia.
              </p>
            </div>
            <div className="flex gap-x-3">
              <Phone className="size-4" />
              <p className="text-sm">+251915506573</p>
            </div>
            <div className="flex gap-x-3">
              <Mail className="size-4" />
              <a href="mailto=info@garaadsystems.com" className="text-sm">
                info@garaadsystems.com
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 grid-cols-2 lg:gap-10 gap-y-5 lg:mt-0 mt-26">
            <div>
              <p className="font-semibold text-xl mb-5">Company</p>

              {footerItems
                .filter((f) => f.category === "Company")
                .map((c) => (
                  <Link
                    key={c.name}
                    href={c.path}
                    className="hover:text-black text-zinc-500 hover:scale-103 transition-all duration-200 block mb-2 text-sm"
                  >
                    {c.name}
                  </Link>
                ))}
            </div>

            <div className="flex flex-col items-center">
              <div>
                <p className="font-semibold text-xl mb-5">Services</p>
                {footerItems
                  .filter((f) => f.category === "Services")
                  .map((c) => (
                    <Link
                      key={c.name}
                      href={c.path}
                      className="hover:text-black text-zinc-500 hover:scale-103 transition-all duration-200 block mb-2 text-sm"
                    >
                      {c.name}
                    </Link>
                  ))}
              </div>
            </div>

            <div className="flex flex-col md:items-end">
              <div>
                <p className="font-semibold text-xl mb-5">Insights</p>
                {footerItems
                  .filter((f) => f.category === "Insights")
                  .map((c) => (
                    <Link
                      key={c.name}
                      href={c.path}
                      className="hover:text-black text-zinc-500 hover:scale-103 transition-all duration-200 block mb-2 text-sm"
                    >
                      {c.name}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center lg:mt-20 mt-8">
          <div className="flex items-center md:space-x-4 space-x-2">
            {socialMedias.map((s) => (
              <Link
                key={s.link}
                href={s.link}
                className="text-xs hover:text-black text-zinc-500 hover:scale-103 transition-all duration-200"
              >
                <s.icon className="md:size-6 size-5" />
              </Link>
            ))}
          </div>

          <div className="flex items-center md:space-x-4 space-x-2">
            <Link
              href={"/term-of-services"}
              className="md:text-sm text-xs hover:text-black text-zinc-500"
            >
              Term of Services
            </Link>
            <Link
              href={"/privacy-policy"}
              className="md:text-sm text-xs hover:text-black text-zinc-500"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full border-t"></div>
      <div className="relative max-w-7xl mx-auto border-x lg:p-10 leading-0 border-b ">
        <p className="text-secondary opacity-48 text-center text-xs md:mt-0 mt-5">
          &copy; Copyright 2026 Garaad Systems. All rights reserved.
        </p>
        <p className="text-center lg:text-[130px] md:text-[90px] text-7xl font-extrabold lg:pt-10 lg:py-0 py-5 text-secondary/32">
          Garaad Systems
        </p>
      </div>
    </div>
  );
};

export default Footer;
