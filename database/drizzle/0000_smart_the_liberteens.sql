-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `prog_languages` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`name` text NOT NULL,
	`version` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `typescript_blocks` (
	`id` integer PRIMARY KEY AUTOINCREMENT,
	`prog_language_id` integer NOT NULL,
	`block_name` text NOT NULL,
	`block_content` text,
	FOREIGN KEY (`prog_language_id`) REFERENCES `prog_languages`(`id`) ON UPDATE cascade ON DELETE cascade
);

*/