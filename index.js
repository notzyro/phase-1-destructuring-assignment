const farmAnimals = 'cow horse sheep pig chicken';
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(' ');
const [bessie, undefined, dolly, babe, little ] = farmAnimals.split(' ');
const [ blackAndWhite, no, black, pink, none ] = farmAnimals.split(' ');

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [ red, orange, yellow, green, blue, indigo, violet ] = colors;
const [ r, o, y, g, b, i, v ] = colors;
const [ re, or, ye, gr, bl, indg, vi ] = colors;

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};
const muppetName = muppet.muppetName;
const color = muppet.color;
const song = muppet.song;
const job = muppet.job;
const partner = muppet.partner;

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};
const song2 = nestedMuppet.album.theMuppetMovie.song2;
const song3 = nestedMuppet.album.theMuppetMovie.song3;
const song4 = nestedMuppet.album.theMuppetMovie.song4;
const songs = nestedMuppet.album.theMuppetMovie.song5;
const nestedJob = nestedMuppet.nestedJob;
const nestedPartner = nestedMuppet.nestedPartner;
// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner