const objectstocsv = require('objects-to-csv');
const fs = require('fs');
const faker = require('faker');
const { isCaseOrDefaultClause } = require('typescript');
const clDummyData = require('./database/cloudinary/dummyData.js')


//Set the rows to generate
const rows = 10;

//Generate random hex value
const genColor = () => {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  return randomColor
}

//Gather Photo URLs from Cloudery Dummydata (created to not abuse free fetching)
const resultArray = clDummyData.resources;

//Tranform Data
const arrayLength = resultArray.length;
let urlArray = []
for (let i = 0; i < arrayLength; i++) {
  urlArray.push(resultArray[i].url); //This is used later to define the url
}
console.log(urlArray)
/* Data Load
npm run create-db
npm run fake-data

psql
/c ink

\copy artist_shop_ref (id, artist_id, shop_id) FROM '/Users/taylorsmart/engineering/mvp/ink/dummyData/artist_shop_ref.csv' DELIMITER ',' CSV HEADER
\copy shop_meta (id, name, address, rating,artist_count, artist_ref_id) FROM '/Users/taylorsmart/engineering/mvp/ink/dummyData/shop_meta.csv' DELIMITER ',' CSV HEADER
\copy tattoo_preferences (id, primary_color, secondary_color, tertiary_color, line_style, line_thickness, primary_location, secondary_location, tertiary_location) FROM '/Users/taylorsmart/engineering/mvp/ink/dummyData/tattoo_preferences.csv' DELIMITER ',' CSV HEADER
\copy user_meta (id, first_name, last_name, email, location, sign_up_date, user_tattoo_ref,tattoo_preference_id) FROM '/Users/taylorsmart/engineering/mvp/ink/dummyData/user_meta.csv' DELIMITER ',' CSV HEADER
\copy artist_meta (id, first_name, last_name, email, shop_ref_id, quantity, location, artist_portfolio_id) FROM '/Users/taylorsmart/engineering/mvp/ink/dummyData/artist_meta.csv' DELIMITER ',' CSV HEADER
\copy tattoo_info (id, name, url, story, location, hours_to_ink, price, date, user_id, artist_id, shop_id, tattoo_meta_id) FROM '/Users/taylorsmart/engineering/mvp/ink/dummyData/tattoo_info.csv' DELIMITER ',' CSV HEADER
\copy user_tattoo_ref (id, user_id, tattoo_id) FROM '/Users/taylorsmart/engineering/mvp/ink/dummyData/user_tattoo_ref.csv' DELIMITER ',' CSV HEADER
*/

// **************************************************************
// DROP TABLE IF EXISTS artist_shop_ref CASCADE;
// CREATE TABLE artist_shop_ref (
//   id SERIAL NOT NULL,
//   artist_id INTEGER,
//   shop_id INTEGER,
//   PRIMARY KEY (id)
// );
// **************************************************************

var data = [];

for(var i=0;i<rows;i++){
    data.push(
        {
          id:i,
          artist_id:i,
          shop_id:i
        }
    )
}

// convert to csv file

var csv = new objectstocsv(data);

// Save to file:
csv.toDisk('./dummyData/artist_shop_ref.csv');

// \copy artist_shop_ref (id, artist_id, shop_id) FROM '/Users/taylorsmart/engineering/mvp/ink/dummyData/artist_shop_ref.csv' DELIMITER ',' CSV

// **************************************************************
// DROP TABLE IF EXISTS shop_meta CASCADE;
// CREATE TABLE shop_meta (
//   id SERIAL NOT NULL,
//   name VARCHAR(256),
//   address VARCHAR(256),
//   rating INTEGER,
//   artist_count INTEGER,
//   artist_ref_id INTEGER,
//   PRIMARY KEY (id)
// );
// **************************************************************

var data = [];

for(var i=0;i<rows;i++){
    data.push(
        {
          id:i,
          name:faker.company.companyName(),
          address:faker.address.city(),
          rating:faker.datatype.number(),
          artist_count:faker.datatype.number(),
          artist_ref_id:i
        }
    )
}

// convert to csv file

csv = new objectstocsv(data);

// Save to file:
csv.toDisk('./dummyData/shop_meta.csv');

// \copy shop_meta (id, name, address, rating,artist_count, artist_ref_id) FROM '/Users/taylorsmart/engineering/mvp/ink/dummyData/shop_meta.csv' DELIMITER ',' CSV



// **************************************************************
// DROP TABLE IF EXISTS tattoo_preferences CASCADE;
// CREATE TABLE tattoo_preferences (
//   id SERIAL NOT NULL,
//   primary_color BYTEA,
//   secondary_color BYTEA,
//   tertiary_color BYTEA,
//   line_style TEXT,
//   line_thickness INTEGER,
//   primary_location VARCHAR(256),
//   secondary_location VARCHAR(256),
//   tertiary_location VARCHAR(256),
//   PRIMARY KEY (id)
// );
// **************************************************************

var data = [];

for(var i=0;i<rows;i++){
    data.push(
        {
          id:i,
          primary_color:`#${genColor()}`,
          secondary_color:`#${genColor()}`,
          tertiary_color:`#${genColor()}`,
          line_style:'thin',
          line_thickness: faker.datatype.number(),
          primary_location: 'forearm',
          secondary_location: 'chest',
          tertiary_location: 'calf'
        }
    )
}

// convert to csv file

csv = new objectstocsv(data);

// Save to file:
csv.toDisk('./dummyData/tattoo_preferences.csv');


// \copy tattoo_preferences (id, primary_color, secondary_color, tertiary_color, line_style, line_thickness, primary_location, secondary_location, tertiary_location) FROM '/Users/taylorsmart/engineering/mvp/ink/dummyData/tattoo_preferences.csv' DELIMITER ',' CSV


// **************************************************************
// DROP TABLE IF EXISTS user_meta CASCADE;
// CREATE TABLE user_meta (
//   id SERIAL NOT NULL  ,
//   first_name TEXT,
//   last_name TEXT,
//   email VARCHAR(256),
//   location VARCHAR(256),
//   sign_up_date TEXT,
//   user_tattoo_ref INTEGER,
//   tattoo_preference_id INTEGER,
//   PRIMARY KEY (id),
//   FOREIGN KEY(tattoo_preference_id)
//     REFERENCES tattoo_preferences(id)
// );
// **************************************************************

var data = [];

for(var i=0;i<rows;i++){
    data.push(
        {
          id:i,
          first_name:faker.name.findName(),
          last_name:faker.name.findName(),
          email:faker.internet.email(),
          location:faker.address.city(),
          sign_up_date:faker.date.recent(),
          user_tattoo_ref:i,
          tattoo_preference_id:i
        }
    )
}

// convert to csv file

csv = new objectstocsv(data);

// Save to file:
csv.toDisk('./dummyData/user_meta.csv');


// \copy user_meta (id, first_name, last_name, email, location, sign_up_date, user_tattoo_ref,tattoo_preference_id) FROM '/Users/taylorsmart/engineering/mvp/ink/dummyData/user_meta.csv' DELIMITER ',' CSV


// **************************************************************

// DROP TABLE IF EXISTS artist_meta CASCADE;
// CREATE TABLE artist_meta (
//   id SERIAL NOT NULL,
//   first_name TEXT,
//   last_name TEXT,
//   email VARCHAR(256),
//   shop_ref_id INTEGER,
//   quantity INTEGER,
  // location VARCHAR(256),
//   artist_portfolio_id INTEGER,
//   PRIMARY KEY (id),
//   FOREIGN KEY(shop_ref_id)
//     REFERENCES artist_shop_ref(id)
// );

// **************************************************************

var data = [];

for(var i=0;i<rows;i++){
    data.push(
        {
          id:i,
          first_name:faker.name.findName(),
          last_name:faker.name.findName(),
          email:faker.internet.email(),
          shop_ref_id:i,
          quantity:faker.datatype.number(),
          location:faker.address.city(),
          artist_portfolio_id: i,
        }
    )
}

// convert to csv file

csv = new objectstocsv(data);

// Save to file:
csv.toDisk('./dummyData/artist_meta.csv');

// \copy artist_meta (id, first_name, last_name, email, shop_ref_id, quantity, location, artist_portfolio_id) FROM '/Users/taylorsmart/engineering/mvp/ink/dummyData/artist_meta.csv' DELIMITER ',' CSV



// **************************************************************
// DROP TABLE IF EXISTS tattoo_info CASCADE;
// CREATE TABLE tattoo_info (
//   id SERIAL NOT NULL ,
//   name VARCHAR(256),
//   url TEXT,
//   story VARCHAR(1000),
//   location VARCHAR(256),
//   hours_to_ink INTEGER,
//   price INTEGER,
//   date TEXT,
//   user_id INTEGER,
//   artist_id INTEGER,
//   shop_id INTEGER,
//   tattoo_meta_id INTEGER,
//   PRIMARY KEY (id),
//   FOREIGN KEY(user_id)
//     REFERENCES user_meta(id),
//   FOREIGN KEY(artist_id)
//     REFERENCES artist_meta(id),
//   FOREIGN KEY(shop_id)
//     REFERENCES shop_meta(id)
// );
// **************************************************************

var data = [];
let j = 0;
for(var i=0;i<rows;i++){ //allows for generating photos greater than the number of photos in dummy data
  if(j < 12) {
    j++ 
  } else {
    j = 0
  } 
    data.push(
        {
          id:i,
          name:faker.lorem.words(),
          url: urlArray[j],
          story:faker.lorem.paragraph(),
          location:faker.address.city(),
          hours_to_ink:faker.datatype.number(),
          price:faker.datatype.number(),
          date:faker.date.past(),
          user_id:i,
          artist_id:i,
          shop_id:i,
          tattoo_meta_id:i
        }
    )
}

// convert to csv file

csv = new objectstocsv(data);

// Save to file:
csv.toDisk('./dummyData/tattoo_info.csv');

// \copy tattoo_info (id, name, story, location, hours_to_ink, price, date, user_id, artist_id, shop_id, tattoo_meta_id) FROM '/Users/taylorsmart/engineering/mvp/ink/dummyData/tattoo_info.csv' DELIMITER ',' CSV


// **************************************************************
// DROP TABLE IF EXISTS user_tattoo_ref CASCADE;
// CREATE TABLE user_tattoo_ref (
//   id SERIAL NOT NULL,
//   user_id INTEGER,
//   tattoo_id INTEGER,
//   PRIMARY KEY (id),
//   FOREIGN KEY(tattoo_id)
//     REFERENCES tattoo_info(id),
//   FOREIGN KEY(user_id)
//     REFERENCES user_meta(id)
// );
// **************************************************************

var data = [];

for(var i=0;i<rows;i++){
    data.push(
        {
          id:i,
          user_id:i,
          tattoo_id:i
        }
    )
}

// convert to csv file

csv = new objectstocsv(data);

// Save to file:
csv.toDisk('./dummyData/user_tattoo_ref.csv');

// \copy user_tattoo_ref (id, user_id, tattoo_id) FROM '/Users/taylorsmart/engineering/mvp/ink/dummyData/user_tattoo_ref.csv' DELIMITER ',' CSV
