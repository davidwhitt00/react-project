const Sequelize = require('sequelize');

const sequelize = new Sequelize('badCompany', 'postgres', 'NewJobIN04!', {
    host: 'localhost',
    dialect: 'postgres'
});

sequelize.authenticate().then(
    function() {
        console.log('Connected to Badcompany postgres database')
    },
    function(err){
        console.log(err);
    }
);

module.exports = sequelize;