/**
 * Shared domain types.
 *
 * Resolved via the `@/*` → `./*` path alias, so consumers import from
 * `@/types`. Kept intentionally small — these mirror the canonical product
 * and service categories used across the data layer.
 */

/** Product category identifiers (URL slugs). */
export type ProductSlug =
  | "bedding-linen"
  | "apparel-accessories"
  | "sportswear-activewear"
  | "healthcare-textile";

/** Service category identifiers (URL slugs). */
export type ServiceSlug =
  | "marketing-sales"
  | "ecommerce-warehouse"
  | "buying-house"
  | "logistics";

/** A single frequently-asked question and its answer. */
export type Faq = {
  q: string;
  a: string;
};
