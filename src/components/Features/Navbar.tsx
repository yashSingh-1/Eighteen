"use client"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavbarElemens } from "@/lib/NavbarElements";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();
  return (
    <div className="p-3 w-full h-fit flex justify-between font-mono">
      <div className="text-2xl font-extrabold text-white">The Eighteen Project</div>
      <div>
        <Sheet>
          <SheetTrigger>
            <Image src={"/globe.svg"} alt="navigation" height={34} width={34} className="invert"/>
          </SheetTrigger>
          <SheetContent className="text-white bg-black">
            <SheetHeader className="border-b mb-4 py-3">
              <SheetTitle className="text-2xl font-extrabold text-white">The Eighteen Project</SheetTitle>
              <SheetDescription>
                Basically do a PHD here!
              </SheetDescription>
            </SheetHeader>
            <div>
            {
                NavbarElemens.map((items) => {
                    const isActive = pathname === items.route || pathname.endsWith(items.route)
                    return <Link href={items.route} key={items.label}>
                        <div className={cn("flex p-2 w-full rounded-lg", isActive ? "bg-blue-600" : null)}>
                            <Image src={items.image} alt={items.label} height={24} width={24} className="invert mr-2"/>
                            <div className="text-lg">
                            {items.label}
                            </div>
                        </div>
                    </Link>
})
            }
          </div>
          </SheetContent>
          
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
