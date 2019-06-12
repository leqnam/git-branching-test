--
-- File generated with SQLiteStudio v3.1.1 on Wed May 29 15:39:01 2019
--
-- Text encoding used: UTF-8
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: class
DROP TABLE IF EXISTS class;

CREATE TABLE class (
    id          INTEGER  PRIMARY KEY AUTOINCREMENT,
    duration    VARCHAR,
    description TEXT,
    amount      INTEGER,
    date        DATETIME,
    status      INTEGER,
    training_id INTEGER,
    trainer_id  INTEGER
);

INSERT INTO class (id, duration, description, amount, date, status, training_id, trainer_id) VALUES (1, '8', 'Sencha Overview', 3, NULL, 0, 1, 3);
INSERT INTO class (id, duration, description, amount, date, status, training_id, trainer_id) VALUES (2, '4', 'GVI Core  Testing', 2, NULL, 0, 2, 2);

-- Table: department
DROP TABLE IF EXISTS department;

CREATE TABLE department (
    name       VARCHAR,
    manager_id VARCHAR,
    isActivate INTEGER,
    id         INTEGER PRIMARY KEY AUTOINCREMENT
);

INSERT INTO department (name, manager_id, isActivate, id) VALUES ('GVI Developers', '1', 1, 1);
INSERT INTO department (name, manager_id, isActivate, id) VALUES ('QC', '1', 1, 2);
INSERT INTO department (name, manager_id, isActivate, id) VALUES ('Admin', '1', 1, 3);

-- Table: people
DROP TABLE IF EXISTS people;

CREATE TABLE people (
    id        INTEGER  PRIMARY KEY AUTOINCREMENT,
    isActive  INTEGER,
    useremail VARCHAR,
    username  VARCHAR,
    userpwd   VARCHAR,
    firstname VARCHAR,
    midname   VARCHAR,
    givenname VARCHAR,
    birthday  DATETIME,
    gender    INTEGER,
    avatar    VARCHAR,
    phone     VARCHAR,
    address   VARCHAR,
    gps       VARCHAR,
    created   DATETIME,
    updated   DATETIME,
    started   DATETIME,
    ended     DATETIME,
    dept_id   INTEGER,
    metadata  TEXT
);

INSERT INTO people (id, isActive, useremail, username, userpwd, firstname, midname, givenname, birthday, gender, avatar, phone, address, gps, created, updated, started, ended, dept_id, metadata) VALUES (1, 1, 'nle@gvi.global', 'nle', '1234', 'Le', 'Quoc', 'Nam', NULL, NULL, NULL, '1080', 'Nha ko so - Pho ko ten', NULL, NULL, NULL, NULL, NULL, 1, NULL);
INSERT INTO people (id, isActive, useremail, username, userpwd, firstname, midname, givenname, birthday, gender, avatar, phone, address, gps, created, updated, started, ended, dept_id, metadata) VALUES (2, 1, 'htran@gvi.global', 'htran', '1234', 'Tran', NULL, 'Huy', NULL, NULL, NULL, '1100', 'Green Hill Building', NULL, NULL, NULL, NULL, NULL, 1, NULL);
INSERT INTO people (id, isActive, useremail, username, userpwd, firstname, midname, givenname, birthday, gender, avatar, phone, address, gps, created, updated, started, ended, dept_id, metadata) VALUES (3, 1, 'thien@gvi.global', 'thien', '1234', 'Tran', NULL, 'Hien', NULL, NULL, NULL, '2200', 'Tien Giang', NULL, NULL, NULL, NULL, NULL, 1, NULL);
INSERT INTO people (id, isActive, useremail, username, userpwd, firstname, midname, givenname, birthday, gender, avatar, phone, address, gps, created, updated, started, ended, dept_id, metadata) VALUES (4, 1, 'tle@gvi.global', 'tle', '1234', 'Le', 'Van', 'Thu', NULL, NULL, NULL, '3000', 'HCMc', NULL, NULL, NULL, NULL, NULL, 2, NULL);
INSERT INTO people (id, isActive, useremail, username, userpwd, firstname, midname, givenname, birthday, gender, avatar, phone, address, gps, created, updated, started, ended, dept_id, metadata) VALUES (5, 1, 'qtran@gvi.global', 'qtran', '1234', 'Tran', '', 'Quyen', NULL, NULL, NULL, '1080', 'Nha ko so - Pho ko ten', NULL, NULL, NULL, NULL, NULL, 2, NULL);
INSERT INTO people (id, isActive, useremail, username, userpwd, firstname, midname, givenname, birthday, gender, avatar, phone, address, gps, created, updated, started, ended, dept_id, metadata) VALUES (6, 1, 'hho@gvi.global', 'hho', '1234', 'Ho', '', 'Hoa', NULL, NULL, NULL, '1080', 'Nha ko so - Pho ko ten', NULL, NULL, NULL, NULL, NULL, 1, NULL);
INSERT INTO people (id, isActive, useremail, username, userpwd, firstname, midname, givenname, birthday, gender, avatar, phone, address, gps, created, updated, started, ended, dept_id, metadata) VALUES (7, 1, 'khoi.dang@gvi.global', 'khoi.dang', '1234', 'Dang', '', 'Khoi', NULL, NULL, NULL, '1080', 'Nha ko so - Pho ko ten', NULL, NULL, NULL, NULL, NULL, 1, NULL);
INSERT INTO people (id, isActive, useremail, username, userpwd, firstname, midname, givenname, birthday, gender, avatar, phone, address, gps, created, updated, started, ended, dept_id, metadata) VALUES (8, 1, 'lle@gvi.global', 'lle', '1234', 'Le', '', 'Linh', NULL, NULL, NULL, '1080', 'Nha ko so - Pho ko ten', NULL, NULL, NULL, NULL, NULL, 1, NULL);
INSERT INTO people (id, isActive, useremail, username, userpwd, firstname, midname, givenname, birthday, gender, avatar, phone, address, gps, created, updated, started, ended, dept_id, metadata) VALUES (9, 1, 'phong.tran@gvi.global', 'phong.tran', '1234', 'Tran', '', 'Phong', NULL, NULL, NULL, '1080', 'Nha ko so - Pho ko ten', NULL, NULL, NULL, NULL, NULL, 1, NULL);
INSERT INTO people (id, isActive, useremail, username, userpwd, firstname, midname, givenname, birthday, gender, avatar, phone, address, gps, created, updated, started, ended, dept_id, metadata) VALUES (10, 1, 'qminh@gvi.global', 'qminh', '1234', 'Minh', '', 'Quan', NULL, NULL, NULL, '1080', 'Nha ko so - Pho ko ten', NULL, NULL, NULL, NULL, NULL, 1, NULL);
INSERT INTO people (id, isActive, useremail, username, userpwd, firstname, midname, givenname, birthday, gender, avatar, phone, address, gps, created, updated, started, ended, dept_id, metadata) VALUES (11, 1, 'snguyen@gvi.global', 'snguyen', '1234', 'Nguyen', '', 'Sang', NULL, NULL, NULL, '1080', 'Nha ko so - Pho ko ten', NULL, NULL, NULL, NULL, NULL, 1, NULL);
INSERT INTO people (id, isActive, useremail, username, userpwd, firstname, midname, givenname, birthday, gender, avatar, phone, address, gps, created, updated, started, ended, dept_id, metadata) VALUES (12, 1, 'tly@gvi.global', 'tly', '1234', 'Ly', '', 'Thanh', NULL, NULL, NULL, '1080', 'Nha ko so - Pho ko ten', NULL, NULL, NULL, NULL, NULL, 1, NULL);
INSERT INTO people (id, isActive, useremail, username, userpwd, firstname, midname, givenname, birthday, gender, avatar, phone, address, gps, created, updated, started, ended, dept_id, metadata) VALUES (13, 1, 'hnguyen@gvi.global', 'hnguyen', '1234', 'Nguyen', '', 'Hong', NULL, NULL, NULL, '1080', 'Nha ko so - Pho ko ten', NULL, NULL, NULL, NULL, NULL, 3, NULL);
INSERT INTO people (id, isActive, useremail, username, userpwd, firstname, midname, givenname, birthday, gender, avatar, phone, address, gps, created, updated, started, ended, dept_id, metadata) VALUES (14, 1, 'cassie@gvi.global', 'cassie', '1234', 'Ho', 'Cam', 'Nhung', NULL, NULL, NULL, '1080', 'Nha ko so - Pho ko ten', NULL, NULL, NULL, NULL, NULL, 2, NULL);
INSERT INTO people (id, isActive, useremail, username, userpwd, firstname, midname, givenname, birthday, gender, avatar, phone, address, gps, created, updated, started, ended, dept_id, metadata) VALUES (15, 1, 'ppham@gvi.global', 'ppham', '1234', 'Pham', '', 'Kieu', NULL, NULL, NULL, '1080', 'Nha ko so - Pho ko ten', NULL, NULL, NULL, NULL, NULL, 2, NULL);
INSERT INTO people (id, isActive, useremail, username, userpwd, firstname, midname, givenname, birthday, gender, avatar, phone, address, gps, created, updated, started, ended, dept_id, metadata) VALUES (16, 1, 'nnguyen@gvi.global', 'nnguyen', '1234', 'Nguyen', '', 'Nguyet', NULL, NULL, NULL, '1080', 'Nha ko so - Pho ko ten', NULL, NULL, NULL, NULL, NULL, 2, NULL);
INSERT INTO people (id, isActive, useremail, username, userpwd, firstname, midname, givenname, birthday, gender, avatar, phone, address, gps, created, updated, started, ended, dept_id, metadata) VALUES (17, 1, 'qtran@gvi.global', 'qtran', '1234', 'Tran', '', 'Quyen', NULL, NULL, NULL, '1080', 'Nha ko so - Pho ko ten', NULL, NULL, NULL, NULL, NULL, 2, NULL);

-- Table: trainee
DROP TABLE IF EXISTS trainee;

CREATE TABLE trainee (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    trainee_id INTEGER,
    class_id   INTEGER,
    grade      VARCHAR,
    comment    VARCHAR,
    result     INTEGER
);

INSERT INTO trainee (id, trainee_id, class_id, grade, comment, result) VALUES (1, 1, 1, '1', 'Good', 'PASSED');
INSERT INTO trainee (id, trainee_id, class_id, grade, comment, result) VALUES (2, 2, 1, '1', 'Good', 'PASSED');
INSERT INTO trainee (id, trainee_id, class_id, grade, comment, result) VALUES (3, 4, 2, '1', 'Well', 'PASSED');

-- Table: training
DROP TABLE IF EXISTS training;

CREATE TABLE training (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    name        VARCHAR,
    description VARCHAR,
    required    VARCHAR
);

INSERT INTO training (id, name, description, required) VALUES (1, 'Sencha', 'Sencha Extjs Front-end', 'HTML, Javascript, CSS, MVVM, MVC');
INSERT INTO training (id, name, description, required) VALUES (2, 'GVI Core Framework', 'GVI Core Framework with MVC4', 'Visual Studio, GVI Core');
INSERT INTO training (id, name, description, required) VALUES (3, 'Git Basic', 'Git Introduction and Working in Basic', 'N/A');
INSERT INTO training (id, name, description, required) VALUES (4, 'Git Advanced', 'Git in Advanced', 'N/A');

COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
