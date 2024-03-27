import axios from "axios";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

type Props = {
  ships?: number[] | null;
}

const ShipList: FC<Props> = ({ships}) => {
  const [shipData, setShipData] = useState<{ id: number; name: string }[]>([]);

  useEffect(() => {
    if (ships && ships.length > 0) {
      const fetchData = async () => {
        const promises = ships.map(async (id, index) => {
          try {
            const delay = index * 100;
            await new Promise(resolve => setTimeout(resolve, delay));
            
            const response = await axios.get(`https://sw-api.starnavi.io/starships/${id}/`);
            const name = response.data.name;
            return { id, name };
          } catch (error) {
            console.error(`Error fetching film with ID ${id}:`, error);
            return { id, name: '' };
          }
        });
  
        const names = await Promise.all(promises);
        setShipData(names);
      };
  
      fetchData();
    }
  }, [ships]);

  return (
    <>
      {shipData.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-2 text-yellow-300">Star Ships</h3>
          <ul className="text-gray-300">
            {shipData.map(ship => (
              <li>
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