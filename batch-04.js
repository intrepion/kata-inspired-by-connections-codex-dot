// Hand-authored boards with estimated ascending difficulty.
export const batch04 = [
[
['Parts of an airplane','WING','FUSELAGE','RUDDER','COCKPIT'],
['Types of bean','ADZUKI','GARBANZO','FAVA','SOY'],
['To examine','PROBE','INSPECT','INVESTIGATE','ANALYZE'],
['Words before “book”','FACE','COOK','YEAR','PHONE']
],
[
['Parts of a newspaper','HEADLINE','BYLINE','CAPTION','COLUMN'],
['Things at a baseball game','BAT','MITT','BASE','DUGOUT'],
['Show excessive admiration','FLATTER','FAWN','GUSH','FUSS'],
['Words before “man”','MAIL','CHAIR','SPOKES','ANCHOR']
],
[
['Types of soup','RAMEN','PHO','BORSCHT','GUMBO'],
['Things used to write','QUILL','PENCIL','MARKER','PEN'],
['To talk idly','GOSSIP','CHAT','GAB','YAK'],
['Words before “room”','MUSH','BALL','WAITING','REST']
],
[
['Types of tree','BIRCH','ELM','ASPEN','SEQUOIA'],
['Things for keeping warm','QUILT','HEATER','FIRE','BLANKET'],
['To disclose a secret','TELL','DIVULGE','REVEAL','CONFIDE'],
['Words before “star”','ROCK','SHOOTING','FILM','SUPER']
],
[
['Things made with yarn','SCARF','SWEATER','MITTEN','SOCK'],
['Parts of a microscope','EYEPIECE','OBJECTIVE','STAGE','FOCUS KNOB'],
['To give in','YIELD','SURRENDER','CAPITULATE','CONCEDE'],
['Words after “hand”','CUFF','BAG','MADE','STAND']
],
[
['Types of shellfish','CLAM','MUSSEL','SCALLOP','OYSTER'],
['Things on a pizza','CRUST','SAUCE','CHEESE','TOPPINGS'],
['To bargain','HAGGLE','NEGOTIATE','BARTER','DICKER'],
['Words before “time”','FACE','PAST','PART','PLAY']
],
[
['Types of pastry','DANISH','ECLAIR','CROISSANT','STRUDEL'],
['Car dashboard instruments','SPEEDOMETER','ODOMETER','TACHOMETER','FUEL GAUGE'],
['To miss a target','OVERSHOOT','UNDERSHOOT','WHIFF','MISS'],
['Words before “wheel”','STEER','CART','PIN','FERRIS']
],
[
['Types of camera lens','FISHEYE','MACRO','TELEPHOTO','WIDE ANGLE'],
['Things made of glass','BOTTLE','WINDOW','MIRROR','LENS'],
['Propel a boat by hand','ROW','SCULL','PADDLE','POLE'],
['Words before “ball”','BASE','BASKET','CANNON','DISCO']
],
[
['Types of hat','PANAMA','BOWLER','TRILBY','CLOCHE'],
['Items at a beach','BUCKET','SHOVEL','SUNSCREEN','SAND'],
['To stop temporarily','PAUSE','WAIT','HALT','SUSPEND'],
['Words before “fish”','SHELL','SILVER','CAT','CLOWN']
],
[
['Parts of a house','ATTIC','CELLAR','PORCH','HALLWAY'],
['Things found in a laboratory','BEAKER','FLASK','PIPETTE','BUNSEN BURNER'],
['To remove forcefully','YANK','WRENCH','PULL','TUG'],
['Words after “horse”','SHOE','FLY','POWER','PLAY']
]
].map(board => board.map(([name,...words]) => ({name,words})));
