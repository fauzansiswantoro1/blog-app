import { IBlog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const res = await fetch("https://silkyrabbit-us.backendless.app/api/data/Blogs?loadRelations=author")
  const data:IBlog[] = await res.json()
  // console.log(data)
  return (
    <div data-cy="blog-item">
        <h2 className="pt-0 pb-4 px-5 text-xl sm:text-5xl font-bold mt-6">
          <span className="text-black">Artikel</span>{' '}
          <span className="text-teal-600">Terkini</span>
        </h2>
    <div className="grid w-full py-4 px-5 max-sm:px-5 gap-2 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
      {
        data.map((blog, idx)=>{
          return(
            <div key={idx}>
              <div className="h-[200px] w-full relative overflow-hidden">
                <Link href={`/blog/${blog.objectId}`}>
                <Image
                src={blog.thumbnail}
                alt={blog.title}
                fill
                priority
                className="object-fill hover:scale-110"
                />
                </Link>
               
              </div>
              <div className="p-4">
                <h2 className="text-sm font-semibold text-teal-500">{blog.category}</h2>
                <h2 className="text-md font-bold line-clamp-2 text-gray-900">{blog.title}</h2>
                <div className="flex gap-2 mt-4">
                  <div className="w-10 h-10 relative">
                  <Image
                  className="rounded-full object-cover" 
                  src={
                    "https://backendlessappcontent.com/EC21ECE0-A885-415F-8A38-3BCC61DCA758/63AB1A96-337A-43E9-935B-38B25DCF2780/files/blog/blank-image.png"
                  }
                  alt={blog.author.name}
                  fill
                  priority
                  />
                  </div>
                <div className="flex-1 text-sm">
                  <p>{blog.author.name} | {new Date(blog.created).toLocaleDateString()}</p>
                  <p>{blog.author.email}</p>
                  
                </div>
                </div>
                <Link href={`/blog/${blog.objectId}`}
                className="inline-flex items-center px-3 py-2 text-sm text-white bg-teal-700 rounded-lg mt-4 hover:bg-amber-600">
                  Read More
                </Link>
              </div>
            </div>
          )
        })
      }
    </div>
    
    </div>
  );
}
