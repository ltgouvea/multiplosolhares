window.addEventListener("DOMContentLoaded", function() {    
  var form = document.getElementById("contact-form");
  var button = document.getElementById("contact-form-button");
  var status = document.getElementById("contact-form-status");

  function success() {
    form.reset();
    button.style = "display: none ";
    status.innerHTML = "Mensagem enviada com sucesso";
  }

  function error() {
    status.innerHTML = "Ops! Houve algo de errado";
  }

  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    var data = new FormData(form);
    

    try {
      let formData = {
        'name': data.get('first-name'),
        'email': data.get('email'),
        'message': data.get('about-project'),
      };

      window.open('mailto:projetomultiplosolhares@gmail.com?subject=Contato Via Website do Projeto&body='+formData.message);

      success();
    } catch (e) {
      console.log(e);
      error();
    }

  });
});
