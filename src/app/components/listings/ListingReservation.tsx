"use client";

import { Range } from "react-date-range";
import Calendar from "../inputs/Calendar";
import Button from "../Button";

interface ListingReservationProps {
  price: number;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  onSubmit: () => void;
  disabled?: boolean;
  disabledDates: Date[];
}

export default function ListingReservation({
  price,
  dateRange,
  onChangeDate,
  onSubmit,
  disabledDates,
  disabled,
  totalPrice,
}: ListingReservationProps) {
  return (
    <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
      <div className="flex items-center gap-1 p-4">
        <div className="text-xl font-semibold">$ {price}</div>
        <div className="font-light text-neutral-600">night</div>
      </div>

      <hr />

      <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value.selection)}
      />

      <hr />

      <div className="p-4">
        <Button label="Reserve" disabled={disabled} onClick={onSubmit} />
      </div>
      <div className="p-4 flex justify-between items-center font-semibold text-lg">
        <p>Total</p>
        <p>$ {totalPrice}</p>
      </div>
    </div>
  );
}
