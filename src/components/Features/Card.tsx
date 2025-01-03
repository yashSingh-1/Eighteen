import { ArrowRight, PiIcon } from "lucide-react";
import Image from "next/image";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";

const Card = ({ image, title, slug }: { image: string; title: string, slug: string }) => {
  return (
    <div className="font-mono">
      <div className="mx-3 md:mx-5 my-5 py-1 bg-gradient-to-r from-gray-950 via-teal-950 to-slate-950  rounded-lg overflow-hidden shadow-lg ">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="animate-pulse-color p-1 rounded-lg"
          />
        </div>
        <div className="px-6 pt-6 pb-1">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-400 mb-1">
            Stay updated with the latest breakthroughs and developments in{" "}
            {title}.
          </p>
        </div>
        <div className="inline-flex items-center text-black hover:text-blue-900 mx-6">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Read more!</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                <Link href={"/" + slug}>
                Open in Viewing mode
                </Link>
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
      </div>
      
    </div>
  );
};

export default Card;
