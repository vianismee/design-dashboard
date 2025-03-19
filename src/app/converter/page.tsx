"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Weight } from "lucide-react";
import { useState } from "react";
import convert, { Unit } from "convert-units";

const units = {
  mass: ["g", "oz", "kg"],
  volume: ["ml", "fl-oz", "l"],
};

export default function Converter() {
  const [value, setValue] = useState(1);
  const [fromUnit, setFromUnit] = useState("g");
  const [toUnit, setToUnit] = useState("oz");
  const [convertValue, setConvertValue] = useState(
    parseFloat(convert(1).from("g").to("oz").toFixed(2))
  );

  const handleConvert = (val: number, from: string, to: string) => {
    setConvertValue(
      parseFloat(
        convert(val)
          .from(from as Unit)
          .to(to as Unit)
          .toFixed(2)
      )
    );
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-[50%] bg-white rounded-2xl px-5 py-5 flex flex-col gap-4">
        <div className="flex items-center space-x-3">
          <Weight className="w-8 h-8 text-indigo-600" />
          <h1 className="text-2xl font-bold">Mass Converter </h1>
        </div>
        <div className="flex w-full">
          <div className="flex flex-col w-[50%] p-2 gap-2">
            <h1 className="font-medium text-black/60">Masukkan berat</h1>
            <div className="flex gap-[2%]">
              <Input
                type="number"
                value={value}
                onChange={(e) => {
                  const newVal = parseFloat(e.target.value);
                  setValue(newVal);
                  handleConvert(newVal, fromUnit, toUnit);
                }}
              />
              <Select
                value={fromUnit}
                onValueChange={(val) => {
                  setFromUnit(val);
                  const availableToUnits = units.mass.includes(val)
                    ? units.mass
                    : units.volume;
                  setToUnit(availableToUnits[0]); // Default to the first matching unit
                  handleConvert(value, val, availableToUnits[0]);
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder={"Mass"} />
                </SelectTrigger>
                <SelectContent>
                  {Object.values(units)
                    .flat()
                    .map((unit) => (
                      <SelectItem key={unit} value={unit}>
                        {unit}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              <Select
                value={toUnit}
                onValueChange={(val) => {
                  setToUnit(val);
                  handleConvert(value, fromUnit, val);
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="To" />
                </SelectTrigger>
                <SelectContent>
                  {(units.mass.includes(fromUnit)
                    ? units.mass
                    : units.volume
                  ).map((unit) => (
                    <SelectItem key={unit} value={unit}>
                      {unit}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-col w-[50%] p-2 font-bold gap-2">
            <h1 className="font-medium text-black/60">Hasil Konversi</h1>
            <Input
              className="h-full items-center flex"
              value={`${convertValue} ${toUnit}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
