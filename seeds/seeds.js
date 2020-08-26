
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: 1234567, make: "honda", model:"CRV", mileage: 120.99, transmission_type: "auto", title_status: "clean"},
        {VIN: 1234568, make: "ford", model:"F-150", mileage: 121000, transmission_type: "auto", title_status: "clean"},
        {VIN: 1234569, make: "chrystler", model:"sebring", mileage: 123000, transmission_type: "auto", title_status: "salvage"},
        {VIN: 1234570, make: "mercedes-benz", model:"C360", mileage: 124000, transmission_type: "manual", title_status: "salvage"}
      ]);
    });
};


// * columns: VIN, make, model, mileage, transmission type (man, auto), 
// * title (clean, salvage, other)