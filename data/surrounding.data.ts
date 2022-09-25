const arounds = [
    {
        id: 1,
        category: "whats around",
        details: {
            head: "Check all the Property sorroundings *",
            description: "All distances are measured in straight lines. Actual travel distances may vary.",
            type: "tab",

            innerCategories: [
                {
                    name: "Whats nearby",
                    features: [
                        {
                            id: 1,
                            item: "Alkantstrand Beach",
                            distance: "2.7km"
                        },
                        {
                            id: 2,
                            item: "Richards Bay Game Reserve",
                            distance: "10.0km"
                        },
                        {
                            id: 3,
                            item: "Enseleni Nature Reserve",
                            distance: "10.0km"
                        },
                    ]
                },
                {
                    name: "Nature beauty",
                    features: [
                        {
                            id: 1,
                            item: "River - Magongo",
                            distance: "1.3km"
                        },
                        {
                            id: 2,
                            item: "Sea/ocean - Indian Ocean",
                            distance: "3.3km"
                        },
                        {
                            id: 3,
                            item: "Lake - Mzigazi",
                            distance: "6.0km"
                        },
                    ]
                },
                {
                    name: "Closest airpot",
                    features: [
                        {
                            id: 1,
                            item: "Richards Bay Airport",
                            distance: "4.2km"
                        },
                        {
                            id: 2,
                            item: "Empangeni Airport",
                            distance: "22.0km"
                        },
                        {
                            id: 3,
                            item: "Hluhluwe Airport",
                            distance: "86.0km"
                        },
                    ]
                },
                {
                    name: "Rasturants and cafes",
                    features: [
                        {
                            id: 1,
                            item: "Café Schatzi Richards Bay",
                            distance: "3.8km"
                        },
                        {
                            id: 2,
                            item: "McDonald's",
                            distance: "6.0km"
                        },
                        {
                            id: 3,
                            item: "Wimpy",
                            distance: "0.9km"
                        },
                    ]
                },
            ]
        }
    },
    {
        id: 2,
        category: "Facilities/Amenities",

        details: {
            head: "Important property announcement ",
            description: "This property will not accommodate hen, stag or similar parties.",
            type: "tab",

            innerCategories: [
                {
                    name: "Highlights",
                    features: [
                        {
                            id: 1,
                            item: "Wi-Fi in all rooms",
                            distance: "~for free"
                        },
                        {
                            id: 2,
                            item: "Check-in/out [private]",
                            distance: "~safely"
                        },
                        {
                            id: 3,
                            item: "Airpot tranfer",
                            distance: "~"
                        },
                    ]
                },
                {
                    name: "Facilities",
                    features: [
                        {
                            id: 1,
                            item: "Free Parking",
                            distance: ""
                        },
                        {
                            id: 2,
                            item: "Swimming pool [outdoor]",
                            distance: ""
                        },
                        {
                            id: 3,
                            item: "Breakfast",
                            distance: ""
                        },
                    ]
                },

            ]
        }
    },
    {
        id: 2,
        category: "Overview",

        details: {
            head: "Quality Service ",
            description: "Regardless of time spent with us, you will always get:",
            type: "img",

            innerCategories: {
                src: "/images/service1.jpg",
                width: 289,
                height: 233.47,
                // height: 296,
            }
        }
    },
]

export default arounds;