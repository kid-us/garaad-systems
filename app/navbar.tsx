"use client";

import Link from "next/link";
import { Languages, Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import { navItems } from "@/constants/nav-items";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
} from "@/components/ui/sheet";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 z-10">
      <header className="max-w-6xl mx-auto py-1 w-full backdrop-blur-2xl border-b">
        {/* Desktop */}
        <nav className="lg:flex hidden justify-between py-1.75 items-center w-full px-2">
          <Link href="/" className="text-center text-2xl">
            <Image
              src={"/images/logo.png"}
              alt="Logo"
              height={500}
              width={500}
              className="w-36"
            />
          </Link>

          <div className="flex gap-x-14 text-[15px]">
            {navItems.map((n) =>
              n.type === "button" ? (
                <Button
                  key={n.name + n.path}
                  className="hover:bg-transparent border border-primary hover:text-secondary transition-all duration-200"
                >
                  {n.name}
                </Button>
              ) : (
                <Link
                  href={n.path}
                  key={n.name + n.path}
                  className={`flex items-center gap-x-3 text-sm hover:text-secondary hover:scale-103 hover:underline hover:underline-offset-4 transition-all duration-200 font-mono ${pathname === n.path ? "text-secondary underline underline-offset-4 decoration-primary scale-103" : "text-zinc-500"}`}
                >
                  {n.name}
                </Link>
              ),
            )}
            <button>
              <Languages className="size-5 hover:text-secondary text-zinc-400" />
            </button>
          </div>
        </nav>

        {/* Mobile */}
        <nav className="lg:hidden flex justify-between items-center rounded-full w-full overflow-hidden">
          <Link href="/" className="ps-5 pt-1 rounded-r-full">
            <Image
              src={"/images/logo.png"}
              alt="Logo"
              height={500}
              width={500}
              className="w-36"
            />
          </Link>

          <div className="py-2 px-5">
            <Sheet>
              <button>
                <Languages className="size-5 text-secondary md:me-10 me-5" />
              </button>
              <SheetTrigger asChild>
                <button>
                  <Menu size={20} />
                </button>
              </SheetTrigger>

              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <Image
                    src={"/images/logo.png"}
                    alt="Logo"
                    height={500}
                    width={500}
                    className="w-44"
                  />
                </SheetHeader>
                <div className="mt-5 space-y-5 px-10">
                  {navItems.map((n) => (
                    <div key={n.name + n.path}>
                      {n.type === "button" ? (
                        <SheetClose asChild>
                          <Button className="mx-auto w-full h-12">
                            {n.name}
                          </Button>
                        </SheetClose>
                      ) : (
                        <SheetClose asChild>
                          <Link
                            href={n.path}
                            className={`text-xl font-mono ${pathname === n.path ? "text-secondary underline underline-offset-4 decoration-primary scale-103" : "text-zinc-500"}`}
                          >
                            {n.name}
                          </Link>
                        </SheetClose>
                      )}
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
