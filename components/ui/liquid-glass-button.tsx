"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const liquidbuttonVariants = cva(
  "inline-flex items-center transition-colors justify-center cursor-pointer gap-2 whitespace-nowrap rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 outline-none",
  {
    variants: {
      variant: {
        default: "bg-transparent hover:scale-105 duration-300 transition text-[#047857]",
        destructive: "bg-[#047857]/10 text-[#047857] hover:bg-[#047857]/20",
        secondary: "bg-[#E8E6E3] text-[#3D4152] hover:bg-[#D8D5CF]",
        ghost: "hover:bg-[#E8E6E3] text-[#3D4152]",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 text-xs gap-1.5 px-4",
        lg: "h-10 rounded-md px-6",
        xl: "h-12 rounded-md px-8",
        xxl: "h-14 rounded-md px-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function LiquidButton({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof liquidbuttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(liquidbuttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </Comp>
  )
}

export { LiquidButton, liquidbuttonVariants }
