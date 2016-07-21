//Clase Introducción a la programación con p5js
//Autor: Natalia Aros
//Fondo de color rojo con una elipse que siga al mouse

//camelCase es escribir la primera

//Variables
//Primero se deben declarar y luego se puede asignar su valor
var diametro = 50;

//Existen dos tipos de variables: variables locales y globales
//Las variables globales viven fuera de las funciones. Se pueden llamar desde cualquier parte
//Las variables locales están dentro de la función donde fue creada

//Las funciones también se declaran con la palabra fuction nombreFuncion()
function nombreFuncion() {
  
}

//Función setup se ejecuta una vez
function setup() {
  
  //createCanvas(dimH, dimV)
  createCanvas(400,300);
  
  //Define el color de fondo RGV
  background(255,0,0);
}

//Función draw() se ejecuta después de setup
//y se ejecuta 60 veces por segundos
function draw() {
  
  //declarar y asignar variable local anchoBorde (local porque está dentro de funcion draw(){;
  var anchoBorde = 2;
  
  background(255,0,0);
  
  //Se define el pincel primero
  //noFill() --> sin relleno 
  //puede tener relleno Fill(R,G,V) 
  fill(0,255,0);
  
  //Se define el tamaño del borde en pixeles
  strokeWeight(anchoBorde);
  
  //ellipse(posX, posY, width, height) unidad: pixeles
  //ellipse(mouseX, mouseY, diametro, diametro);
  
  var puntoX1 = 0;
  var puntoY1 = 0;
  var puntoX2 = mouseX;
  var puntoY2 = mouseY;
  var puntoX3 = mouseY;
  var puntoY3 = mouseX;
  triangle(puntoX1, puntoY1, puntoX2, puntoY2, puntoX3, puntoY3);
  
  //Nueva asignación a la variable global 
  //diametro = diametro + 1;
  
}