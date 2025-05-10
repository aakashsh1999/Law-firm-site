import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
import {
  getBlogPostById,
  type BlogPost,
} from "../../components/Search/service";
import Navbar from "@/components/Navbar";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";

const BlogPostPage = ({ params }) => {
  console.log(params, "ss");
  const { id } = usePathname();
  //   const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;
      try {
        setLoading(true);
        const data = await getBlogPostById("");
        if (data) {
          setPost(data);
        } else {
          //   navigate("/not-found");
        }
      } catch (error) {
        console.error("Failed to fetch blog post:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, []);

  const formatPublishDate = (dateString: string) => {
    const date = new Date(dateString);
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

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow container max-w-4xl px-4 py-8">
        <button
          onClick={() => navigate("/")}
          className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to all posts</span>
        </button>

        {loading ? (
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
        ) : post ? (
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
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">Post not found</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default BlogPostPage;
