// The scripts the playground starts on: the first, the one it opens with, is also the home
// page's; the others are copies of the kupcad repository's examples/.

import coffeeMug from './coffee_mug.kup?raw';
import cup from './cup.kup?raw';
import gridOrganizer from './grid_organizer.kup?raw';
import planetaryGearbox from './planetary_gearbox.kup?raw';
import plate from './plate.kup?raw';
import projectBox from './project_box.kup?raw';
import screwTopJar from './screw_top_jar.kup?raw';
import standoff from './standoff.kup?raw';
import text from './text.kup?raw';

export interface Example {
  /** What the downloads are named after */
  id: string;
  title: string;
  source: string;
}

export const EXAMPLES: Example[] = [
  { id: 'plate', title: 'Mounting plate', source: plate },
  { id: 'standoff', title: 'Antenna standoff', source: standoff },
  { id: 'project_box', title: 'Project box', source: projectBox },
  { id: 'grid_organizer', title: 'Grid organizer', source: gridOrganizer },
  { id: 'coffee_mug', title: 'Coffee mug', source: coffeeMug },
  { id: 'planetary_gearbox', title: 'Planetary gearbox', source: planetaryGearbox },
  { id: 'screw_top_jar', title: 'Screw-top jar', source: screwTopJar },
  { id: 'cup', title: 'Cup (a drawing)', source: cup },
  { id: 'text', title: 'Text', source: text },
];
