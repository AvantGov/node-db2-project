module.exports = {
	client: "sqlite3", // specifying the DBMS
	useNullAsDefault: "true", // required flag to sqlite3 to use null
	connection: {
		filename: "[location of database file]" // location of db file
	}
}