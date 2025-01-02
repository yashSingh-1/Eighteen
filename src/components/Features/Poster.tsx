import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CarouselStuff } from "@/lib/topics";
import Image from "next/image";

const Poster = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 py-5 md:py-10 border-b">
      <section className="text-center mb-16 col-span-2 my-auto font-mono">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 animate-gradient bg-[length:200%_200%]  text-transparent bg-clip-text">
          Your Gateway to Cutting-Edge Knowledge
        </h1>
        <p className="text-xl md:text-2xl bg-gradient-to-r rounded-xl from-blue-500 via-purple-500 to-pink-500 w-fit p-2 mx-auto">
          Learn what you'd use!
        </p>
      </section>
      <section className="col-span-1 pb-5">
        <Carousel>
          <CarouselContent>
            {CarouselStuff.map((item) => (
              <CarouselItem key={item.title}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1000}
                  height={100}
                  className="rounded-xl border-zinc-100"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </div>
  );
};

export default Poster;
