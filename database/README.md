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

```zsh
$ sqlite3 /home/moxa/.config/com.moxa.jen/userdata.db
```
