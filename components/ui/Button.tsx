import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant =
  | "primary"
  | "secondary"
  | "outline"
  | "outlineWhite"
  | "ghost"
  | "white";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white shadow-sm hover:bg-primary-dark hover:shadow-md",
  secondary:
    "bg-secondary text-white shadow-sm hover:bg-secondary-dark hover:shadow-md",
  outline:
    "border border-primary/30 bg-white text-primary hover:border-primary hover:bg-primary/5",
  outlineWhite:
    "border border-white/40 text-white hover:border-white hover:bg-white/10",
  ghost: "text-primary hover:bg-primary/5",
  white:
    "bg-white text-primary-dark shadow-sm hover:bg-white/90 hover:shadow-md",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

type ButtonAsButton = CommonProps & {
  href?: undefined;
} & Omit<ComponentProps<"button">, "className" | "children">;

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const {
    variant = "primary",
    size = "md",
    withArrow = false,
    className,
    children,
    ...rest
  } = props;

  const classes = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      {children}
      {withArrow ? (
        <ArrowRight
          className="size-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden
        />
      ) : null}
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...linkRest } = rest as ButtonAsLink;
    return (
      <Link href={href} className={cn("group", classes)} {...linkRest}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cn("group", classes)} {...(rest as ButtonAsButton)}>
      {content}
    </button>
  );
}
