import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <svg
      className={cn("dark:invert", className)}
      width="180"
      height="38"
      viewBox="0 0 180 38"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="24"
        fontWeight="bold"
        fontFamily="monospace"
      >
        JORDINODE.JS
      </text>
    </svg>
  );
}
