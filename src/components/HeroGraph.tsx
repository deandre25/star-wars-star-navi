'use client'

import { Hero } from '@/interfaces/hero-interface';
import React from 'react';
import ReactFlow, {Controls, Connection} from 'reactflow';
import 'reactflow/dist/style.css';

type HeroGraphProps = {
  hero: Hero;
}

const HeroGraph: React.FC<HeroGraphProps> = ({ hero }) => {
  const nodes = [
    { id: hero.id, data: { label: hero.name }, position: { x: 0, y: 0 }, type: 'default' },
    ...hero.films.map((film, index) => ({
      id: `film_${index}`,
      data: { label: film.toString() },
      position: { x: 200 * (index + 1), y: 100 },
      type: 'default'
    })),
    ...hero.starships.map((ship, index) => ({
      id: `ship_${index}`,
      data: { label: ship.toString() },
      position: { x: 200 * (index + 1), y: 300 },
      type: 'default'
    })),
  ];

  const edges = [
    ...hero.films.map((film, index) => ({ id: `edge_film_${index}`, source: hero.id, target: `film_${index}` })),
    ...hero.starships.map((ship, index) => ({ id: `edge_ship_${index}`, source: hero.id, target: `ship_${index}` }))
  ];

  const onConnect = (connection: Connection) => console.log('onConnect', connection);
  
  return (
    <div style={{ height: '350px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        nodesDraggable={false}
        elementsSelectable={false}
      >
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default HeroGraph;
