import getCurrentUser from "../actions/getCurrentUser";
import getListings from "../actions/getListings";
import getReservations from "../actions/getReservations";

import EmptyState from "../components/EmptyState";
import PropertiesClient from "./PropertiesClient";

export default async function PropertiesPage() {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login" />;
  }

  const listings = await getListings({ userId: currentUser.id });

  if (!listings) {
    return (
      <EmptyState
        title="No properties found"
        subtitle="Looks like you have no properties!"
      />
    );
  }

  if (listings?.length === 0) {
    return (
      <EmptyState
        title="No trips found"
        subtitle="Looks like you haven't reserved any trips"
      />
    );
  }

  return <PropertiesClient currentUser={currentUser} listings={listings} />;
}
