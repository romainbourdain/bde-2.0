"use client";

import { OrganizationCard } from "@/features/organizations/organization-card";
import { OrganizationGrid } from "@/features/organizations/organization-grid";
import { Loading } from "@/features/pages/loading";
import { Organization } from "@/types/organization";
import useSwr, { Fetcher } from "swr";

type Data = {
  associations: Organization[];
  clubs: Organization[];
};

const fetcher: Fetcher<Data, string> = (...args) =>
  fetch(...args)
    .then((res) => res.json())
    .then((data) => data.data);

export default function OrganizationsPage() {
  const { data, isLoading, error } = useSwr(
    "https://fouaille.bde-tps.fr/api/organization",
    fetcher
  );

  if (isLoading) return <Loading />;

  if (error || !data) return <h1>Error</h1>;

  return (
    <div className="page">
      <section className="flex flex-col gap-10">
        <h1>Les associations</h1>
        <OrganizationGrid>
          {data.associations.map((association) => (
            <OrganizationCard key={association.id} {...association} />
          ))}
        </OrganizationGrid>
      </section>
      <section className="flex flex-col gap-10">
        <h1>Les clubs</h1>
        <OrganizationGrid>
          {data.clubs.map((club) => (
            <OrganizationCard key={club.id} {...club} />
          ))}
        </OrganizationGrid>
      </section>
    </div>
  );
}
