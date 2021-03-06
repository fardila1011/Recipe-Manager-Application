function removeIngredient(ev) {
  console.log(ev.dataTransfer.getData("text"));
}

function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev) {
	console.log("Strat dragging")
	ev.dataTransfer.setData("text", ev.target.id);
}

function remove(id) {
  console.log("try remove ingredient");
  console.log(id);
  $("#" + id).show();
  elemnt = document.getElementById(id);
  elemnt.hidden = false;
  var ingredient = document.getElementById("rowID"+id);
  ingredient.parentNode.removeChild(ingredient);
}

function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	console.log(data);

	//Remove message of empty ingredients
	var emptyRow = document.getElementById("empty");
	if (emptyRow) {
		emptyRow.parentNode.removeChild(emptyRow);
	}

	var tr = document.createElement('tr');
  tr.id = "rowID"+data

	//Create and Fill ID ingredient field on recipe table
	var inputID = document.createElement('input');
	inputID.type = "text";
	inputID.id = "ingredient_id" + data
	inputID.name = "ingredient_id";
	inputID.required = true;
	inputID.className = "form-control text-dark";
	inputID.value = data;
	var td4 = tr.appendChild(document.createElement('td'));
	td4.appendChild(inputID);

	//Fill name field on recipe table
	var td2 = tr.appendChild(document.createElement('td'));
	td2.innerHTML = $("#ingredientName" + data)[0].innerHTML;

	//Create and Fill quantity field on recipe table
	var input = document.createElement('input');
	input.type = "number";
	input.step = "0.01";
	input.name = "quantity";
	input.required = true;
	input.className = "form-control text-dark";
	input.value = 1.0;
	var td1 = tr.appendChild(document.createElement('td'));
	td1.appendChild(input);

	//Fill units field on recipe table
	var td3 = tr.appendChild(document.createElement('td'));
	td3.innerHTML = $("#ingredientUnit" + data)[0].innerHTML;

  //Creat button to remove
  var button = document.createElement('button');
  button.id = "remove"+data;
  button.type = "button";
  button.className = "btn btn-danger";
  button.innerHTML = "X";
  button.onclick = function() {
      $("#" + data).show();
      var ingredient = document.getElementById("rowID"+data);
      ingredient.parentNode.removeChild(ingredient);
  };
  var td5 = tr.appendChild(document.createElement('td'));
  td5.appendChild(button);

	var table = document.getElementById("table");

	table.appendChild(tr);
	$("#ingredient_id" + data).attr('readonly', true);
	$("#" + data).hide();

}
