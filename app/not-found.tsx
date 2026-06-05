import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-6 py-24 text-center">
      <p className="text-6xl font-bold text-primary">404</p>
      <h1 className="text-3xl font-semibold text-primary-dark">
        We couldn&apos;t find that page
      </h1>
      <p className="max-w-md text-body">
        The page may have moved. Head back to the homepage, or browse our
        products and services.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button href="/">Back to home</Button>
        <Button href="/products" variant="outline">
          Browse products
        </Button>
      </div>
    </Container>
  );
}
