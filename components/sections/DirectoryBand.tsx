import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function DirectoryBand() {
  return (
    <section className="bg-surface">
      <Container className="py-14">
        <div className="flex flex-col items-start gap-6 rounded-2xl border border-line bg-white p-8 shadow-card sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold text-primary-dark">
              See who we work with
            </h2>
            <p className="mt-2 text-body">
              Browse our directory of vetted Pakistani manufacturers and ask us
              for an introduction.
            </p>
          </div>
          <Button href="/directory" size="lg" variant="outline" withArrow>
            Browse the supplier directory
          </Button>
        </div>
      </Container>
    </section>
  );
}
