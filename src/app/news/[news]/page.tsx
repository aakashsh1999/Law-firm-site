"use client";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { ArrowLeft } from "lucide-react";
import { Timestamp, doc, getDoc } from "firebase/firestore";
import { db } from "@/config";
import { useSearchParams, useRouter } from "next/navigation";
import Head from "next/head";

export type BlogPost = {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
    avatar: string | null;
  };
  publishedAt: string;
  readTime: number;
  coverImage: string | null;
  tags: string[];
  metaDescription?: string;
  metaTitle?: string;
  keywords?: string;
};

export const getBlogPostById = async (id: string): Promise<BlogPost | null> => {
  try {
    // Reference to the blog post in Firestore
    const blogPostRef = doc(db, "blogPosts", id);
    const blogPostSnapshot = await getDoc(blogPostRef);

    // If the document exists, return the post data
    if (blogPostSnapshot.exists()) {
      const blogPostData = blogPostSnapshot.data();
      console.log(blogPostData, "Fetched data from Firestore");

      // Ensure the createdAt is converted from a Firebase Timestamp
      const createdAt =
        blogPostData.createdAt instanceof Timestamp
          ? blogPostData.createdAt.toDate() // Convert Firebase Timestamp to Date
          : new Date(blogPostData.createdAt); // Handle if it's already a Date string

      return {
        id: blogPostSnapshot.id,
        title: blogPostData.title,
        content: blogPostData.content,
        author: blogPostData.author,
        publishedAt: createdAt.toString(), // Convert Date to string for easier display
        readTime: blogPostData.readTime,
        coverImage: blogPostData.coverImageUrl || null,
        tags: blogPostData.tags || [],
        metaDescription: blogPostData.metaDescription || "",
        metaTitle: blogPostData.metaTitle || "",
        keywords: blogPostData.keywords || "",
      };
    } else {
      // If the post doesn't exist, return null
      return null;
    }
  } catch (error) {
    console.error("Error fetching blog post by ID:", error);
    return null;
  }
};

const BlogPostPage = () => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get("id");

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return; // If 'id' is not available, do nothing.
      try {
        setLoading(true);
        const data = await getBlogPostById(id);
        if (data) {
          setPost(data);
        } else {
          // Optionally handle the case where the post is not found
          console.log(`Blog post with ID ${id} not found.`);
          // You might want to redirect the user or show a specific error message
        }
      } catch (error) {
        console.error("Failed to fetch blog post:", error);
        // Optionally handle the error, e.g., display an error message to the user
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  // Function to format the date
  const formatPublishDate = (dateString: string) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      console.error("Invalid date string:", dateString);
      return "Invalid Date";
    }
    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);
  };

  const renderContent = (content: string) => {
    let html = content;
    html = html.replace(
      /^# (.+)$/gm,
      '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>'
    );
    html = html.replace(
      /^## (.+)$/gm,
      '<h2 class="text-2xl font-semibold mt-6 mb-3">$1</h2>'
    );
    html = html.replace(
      /^### (.+)$/gm,
      '<h3 class="text-xl font-semibold mt-5 mb-2">$1</h3>'
    );
    html = html.replace(
      /```(.+?)```/gs,
      '<pre class="bg-gray-100 p-4 rounded my-4 overflow-auto"><code>$1</code></pre>'
    );
    const paragraphs = html.split("\n\n");
    html = paragraphs
      .map((p) => {
        if (!p.startsWith("<h") && !p.startsWith("<pre") && p.trim()) {
          return `<p class="my-4 leading-relaxed text-gray-700">${p}</p>`;
        }
        return p;
      })
      .join("");
    return html;
  };

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow container max-w-4xl px-4 py-8">
          <button
            onClick={() => router.push("/all-news")}
            className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to all posts</span>
          </button>
          <div className="space-y-6 animate-pulse">
            <div className="h-12 w-3/4 bg-gray-200 rounded" />
            <div className="flex items-center gap-3 mb-8">
              <div className="h-8 w-8 bg-gray-200 rounded-full" />
              <div className="h-6 w-40 bg-gray-200 rounded" />
            </div>
            <div className="h-64 w-full bg-gray-200 rounded" />
            <div className="space-y-4">
              <div className="h-6 w-full bg-gray-200 rounded" />
              <div className="h-6 w-full bg-gray-200 rounded" />
              <div className="h-6 w-3/4 bg-gray-200 rounded" />
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow container max-w-4xl px-4 py-8">
          <button
            onClick={() => router.push("/all-news")}
            className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to all posts</span>
          </button>
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">Post not found</p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{post.metaTitle || post.title || "Blog Post"}</title>
        <meta
          name="description"
          content={
            post.metaDescription || post.excerpt || "Read our latest blog post"
          }
        />
        {post.keywords && <meta name="keywords" content={post.keywords} />}
        {post.coverImage && (
          <meta property="og:image" content={post.coverImage} />
        )}
        <meta
          property="og:title"
          content={post.metaTitle || post.title || "Blog Post"}
        />
        <meta
          property="og:description"
          content={
            post.metaDescription || post.excerpt || "Read our latest blog post"
          }
        />
        <meta
          property="og:url"
          content={`/news/${
            /* You might need to generate the slug here if you want OG URL with slug */ post.id
          }`}
        />
        <meta property="og:type" content="article" />
        {/* Add other SEO meta tags as needed */}
      </Head>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow container max-w-4xl px-4 py-8">
          <button
            onClick={() => router.push("/all-news")}
            className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to all posts</span>
          </button>

          <article className="animate-fade-in">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            {/* Author Info */}
            <div className="flex items-center mb-6">
              <div className="mr-4">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  {post.author.avatar ? (
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="bg-blue-100 text-blue-800 h-full w-full flex items-center justify-center text-lg font-medium">
                      {post.author.name.substring(0, 1)}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <p className="font-medium">{post.author.name}</p>
                <p className="text-sm text-gray-500">
                  {formatPublishDate(post.publishedAt)} · {post.readTime} min
                  read
                </p>
              </div>
            </div>

            {/* Cover Image */}
            {post.coverImage && (
              <div className="mb-8 overflow-hidden rounded-lg">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            {/* Content */}
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: renderContent(post.content) }}
            />
          </article>
        </main>
      </div>
    </>
  );
};

export default BlogPostPage;
