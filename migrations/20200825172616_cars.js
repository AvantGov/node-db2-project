
exports.up = async function(knex) {
    await knex.schema.createTable("cars", (table) => {
        table.integer("VIN").notNull().unique().primary()
        table.text("make", 128).notNull()
        table.text("model", 128).notNull()
        table.text("transmission_type", 10).notNull()
        table.text("title_status", 10)
        table.float("mileage").notNull()
    })
};

// * columns: VIN, make, model, mileage, transmission type (man, auto), 
// * title (clean, salvage, other)

exports.down = function(knex) {
  
};
