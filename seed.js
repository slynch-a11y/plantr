const Sequelize = require('sequelize');
const db = require('./model')

db.sync({force: true})
  .then(() => {
    console.log('Database synced!')
    db.close();
  })
  .catch(err => {
    console.log('Disaster! Something went wrong! ')
    console.log(err)
    db.close();
  })

const gardener = db.define('gardener', {
    name: {
        type: Sequelize.STRING, allowNull: false
    }, 
    age: {
        type: Sequelize.INTEGER, allowNull: false
    }
});

const plot = db.define('plot', {
    size: {
        type: Sequelize.INTEGER, allowNull: false
    },
    shaded: {
        type: Sequelize.BOOLEAN, allowNull: false
    }
})

const vegetable = db.define('vegetable', {
    name: {
        type: Sequelize.STRING, allowNull: false
    }, 
    color: {
        type: Sequelize.STRING, allowNull: false
    }, 
    planted_on: {
        type: Sequelize.DATE, allowNull: false
    }
})