import { IBlog } from "@/types/blog"
import Image from "next/image"

export default async function Page({params}:{params:Promise<{id:string}>}) {
    const id = (await params).id
    const res = await fetch(
        `https://silkyrabbit-us.backendless.app/api/data/Blogs/${id}?loadRelations=author`
    )
    const blog:IBlog = await res.json()
    return(
        
    <div className="max-w-3xl mx-auto px-4 py-10" >
    <div className="text-amber-500 font-bold text-center mb-4">Artikel - {blog.category}</div>
      <h1 className="text-4xl font-bold text-center mb-6">{blog.title}</h1>
      <div className="w-full h-px bg-gray-300 my-6" />
      <div className="flex gap-2 mt-4 mb-4">
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
                        <p><span className="font-bold">{blog.author.name}</span> | {new Date(blog.created).toLocaleDateString()}</p>
                        <p className="text-[12px]">{blog.author.email}</p>
                        
                      </div>
                      </div>
        <Image
        src={blog.thumbnail}
        alt={blog.title}
        width={768}
        height={500}
        className="mx-auto rounded-lg"
      />
      {/* <p className="mt-6 text-justify text-gray-700 leading-relaxed">{blog.content}</p> */}
      <div dangerouslySetInnerHTML={{ __html: blog.content }} className="text-justify" />
    </div>
    )
}