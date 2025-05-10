import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { getBlogPosts, type BlogPost } from "../Search/service";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const News = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getBlogPosts();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatPublishDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  return (
    <div className="bg-gray-50  mt-12 md:mt-24">
      <main className="flex-grow container max-w-6xl px-4 py-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-3 text-gray-900">
            News Insights
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your source for insightful articles on legal news, articles, and
            legal blogs.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {loading
            ? [...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow p-4 animate-pulse space-y-4"
                >
                  <div className="bg-gray-300 h-48 w-full rounded-md" />
                  <div className="h-6 bg-gray-300 rounded w-3/4" />
                  <div className="h-4 bg-gray-300 rounded w-full" />
                  <div className="h-4 bg-gray-300 rounded w-5/6" />
                  <div className="h-4 bg-gray-300 rounded w-1/2" />
                  <div className="h-8 bg-gray-300 rounded w-24 mt-4" />
                </div>
              ))
            : posts.map((post) => (
                <Link
                  href={`/blog/${post.id}`}
                  key={post.id}
                  className="bg-white rounded-lg shadow-md flex flex-col overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div
                    // href={`/blog/${post.id}`}
                    className="aspect-video relative overflow-hidden"
                  >
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
                    <Link href={`/blog/${post.id}`} className="hover:underline">
                      <h2 className="text-xl font-bold text-gray-900 line-clamp-2">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="text-gray-600 mt-2 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="border-t pt-4 mt-4 flex justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <div className="h-7 w-7 rounded-full overflow-hidden bg-gray-200">
                          {post.author.avatar ? (
                            <img
                              src={post.author.avatar}
                              alt={post.author.name}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="bg-orange-100 text-orange-600 flex items-center justify-center h-full w-full font-semibold">
                              {post.author.name[0]}
                            </div>
                          )}
                        </div>
                        <span>{post.author.name}</span>
                      </div>
                      <span>
                        {formatPublishDate(post.publishedAt)} · {post.readTime}{" "}
                        min read
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
        </div>
      </main>
    </div>
  );
};

export default News;
