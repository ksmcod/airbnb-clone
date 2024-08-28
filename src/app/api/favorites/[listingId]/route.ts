import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import client from "@/libs/prismadb";

interface IParams {
  listingId?: string;
}

export async function POST(req: Request, { params }: { params: IParams }) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json("User is not authenticated!", {
      status: 401,
      statusText: "Forbidden! User not authenticated!",
    });
  }
  const { listingId } = params;

  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid ID");
  }

  const favoritesIds = [...(currentUser.favoritesIds || [])];
  favoritesIds.push(listingId);

  const user = await client.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      favoritesIds,
    },
  });

  return NextResponse.json(user, {
    status: 200,
  });
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.json("User is not authenticated!", {
      status: 401,
      statusText: "Forbidden! User not authenticated!",
    });
  }

  const { listingId } = params;

  if (!listingId || typeof listingId !== "string") {
    throw new Error("Invalid ID");
  }

  let favoritesIds = [...(currentUser.favoritesIds || [])];

  favoritesIds = favoritesIds.filter((id) => id !== listingId);

  const user = await client.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      favoritesIds,
    },
  });

  return NextResponse.json(user, {
    status: 200,
  });
}
