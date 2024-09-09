import EmptyState from "../components/EmptyState";
import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import FavoritesClient from "./FavoritesClient";

export default async function FavoritesPage() {
  const currentUser = await getCurrentUser();
  const listings = await getFavoriteListings();

  if (listings.length === 0) {
    return (
      <EmptyState
        title="No favorites found"
        subtitle="It looks like you have no favorites!"
      />
    );
  }

  return <FavoritesClient listings={listings} currentUser={currentUser} />;
}
