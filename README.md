# The Tattory #

## Overview ##
This is a web based application which enables individuals to upload and share the images of their tattoos along with (if they choose) the story behind the tattoos.

### Summary ###
This application capitalizes on two key desires shared by most tattoo enthusiasts.  First, the ability to view and appreciate beautiful tattoos.  Second, the ability to share and display their own artwork.  

### Problem ###
Existing applications where tattoos are shared do not sufficiently address the desires of tattoo enthusiasts. The MVP of this application is condensed to mimic the functionality sharing and displaying functionality of for common platforms, but the underlying architecture will enable integration of tattoo artist booking and portfolio displays.  

### Solution ###
The Tattory solves this problem by showcasing tattoos in an easily digestible manner for the user.  Allowing users to not only share their own stories, but also show appreciation for others stories with ease. 

#### Start up ####
- Building a the database with fake data
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

- Starting the server
npm run start

- Starting the client
npm run react-dev