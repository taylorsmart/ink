const cloudinary = require('cloudinary');
const connect = require('./env/config.js');

const clQuery = {
  fetchImages: (callback) => {
    cloudinary.v2.search.expression('folder:dummyTattoo/*')
      .sort_by('public_id','desc').max_results(30).execute()
      .then((result)=>{
        console.log(result)
        callback(null, result)
      })
      .catch((error) => {
        console.log(error, null)
      })
    }
  }


module.exports = clQuery;

