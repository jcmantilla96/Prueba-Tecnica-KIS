// Log para mirar si el .js sí estaba bien conectado con el index.html: console.log("sirve");

function cargarDatos()
{
    // Log para mirar que esté entrando a la función con el evento onclick del botón: 
    // console.log("Entra a la funcion");
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'e.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            // Log para mostrar la respuesta traida en forma de texto: console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            // Log para mostrar la respuesta convertida en JSON: console.log(datos);
            let respuesta = document.querySelector('#respuesta');
            respuesta.innerHTML = '';
            for (let i of datos)
            {
                // Log para mostrar el recorrido que hace el for: console.log(i);
                respuesta.innerHTML += 
                `
                    <tr>
                        <td>${i.Nombre_Completo}</td>
                        <td>${i.Correo_Electronico}</td>
                        <td>${i.Telefono}</td>
                        <td>${i.Supervisor}</td>
                        <td>${i.Fecha_De_Nacimiento}</td>
                    </tr>
                `
            }
        }


    }
}

//función para ordenar alfabeticamente la columna de Nombre
function filtroNombre()
{
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  
  while (switching) 
  {  
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) 
    {
      
      shouldSwitch = false;
      
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) 
      {  
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) 
    {  
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }

}

//función para ordenar alfabeticamente la columna de Correo
function filtroCorreo()
{
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  
  while (switching) 
  {  
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) 
    {
      
      shouldSwitch = false;
      
      x = rows[i].getElementsByTagName("TD")[1];
      y = rows[i + 1].getElementsByTagName("TD")[1];
      
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) 
      {  
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) 
    {  
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

//función para ordenar alfabeticamente la columna de Supervisor
function filtroSupervisor()
{
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  
  while (switching) 
  {  
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) 
    {
      
      shouldSwitch = false;
      
      x = rows[i].getElementsByTagName("TD")[3];
      y = rows[i + 1].getElementsByTagName("TD")[3];
      
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) 
      {  
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) 
    {  
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

//Función para exportar la tabla a Excel
function exportarExcel() 
{
    var tab_text="<table border='2px'><tr bgcolor='#87AFC6'>";
    var textRange; var j=0;
    tab = document.getElementById('myTable'); // id of table

    for(j = 0 ; j < tab.rows.length ; j++) 
    {     
        tab_text=tab_text+tab.rows[j].innerHTML+"</tr>";
    }

    tab_text=tab_text+"</table>";

    var ua = window.navigator.userAgent;
    
    sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));  

    return (sa);
}

function htmlToCSV(html, filename) 
{
	var data = [];
	var rows = document.querySelectorAll("table tr");
			
	for (var i = 0; i < rows.length; i++) 
  {
		var row = [], cols = rows[i].querySelectorAll("td, th");
				
		for (var j = 0; j < cols.length; j++) 
        {
		      row.push(cols[j].innerText);
        }
		        
		data.push(row.join(",")); 		
	}

	downloadCSVFile(data.join("\n"), filename);

}

function downloadCSVFile(csv, filename) 
{
	var csv_file, download_link;

	csv_file = new Blob([csv], {type: "text/csv"});

	download_link = document.createElement("a");

	download_link.download = filename;

	download_link.href = window.URL.createObjectURL(csv_file);

	download_link.style.display = "none";

	document.body.appendChild(download_link);

	download_link.click();
}

function generate() {
  var doc = new jsPDF('p', 'pt', 'letter');
  var htmlstring = '';
  var tempVarToCheckPageHeight = 0;
  var pageHeight = 0;
  pageHeight = doc.internal.pageSize.height;
  specialElementHandlers = 
  {
      '#bypassme': function (element, renderer) 
      {  
        return true
      }
  };
  
  var y = 20;
  doc.setLineWidth(2);
  doc.text(200, y = y + 30, "Tabla en formato PDF");
  doc.autoTable({
      html: '#myTable',
      startY: 70,
      theme: 'grid',
      columnStyles: {
          0: {
              cellWidth: 80,
          },
          1: {
              cellWidth: 80,
          },
          2: {
              cellWidth: 80,
          },
          3: {
            cellWidth: 80,
        }
      },
      styles: {
          minCellHeight: 20
      }
  })
  doc.save('tablaEnPDF.pdf');
}