function verMensajes(items){
	let table = "<table style='border: 1px solid'>";
	for(let i = 0; i < items.length; i++){
		table += "<tr>"

		table += "<td>" + items[i].id + "</td>";
		table += "<td>" + items[i].messagetext + "</td>";
		table += "<td><button onclick='deleteMensaje(" + items[i].id + ")'>Eliminar</button></td>";

		table += "</tr>"
	}
	table += "</table>"
	$("#result").append(table);
}

function getMensajes(){
	$.ajax({
		url: "https://ge3dab5c5faa5aa-prueba1.adb.sa-vinhedo-1.oraclecloudapps.com/ords/admin/message/message",
		type: "GET",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
		datatype: "JSON",
		success: function(response){
			$("#result").empty();
			verMensajes(response.items);
		},
		error: function(xhr, status){
			alert("Estamos presentando problemas en la plataforma. Intente de nuevo mas tarde.");
			console.log(status)
			console.log(xhr)
		}
	});
}

function saveMensaje(){
	let data = {
		id: $("#id_mensaje").val(),
		messagetext:$("#messagetext").val()

	}

	data = JSON.stringify(data);
	$.ajax({
		url: "https://ge3dab5c5faa5aa-prueba1.adb.sa-vinhedo-1.oraclecloudapps.com/ords/admin/message/message",
		type: "POST",
		data: data,
		contentType: "application/JSON",
		datatype: "JSON",
		success: function(response){
			$("#result").empty();
			alert("El mensaje se ha guardado correctamente.");
			$("#id_mensaje").val("");
			$("#messagetext").val("");


			getMensajes();
		},
		error: function(xhr, status){
			alert("Hubo un problema agregando el nuevo mensaje. Intente de nuevo mas tarde.");
			console.log(xhr)
		}
	});
}


function updateMensaje(){
	let data = {
		id: $("#id_mensaje").val(),
		messagetext:$("#messagetext").val(),

	}

	data = JSON.stringify(data);
	$.ajax({
		url: "https://ge3dab5c5faa5aa-prueba1.adb.sa-vinhedo-1.oraclecloudapps.com/ords/admin/message/message",
		type: "PUT",
		data: data,
		contentType: "application/JSON",
		datatype: "JSON",
		success: function(response){
			$("#result").empty();
			alert("El mensaje se ha actualizado correctamente.");
			$("#id_mensaje").val("");
			$("#messagetext").val("");


			getMensajes();
		},
		error: function(xhr, status){
			alert("Hubo un problema actualizando el Mensaje. Intente de nuevo mas tarde.");
			console.log(xhr)
		}
	});
}


function deleteMensaje(id){
	$.ajax({
		url: "https://ge3dab5c5faa5aa-prueba1.adb.sa-vinhedo-1.oraclecloudapps.com/ords/admin/message/message?id="+id,
		type: "DELETE", 
		datatype: "JSON",
		success: function(response){
			$("#result").empty();
			alert("El mensaje se ha eliminado correctamente.");
		
			getMensajes();
		},
		error: function(xhr, status){
			alert("Hubo un problema eliminando el mensaje. Intente de nuevo mas tarde.");
			console.log(xhr)
		}		
	});
}

