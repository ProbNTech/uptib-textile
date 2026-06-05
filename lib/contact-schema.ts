import { z } from "zod";

export const enquiryNeeds = [
  "Source products",
  "Sell to the UK",
  "A service",
  "Other",
] as const;

export type EnquiryNeed = (typeof enquiryNeeds)[number];

/** Maps a "What do you need?" answer to the inbox/team it should route to. */
export const needRouting: Record<EnquiryNeed, string> = {
  "Source products": "buying-house",
  "Sell to the UK": "marketing-sales",
  "A service": "services",
  Other: "general",
};

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  need: z.enum(enquiryNeeds, {
    errorMap: () => ({ message: "Please choose what you need." }),
  }),
  message: z
    .string()
    .trim()
    .min(10, "Please add a little more detail (10+ characters).")
    .max(4000),
  // Honeypot — must stay empty. Bots tend to fill every field.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
