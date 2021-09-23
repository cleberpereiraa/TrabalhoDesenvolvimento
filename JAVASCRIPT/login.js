function clicouPF(){

    var email = document.getElementById("emailP");
    var senha = document.getElementById("senhaP");

    var logins = [{email1:"aluno@teste.com",
                email2:"pais@teste.com"
                },
                {senha1: "123456"}];

    if(email.value == logins[0].email1 && senha.value == logins[1].senha1 ){
      alert("login efetuado com sucesso!")
      window.location.href = "file:///C:/Users/CLEBER/Desktop/cleber/unifacs/3%20semenstre/Desenvolvimento%20de%20software%20web/trabalho2/filhos.html";
    }else if(email.value == logins[0].email2 && senha.value == logins[1].senha1){
      alert("login efetuado com sucesso!")
      window.location.href = "file:///C:/Users/CLEBER/Desktop/cleber/unifacs/3%20semenstre/Desenvolvimento%20de%20software%20web/trabalho2/pais.html";
    }else{
      alert("Erro 'Login incorreto ou Senha incorreta'.")
    }
}

 function clicouADM(){
 
  var email = document.getElementById("email");
  var senha = document.getElementById("senha");

  var logins = {
  email3:"adm@teste.com",
  senha1: "123456"
  }
  

    if(email.value == logins.email3 && senha.value == logins.senha1){
      alert("login efetuado com sucesso!")
      window.location.href = "file:///C:/Users/CLEBER/Desktop/cleber/unifacs/3%20semenstre/Desenvolvimento%20de%20software%20web/trabalho2/adm.html";
    }else{
    alert("Erro 'Login incorreto ou Senha incorreta'.")
  }

} 