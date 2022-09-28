const rooms = [
    {
        label: "Double room with pool view",
        description: "The double with a pool view has 1 double bed, ensuite bathroom with a walk in shower, basin and a toilet. Equipped with a kettle, microwave, bathroom amenities and a TV.",
        max: "2 (Max 2 adults )",
        image: "/images/room2.jpg"
    },
    {
        label: "Comfort Room",
        description: "The Double room has 1 double bed with an en-suite bathroom with a shower, basin & toilet. Equipped with mini-fridge, microwave, tea & coffee making facilities, TV, fan and a kettle.",
        max: "3 (Max 3 adults )",
        image: "/images/room1.jpg"
    },
    {
        label: "King room with Pool view",
        description: "The Studio has 4x Single beds with an en-suite Bathroom with a toilet and a basin. The room is equipped with a kettle, fridge, hairdryer",
        max: "2 (Max 2 adults )",
        image: "/images/room4.jpg"
    },
]

export default rooms;


/**
 *
 *
 *
"The Studio has 4x Single beds with an en-suite Bathroom with a toilet and a basin. The room is equipped with a kettle, fridge, hairdryer"
 */




// const data = {
//     "bbid": 32135,
//     "name": "Nqabanqaba B&B",
//     "startdate": "2022-09-28",
//     "roomtypes": [
//         {
//             "rtid": 1,
//             "rtname": "Deluxe Room",
//             "ratescheme": 1,
//             "description": "The unit has 1x Queen bed & 1 Single bed. The room is also equipped with a fridge, microwave, fan, tea & coffee making facilities.",
//             "maxoccupancy": 2,
//             "maxadults": 2,
//             "mealplan": "Room Only",
//             "childpolicy": "0 - 7 years stay free, 8 - 18 years pay R300.00",
//             "availability": [
//                 {
//                     "roomrate": 730,
//                     "noroomsfree": 0,
//                     "closeoutrs": {
//                         "closedout": false,
//                         "bbrtid": 1,
//                         "closeouttype": "NO_CLOSEOUT"
//                     },
//                     "rates": [
//                         {
//                             "paxrate": 600
//                         },
//                         {
//                             "paxrate": 730
//                         }
//                     ]
//                 },
//                 {
//                     "roomrate": 730,
//                     "noroomsfree": 0,
//                     "closeoutrs": {
//                         "closedout": false,
//                         "bbrtid": 1,
//                         "closeouttype": "NO_CLOSEOUT"
//                     },
//                     "rates": [
//                         {
//                             "paxrate": 600
//                         },
//                         {
//                             "paxrate": 730
//                         }
//                     ]
//                 },
//                 {
//                     "roomrate": 730,
//                     "noroomsfree": 1,
//                     "closeoutrs": {
//                         "closedout": false,
//                         "bbrtid": 1,
//                         "closeouttype": "NO_CLOSEOUT"
//                     },
//                     "rates": [
//                         {
//                             "paxrate": 600
//                         },
//                         {
//                             "paxrate": 730
//                         }
//                     ]
//                 }
//             ]
//         },
//         {
//             "rtid": 2,
//             "rtname": "King room with Pool view",
//             "ratescheme": 1,
//             "description": "The Studio has 4x Single beds with an en-suite Bathroom with a toilet and a basin. The room is equipped with a kettle, fridge, hairdryer.",
//             "maxoccupancy": 2,
//             "maxadults": 2,
//             "mealplan": "Bed & Breakfast",
//             "childpolicy": "0 - 7 years stay free, 8 - 18 years pay R300.00",
//             "availability": [
//                 {
//                     "roomrate": 950,
//                     "noroomsfree": 1,
//                     "closeoutrs": {
//                         "closedout": false,
//                         "bbrtid": 2,
//                         "closeouttype": "NO_CLOSEOUT"
//                     },
//                     "rates": [
//                         {
//                             "paxrate": 700
//                         },
//                         {
//                             "paxrate": 950
//                         }
//                     ]
//                 },
//                 {
//                     "roomrate": 950,
//                     "noroomsfree": 1,
//                     "closeoutrs": {
//                         "closedout": false,
//                         "bbrtid": 2,
//                         "closeouttype": "NO_CLOSEOUT"
//                     },
//                     "rates": [
//                         {
//                             "paxrate": 700
//                         },
//                         {
//                             "paxrate": 950
//                         }
//                     ]
//                 },
//                 {
//                     "roomrate": 1000,
//                     "noroomsfree": 1,
//                     "closeoutrs": {
//                         "closedout": false,
//                         "bbrtid": 2,
//                         "closeouttype": "NO_CLOSEOUT"
//                     },
//                     "rates": [
//                         {
//                             "paxrate": 750
//                         },
//                         {
//                             "paxrate": 1000
//                         }
//                     ]
//                 }
//             ]
//         },
//         {
//             "rtid": 3,
//             "rtname": "Comfort Room",
//             "ratescheme": 1,
//             "description": "The Double room has 1 double bed with an en-suite bathroom with a shower, basin & toilet. Equipped with mini-fridge, microwave, tea & coffee making facilities, TV, fan and a kettle.",
//             "maxoccupancy": 3,
//             "maxadults": 3,
//             "mealplan": "Room Only",
//             "childpolicy": "0 - 7 years stay free, 8 - 18 years pay R300.00",
//             "availability": [
//                 {
//                     "roomrate": 700,
//                     "noroomsfree": 1,
//                     "closeoutrs": {
//                         "closedout": false,
//                         "bbrtid": 3,
//                         "closeouttype": "NO_CLOSEOUT"
//                     },
//                     "rates": [
//                         {
//                             "paxrate": 600
//                         },
//                         {
//                             "paxrate": 700
//                         },
//                         {
//                             "paxrate": 1085
//                         }
//                     ]
//                 },
//                 {
//                     "roomrate": 700,
//                     "noroomsfree": 1,
//                     "closeoutrs": {
//                         "closedout": false,
//                         "bbrtid": 3,
//                         "closeouttype": "NO_CLOSEOUT"
//                     },
//                     "rates": [
//                         {
//                             "paxrate": 600
//                         },
//                         {
//                             "paxrate": 700
//                         },
//                         {
//                             "paxrate": 1085
//                         }
//                     ]
//                 },
//                 {
//                     "roomrate": 700,
//                     "noroomsfree": 0,
//                     "closeoutrs": {
//                         "closedout": false,
//                         "bbrtid": 3,
//                         "closeouttype": "NO_CLOSEOUT"
//                     },
//                     "rates": [
//                         {
//                             "paxrate": 650
//                         },
//                         {
//                             "paxrate": 700
//                         },
//                         {
//                             "paxrate": 1085
//                         }
//                     ]
//                 }
//             ]
//         },
//         {
//             "rtid": 4,
//             "rtname": "Double room with pool view",
//             "ratescheme": 1,
//             "description": "The double with a pool view has 1 double bed, ensuite bathroom with a walk in shower, basin and a toilet. Equipped with a kettle, microwave, bathroom amenities and a TV.",
//             "maxoccupancy": 2,
//             "maxadults": 2,
//             "mealplan": "Room Only",
//             "childpolicy": "0 - 7 years stay free, 8 - 18 years pay R300.00",
//             "availability": [
//                 {
//                     "roomrate": 716,
//                     "noroomsfree": 1,
//                     "closeoutrs": {
//                         "closedout": false,
//                         "bbrtid": 4,
//                         "closeouttype": "NO_CLOSEOUT"
//                     },
//                     "rates": [
//                         {
//                             "paxrate": 600
//                         },
//                         {
//                             "paxrate": 716
//                         }
//                     ]
//                 },
//                 {
//                     "roomrate": 716,
//                     "noroomsfree": 1,
//                     "closeoutrs": {
//                         "closedout": false,
//                         "bbrtid": 4,
//                         "closeouttype": "NO_CLOSEOUT"
//                     },
//                     "rates": [
//                         {
//                             "paxrate": 600
//                         },
//                         {
//                             "paxrate": 716
//                         }
//                     ]
//                 },
//                 {
//                     "roomrate": 716,
//                     "noroomsfree": 1,
//                     "closeoutrs": {
//                         "closedout": false,
//                         "bbrtid": 4,
//                         "closeouttype": "NO_CLOSEOUT"
//                     },
//                     "rates": [
//                         {
//                             "paxrate": 635
//                         },
//                         {
//                             "paxrate": 716
//                         }
//                     ]
//                 }
//             ]
//         },
//         {
//             "rtid": 5,
//             "rtname": "Classic Room",
//             "ratescheme": 1,
//             "description": "This room has double bed, with shower and toilet as open plan. Its mainly for single person or Couple. It offers DSTV with compact package, bar fridge, macrowave and complimentary coffee, tea and cookies. We also bath amminities",
//             "maxoccupancy": 2,
//             "maxadults": 2,
//             "mealplan": "Room Only",
//             "childpolicy": "0 - 7 years stay free, 8 - 18 years pay R300.00",
//             "availability": [
//                 {
//                     "roomrate": 650,
//                     "noroomsfree": 0,
//                     "closeoutrs": {
//                         "closedout": false,
//                         "bbrtid": 5,
//                         "closeouttype": "NO_CLOSEOUT"
//                     },
//                     "rates": [
//                         {
//                             "paxrate": 600
//                         },
//                         {
//                             "paxrate": 650
//                         }
//                     ]
//                 },
//                 {
//                     "roomrate": 650,
//                     "noroomsfree": 0,
//                     "closeoutrs": {
//                         "closedout": false,
//                         "bbrtid": 5,
//                         "closeouttype": "NO_CLOSEOUT"
//                     },
//                     "rates": [
//                         {
//                             "paxrate": 600
//                         },
//                         {
//                             "paxrate": 650
//                         }
//                     ]
//                 },
//                 {
//                     "roomrate": 650,
//                     "noroomsfree": 0,
//                     "closeoutrs": {
//                         "closedout": false,
//                         "bbrtid": 5,
//                         "closeouttype": "NO_CLOSEOUT"
//                     },
//                     "rates": [
//                         {
//                             "paxrate": 600
//                         },
//                         {
//                             "paxrate": 650
//                         }
//                     ]
//                 }
//             ]
//         }
//     ]
// }