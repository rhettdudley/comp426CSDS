// were going to make these into bars. They're currently the SweetGreen stores in DC

const stores = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
            -79.059055,
            35.913171
        ]
      },
      "properties": {
        "name" : "Pantana Bobs",
        "phoneFormatted": "(919) 942-7575",
        "phone": "9199427575",
        "address": "305 W Rosemary St",
        "city": "Chapel Hill",
        "country": "United States",
        "crossStreet": "at Church Street",
        "postalCode": "27516",
        "state": "NC"
      },
      "specials": {
        "monday": "",
        "tuesday": "$2 Budlights/Budweisers, $4 Doubles ",
        "wednesday": "",
        "thursday": "",
        "friday": "",
        "saturday": "",
        "sunday": "",
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
            -79.057902,
            35.913697
        ]
      },
      "properties": {
        "name": "La Residencia",
        "phoneFormatted": "(919) 967-2506",
        "phone": "9199672506",
        "address": "202 W Rosemary",
        "city": "Chapel Hill",
        "country": "United States",
        "crossStreet": "at Pritchard AVE",
        "postalCode": "27516",
        "state": "NC"
      },
      "specials": {
        "monday": "",
        "tuesday": "",
        "wednesday": "",
        "thursday": "",
        "friday": "",
        "saturday": "",
        "sunday": "",
      }
    },
    {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
              -79.060216,
              35.911232
          ]
        },
        "properties": {
          "name": "The Franklin",
          "phoneFormatted": "(919) 442-9000",
          "phone": "9194429000",
          "address": "311 W Franklin St",
          "city": "Chapel Hill",
          "country": "United States",
          "crossStreet": "at Kenan St",
          "postalCode": "27516",
          "state": "NC"
        },
        "specials": {
          "monday": "",
          "tuesday": "",
          "wednesday": "",
          "thursday": "$10 Extra Credit Cocktails during Happy Hour 5-7pm",
          "friday": "",
          "saturday": "",
          "sunday": "",
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -79.055455,
            35.913053
          ]
        },
        "properties": {
          "name": "Top of the Hill",
          "phoneFormatted": "(919) 929-8676",
          "phone": "9199298676",
          "address": "100 E Franklin St",
          "city": "Chapel Hill",
          "country": "United States",
          "crossStreet": "at N Columbia St",
          "postalCode": "27514",
          "state": "NC"
        },
        "specials": {
          "monday": "Half Off Wine Bottles",
          "tuesday": "$3 Shooters",
          "wednesday": "$5 Mules",
          "thursday": "$3 Wheat Beers & $5 Kansas City Ice Waters",
          "friday": "$4.50 Season Ales",
          "saturday": "",
          "sunday": "$3 Pints, $4 Mimosas, $5 Kansas City Ice Waters",
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -79.056808,
            35.913278
          ]
        },
        "properties": {
          "name": "Hes Not Here",
          "phoneFormatted": "(919) 942-7939",
          "phone": "9199427939",
          "address": "112 1/2 W Franklin St,",
          "city": "Chapel Hill",
          "country": "United States",
          "crossStreet": "at Rosemary St",
          "postalCode": "27516",
          "state": "NC"
        },
        "specials": {
          "monday": "",
          "tuesday": "$5 Blue Cups",
          "wednesday": "Pint Night!",
          "thursday": "",
          "friday": "",
          "saturday": "",
          "sunday": "",
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -79.058766,
            35.912178
          ]
        },
        "properties": {
          "name": "Might As Well Bar & Grill",
          "phoneFormatted": "(984) 234-3333",
          "phone": "9842343333",
          "address": "206 W Franklin St",
          "city": "Chapel Hill",
          "country": "United States",
          "crossStreet": "N/A",
          "postalCode": "27516",
          "state": "NC"
        },
        "specials": {
          "monday": "$2.50 Margaritas, $2.25 Bud Draft, $5 Baby Guinness",
          "tuesday": "$1 Vodka, Rum. $3 Kamakazi. $4 Malibu Rum and Bacardi College Night",
          "wednesday": "$5 off bottles of wine",
          "thursday": "$4 Fireball Shots. STEAK NIGHT $9.99 New York Strips ",
          "friday": "$4 Cinnamon Toast Crunch Shots",
          "saturday": "",
          "sunday": "1/2 price bottles of wine",
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -79.059689,
            35.911220
          ]
        },
        "properties": {
          "name": "Dead Mule Club",
          "phoneFormatted": "(919) 969-7659",
          "phone": "9199697659",
          "address": "303 W Franklin St",
          "city": "Chapel Hill",
          "country": "United States",
          "crossStreet": "at Mallette St",
          "postalCode": "27516",
          "state": "NC"
        },
        "specials": {
          "monday": "",
          "tuesday": "",
          "wednesday": "",
          "thursday": "",
          "friday": "",
          "saturday": "",
          "sunday": "",
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -79.062723,
            35.910623
          ]
        },
        "properties": {
          "name": "Carolina Brewery",
          "phoneFormatted": "(919) 942-1800",
          "phone": "9199421800",
          "address": "460 W Franklin St,",
          "city": "Chapel Hill",
          "country": "United States",
          "crossStreet": "N/A",
          "postalCode": "27516",
          "state": "NC"
        },
        "specials": {
          "monday": "",
          "tuesday": "$3 Pints",
          "wednesday": "",
          "thursday": "$3 Wine, $5 Speciality Cocktails",
          "friday": "",
          "saturday": "$1 Mimosas, $3 Bloody Mary",
          "sunday": "$1 Mimosas",
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -79.052720,
            35.914479
          ]
        },
        "properties": {
          "name": "Lindas Bar & Grill",
          "phoneFormatted": "(919) 933-6663",
          "phone": "9199336663",
          "address": "203 E Franklin St",
          "city": "Chapel Hill",
          "country": "United States",
          "crossStreet": "at Henderson St",
          "postalCode": "27514",
          "state": "NC"
        },
        "specials": {
          "monday": "$3 Well Drinks ",
          "tuesday": "",
          "wednesday": "$3.50 Well Drinks",
          "thursday": "1/2 Off Wine Bottles",
          "friday": "",
          "saturday": "$4 Mystic, Pickleback or Fireball Shots",
          "sunday": "$1 Off Cocktails",
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -79.054175,
            35.913937
          ]
        },
        "properties": {
          "name": "Goodfellows",
          "phoneFormatted": "(919) 960-8685",
          "phone": "9199608685",
          "address": "149 E Franklin St",
          "city": "Chapel Hill",
          "country": "United States",
          "crossStreet": "N/A",
          "postalCode": "27514",
          "state": "NC"
        },
        "specials": {
          "monday": "",
          "tuesday": "$3.50 Long Island Iced Teas & $2.50 Shooters",
          "wednesday": "",
          "thursday": "$2 Ball Shooters, $3 Well Drinks",
          "friday": "",
          "saturday": "",
          "sunday": "Half off drinks",
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -79.055470,
            35.91026
          ]
        },
        "properties": {
          "name": "Tru Deli",
          "phoneFormatted": "(919) 240-7755",
          "phone": "9192407755",
          "address": "114 Henderson Street",
          "city": "Chapel Hill",
          "country": "United States",
          "crossStreet": "N/A",
          "postalCode": "27514",
          "state": "NC"
        },
        "specials": {
          "monday": "$4 pints",
          "tuesday": "$3 wells",
          "wednesday": "$4 margaritas",
          "thursday": "$5 house cocktails",
          "friday": "$4 off bottles of wine",
          "saturday": "$2 off pints",
          "sunday": "$2 off glasses of wine",
        }
      },
  ]
};


