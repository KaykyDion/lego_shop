$(document).ready(function() {
  $("#telephone").mask("(00) 00000-0000");
  $('form').validate({
    rules: {
      name: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telephone: {
        required: true,
      },
      message: {
        required: true,
      },
    },
    messages: {
      name: "Este campo é obrigatório!",
      email: "Este campo é obrigatório!",
      telephone: "Este campo é obrigatório!",
      message: "Este campo é obrigatório!"
    }
    
  })
})