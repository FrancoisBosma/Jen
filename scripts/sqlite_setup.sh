sudo apt install sqlite3
sqlite3 database/userdata.db ".read database/1.init.sql"
sqlite3 database/userdata.db ".read database/2.custom_data.sql"