var Aluno = app.models.Aluno;

exports.login = function (req, res) {

  // Verifies if action is to login,
  // or just return logged user
  var user = req.body.user;
  var pass = req.body.pass;

  // if(user && pass){
  //
  //   // Logout any user
  //
  //
  // }
  //
  if(!user || !pass){
    return res.status(400).send('You must provide [pass] and [user]');
  }

  res.send({
    username: user,
    nome: 'Matheus de Albuquerque',
  });

}

exports.logout = function (req, res) {



}
