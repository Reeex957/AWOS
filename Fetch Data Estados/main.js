  $(document).ready(function() {
    var comboboxGet = $("#combobox-get");
    $.get("estados.json", function(data) {
        $.each(data, function(index, item) {
            comboboxGet.append($("<option>").text(item.nombre).val(item.clave));
        });
    });
});
$(document).ready(function() {
    var comboboxAjax = $("#combobox-ajax");
    $.ajax({
        url: "estados.json",
        dataType: "json",
        success: function(data) {
            $.each(data, function(index, item) {
                comboboxAjax.append($("<option>").text(item.nombre).val(item.clave));
            });
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var comboboxFetch = document.getElementById("combobox-fetch");
    fetch("estados.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            data.forEach(function(item) {
                var option = document.createElement("option");
                option.text = item.nombre;
                option.value = item.clave;
                comboboxFetch.appendChild(option);
            });
        })
        .catch(function(error) {
            console.error("Error al cargar el archivo JSON: " + error);
        });
});