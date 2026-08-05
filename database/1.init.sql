PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS prog_languages(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  version TEXT NOT NULL,
  UNIQUE(name, version)
);

CREATE TABLE IF NOT EXISTS typescript_blocks(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  prog_language_id INTEGER NOT NULL REFERENCES prog_languages(id) ON UPDATE CASCADE ON DELETE CASCADE,
  block_name TEXT NOT NULL,
  block_content TEXT,
  UNIQUE(block_name, prog_language_id)
);