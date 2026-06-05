import { MediaCard } from "@/components/ui/MediaCard";
import { products } from "@/data/products";
import { productImage } from "@/data/images";
import { getIcon } from "@/lib/icons";

export function ProductGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <MediaCard
          key={product.slug}
          href={`/products/${product.slug}`}
          image={productImage[product.slug]}
          icon={getIcon(product.icon)}
          title={product.cardTitle}
          description={product.cardBlurb}
          badge={product.badge}
          meta={product.marketRows.slice(0, 1).map((r) => r.value)}
        />
      ))}
    </div>
  );
}
