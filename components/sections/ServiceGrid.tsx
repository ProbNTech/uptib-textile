import { MediaCard } from "@/components/ui/MediaCard";
import { services } from "@/data/services";
import { serviceImage } from "@/data/images";
import { getIcon } from "@/lib/icons";

export function ServiceGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((service) => (
        <MediaCard
          key={service.slug}
          href={`/services/${service.slug}`}
          image={serviceImage[service.slug]}
          icon={getIcon(service.icon)}
          title={service.cardTitle}
          description={service.cardBlurb}
        />
      ))}
    </div>
  );
}
