// The scripts the playground starts on: the first, the one it opens with, is also the home
// page's; the others are copies of the kupcad repository's examples/.

import cup from './cup.kup?raw';
import planetaryGearbox from './planetary_gearbox.kup?raw';
import plate from './plate.kup?raw';
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
  { id: 'planetary_gearbox', title: 'Planetary gearbox', source: planetaryGearbox },
  { id: 'cup', title: 'Cup (a drawing)', source: cup },
  { id: 'text', title: 'Text', source: text },
];
