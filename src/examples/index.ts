// The scripts the playground offers: copies of the kupcad repository's examples/, and a plate.

import cableClip from './cable_clip.kup?raw';
import coffeeMug from './coffee_mug.kup?raw';
import cup from './cup.kup?raw';
import fanWheel from './fan_wheel.kup?raw';
import gridOrganizer from './grid_organizer.kup?raw';
import hexBitHolder from './hex_bit_holder.kup?raw';
import hinge from './hinge.kup?raw';
import honeycombWall from './honeycomb_wall.kup?raw';
import nameTag from './name_tag.kup?raw';
import parabolicDish from './parabolic_dish.kup?raw';
import phoneStand from './phone_stand.kup?raw';
import planetaryGearbox from './planetary_gearbox.kup?raw';
import plate from './plate.kup?raw';
import projectBox from './project_box.kup?raw';
import screwTopJar from './screw_top_jar.kup?raw';
import spiralStaircase from './spiral_staircase.kup?raw';
import standoff from './standoff.kup?raw';
import text from './text.kup?raw';
import twistedVase from './twisted_vase.kup?raw';

export interface Example {
  /** What the downloads are named after */
  id: string;
  title: string;
  source: string;
}

/** The script the home page shows and the playground opens with */
export const HOME_EXAMPLE: Example = {
  id: 'screw_top_jar',
  title: 'Screw-top jar',
  source: screwTopJar,
};

/** Every script, by title */
export const EXAMPLES: Example[] = [
  HOME_EXAMPLE,
  { id: 'plate', title: 'Mounting plate', source: plate },
  { id: 'standoff', title: 'Antenna standoff', source: standoff },
  { id: 'project_box', title: 'Project box', source: projectBox },
  { id: 'grid_organizer', title: 'Grid organizer', source: gridOrganizer },
  { id: 'coffee_mug', title: 'Coffee mug', source: coffeeMug },
  { id: 'planetary_gearbox', title: 'Planetary gearbox', source: planetaryGearbox },
  { id: 'cup', title: 'Cup (a drawing)', source: cup },
  { id: 'text', title: 'Text', source: text },
  { id: 'name_tag', title: 'Name tag', source: nameTag },
  { id: 'phone_stand', title: 'Phone stand', source: phoneStand },
  { id: 'twisted_vase', title: 'Twisted vase', source: twistedVase },
  { id: 'fan_wheel', title: 'Fan wheel', source: fanWheel },
  { id: 'parabolic_dish', title: 'Parabolic dish', source: parabolicDish },
  { id: 'cable_clip', title: 'Cable clip', source: cableClip },
  { id: 'hex_bit_holder', title: 'Hex bit holder', source: hexBitHolder },
  { id: 'honeycomb_wall', title: 'Honeycomb wall', source: honeycombWall },
  { id: 'hinge', title: 'Hinge', source: hinge },
  { id: 'spiral_staircase', title: 'Spiral staircase', source: spiralStaircase },
].sort((a, b) => a.title.localeCompare(b.title));
