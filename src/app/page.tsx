import HeroSection from "@/components/hero";
import { IBlog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const res = await fetch("https://silkyrabbit-us.backendless.app/api/data/Blogs?loadRelations=author");
  const data: IBlog[] = await res.json();

  return (
    <div data-cy="blog-item">
      <HeroSection />

      <div className="px-4 sm:px-6 md:px-12">
        <h2 className="pt-0 pb-4 text-2xl sm:text-4xl font-bold mt-1">
          <span className="text-black">Featured</span>{' '}
          <span className="text-amber-600">Blog</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6">
            {data.map((blog, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <Link href={`/blog/${blog.objectId}`}>
                  <div className="h-[180px] w-full relative">
                    <Image
                      src={blog.thumbnail}
                      alt={blog.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      priority
                    />
                  </div>
                </Link>

                <div className="p-4">
                  <h3 className="text-xs font-semibold text-amber-600 uppercase">{blog.category}</h3>
                  <h2 className="text-sm font-bold line-clamp-2 text-gray-900 mt-1">{blog.title}</h2>

                  <div className="flex gap-3 mt-3 items-center">
                    <div className="relative w-9 h-9">
                      <Image
                        className="rounded-full object-cover"
                        src="https://backendlessappcontent.com/EC21ECE0-A885-415F-8A38-3BCC61DCA758/63AB1A96-337A-43E9-935B-38B25DCF2780/files/blog/blank-image.png"
                        alt={blog.author.name}
                        fill
                        priority
                      />
                    </div>
                    <div className="text-xs text-gray-700">
                      <p>{blog.author.name} | {new Date(blog.created).toLocaleDateString()}</p>
                      <p className="text-gray-500">{blog.author.email}</p>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${blog.objectId}`}
                    className="inline-flex items-center px-3 py-1.5 text-xs text-white bg-amber-700 rounded mt-4 hover:bg-amber-600 transition"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
}
