// Original boards in estimated ascending difficulty.
export const batch42 = [
[
['Phases of the moon','NEW','WAXING GIBBOUS','FULL','LAST QUARTER'],
['Things that can be played','ROLE','SONG','CARD','JOKE'],
['Ways to say yes','YES','CERTAINLY','INDEED','AFFIRMATIVE'],
['Words after “hair”','CUT','BRUSH','PIN','LINE']
],
[
['Map projections','MERCATOR','ROBINSON','MOLLWEIDE','ORTHOGRAPHIC'],
['Things that can be served','FOOD','SENTENCE','NOTICE','TENNIS BALL'],
['To confine','IMPRISON','DETAIN','INTERN','INCARCERATE'],
['Words after “hard”','WARE','SHIP','WOOD','COVER']
],
[
['Features of a mountain','SUMMIT','SLOPE','RIDGE','FOOTHILL'],
['Things that can be spun','YARN','TOP','WEB','TALE'],
['To exchange','SUBSTITUTE','SWAP','EXCHANGE','TRADE'],
['Words after “pen”','CIL','PAL','NY','NAME']
],
[
['Parts of a compass','NEEDLE','DIAL','HOUSING','BASEPLATE'],
['Things that can be dropped','ANCHOR','SUBJECT','CHARGES','HINT'],
['Flight actions','FLY','SOAR','GLIDE','HOVER'],
['Words after “cold”','SNAP','SHOULDER','CASE','BLOODED']
]
].map(board => board.map(([name,...words]) => ({name,words})));
