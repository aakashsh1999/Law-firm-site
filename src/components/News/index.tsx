// News.tsx
import { useEffect, useState } from "react";
import { BlogPost } from "../Search/service";
import Link from "next/link";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/config";
import { slugify } from "@/lib/utils";

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const postsCollection = collection(db, "blogPosts");
    const querySnapshot = await getDocs(postsCollection);
    const posts: BlogPost[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      posts.push({
        id: doc.id,
        title: data.title,
        excerpt: data.excerpt,
        content: data.content,
        author: data.author,
        tags: data.tags,
        coverImage: data.coverImageUrl, // Assuming you store image URL here
        publishedAt: data.createdAt.toDate().toISOString(),
        readTime: data.readTime || 5, // Default to 5 min read if not provided
      });
    });

    return posts;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw error;
  }
};

const News = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  console.log(posts, "adsfsd");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getBlogPosts();
        setPosts(data.slice(0, 3)); // Show only first 3 posts
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
    <div className="bg-gray-50 mt-12 md:mt-24">
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

        {/* View All Button */}
        <div className="text-center mt-8">
          <Link
            href="/all-news"
            className="bg-blue-500 text-white py-2 px-4 rounded-full"
          >
            View All News
          </Link>
        </div>
      </main>
    </div>
  );
};

export default News;
