//1
const missions = [
  {
    "mission_name": "Iridium NEXT",
    "mission_id": "F3364BF",
    "manufacturers": [
      "Orbital ATK"
    ],
    "payload_ids": [
      "Iridium NEXT 1",
      "Iridium NEXT 2",
      "Iridium NEXT 3",
      "Iridium NEXT 4",
      "Iridium NEXT 5",
      "Iridium NEXT 6",
      "Iridium NEXT 7"
    ],
    "wikipedia": "https://en.wikipedia.org/wiki/Iridium_satellite_constellation",
    "website": "https://www.iridiumnext.com/",
    "twitter": "https://twitter.com/IridiumBoss?lang=en",
    "description": "In 2017, Iridium began launching Iridium NEXT, a second-generation worldwide network of telecommunications satellites, consisting of 66 active satellites, with another nine in-orbit spares and six on-ground spares. These satellites will incorporate features such as data transmission that were not emphasized in the original design. The constellation will provide L-band data speeds of up to 128 kbit/s to mobile terminals, up to 1.5 Mbit/s to Iridium Pilot marine terminals, and high-speed Ka-band service of up to 8 Mbit/s to fixed/transportable terminals. The next-generation terminals and service are expected to be commercially available by the end of 2018. However, Iridium's proposed use of its next-generation satellites has raised concerns the service will harmfully interfere with GPS devices. The satellites will incorporate a secondary payload for Aireon, a space-qualified ADS-B data receiver. This is for use by air traffic control and, via FlightAware, for use by airlines. A tertiary payload on 58 satellites is a marine AIS ship-tracker receiver, for Canadian company exactEarth Ltd. Iridium can also be used to provide a data link to other satellites in space, enabling command and control of other space assets regardless of the position of ground stations and gateways."
  },
  {
    "mission_name": "Commercial Resupply Services",
    "mission_id": "EE86F74",
    "manufacturers": [
      "SpaceX"
    ],
    "payload_ids": [
      "Dragon Qualification Unit",
      "COTS Demo Flight 1",
      "COTS Demo Flight 2",
      "SpaceX CRS-1",
      "SpaceX CRS-2",
      "SpaceX CRS-3",
      "SpaceX CRS-4",
      "SpaceX CRS-5",
      "SpaceX CRS-6",
      "SpaceX CRS-7",
      "SpaceX CRS-8",
      "SpaceX CRS-9",
      "SpaceX CRS-10",
      "SpaceX CRS-11",
      "SpaceX CRS-12",
      "SpaceX CRS-13",
      "SpaceX CRS-14",
      "SpaceX CRS-15"
    ],
    "wikipedia": "https://en.wikipedia.org/wiki/Commercial_Resupply_Services#SpaceX",
    "website": "https://www.spacex.com/",
    "twitter": "https://twitter.com/SpaceX",
    "description": "Commercial Resupply Services (CRS) are a series of contracts awarded by NASA from 2008–2016 for delivery of cargo and supplies to the International Space Station (ISS) on commercially operated spacecraft. The first CRS contracts were signed in 2008 and awarded $1.6 billion to SpaceX for 12 cargo transport missions and $1.9 billion to Orbital Sciences for 8 missions, covering deliveries to 2016. In 2015, NASA extended the Phase 1 contracts by ordering an additional three resupply flights from SpaceX and one from Orbital Sciences. After additional extensions late in 2015, SpaceX is currently scheduled to have a total of 20 missions and Orbital 10. SpaceX began flying resupply missions in 2012, using Dragon cargo spacecraft launched on Falcon 9 rockets from Space Launch Complex 40 at Cape Canaveral Air Force Station, Cape Canaveral, Florida. Orbital Sciences began deliveries in 2013 using Cygnus spacecraft launched on the Antares rocket from Launch Pad 0A at the Mid-Atlantic Regional Spaceport (MARS), Wallops Island, Virginia. A second phase of contracts (known as CRS2) were solicited and proposed in 2014. They were awarded in January 2016 to Orbital ATK, Sierra Nevada Corporation, and SpaceX, for cargo transport flights beginning in 2019 and expected to last through 2024."
  },
  {
    "mission_name": "Orbcomm OG2",
    "mission_id": "CE91D46",
    "manufacturers": [
      "Sierra Nevada Corporation"
    ],
    "payload_ids": [
      "Orbcomm-OG2",
      "Orbcomm-OG2-M1",
      "Orbcomm-OG2-M2"
    ],
    "wikipedia": "https://en.wikipedia.org/wiki/Orbcomm_(satellite)#Orbcomm-OG2",
    "website": "https://www.orbcomm.com/",
    "twitter": "https://twitter.com/orbcomm_inc",
    "description": "Orbcomm Generation 2 (OG2) second-generation satellites are intended to supplement and eventually replace the current first generation constellation. Eighteen satellites were ordered by 2008—nominally intended to be launched in three groups of six during 2010–2014—and by 2015 have all been launched, on three flights. Orbcomm has options for a further thirty OG2 spacecraft. The satellites were launched by SpaceX on the Falcon 9 launch system. Originally, they were to launch on the smaller Falcon 1e rocket."
  },
  {
    "mission_name": "SES",
    "mission_id": "6C42550",
    "manufacturers": [
      "Orbital ATK",
      "Boeing",
      "Airbus Defence and Space"
    ],
    "payload_ids": [
      "SES-8",
      "SES-9",
      "SES-10",
      "SES-11",
      "SES-16",
      "SES-12"
    ],
    "wikipedia": "https://en.wikipedia.org/wiki/SES_S.A.",
    "website": "https://www.ses.com/",
    "twitter": "https://twitter.com/SES_Satellites",
    "description": "SES S.A. is a communications satellite owner and operator providing video and data connectivity worldwide to broadcasters, content and internet service providers, mobile and fixed network operators, governments and institutions, with a mission to “connect, enable, and enrich”. SES operates more than 50 geostationary orbit satellites and 16 medium Earth orbit satellites. These comprise the well-known European Astra TV satellites, the O3b data satellites and others with names including AMC, Ciel, NSS, Quetzsat, YahSat and SES."
  }
];

const arrayOfMissionsNames = missions.map( mision => mision.mission_name);
console.log(arrayOfMissionsNames);

//2
const arrayOfPayloadIds = missions.map( mision => mision.payload_ids).flat();
// const arrayPayloadIdsToArray = arrayOfPayloadIds.flat();
console.log(arrayOfPayloadIds);

//Medium level
//1
const map = ["_id", "name", "isActive", "balance"];
const users = [
  {
    "_id": "5d220b10e8265cc978e2586b",
    "isActive": true,
    "balance": 2853.33,
    "age": 20,
    "name": "Buckner Osborne",
    "gender": "male",
    "company": "EMPIRICA",
    "email": "bucknerosborne@empirica.com",
    "phone": "+1 (850) 411-2997",
    "registered": "2018-08-13T04:28:45 -03:00"
  },
  {
    "_id": "5d220b10144ef972f6c2b332",
    "isActive": true,
    "balance": 1464.63,
    "age": 38,
    "name": "Rosalie Smith",
    "gender": "female",
    "company": "KATAKANA",
    "email": "rosaliesmith@katakana.com",
    "phone": "+1 (943) 463-2496",
    "registered": "2016-12-09T05:15:34 -02:00"
  },
  {
    "_id": "5d220b1083a0494655cdecf6",
    "isActive": false,
    "balance": 2823.39,
    "age": 40,
    "name": "Estrada Davenport",
    "gender": "male",
    "company": "EBIDCO",
    "email": "estradadavenport@ebidco.com",
    "phone": "+1 (890) 461-2088",
    "registered": "2016-03-04T03:36:38 -02:00"
  }
];

const usersInfo = users.map(user => ({_id: user._id, name: user.name, isActive: user.isActive, balance: user.balance }));
console.log(usersInfo);

//2

function search(value, array) {
  if( typeof value !== String || typeof value !== Number || value === " ") {
    return;
  }
  return array.filter(function (user) {
      return Object.keys(user).some(function (item) {
          return user[item].toString().indexOf(value) !== -1;
      });
  });
}

console.log(search( 'estradadavenport@ebidco.com', users));

//Function
//1

function twoSum( mass, number){
  const result = [];
  for( let i = 0; i< mass.length; i++){
    for(let j = i+1; j< mass.length; j++){
      if(mass[i] + mass[j] === number){
        result.push(i);
        result.push(j);
      }
    }
  }

  return result;
}
console.log(twoSum([2, 4, 1, 5, 7], 8));
console.log(twoSum([2, 4, 1, 5, 7], 3));

//2
const memo = 1;

function memoize2(num) {
  return num + memo;
}


console.log(memoize2(1));
console.log(memoize2(1));
console.log(memoize2(5));
console.log(memoize2(5));


//2
let memoize = (function() {
 let obj = {};

  function m(number) {
    let counter = 1;

    if (number in obj) {
      counter = obj[number];
      return number;
    } else  if (number === 0 || number === 1) {
      counter = number;
      return number;
    }
      else {
        number += 1;
        obj[number] = counter;
        return number;
      }

    // return counter;
  }
  return m;
})();


console.log(memoize(1));
console.log(memoize(2));
console.log(memoize(6));
console.log(memoize(6));
console.log(memoize(4));
console.log(memoize(4));

