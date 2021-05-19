const Sequelize = require('sequelize');
const { STRING } = Sequelize.DataTypes;
const { INTEGER } = Sequelize.DataTypes;

const db = new Sequelize('postgres://localhost/picasso_db');

const data = [
    { id: 1, year: 1890, title: "The picador", caption: "A picador on a horse before an audience." },
    { id: 2, year: 1893, title: "House in the field", caption: "A narrow two-story building in a sparse landscape" },
    { id: 3, year: 1893, title: "Plaster male torso", caption: "Male monochrome classical torso" },
    { id: 4, year: 1895, title: "Academical study", caption: "Figure with staff in profile" },
    { id: 5, year: 1895, title: "Bust of young man", caption: "Young man in portrait" },
];

const Painting = db.define('painting', {
    id: { type: INTEGER,
        primaryKey: true 
    },
    year: INTEGER,
    title: STRING,
    caption: STRING
});

const syncAndSeed = async() => {
    await db.sync({ force: true });
    await Promise.all(
        data.map(Painting => Painting.create(painting))
        )
};

module.exports = { syncAndSeed,
    models: { Painting } 
};