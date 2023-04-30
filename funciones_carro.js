function verCarro(items){
	let table = "<table style='border: 1px solid'>";
	for(let i = 0; i < items.length; i++){
		table += "<tr>"

		table += "<td>" + items[i].id + "</td>";
		table += "<td>" + items[i].category_id + "</td>";
		table += "<td>" + items[i].brand + "</td>";
		table += "<td>" + items[i].model + "</td>";
		table += "<td><button onclick='deleteCostume(" + items[i].id + ")'>Eliminar</button></td>";

		table += "</tr>"
	}
	table += "</table>"
	$("#result").append(table);
}

function getCar(){
	$.ajax({
		url: "https://ge3dab5c5faa5aa-prueba1.adb.sa-vinhedo-1.oraclecloudapps.com/ords/admin/car/car",
		type: "GET",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
		datatype: "JSON",
		success: function(response){
			$("#result").empty();
			verCarro(response.items);
		},
		error: function(xhr, status){
			alert("Estamos presentando problemas en la plataforma. Intente de nuevo mas tarde.");
			console.log(status)
			console.log(xhr)
		}
	});
}

function saveCar(){
	let data = {
		id: $("#id").val(),
		brand: $("#brand").val(),
		model: $("#model").val(),
		category_id: $("#category_id").val()
	}
	
	data = JSON.stringify(data);
	$.ajax({
		url: "https://ge3dab5c5faa5aa-prueba1.adb.sa-vinhedo-1.oraclecloudapps.com/ords/admin/car/car",
		type: "POST",
		data: data,
		contentType: "application/JSON",
		datatype: "JSON",
		success: function(response){
			$("#result").empty();
			alert("El carro se ha guardado correctamente.");
			$("#id").val("");
			$("#brand").val("");
			$("#model").val("");
			$("#category_id").val("");

			getCar();
		},
		error: function(xhr, status){
			alert("Hubo un problema agregando el nuevo carro. Intente de nuevo mas tarde.");
			console.log(xhr)
		}
	});
}


function updateCostume(){
	let data = {
		id: $("#id").val(),
        model:$("#model").val(),
        brand:$("#brand").val(),
        category_id:$("#category_id").val()
	}
	
	data = JSON.stringify(data);
	$.ajax({
		url: "https://ge3dab5c5faa5aa-prueba1.adb.sa-vinhedo-1.oraclecloudapps.com/ords/admin/car/car",
		type: "PUT",
		data: data,
		contentType: "application/JSON",
		datatype: "JSON",
		success: function(response){
			$("#result").empty();
			alert("El carro se ha actualizado correctamente.");
			$("#id").val("");
			$("#brand").val("");
			$("#model").val("");
			$("#category_id").val("");

			getCar();
		},
		error: function(xhr, status){
			alert("Hubo un problema actualizando el nuevo carro. Intente de nuevo mas tarde.");
			console.log(xhr)
		}
	});
}


function deleteCostume(id){
	$.ajax({
		url: "https://ge3dab5c5faa5aa-prueba1.adb.sa-vinhedo-1.oraclecloudapps.com/ords/admin/car/car?id="+id,
		type: "DELETE", 
		datatype: "JSON",
		success: function(response){
			$("#result").empty();
			alert("El carro se ha eliminado correctamente.");
		
			getCar();
		},
		error: function(xhr, status){
			alert("Hubo un problema eliminando el nuevo carro. Intente de nuevo mas tarde.");
			console.log(xhr)
		}		
	});
}

