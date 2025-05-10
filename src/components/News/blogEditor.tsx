import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { saveBlogPost } from "@/services/blogService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";

const BlogEditor = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Available tags for selection
  const availableTags = [
    "React",
    "JavaScript",
    "TypeScript",
    "CSS",
    "Web Design",
    "UI/UX",
    "Responsive Design",
    "State Management",
    "Web Development",
    "Performance",
  ];

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { state: { from: "/editor" } });
    }
  }, [isAuthenticated, navigate]);

  const handleTagSelection = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      if (selectedTags.length < 3) {
        setSelectedTags([...selectedTags, tag]);
      } else {
        toast({
          title: "Maximum 3 tags allowed",
          description: "Please remove a tag before adding another one.",
          variant: "destructive",
        });
      }
    }
  };

  // Handle coverImage selection
  const handleCoverImageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setCoverImage(event.target.value);
  };

  // Sample cover images
  const coverImages = [
    { value: "", label: "Select a cover image" },
    {
      value:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      label: "Laptop with Code",
    },
    {
      value:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      label: "Monitor with Code",
    },
    {
      value:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      label: "Woman with Laptop",
    },
    {
      value:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      label: "Gray Laptop",
    },
    {
      value:
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      label: "Team with Screens",
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !content || !excerpt) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    if (selectedTags.length === 0) {
      toast({
        title: "Tags required",
        description: "Please select at least one tag.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const newPost = await saveBlogPost({
        title,
        excerpt,
        content,
        coverImage: coverImage || undefined,
        author: {
          name: "Demo User",
        },
        tags: selectedTags,
      });

      toast({
        title: "Post created!",
        description: "Your blog post has been published successfully.",
      });

      // Navigate to the new post
      navigate(`/blog/${newPost.id}`);
    } catch (error) {
      console.error("Failed to save blog post:", error);
      toast({
        title: "Error",
        description: "Failed to publish your post. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isAuthenticated) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <div className="container max-w-4xl mx-auto px-4 py-8">
        <Button
          variant="ghost"
          className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to blog
        </Button>

        <h1 className="text-3xl font-bold mb-8 text-center">
          Create New Blog Post
        </h1>

        <form onSubmit={handleSubmit}>
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Title <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter post title"
                    className="text-lg"
                    maxLength={100}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="excerpt"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Excerpt <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="excerpt"
                    value={excerpt}
                    onChange={(e) => setExcerpt(e.target.value)}
                    placeholder="Write a brief summary of your post"
                    rows={3}
                    maxLength={200}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="content"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Content <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Write your post content here... (Supports Markdown)"
                    className="min-h-[300px] font-mono"
                    required
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Markdown supported. Use # for headings, ** for bold, * for
                    italic, etc.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Cover Image
                  </label>
                  <Select onValueChange={setCoverImage}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a cover image" />
                    </SelectTrigger>
                    <SelectContent>
                      {coverImages.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {coverImage && (
                    <div className="mt-2 rounded overflow-hidden">
                      <img
                        src={coverImage}
                        alt="Cover preview"
                        className="w-full h-40 object-cover"
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tags <span className="text-red-500">*</span>{" "}
                    <span className="text-xs text-gray-500">
                      (Select up to 3)
                    </span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {availableTags.map((tag) => (
                      <Button
                        key={tag}
                        type="button"
                        variant={
                          selectedTags.includes(tag) ? "default" : "outline"
                        }
                        className={
                          selectedTags.includes(tag)
                            ? "bg-blog hover:bg-blog-hover"
                            : ""
                        }
                        size="sm"
                        onClick={() => handleTagSelection(tag)}
                      >
                        {tag}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end">
            <Button
              type="submit"
              className="bg-blog hover:bg-blog-hover"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Publishing...
                </>
              ) : (
                "Publish Post"
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogEditor;
