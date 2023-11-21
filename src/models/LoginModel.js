const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: String
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  register() {
    this.valida();
  }

  valida() {
    this.cleanUp();
    // Validação
    // O e-mail precisa ser válido
    // A senha precisa ter entre 3 e 50 
  }

  cleanUp() {
    for(const key in this.body) {
      if(typeof this.body[key] !== 'string') {
        
      }
    }
  }
}

module.exports = Login;
