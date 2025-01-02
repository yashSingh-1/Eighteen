import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { topics } from "@/lib/topics";
import Poster from "./Poster";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <main className="container mx-auto px-4 py-16">
        <Poster />

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-5 pb-10 mt-5 border-b mb-5 ">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-purple-950 via-pink-950 to-yellow-950  rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={topic.image}
                  alt={topic.title}
                  layout="fill"
                  objectFit="cover"
                  className="animate-pulse-color p-1 rounded-lg"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{topic.title}</h2>
                <p className="text-gray-400 mb-4">
                  Stay updated with the latest breakthroughs and developments in{" "}
                  {topic.title}.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300"
                >
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-16 text-center font-mono border-b pb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What do we do?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-r from-slate-950 via-black to-slate-850  p-6 rounded-lg border border-white">
              <h3 className="text-xl font-semibold mb-2">Expert Analysis</h3>
              <p className="text-gray-400">
                Our team of experts provides in-depth analysis and insights on
                complex topics.
              </p>
            </div>
            <div className="bg-gradient-to-r from-slate-950 via-black to-slate-850 p-6 rounded-lg border border-white">
              <h3 className="text-xl font-semibold mb-2">Timely Updates</h3>
              <p className="text-gray-400">
                Stay ahead with our real-time news updates and breaking stories.
              </p>
            </div>
            <div className="bg-gradient-to-r from-slate-950 via-black to-slate-850 p-6 rounded-lg border border-white">
              <h3 className="text-xl font-semibold mb-2">Diverse Coverage</h3>
              <p className="text-gray-400">
                From AI to space exploration, we cover a wide range of
                cutting-edge topics.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 font-mono">
          <div className="flex justify-center items-center text-3xl md:text-4xl font-bold mb-6">
            Discuss the topic with likeminded people!
          </div>
          <div className="flex justify-center items-center my-auto">
          <div className="text-2xl text-center md:text-3xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 animate-gradient bg-[length:200%_200%]  text-transparent bg-clip-text">
            on the Discusstion board
          </div>
          <Image src={"/Discuss.svg"} alt="go there" width={34} height={34} className="invert mb-6 ml-2"/>
          </div>
        </section>

        {/* <section className="mt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl text-gray-300 mb-8">Subscribe to our newsletter and never miss an update!</p>
          <form className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
              />
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-r-lg transition-colors duration-300"
              >
                Subscribe
              </button>
            </div>
          </form>
        </section> */}
      </main>

      <footer className="bg-gray-800 text-center py-6 mt-16">
        <p className="text-gray-400">
          &copy; 2025 The Eighteen Project. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
