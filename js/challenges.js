let challengeList = [
    {
  "name": "Día 1", "title": "Redondeo", "description": `<p>En Grado Superior las notas se tienen que poner como un número entero, así que un día podrás ser el profe de entornos y podrás disfrutar del placer de poner un 7 a un estudiante con un 7,49 en el examen.</p><p>Desarrolla un algoritmo que, dado un número decimal, devuelve su resultado entero redondeado siguiendo estas normas:</p><ul><li>Todos los números decimales por debajo de ,5 se redondean a la baja.</li><li>Los que tengan decimales desde ,5 a superior, se redondean al alza.</li></ul><code>Introduce un número decimal: 1.7362<br>El número redondeado es 2</code>`

        
    },
    {
        "name": "Día 2",
        "title": "Calendario",
        "description": `<p>Tu misión es simple, soldado: crear un calendario que muestre todos los meses del año y sus semanas de forma clara y organizada. Nada de efectos especiales ni complicaciones innecesarias, solo un buen código que haga el trabajo.</p><p>Desarrolla un algoritmo que:</p><ul><li>Itere los meses del año.</li><li>Itere las semanas del mes.</li><li>PISTA: Bucle for anidado.</li></ul><code>Ejemplo<br>Enero<br>Semana 1<br>Semana 2<br>Semana 3<br>Semana 4</code>`

    },
    {
        "name": "Día 3",
        "title": "El tiempo",
        "description": `<p>Crear dos variables utilizando los objetos fecha. En la primera se representa la fecha (día, mes, año) actual. En la segunda se representa la fecha de nacimiento. Calcular cuántos años han transcurrido entre ambas fechas y muestra su resultado de maneras diferentes:</p><ul><li>Día, mes y año.</li><li>Hora, minuto y segundo.</li><li>Día de año.</li><li>Día de la semana.</li><li>Nombre del mes.</li></ul><code>Ejemplo: Fecha actual: 2025-03-28<br>Fecha de nacimiento: 2000-07-15<br>Edad: 24 años, 8 meses y 13 días</code>`

    },
    {
        "name": "Día 4",
        "title": "EX",
        "description": ""
    },
    {
        "name": "Día 5",
        "title": "¡Exclamaciones!",
        "description": `<p>Jordi nunca se acuerda de abrir las exclamaciones. Él dice que es porque en catalán no se abren las exclamaciones, pero yo creo que simplemente no sabe escribir. Vamos a crear un programa que asegure que hay tantos abrir exclamación como cerrar exclamación para flamearlo.</p><p>Ejemplo de entrada:</p><code>¡¡¡Caramba!!!<br>Hola!</code><p>Ejemplo de salida:</p><code>Si<br>No</code>`

    },
    {
        "name": "Día 6",
        "title": "Cajero del mercadona",
        "description": `<p>Juan está trabajando en un mercadona en el que no hay cajero automático, él siempre calcula el cambio de los clientes de cabeza. ¿Se te ocurre alguna forma de hacerle la vida más sencilla al pobre chaval?</p><p>Crea un programa que:</p><ul><li>Reciba la cantidad de dinero (double) que el usuario ha entregado para pagar.</li><li>Compare la cantidad entregada con el precio del producto y calcule la diferencia.</li><li>Súmale el IVA porque esto es España, redondeado a dos décimas (+21%)</li><li>Devuelva el valor utilizando la menor cantidad de billetes y monedas posibles siendo estos billete de 500 €, billete de 200 €, billete de 100 €, billete de 50 €, billete de 20 €, billete de 10 €, billete de 5 €, moneda de 2 €, moneda de 1 €, moneda de 50 cnts, moneda de 20 cnts, moneda de 10 cnts, moneda de 2 cnts y moneda de 1 cnt.</li><li>Pero cuidado, si un cliente intenta pagar con menos dinero del necesario… ¡tendrás que avisarle antes de que se lleve el producto gratis!</li></ul><p>Ejemplo:</p><code>El producto cuesta 17 €.<br>El cliente te da 20 pavos.<br>El cambio es de 1 moneda de 1 euro y 1 moneda de 2 euros.</code>`

    },
    {
        "name": "Día 7",
        "title": "Mago del tiempo",
        "description": `<p>¿Alguna vez te has levantado con la necesidad de crear un cronómetro? Tranquilo, no eres el único. Hoy vas a poder hacer tu sueño realidad.</p><p>Crea un programa que:</p><ul><li>Pida al usuario que ingrese el número de segundos que desea contar.</li><li>Usa un bucle para contar desde el primer segundo hasta el número total de segundos indicado por el usuario.</li><li>Cada vez que el cronómetro llegue a 60 segundos, debe reiniciar los segundos a 0 y sumar 1 minuto.</li><li>Cuando los minutos lleguen a 60, debe reiniciar los minutos a 0 y sumar 1 hora.</li><li>El cronómetro debe mostrar el tiempo en formato hh:mm:ss, donde hh son las horas, mm los minutos y ss los segundos.</li><li>PISTA: Para que el cronómetro se actualice cada segundo, puedes utilizar la función time.sleep(1). Esto hará que el programa espere 1 segundo entre cada iteración del bucle, imitando el comportamiento de un cronómetro real.</li></ul><p>Ejemplo:</p><code>00:00:01<br>00:00:02<br>00:00:03<br>etc.</code>
`
    },
    {
        "name": "Día 8",
        "title": "EX",
        "description": ""
    },
    {
        "name": "Día 9",
        "title": "Aglomeración de clases",
        "description": `<p>Los alumnos de Prometeo que cursan DAM/DAW + Master andan muy liados y no tienen claro cuando tienen clase y cuando no.</p><p>Haz un programa que les indique si tienen clase de FP, de Máster, o de las dos en un conjunto de fechas dado. El usuario introduce un número N, que indica el número de días que quiere ver, se deberá imprimir el número del día, si no tienen nada en esa fecha, FP si tiene clase de un módulo de DAM/DAW o Máster si ese día tiene clase de máster. Los días múltiplos de 3 tienen clase de FP, los múltiplos de 5, de máster, los que son múltiplos de 3 y 5 tienen clase de las dos.</p><p>Ejemplo de entrada:</p><code>15</code><p>Ejemplo de salida:</p><code>1<br>2<br>FP<br>4<br>Máster<br>FP<br>7<br>8<br>FP<br>Máster<br>11<br>FP<br>13<br>14<br>FP + Máster</code>
`
    },
    {
        "name": "Día 10",
        "title": "Cookies super ricas S.A",
        "description": `<p>Una tienda de galletas artesanales vende al por mayor en su página web. Cada caja de galletas cuesta 6€. Solicita la cantidad de cajas de galletas en cada venta y dependiendo de la cantidad introducida se realizan los siguientes pasos:</p><ul><li>Si la cantidad de cajas de galletas vendidas es menor a 5: no se permiten compras inferiores a 5 cajas de galletas.</li><li>Si la cantidad de cajas de galletas es mayor o igual a 5, pero menor a 15: los gastos de envío son de 10€.</li><li>Si la cantidad de cajas de galletas es mayor a 15: El envío es gratuito.</li></ul><p>Promociones:</p><ul><li>Si el precio total es inferior a 120€ no hay promociones.</li><li>Si el precio total supera los 120€ pero es menor a 250€: Tiene un descuento del 5%.</li><li>Si el precio total supera los 250€: Tiene un descuento del 10%.</li></ul><p>Muestra al cliente un mensaje por pantalla según la cantidad de cajas de galletas que quiera comprar:</p><code>Número total de cajas a comprar.<br>Total € de la compra.<br>Gastos de envío (si los tiene o si es gratuito).<br>Descuento por compra (Indicar al cliente cuántos € falta para entrar en una promoción si la compra es <100€ o el importe de descuento generado si es superior).</code>
`
    },
    {
        "name": "Día 11",
        "title": "EX",
        "description": ""
    },
    {
        "name": "Día 12",
        "title": "EX",
        "description": ""
    },
    {
        "name": "Día 13",
        "title": "EX",
        "description": ""
    },
    {
        "name": "Día 14",
        "title": "Flashcards",
        "description": `<p>Hoy en clase, a Federico le han dicho que las flashcards son un buen método de estudio. Pero Federico no tiene nada para escribir en su casa. ¿Se te ocurre alguna forma para que pueda estudiar con el método mencionado?</p><p>Pues claro que sí, vas a crear un programa que:</p><ul><li>Almacene las flashcards en una lista (pregunta, respuesta).</li><li>Permita al usuario añadir nuevas flashcards.</li><li>Muestra una pregunta aleatoria de la lista.</li><li>Solicite una respuesta del usuario.</li><li>Compare la respuesta del usuario con la correcta.</li><li>Indique si la respuesta es correcta o incorrecta.</li><li>Permita continuar practicando o salir.</li></ul><p>Ejemplo:</p><code>Anverso: La programación es…<br>Reverso: Darle una serie de instrucciones a una máquina para que ejecute una acción específica.</code>
`
    },
    {
        "name": "Día 15",
        "title": "EX",
        "description": ""
    },
    {
        "name": "Día 16",
        "title": "EX",
        "description": ""
    },
    {
        "name": "Día 17",
        "title": "EX",
        "description": ""
    },
    {
        "name": "Día 18",
        "title": "EX",
        "description": ""
    },
    {
        "name": "Día 19",
        "title": "EX",
        "description": ""
    },
    {
        "name": "Día 20",
        "title": "El sombrero del programador",
        "description": `<p>Cada 1 de septiembre, el Hogwarts Express parte hacia la escuela de programación de Hogwarts para magos y brujas del código. En ella, su famoso sombrero seleccionador ayuda a los programadores a encontrar su camino...</p><p>Desarrolla un programa que simule el comportamiento del sombrero.</p><p>Requisitos:</p><ul><li>El sombrero realizará 10 preguntas para determinar la casa del alumno.</li><li>Deben existir 4 casas. Por ejemplo: Frontend, Backend, Mobile y Data.</li></ul><p>Acciones:</p><ul><li>Crea un programa que solicite el nombre del alumno y realice 10 preguntas, con cuatro posibles respuestas cada una.</li><li>Cada respuesta asigna puntos a cada una de las casas (a tu elección).</li><li>Una vez finalizado, el sombrero indica el nombre del alumno y a qué casa pertenece (resuelve el posible empate de manera aleatoria, pero indicando al alumno que la decisión ha sido complicada).</li></ul>
`
    },
    {
        "name": "Día 21",
        "title": "EX",
        "description": ""
    },
    {
        "name": "Día 22",
        "title": "EX",
        "description": ""
    },
    {
        "name": "Día 23",
        "title": "EX",
        "description": ""
    },
    {
        "name": "Día 24",
        "title": "EX",
        "description": ""
    },
    {
        "name": "Día 25",
        "title": "EX",
        "description": ""
    },
    {
        "name": "Día 26",
        "title": "EX",
        "description": ""
    },
    {
        "name": "Día 27",
        "title": "EX",
        "description": ""
    },
    {
        "name": "Día 28",
        "title": "EX",
        "description": ""
    },
    {
        "name": "Día 29",
        "title": "EX",
        "description": ""
    },
    {
        "name": "Día 30",
        "title": "EX",
        "description": ""
    }
]

       
    
