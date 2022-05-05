const hotels = [
     {
        name: 'Lakewood',
        classification: 3,
        weekDaysFees: {
            regular: 110,
            rewards: 80,
        },
        weekendFees: {
            regular: 90,
            rewards: 80,
        }
    },
     {
        name: 'Bridgewood',
        classification: 4,
        weekDaysFees: {
            regular: 160,
            rewards: 110,
        },
        weekendFees: {
            regular: 60,
            rewards: 50,
        }
    },
     {
        name: 'Ridgewood',
        classification: 5,
        weekDaysFees: {
            regular: 220,
            rewards: 100,
        },
        weekendFees: {
            regular: 150,
            rewards: 40,
        }
    },
]

function getCheapestHotel (input) { //DO NOT change the function's name.
    const getClient = input.split(':')[0].toLowerCase();
    const getDates = input.split(',');

    // Get numbers of weekend days.
    const weekendDays = getDates.map((date) => {
        if (date.includes('sat') || date.includes('sun')) return true
        return false;
    }).filter((item) => item).length

    // Get numbers of week days.
    const weekDays = getDates.length - weekendDays

    // Get fees of each hotel.
    const fees = hotels.map((hotel) => {
        const getWeekDaysFees = hotel.weekDaysFees[getClient] * weekDays;
        const getWeekendDaysFees = hotel.weekendFees[getClient] * weekendDays
        const totalFees = getWeekDaysFees + getWeekendDaysFees
        return {name: hotel.name, totalFees, classification: hotel.classification}
    })

    // Get lower fee.
    const lowerValue = Math.min(...fees.map((item, index) => item.totalFees))
    const cheapestHotels = fees.filter((item) => item.totalFees === lowerValue)

    // Get the highest rating among hotels of the same value.
    const getHighestRanking = Math.max(...cheapestHotels.map((obj) => obj.classification))

    // Get name of  the best and cheapest hotel.
    const theBestAndCheapest = cheapestHotels.filter((hotel) => {
        if(hotel.classification === getHighestRanking) return hotel.name
    })[0].name

    return theBestAndCheapest
}

exports.getCheapestHotel = getCheapestHotel
