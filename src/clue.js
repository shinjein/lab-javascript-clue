// ITERATION 1

// Suspects Collection
const suspectsArray = [];

const mrGreen =  {
        firstName: 'Jacob',
        lastName: 'Green',
        occupation: 'Entrepreneur',
        age: 45,
        description:'He has a lot of connections',
        image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
        color: 'Green'
    }

const drOrchid =  {
        firstName: 'Doctor',
        lastName: 'Orchid',
        occupation: 'Scientist',
        age: 26,
        description:'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
        image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
        color: 'white'
    }

const profPlum =  {
        firstName: 'Victor',
        lastName: 'Plum',
        occupation: 'Designer',
        age: 22,
        description:'Billionare video game designer',
        image: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg',
        color: 'Purple'
    }

const missScarlet =  {
        firstName: 'Kasandra',
        lastName: 'Scarlet',
        occupation: 'Actor',
        age: 31,
        description:'She is an A-list movie star with a dark past',
        image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg',
        color: 'red'
    }
const mrsPeacock =  {
        firstName: 'Eleanor',
        lastName: 'Peacock',
        occupation: 'Scocialite',
        age: 36,
        description:'She is from a wealthy family and uses her status and money to earn popularity',
        image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
        color: 'blue'
    }
const mrMustard =  {
        firstName: 'Jack',
        lastName: 'Mustard',
        occupation: 'Retired football plaer',
        age: 62,
        description:'He is a former football player who tries to get by on his former glory',
        image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg',
        color: 'yellow'
    }

suspectsArray.push(mrGreen);
suspectsArray.push(drOrchid);
suspectsArray.push(profPlum);
suspectsArray.push(missScarlet);
suspectsArray.push(mrsPeacock);
suspectsArray.push(mrMustard);

console.log(suspectsArray);

// Rooms Collection

const roomsArray = [
    {name: 'Dining Room'},
    {name: 'Conservatory'},
    {name: 'Kitchen'},
    {name: 'study'},
    {name: 'Library'},
    {name: 'Billiard Room'},
    {name: 'Lounge'},
    {name: 'Ballroom'},
    {name: 'Hall'},
    {name: 'Spa'},
    {name: 'Living Room'},
    {name: 'Observatory'}
];

console.log(roomsArray);

// Weapons Collection
const weaponsArray = [];

const rope = {
    name: 'rope',
    weight: 10
}
const knife = {
    name: 'knife',
    weight: 8
}
const candlestick = {
    name: 'candlestick',
    weight: 2
}
const dumbbell = {
    name: 'dumbell',
    weight: 30
}
const poison = {
    name: 'poison',
    weight: 2
}
const axe = {
    name: 'axe',
    weight: 15
}
const bat = {
    name: 'bat',
    weight: 13
}
const trophy = {
    name: 'trophy',
    weight: 25
}
const pistol = {
    name: 'pistol',
    weight: 20
}

weaponsArray.push(rope);
weaponsArray.push(knife);
weaponsArray.push(candlestick);
weaponsArray.push(dumbbell);
weaponsArray.push(poison);
weaponsArray.push(axe);
weaponsArray.push(bat);
weaponsArray.push(trophy);
weaponsArray.push(pistol);

console.log(weaponsArray);


// ITERATION 2

function selectRandom(arr) {
    if(arr.length === 0){
        return undefined;
    } else {
        return arr[Math.floor(Math.random()*arr.length)];
    }
}

selectRandom(weaponsArray);
console.log(selectRandom(weaponsArray));

// return an object with suspect, weapon, and room

function pickMystery() {
    let result = {
        suspect: selectRandom(suspectsArray),
        weapon: selectRandom(weaponsArray),
        room: selectRandom(roomsArray)
    }; return result;
}
console.log(pickMystery());

function revealMystery(envelope) {
    return `${envelope.suspect.firstName} ${envelope.suspect.lastName} killed someone using the ${envelope.weapon.name} in the ${envelope.room.name}`;
}
console.log(revealMystery());

// ITERATION 3
