--DROP DATABASE IF EXISTS ink;
--CREATE DATABASE ink;

--Key datatables to start - tattoo_info, artist_meta

\c ink

DROP TABLE IF EXISTS artist_shop_ref CASCADE;
CREATE TABLE artist_shop_ref (
  id SERIAL NOT NULL,
  artist_id INTEGER,
  shop_id INTEGER,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS shop_meta CASCADE;
CREATE TABLE shop_meta (
  id SERIAL NOT NULL,
  name VARCHAR(256),
  address VARCHAR(256),
  rating INTEGER,
  artist_count INTEGER,
  artist_ref_id INTEGER,
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS tattoo_preferences CASCADE;
CREATE TABLE tattoo_preferences (
  id SERIAL NOT NULL,
  primary_color BYTEA,
  secondary_color BYTEA,
  tertiary_color BYTEA,
  line_style TEXT,
  line_thickness INTEGER,
  primary_location VARCHAR(256),
  secondary_location VARCHAR(256),
  tertiary_location VARCHAR(256),
  PRIMARY KEY (id)
);

DROP TABLE IF EXISTS user_meta CASCADE;
CREATE TABLE user_meta (
  id SERIAL NOT NULL  ,
  first_name TEXT,
  last_name TEXT,
  email VARCHAR(256),
  location VARCHAR(256),
  sign_up_date TEXT,
  user_tattoo_ref INTEGER,
  tattoo_preference_id INTEGER,
  PRIMARY KEY (id),
  FOREIGN KEY(tattoo_preference_id)
    REFERENCES tattoo_preferences(id)
);


DROP TABLE IF EXISTS artist_meta CASCADE;
CREATE TABLE artist_meta (
  id SERIAL NOT NULL,
  first_name TEXT,
  last_name TEXT,
  email VARCHAR(256),
  shop_ref_id INTEGER,
  quantity INTEGER,
  location VARCHAR(256),
  artist_portfolio_id INTEGER,
  PRIMARY KEY (id),
  FOREIGN KEY(shop_ref_id)
    REFERENCES artist_shop_ref(id)
);

DROP TABLE IF EXISTS tattoo_info CASCADE;
CREATE TABLE tattoo_info (
  id SERIAL NOT NULL ,
  name VARCHAR(256),
  url TEXT,
  story VARCHAR(1000),
  location VARCHAR(256),
  hours_to_ink INTEGER,
  price INTEGER,
  date TEXT,
  user_id INTEGER,
  artist_id INTEGER,
  shop_id INTEGER,
  tattoo_meta_id INTEGER,
  PRIMARY KEY (id),
  FOREIGN KEY(user_id)
    REFERENCES user_meta(id),
  FOREIGN KEY(artist_id)
    REFERENCES artist_meta(id),
  FOREIGN KEY(shop_id)
    REFERENCES shop_meta(id)
);

DROP TABLE IF EXISTS user_tattoo_ref CASCADE;
CREATE TABLE user_tattoo_ref (
  id SERIAL NOT NULL,
  user_id INTEGER,
  tattoo_id INTEGER,
  PRIMARY KEY (id),
  FOREIGN KEY(tattoo_id)
    REFERENCES tattoo_info(id),
  FOREIGN KEY(user_id)
    REFERENCES user_meta(id)
);

-- psq; -u super < schema.sql