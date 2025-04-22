'use client'

import { useEffect, useState } from "react";
import { IBlog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

export default function BlogList() {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [allCategories, setAllCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch("https://silkyrabbit-us.backendless.app/api/data/Blogs?loadRelations=author");
      const data: IBlog[] = await res.json();
      setBlogs(data);
      const categories = Array.from(new Set(data.map(blog => blog.category)));
      setAllCategories(categories);
    };
    fetchBlogs();
  }, []);

  const filteredAndSortedBlogs = blogs
    .filter(blog =>
      (categoryFilter === 'all' || blog.category === categoryFilter) &&
      blog.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === 'newest'
        ? new Date(b.created).getTime() - new Date(a.created).getTime()
        : new Date(a.created).getTime() - new Date(b.created).getTime()
    );

  return (
    <div data-cy="blog-item">
      <div className="px-5 mt-6">
        <h2 className="text-xl flex justify-center sm:text-5xl font-bold">
          <span className="text-black">Blog</span>{' '}
          <span className="text-amber-600">List ☕</span>
        </h2>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <select
            className="border border-gray-300 rounded px-3 py-1"
            onChange={(e) => setSortOrder(e.target.value as 'newest' | 'oldest')}
            value={sortOrder}
          >
            <option value="newest">Terbaru</option>
            <option value="oldest">Terlama</option>
          </select>

          <select
            className="border border-gray-300 rounded px-3 py-1"
            onChange={(e) => setCategoryFilter(e.target.value)}
            value={categoryFilter}
          >
            <option value="all">Semua Kategori</option>
            {allCategories.map((cat, idx) => (
              <option key={idx} value={cat}>{cat}</option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Cari blog..."
            className="border border-gray-300 rounded px-3 py-1 w-full max-w-[200px]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Blog Grid */}
        <div className="flex flex-wrap justify-center gap-4 py-6">
          {filteredAndSortedBlogs.map((blog, idx) => (
            <div key={idx} className="border rounded-lg shadow-sm hover:shadow-md transition max-w-[300px] w-full">
              <div className="h-[200px] w-full relative overflow-hidden">
                <Link href={`/blog/${blog.objectId}`}>
                  <Image
                    src={blog.thumbnail}
                    alt={blog.title}
                    fill
                    priority
                    className="object-fill hover:scale-110 transition-transform duration-300"
                  />
                </Link>
              </div>
              <div className="p-4">
                <h2 className="text-sm font-semibold text-amber-500">{blog.category}</h2>
                <h2 className="text-md font-bold line-clamp-2 text-gray-900">{blog.title}</h2>
                <div className="flex gap-2 mt-4 items-center">
                  <div className="w-10 h-10 relative">
                    <Image
                      className="rounded-full object-cover"
                      src={"https://backendlessappcontent.com/EC21ECE0-A885-415F-8A38-3BCC61DCA758/63AB1A96-337A-43E9-935B-38B25DCF2780/files/blog/blank-image.png"}
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
                <Link
                  href={`/blog/${blog.objectId}`}
                  className="inline-flex items-center px-3 py-2 text-sm text-white bg-amber-700 rounded-lg mt-4 hover:bg-amber-600"
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
