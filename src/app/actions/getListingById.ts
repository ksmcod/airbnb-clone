import client from "@/libs/prismadb";

interface IParams {
  listingId?: string;
}

export default async function getListingById(params: IParams) {
  const { listingId } = params;

  try {
    const listing = await client.listing.findUnique({
      where: {
        id: listingId,
      },
      include: {
        user: true,
      },
    });

    if (!listing) return null;

    // console.log("The listing is: ", listing);
    return listing;
  } catch (error: any) {
    console.log("Could not get listing!!");
  }
}
