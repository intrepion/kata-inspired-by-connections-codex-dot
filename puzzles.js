import {batch42} from './batch-42.js';
import {batch41} from './batch-41.js';
import {batch40} from './batch-40.js';
import {batch39} from './batch-39.js';
import {batch38} from './batch-38.js';
import {batch37} from './batch-37.js';
import {batch36} from './batch-36.js';
import {batch35} from './batch-35.js';
import {batch34} from './batch-34.js';
import {batch33} from './batch-33.js';
import {batch32} from './batch-32.js';
import {batch31} from './batch-31.js';
import {batch30} from './batch-30.js';
import {batch29} from './batch-29.js';
import {batch28} from './batch-28.js';
import {batch27} from './batch-27.js';
import {batch26} from './batch-26.js';
import {batch25} from './batch-25.js';
import {batch24} from './batch-24.js';
import {batch23} from './batch-23.js';
import {batch22} from './batch-22.js';
import {batch21} from './batch-21.js';
import {batch20} from './batch-20.js';
import {batch19} from './batch-19.js';
import {batch18} from './batch-18.js';
import {batch17} from './batch-17.js';
import {batch16} from './batch-16.js';
import {batch15} from './batch-15.js';
import {batch14} from './batch-14.js';
import {batch13} from './batch-13.js';
import {batch12} from './batch-12.js';
import {batch11} from './batch-11.js';
import {batch10} from './batch-10.js';
import {batch09} from './batch-09.js';
import {batch08} from './batch-08.js';
import {batch07} from './batch-07.js';
import {batch06} from './batch-06.js';
import {batch05} from './batch-05.js';
import {batch04} from './batch-04.js';
import {batch03} from './batch-03.js';
import {additionalBoards} from './additional-puzzles.js';
// Original puzzles. Each category contains exactly four distinct words.
const boards = [
 [{name:'Things with a needle',words:['COMPASS','PINE','SYRINGE','TURNTABLE']},{name:'Ways to cook an egg',words:['FRY','POACH','SCRAMBLE','BOIL']},{name:'Kinds of bridge',words:['DRAW','SUSPENSION','DENTAL','CONTRACT']},{name:'Words before “light”',words:['FEATHER','LIME','MOON','PILOT']}],
 [{name:'Things that have keys',words:['PIANO','KEYBOARD','MAP','TYPEWRITER']},{name:'Found at a campsite',words:['TENT','LANTERN','COOLER','FIREWOOD']},{name:'To move quietly',words:['CREEP','TIPTOE','SNEAK','SLINK']},{name:'Words after “paper”',words:['CLIP','TRAIL','BACK','WEIGHT']}],
 [{name:'Types of cloud',words:['CIRRUS','CUMULUS','STRATUS','NIMBUS']},{name:'Things you might wind',words:['CLOCK','YARN','WATCH','HOSE']},{name:'Ways to preserve food',words:['PICKLE','FREEZE','CAN','DRY']},{name:'Words before “stone”',words:['MILE','LIME','BIRTH','TOUCH']}],
 [{name:'Garden visitors',words:['BEE','SNAIL','WORM','BUTTERFLY']},{name:'Types of story',words:['GHOST','LOVE','FISH','BEDTIME']},{name:'To look quickly',words:['GLANCE','PEEK','PEEP','GLIMPSE']},{name:'Words after “sun”',words:['FLOWER','SCREEN','DIAL','RISE']}],
 [{name:'Things in a sewing kit',words:['THREAD','THIMBLE','BUTTON','SCISSORS']},{name:'Bodies of water',words:['POND','RIVER','LAKE','OCEAN']},{name:'Words for a small amount',words:['DASH','PINCH','DROP','SMIDGEN']},{name:'Words before “house”',words:['GREEN','TREE','LIGHT','WARE']}],
 [{name:'Parts of a bicycle',words:['PEDAL','SPOKE','SADDLE','CHAIN']},{name:'Make a loud noise',words:['BANG','CRASH','BOOM','CLANG']},{name:'Things with a shell',words:['EGG','TURTLE','WALNUT','OYSTER']},{name:'Words before “board”',words:['CHESS','SURF','DASH','CUP']}],
 [{name:'Things in the night sky',words:['STAR','MOON','COMET','PLANET']},{name:'Types of footwear',words:['BOOT','SANDAL','LOAFER','SLIPPER']},{name:'To make smaller',words:['SHRINK','REDUCE','TRIM','MINIMIZE']},{name:'Words after “book”',words:['SHELF','MARK','CASE','WORM']}]
];

// Ranks are editorial estimates: 1 is easiest and 4 is hardest.
export const puzzles = [...boards, ...additionalBoards, ...batch03, ...batch04, ...batch05, ...batch06, ...batch07, ...batch08, ...batch09, ...batch10, ...batch11, ...batch12, ...batch13, ...batch14, ...batch15, ...batch16, ...batch17, ...batch18, ...batch19, ...batch20, ...batch21, ...batch22, ...batch23, ...batch24, ...batch25, ...batch26, ...batch27, ...batch28, ...batch29, ...batch30, ...batch31, ...batch32, ...batch33, ...batch34, ...batch35, ...batch36, ...batch37, ...batch38, ...batch39, ...batch40, ...batch41, ...batch42].map((groups, index) => ({id: `board-${String(index + 1).padStart(3, "0")}`, groups: groups.map((group, index) => ({...group, rank: index + 1}))}));
