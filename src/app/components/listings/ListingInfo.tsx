"use client";

import Avatar from "@/app/components/Avatar";
import useCountries from "@/app/hooks/useCountries";
import { User } from "@prisma/client";
import { IconType } from "react-icons";
import ListingCategory from "./ListingCategory";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../Map"), {
  ssr: false,
});

interface ListingInfoProps {
  user: User;
  description: string;
  guestCount: number;
  roomCount: number;
  bathroomCount: number;
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
  locationValue: string;
}

export default function ListingInfo({
  user,
  description,
  guestCount,
  bathroomCount,
  category,
  locationValue,
  roomCount,
}: ListingInfoProps) {
  const { getByValue } = useCountries();

  const coordinates = getByValue(locationValue)?.latlng;
  return (
    <div className="col-span-4 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="text-sm font-semibold flex items-center gap-2">
          <p>Hosted by {user?.name}</p>
          <Avatar src={user?.image} />
        </div>
        <div className="flex items-center gap-4 font-light text-neutral-500">
          <p>
            {guestCount} {guestCount == 1 ? "guest" : "guests"}
          </p>
          <p>
            {roomCount} {roomCount == 1 ? "room" : "rooms"}
          </p>
          <p>
            {bathroomCount} {bathroomCount == 1 ? "bathroom" : "bathrooms"}
          </p>
        </div>
      </div>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category.label}
          description={category.description}
        />
      )}

      <hr />

      <div className="text-md font-light text-neutral-500">{description}</div>

      <hr />

      <Map center={coordinates} />
    </div>
  );
}
