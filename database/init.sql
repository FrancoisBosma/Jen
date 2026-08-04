CREATE TABLE IF NOT EXISTS prog_languages(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  version TEXT,
  UNIQUE(name, version)
);