const Sequelize = require("sequelize");

const db = new Sequelize("postgres://localhost:5432/tripPlannerLive");

const Place = db.define('place',{
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    city: {
        type: Sequelize.STRING,
        allowNull: false
    },
    state: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    location: {
        type: Sequelize.ARRAY(Sequelize.FLOAT),
        allowNull: false

    }
})

const Hotel = db.define('hotel', {
    name: {
        type: Sequelize.STRING,
        allowNull: false        
    },
    num_stars: {
        type: Sequelize.FLOAT,
        validate: {
            min: 1,
            max: 5
        }
    },
    amenities: {
        type: Sequelize.STRING,
        allowNull: false 
    }
})

const Activity = db.define('activity', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age_range: {
        type: Sequelize.STRING,
        allowNull: false 
    }
})

const Restaurant = db.define('restaurant', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cuisine: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5
        }
    },
})

// belongsTo defines Foreign Key on calling Model
// hasOne defines Foreign key on target
Hotel.belongsTo(Place);
// Place.hasOne(Hotel);
Restaurant.belongsTo(Place);
// Place.hasOne(Restaurant);
Activity.belongsTo(Place);
// Place.hasOne(Activity);

module.exports = {
    db: db,
    Place: Place,
    Hotel: Hotel,
    Activity: Activity,
    Restaurant: Restaurant
}
