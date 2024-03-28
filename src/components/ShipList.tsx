"use client"

import { ShipTitle } from "@/interfaces/starship-interface";
import { ShipService } from "@/services/axios-service";
import Link from "next/link";
import { FC } from "react";

type Props = {
  ships: number[];
}

const ShipList: FC<Props> = async ({ships}) => {
  const fetchShipTitle: ShipTitle[] = await ShipService.getShipTitleById(ships);

  return (
    <>
      {fetchShipTitle.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-2 text-yellow-300">Star Ships</h3>
          <ul className="text-gray-300">
            {fetchShipTitle.map(ship => (
              <li key={ship.id}>
                <Link href={`/starships/${ship.id}`} className="hover:text-yellow-500" key={ship.id}><i>{ship.name}</i></Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default ShipList;