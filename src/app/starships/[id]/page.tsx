import FilmList from '@/components/FilmList';
import { Starship } from '@/interfaces/starship-interface';
import { ShipService } from '@/services/axios-service';

const StarshipsPage = async ({ params }: { params: { id: string } }) => {
  const starship: Starship = await ShipService.getShipById(params.id);

  return (
    <div className="container mx-auto p-8">
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-3xl font-semibold mb-4 text-yellow-300">{starship.name}</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-semibold mb-2 text-yellow-300">Technical Specifications</h3>
              <ul className="text-gray-300">
                <li>Model: {starship.model}</li>
                <li>Starship Class: {starship.starship_class}</li>
                <li>Manufacturer: {starship.manufacturer}</li>
                <li>Cost in Credits: {starship.cost_in_credits}</li>
                <li>Length: {starship.length}</li>
                <li>Crew: {starship.crew}</li>
                <li>Passengers: {starship.passengers}</li>
                <li>Max Atmosphering Speed: {starship.max_atmosphering_speed}</li>
                <li>Hyperdrive Rating: {starship.hyperdrive_rating}</li>
                <li>MGLT: {starship.MGLT}</li>
                <li>Cargo Capacity: {starship.cargo_capacity}</li>
                <li>Consumables: {starship.consumables}</li>
              </ul>
            </div>
            
            <FilmList films={starship.films} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarshipsPage;