function verClientes(items){
	let table = "<table style='border: 1px solid'>";
	for(let i = 0; i < items.length; i++){
		table += "<tr>"

		table += "<td>" + items[i].id + "</td>";
		table += "<td>" + items[i].name + "</td>";
		table += "<td>" + items[i].email + "</td>";
		table += "<td>" + items[i].age + "</td>";
		table += "<td><button onclick='deleteCliente(" + items[i].id + ")'>Eliminar</button></td>";

		table += "</tr>"
	}
	table += "</table>"
	$("#result").append(table);
}

function getClientes(){
	$.ajax({
		url: "https://ge3dab5c5faa5aa-prueba1.adb.sa-vinhedo-1.oraclecloudapps.com/ords/admin/client/client",
		type: "GET",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
		datatype: "JSON",
		success: function(response){
			$("#result").empty();
			verClientes(response.items);
		},
		error: function(xhr, status){
			alert("Estamos presentando problemas en la plataforma. Intente de nuevo mas tarde.");
			console.log(status)
			console.log(xhr)
		}
	});
}

function saveClientes(){
	let data = {
		id: $("#id_cliente").val(),
		name: $("#name").val(),
		email: $("#email").val(),
		age: $("#age").val()
	}
	console.log(data)
	data = JSON.stringify(data);
	$.ajax({
		url: "https://ge3dab5c5faa5aa-prueba1.adb.sa-vinhedo-1.oraclecloudapps.com/ords/admin/client/client",
		type: "POST",
		data: data,
		contentType: "application/JSON",
		datatype: "JSON",
		success: function(response){
			$("#result").empty();
			alert("El cliente se ha guardado correctamente.");
			$("#id_cliente").val("");
			$("#name").val("");
			$("#email").val("");
			$("#age").val("");

			getClientes();
		},
		error: function(xhr, status){
			alert("Hubo un problema agregando el nuevo cliente. Intente de nuevo mas tarde.");
			console.log(xhr)
		}
	});
}


function updateCliente(){
	let data = {
		id: $("#id_cliente").val(),
		name:$("#name").val(),
		email:$("#email").val(),
		age:$("#age").val()
	}

	data = JSON.stringify(data);
	$.ajax({
		url: "https://ge3dab5c5faa5aa-prueba1.adb.sa-vinhedo-1.oraclecloudapps.com/ords/admin/client/client",
		type: "PUT",
		data: data,
		contentType: "application/JSON",
		datatype: "JSON",
		success: function(response){
			$("#result").empty();
			alert("El cliente se ha actualizado correctamente.");
			$("#id_cliente").val("");
			$("#name").val("");
			$("#email").val("");
			$("#age").val("");

			getClientes();
		},
		error: function(xhr, status){
			alert("Hubo un problema actualizando el Cliente. Intente de nuevo mas tarde.");
			console.log(xhr)
		}
	});
}


function deleteCliente(id){
	$.ajax({
		url: "https://ge3dab5c5faa5aa-prueba1.adb.sa-vinhedo-1.oraclecloudapps.com/ords/admin/client/client?id="+id,
		type: "DELETE", 
		datatype: "JSON",
		success: function(response){
			$("#result").empty();
			alert("El cliente se ha eliminado correctamente.");
		
			getClientes();
		},
		error: function(xhr, status){
			alert("Hubo un problema eliminando el cliente. Intente de nuevo mas tarde.");
			console.log(xhr)
		}		
	});
}

