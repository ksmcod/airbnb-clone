import { NextResponse } from "next/server";
import client from "@/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

interface IParams {
  listingId?: string;
}

export async function DELETE(req: Request, { params }: { params: IParams }) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json("Unauthorized", { status: 401 });
  }

  const { listingId } = params;

  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid ID");
  }

  const listing = await client.listing.deleteMany({
    where: {
      id: listingId,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(listing, { status: 200 });
}
