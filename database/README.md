# Cheatsheet

- create db

```zsh
$ sqlite3 db-name.db
```

- run script

```zsh
$ sqlite3 db-name.db ".read some-script.sql"
```

Or

```zsh
$ sqlite3 db-name.db
sqlite> .read some-script.sql
```

- access db manually

In my case:

```zsh
$ sqlite3 ./database/userdata.db
```
