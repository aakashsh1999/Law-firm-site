// all-news.tsx
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getBlogPosts } from "@/components/News";
import { BlogPost } from "@/components/Search/service";
import { slugify } from "@/lib/utils"; // Assuming you have a slugify utility

const AllNews = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sortBy, setSortBy] = useState("desc"); // Default sort by newest (descending created date)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getBlogPosts();
        const sortedData = data.sort((a, b) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return sortBy === "desc" ? dateB - dateA : dateA - dateB; // Changed to createdAt for sorting
        });

        const pageSize = 6; // Number of posts per page
        const totalPosts = sortedData.length;
        setTotalPages(Math.ceil(totalPosts / pageSize));

        const paginatedPosts = sortedData.slice(
          (page - 1) * pageSize,
          page * pageSize
        );
        setPosts(paginatedPosts);
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page, sortBy]);

  const formatPublishDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  return (
    <div className="bg-white mt-12 md:mt-16">
      <main className="flex-grow container max-w-6xl px-4 py-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-3 text-gray-900">All News</h1>
        </header>

        {/* Sort by Created Date */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setSortBy(sortBy === "asc" ? "desc" : "asc")}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer"
          >
            Sort by {sortBy === "asc" ? "Oldest" : "Newest"}
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {loading
            ? [...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow p-4 animate-pulse space-y-4"
                >
                  <div className="bg-gray-300 h-48 w-full rounded-md" />
                  <div className="h-6 bg-gray-300 rounded w-3/4" />
                  <div className="h-4 bg-gray-300 roundew-full" />
                  <div className="h-4 bg-gray-300 rounded w-5/6" />
                  <div className="h-4 bg-gray-300 rounded w-1/2" />
                  <div className="h-8 bg-gray-300 rounded w-24 mt-4" />
                </div>
              ))
            : posts.map((post) => (
                <Link
                  href={`/news/${slugify(post.title)}?id=${post.id}`}
                  key={post.id}
                  className="bg-white rounded-lg shadow-md flex flex-col overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video relative overflow-hidden">
                    {post.coverImage && (
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    )}
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs rounded bg-orange-100 text-orange-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/news/${slugify(post.title)}?id=${post.id}`}
                      className="hover:underline"
                    >
                      <h2 className="text-xl font-bold text-gray-900 line-clamp-2">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-gray-600 mt-2 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="border-t pt-4 mt-4 flex justify-between text-sm text-gray-500">
                      <span>
                        {formatPublishDate(post.publishedAt)} · {post.readTime}{" "}
                        min read
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => setPage(page > 1 ? page - 1 : 1)}
            disabled={page === 1}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer"
          >
            Previous
          </button>
          <button
            onClick={() => setPage(page < totalPages ? page + 1 : totalPages)}
            disabled={page === totalPages}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg cursor-pointer"
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
};

export default AllNews;
