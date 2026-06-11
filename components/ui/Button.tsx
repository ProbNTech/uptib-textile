import * as React from "react"
import Link from "next/link"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover",
        primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
        white: "bg-white text-green-900 hover:bg-white/90",
        secondary: "border border-white/30 text-white hover:bg-white/10",
        outline: "border border-white/40 text-white hover:bg-white/10",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  /** Render as a Next.js link instead of a <button>. */
  href?: string
  /** Append a trailing arrow icon (e.g. for primary CTAs). */
  withArrow?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, href, withArrow = false, children, ...props },
    ref,
  ) => {
    const classes = cn(buttonVariants({ variant, size, className }))
    const arrow = withArrow ? (
      <ArrowRight className="size-4" aria-hidden />
    ) : null

    if (href) {
      return (
        <Link href={href} className={classes}>
          {children}
          {arrow}
        </Link>
      )
    }

    if (asChild) {
      return (
        <Slot className={classes} ref={ref} {...props}>
          {children}
        </Slot>
      )
    }

    return (
      <button className={classes} ref={ref} {...props}>
        {children}
        {arrow}
      </button>
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
