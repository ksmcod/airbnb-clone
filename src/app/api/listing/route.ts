import { NextResponse } from "next/server";
import client from "@/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const trialBody = request.body;
  console.log("Trial body is: ", trialBody);

  const body = await request.json();
  const {
    title,
    description,
    imageSrc,
    category,
    roomCount,
    bathroomCount,
    guestCount,
    location,
    price,
  } = body;

  if (
    !title ||
    !description ||
    !imageSrc ||
    !category ||
    !roomCount ||
    !bathroomCount ||
    !guestCount ||
    !location ||
    !price
  ) {
    return NextResponse.json("Please fill all required fields!", {
      status: 400,
      statusText: "Fill all required fields!",
    });
  }

  const listing = await client.listing.create({
    data: {
      title,
      description,
      category,
      imageSrc,
      roomCount,
      bathroomCount,
      guestCount,
      locationValue: location.value,
      price: parseInt(price, 10),
      userId: currentUser.id,
    },
  });

  return NextResponse.json(listing, {
    status: 201,
    statusText: "Listing created successfully!",
  });
}
