import { ArrowRight } from "lucide-react";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const Card = ({ image, title }: { image: string; title: string }) => {
  return (
    <div>
      <div className="mx-3 md:mx-5 my-2 md:my-5 bg-gradient-to-r from-gray-950 via-teal-950 to-slate-950  rounded-lg overflow-hidden shadow-lg ">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="animate-pulse-color p-1 rounded-lg"
          />
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-400 mb-4">
            Stay updated with the latest breakthroughs and developments in{" "}
            {title}.
          </p>
          <div
            className="inline-flex items-center text-blue-400 hover:text-blue-300"
          >
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
