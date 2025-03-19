"use client";

import * as React from "react";
import { Calendar } from "../ui/calendar";

export default function CalendarsHero() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
      ></Calendar>
    </div>
  );
}
