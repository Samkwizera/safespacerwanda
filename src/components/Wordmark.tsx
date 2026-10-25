import Image from "next/image";
import { cn } from "@/lib/cn";

export function Wordmark({ className }: { className?: string }) {
  return (
    <Image
      src="/images/safespacerwanda-logo-transparent.png"
      alt="SafeSpace Rwanda"
      width={324}
      height={153}
      className={cn("h-auto w-[9.5rem]", className)}
      priority
    />
  );
}
