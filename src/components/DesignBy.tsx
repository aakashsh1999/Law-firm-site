import { Heart } from "lucide-react";
import Link from "next/link";

interface FooterProps {
  variant?: "made" | "designed";
  link?: string;
  className?: string;
}

export function DesignByFooter({
  variant = "made",
  link = "https://oneggy.com",
  className = "",
}: FooterProps) {
  const text = variant === "made" ? "Made by" : "Designed and Developed by";

  return (
    <div className={`w-full border-t bg-white py-2 ${className}`}>
      <div className="container flex items-center justify-center">
        <p className="text-sm text-muted-foreground flex items-center gap-1.5">
          {text}
          <Link
            href={link}
            className="font-medium text-foreground hover:underline underline-offset-4 transition-colors flex items-center gap-1.5"
          >
            OnEggy Technologies
            <Heart className="h-3.5 w-3.5 text-rose-500" />
          </Link>
        </p>
      </div>
    </div>
  );
}
