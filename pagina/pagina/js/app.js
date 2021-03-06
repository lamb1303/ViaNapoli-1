// obtener datos para ingresar un nuevo usuario en la DB
$("#agregarUser" ).submit(function( event ) {
		var parametros = $(this).serialize();
			 $.ajax({
					type: "POST",
					url: "aUs.php",
					data: parametros,
					 beforeSend: function(objeto){
						$("#regUser").html("Mensaje: Cargando...");
					  },
					success: function(datos){
					$("#regUser").html(datos);
					//load(1);
				  }
			});
		  event.preventDefault();
		});
		
		// obtencion de un número de trabajador especifico para su eliminacion
		//usado en todos los datadelete de la pagina, es necesario que todos tengan
		//data-id y no data-nombre por ejemplo
		$('#dataDelete').on('show.bs.modal', function (event) {
		  var button = $(event.relatedTarget) // Botón que activó el modal
		  var id = button.data('id') // Extraer la información de atributos de datos
		  var modal = $(this)
		  modal.find('#id').val(id)
		})

		// eliminacion de un usuario especifico
		$( "#dUser" ).submit(function( event ) {
		var parametros = $(this).serialize();
			 $.ajax({
					type: "POST",
					url: "dUs.php",
					data: parametros,
					 beforeSend: function(objeto){
						$("#revis").html("Mensaje: Cargando...");
					  },
					success: function(datos){
					$("#revis").html(datos);
					
					$('#dataDelete').modal('dismiss');
					//load(1);
				  }
			});
		  event.preventDefault();
		});

    	// modificar modal de usuarios para ingresar datos especificos
		$('#upduser').on('show.bs.modal', function (event) {
		  var button = $(event.relatedTarget) // Botón que activó el modal
		  var idtrabajador = button.data('id') // Extraer la información de atributos de datos
		  var nombre = button.data('nombre') // Extraer la información de atributos de datos
		  var paterno = button.data('paterno') // Extraer la información de atributos de datos
		  var materno = button.data('materno') // Extraer la información de atributos de datos
		  var cargo=button.data('cargo')
		  var contras=button.data('contras')

		  var modal = $(this)
		  modal.find('.modal-title').text('Modificar usuario: '+idtrabajador)
		  modal.find('.modal-body #idTrabajador').val(idtrabajador)
		  modal.find('.modal-body #nombre').val(nombre)
		  modal.find('.modal-body #paterno').val(paterno)
		  modal.find('.modal-body #materno').val(materno)
		  modal.find('.modal-body #cargo').val(cargo)
		  modal.find('.modal-body #contrasenia').val(contras)
		  //$('.alert').hide();//Oculto alert
		})

		// modificar registro en la DB del modal de usuarios
		$("#formupdUser" ).submit(function( event ) {
		var parametros = $(this).serialize();
			 $.ajax({
					type: "POST",
					url: "updUs.php",
					data: parametros,
					 beforeSend: function(objeto){
						$("#revisD").html("Mensaje: Cargando...");
					  },
					success: function(datos){
					$("#revisD").html(datos);
					
					//load(1);
				  }
			});
		  event.preventDefault();
		});

//Preparar campo padre para agregar un nuevo folder
$('#agregarfolder').on('show.bs.modal', function (event) {
		  var button = $(event.relatedTarget) // Botón que activó el modal
		  var padre = button.data('padre') // Extraer la información de atributos de datos
		  var modal = $(this)
		  modal.find('#padre').val(padre)
		})
// obtener datos para ingresar un nuevo folder en la DB
$("#agregarFolder" ).submit(function( event ) {
		var parametros = $(this).serialize();
			 $.ajax({
					type: "POST",
					url: "aFo.php",
					data: parametros,
					 beforeSend: function(objeto){
						$("#regUser").html("Mensaje: Cargando...");
					  },
					success: function(datos){
					$("#regUser").html(datos);
					//load(1);
				  }
			});
		  event.preventDefault();
		});

//Preparar campo padre para eliminar un folder especifico
$('#dfolder').on('show.bs.modal', function (event) {
		  var button = $(event.relatedTarget) // Botón que activó el modal
		  var id = button.data('id') // Extraer la información de atributos de datos
		  var button2 = $(event.relatedTarget) // Botón que activó el modal
		  var padre = button2.data('padre') // Extraer la información de atributos de datos
		  
		  var modal = $(this)
		  modal.find('#id').val(id)
		  modal.find('#padre').val(padre)
		})
// eliminacion de un folder especifico
		$( "#dFolder" ).submit(function( event ) {
		var parametros = $(this).serialize();
			 $.ajax({
					type: "POST",
					url: "dFo.php",
					data: parametros,
					 beforeSend: function(objeto){
						$("#revis").html("Mensaje: Cargando...");
					  },
					success: function(datos){
					$("#revis").html(datos);
					
					$('#dataDelete').modal('dismiss');
					//load(1);
				  }
			});
		  event.preventDefault();
		});

//Preparar campo padre para agregar un nuevo folder
$('#agregarfile').on('show.bs.modal', function (event) {
		  var button = $(event.relatedTarget) // Botón que activó el modal
		  var padre = button.data('padre') // Extraer la información de atributos de datos
		  var modal = $(this)
		  modal.find('#padre').val(padre)
		})
// obtener datos para ingresar un nuevo folder en la DB
$("#agregarFile" ).submit(function( event ) {
		var formData = new FormData($(this)[0]);
			 $.ajax({
					type: "POST",
					url: "aFi.php",
					data: formData,
					 beforeSend: function(objeto){
						$("#reg").html("Mensaje: Cargando...");
					  },
					success: function(datos){
					$("#reg").html(datos);
					//load(1);
				  },
				    cache: false,
                contentType: false,
                processData: false
			});
		  event.preventDefault();
		});

$('#dataFile').on('show.bs.modal', function (event) {
		  var button = $(event.relatedTarget) // Botón que activó el modal
		  var ubi = button.data('ubi') // Extraer la información de atributos de datos
		  var button2 = $(event.relatedTarget) // Botón que activó el modal
		  var padre = button2.data('padre') // Extraer la información de atributos de datos
		  
		  var modal = $(this)
		  modal.find('#ubi').val(ubi)
		  modal.find('#padre').val(padre)
		})

		// eliminacion de un usuario especifico
		$( "#dFile" ).submit(function( event ) {
		var parametros = $(this).serialize();
			 $.ajax({
					type: "POST",
					url: "dFi.php",
					data: parametros,
					 beforeSend: function(objeto){
						$("#deleteFile").html("Mensaje: Cargando...");
					  },
					success: function(datos){
					$("#deleteFile").html(datos);
					
					$('#dataFile').modal('dismiss');
					//load(1);
				  }
			});
		  event.preventDefault();
		});