"use client";

import Link from "next/link";
import { MouseEvent, useState } from "react";
import { Languages, Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
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
import { useTranslations } from "next-intl";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { setUserLocale } from "@/services/locale";

const Navbar = () => {
  const t = useTranslations("Header");
  const pathname = usePathname();
  const router = useRouter();
  const [sheetOpen, setSheetOpen] = useState(false);

  const handleNavClick = (e: MouseEvent, path: string) => {
    // handle hash links like "#services"
    if (path.startsWith("#")) {
      e.preventDefault();
      const id = path.replace("#", "");

      // Close mobile sheet if open
      setSheetOpen(false);

      if (pathname === "/") {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        return;
      }

      // Store the target section in sessionStorage, then navigate home.
      // The home page will read this value after mounting and scroll to it.
      sessionStorage.setItem("scrollTo", id);
      router.push("/");
    }
  };

  return (
    <div className="sticky top-0 z-10 border-b border-zinc-100 backdrop-blur">
      <header className="max-w-6xl mx-auto py-1 w-full">
        {/* Desktop */}
        <nav className="lg:flex hidden justify-between py-1.75 items-center w-full px-2">
          <Link href="/" className="text-center text-2xl">
            <Image
              src={"/images/logo.png"}
              alt="Logo"
              height={500}
              width={500}
              className="w-32 h-12 object-cover"
            />
          </Link>

          <div className="flex items-center gap-x-11 text-[15px]">
            {navItems.map((n) =>
              n.type === "button" ? (
                <Button
                  key={n.name + n.path}
                  onClick={() => router.push("/contact")}
                  className="hover:bg-transparent border border-primary hover:border-secondary hover:text-secondary transition-all duration-200 text-[15px]"
                >
                  {t(n.name)}
                </Button>
              ) : // handle hash links (scroll) differently
              n.path.startsWith("#") ? (
                <button
                  key={n.name + n.path}
                  onClick={(e) =>
                    handleNavClick(e as unknown as MouseEvent, n.path)
                  }
                  className={`flex items-center gap-x-3 text-[15px] hover:text-secondary hover:scale-103 hover:underline hover:underline-offset-4 transition-all duration-200 ${pathname === n.path ? "text-secondary underline underline-offset-4 decoration-primary scale-103" : "text-zinc-500"}`}
                >
                  {t(n.name)}
                </button>
              ) : (
                <Link
                  href={n.path}
                  key={n.name + n.path}
                  className={`flex items-center gap-x-3 text-[15px] hover:text-secondary hover:scale-103 hover:underline hover:underline-offset-4 transition-all duration-200 ${pathname === n.path ? "text-secondary underline underline-offset-4 decoration-primary scale-103" : "text-zinc-500"}`}
                >
                  {t(n.name)}
                </Link>
              ),
            )}

            {/* Language */}
            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild className="cursor-pointer">
                <Languages className="size-5 hover:text-secondary text-zinc-400" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-16! rounded">
                <DropdownMenuItem
                  onClick={async () => {
                    await setUserLocale("en");
                  }}
                  className="cursor-pointer hover:border hover:bg-secondary hover:text-white text-sm"
                >
                  English
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={async () => {
                    await setUserLocale("sm");
                  }}
                  className="cursor-pointer hover:border hover:bg-secondary hover:text-white text-sm"
                >
                  Swahili
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}
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
              className="w-32"
            />
          </Link>

          <div className="py-2 px-5">
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <div className="flex items-center gap-x-5">
                {/* Language */}
                {/* <DropdownMenu>
                  <DropdownMenuTrigger asChild className="cursor-pointer">
                    <Languages className="size-5 hover:text-secondary text-zinc-400" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="min-w-16!">
                    <DropdownMenuItem
                      onClick={async () => {
                        await setUserLocale("en");
                      }}
                      className="cursor-pointer hover:border hover:bg-secondary hover:text-white text-xs"
                    >
                      English
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={async () => {
                        await setUserLocale("sm");
                      }}
                      className="cursor-pointer hover:border hover:bg-secondary hover:text-white text-xs"
                    >
                      Somali
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu> */}

                <SheetTrigger asChild>
                  <button>
                    <Menu size={20} />
                  </button>
                </SheetTrigger>
              </div>

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
                          <Button
                            onClick={() => router.push("/contact")}
                            className="mx-auto w-full h-12"
                          >
                            {t(n.name)}
                          </Button>
                        </SheetClose>
                      ) : // For hash links, use a button inside SheetClose so the sheet closes and we can scroll
                      n.path.startsWith("#") ? (
                        <button
                          onClick={(e) =>
                            handleNavClick(e as unknown as MouseEvent, n.path)
                          }
                          className={`text-xl ${pathname === n.path ? "text-secondary underline underline-offset-4 decoration-primary scale-103" : "text-zinc-500"}`}
                        >
                          {t(n.name)}
                        </button>
                      ) : (
                        <SheetClose asChild>
                          <Link
                            href={n.path}
                            className={`text-xl ${pathname === n.path ? "text-secondary underline underline-offset-4 decoration-primary scale-103" : "text-zinc-500"}`}
                          >
                            {t(n.name)}
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
