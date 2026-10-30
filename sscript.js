const eye_containers = document.querySelectorAll(".eye_container");

eye_containers.forEach(element => {

  const iris = element.querySelector(".iris");
  
  document.addEventListener("mousemove", (event) => {
    action_2(event, iris);
  })

});

function action_2(event, iris){

  const max_move_x = 30; // Максимальное смещение по x
  const max_move_y = 13; // Максимальное смещение по y 

  const coor_iris = iris.getBoundingClientRect(); // Получаем координаты глаза

  const x_coor_iris = (coor_iris.x) + (coor_iris.width / 2); // Находим центр глаза по x 
  const y_coor_iris = (coor_iris.y) + (coor_iris.height / 2); // Находим центр глаза по y 


  const x_rec_mouse = event.clientX; // Находим, где находится мышка по x 
  const y_rec_mouse = event.clientY; // Находим, где находится мышка по y


  let catheter_x = x_rec_mouse - x_coor_iris; // Находим длину катета по x
  let catheter_y = y_rec_mouse - y_coor_iris; // Находим длину катета по y 

  let hypotenuse = Math.sqrt((catheter_x * catheter_x) + (catheter_y * catheter_y)); // Находим гипотенузу

  let cos = 0;
  let sin = 0;


   if (hypotenuse > 0) { // Проверка не равна ли 0 
    cos = catheter_x / hypotenuse; // Находим косинус, то есть отношение катетаx к гипотенузе 
    sin = catheter_y / hypotenuse; // Находим синус, то есть отношение катетаy к гипотенузе
   }

  // Логика такая: если ввзять треугольник 3-4-5, то чтобы получить единичный вектор, нам надо сжать гипотенузу в 5 раз 
  // получается 5 / 5 = 1, но катеты тоже надо поделить 3 / 5 и 4 / 5
  // выходит что 0.6 и 0.8 - это координаты единичного вектора

  let offset_x = cos * max_move_x; // Сдвигаем по x, используя отношения
  let offset_y = sin * max_move_y; // Сдвигаем по y, используя отношения  

  iris.style.transform = `translate(${offset_x}px, ${offset_y}px)`;
  
}

