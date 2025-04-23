import React from "react";
import Image from "next/image";
import { SnackList } from "../../data/index";

function Snack() {
  return (
    <div className="px-10">
      <div className="flex gap-3 w-full justify-between">
        {SnackList.map((snack) => (
          <div key={snack.id}>
            <Image
              src={`/snack/${snack.img}`}
              alt={snack.name}
              height={200}
              width={200}
              className="rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Snack;
