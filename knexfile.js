module.exports = {
	client: "sqlite3", // specifying the DBMS
	useNullAsDefault: "true", // required flag to sqlite3 to use null
	connection: {
		filename: "./data/car-dealer.db3" // location of db file
	}
}