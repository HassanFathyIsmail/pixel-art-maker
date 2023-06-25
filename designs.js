// Select color input
const color=document.querySelector('#colorPicker');
// Select size input
const sizePicker=document.querySelector('#sizePicker');
// When size is submitted by the user, call makeGrid()
      sizePicker.addEventListener("submit",makeGrid);
//the changecolor function
function changecolor(event) {
 event.target.style.backgroundColor=color.value;
}
  //makeGrid function
 function makeGrid()
{
  const tableheight =document.querySelector('#inputHeight').value;
  const tablewidth =document.querySelector('#inputWidth').value;
  const mytable =document.querySelector('#pixelCanvas');
  mytable.innerHTML="";
  event.preventDefault();

      for (var i = 0; i < tableheight; i++) {
      const tr =document.createElement('tr');

      for (var p = 0; p <  tablewidth; p++) {
          const td =document.createElement('td');
          tr.appendChild(td);

          td.addEventListener('click',changecolor);
     }
       mytable.appendChild(tr);
   }

 }
