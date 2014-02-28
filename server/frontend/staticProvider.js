
module.exports = {
  html: function(source, data){
    return function(req, res){
      res.render(source, data);
    }
  }
}
