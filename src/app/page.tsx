import getListings from "./actions/getListings";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";

export default async function Home() {
  const listings = await getListings();
  console.log("The currently available listings are: ", listings);
  if (listings.length === 0) {
    return (
      <Container>
        <EmptyState showReset />
      </Container>
    );
  }
  return (
    <Container>
      <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
        {listings.map((listing) => (
          <div className="" key={listing.id}>
            {listing.title}
          </div>
        ))}
      </div>
    </Container>
  );
}
