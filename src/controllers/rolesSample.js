// const rolesSampleController = {
//     get: function(req, res){
//       res.send('GET request received for /sample');
//     }
//   };

const rolesSampleController = (req, res) => {
    return res.end("request received");
  };
  
  module.exports = { get: rolesSampleController ,};