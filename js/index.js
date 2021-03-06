$("document").ready(function(){
	//FADE IN DO BODY
	$("body").fadeIn();
	
	// INICIA OS EFEITOS DO WOW.JS
	new WOW().init();

	// MÁSCARA DO CAMPO TELEFONE
	$("input[type=tel][name=telefone]").mask("(00) 9 0000-0000");

	//SCRIPT PARA ENVIO DO EMAIL
	$('#enviarEmail').click(function() {
		//PEGA VALO DOS CAMPOS
		var nome = $("input[type=text][name=nome]").val();
		var telefone = $("input[type=tel][name=telefone]").val();
		var email = $("input[type=email][name=email]").val();
		var assunto = $("input[type=text][name=assunto]").val();
		var snackbarContainer = document.querySelector('#demo-toast-example');
		
		var dados = {nome: nome, telefone: telefone, email: email, assunto: assunto};

		//VERIFICA SE OS CAMPOS ESTÃO VAZIO, E SE ESTIVEREM MOSTRA MENSAGEM
		if(nome == "" || telefone == "" || email == "" || assunto == "")
		{
		    var data = {message: 'Há campos vazios'};
		    snackbarContainer.MaterialSnackbar.showSnackbar(data);
		}
		else
		{
		  //SE OS CAMPOS NÃO ESTIVEREM VAZIOS, MANDA UMA REQUISIÇÃO PRO PHP ENVIAR O EMAIL.
		  $.ajax({
		      url: "/email",
		      type: "POST",
		      data: dados,
		      dataType: "json",
		      success: function(data){
		        var data = {message: 'Mensagem enviada'};
		        snackbarContainer.MaterialSnackbar.showSnackbar(data);
		        $("input[type=text][name=nome]").val("");
		        $("input[type=text][name=telefone]").val("");
		        $("input[type=text][name=email]").val("");
		        $("input[type=text][name=assunto]").val("");
		      },
		      error: function(data){
		        var data = {message: 'Mensagem não enviada'};
		        snackbarContainer.MaterialSnackbar.showSnackbar(data);
		        $("input[type=text][name=nome]").val("");
		        $("input[type=text][name=telefone]").val("");
		        $("input[type=text][name=email]").val("");
		        $("input[type=text][name=assunto]").val("");
		      }
		  }); 
		}
	});
});
