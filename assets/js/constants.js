const questionsDataBase = [
  {
    question: "¿Qué frase has usado más en este último mes?",
    answer: ["Me salió a la primera", "Que raro, antes iba..", "Me aburro", "Qué fácil!"],
    trueAnswer: "Que raro, antes iba..",
    unSelectedQuestion: true,
    rank:1
  },
  
  {
    question: "¿Cómo le llamamos a las clases de Julio?",
    answer: ["Juliooor", " Pinta y colorea ", "Html y CSS", "Clases duras"],
    trueAnswer: "Pinta y colorea",
    unSelectedQuestion: true,
    rank:1
    /*publicComodin: [0,100,0,0]*/
  },
  {
    question: "¿Cuáles son datos primitivos?",
    answer: ["Números,strings y booleanos", "objetos ", "arrays", "arrays de objetos"],
    trueAnswer: "Números,strings y booleanos",
    unSelectedQuestion: true,
    rank:1
  },
  {
    question: "¿Cómo se declara una array?",
    answer: ["[]", " ${'array'} ", "arr[]", "< array >"],
    trueAnswer: "[]",
    unSelectedQuestion: true,
    rank:1
  },
  {
    question: "¿Qué es una variable?",
    answer: ["Una letra en representación de un número", "Que varía según el tiempo", "Un contenedor que almacena un valor", "El área de un rectángulo"],
    trueAnswer: "Un contenedor que almacena un valor",
    unSelectedQuestion: true,
    rank:1
  },
  {
    question: "¿Constante cuyo valor no podrá ser modificado en el futuro?",
    answer: ["let", "const", "var", "name"],
    trueAnswer: "const",
    rank:2,
    unSelectedQuestion: true,
  },
  {
    question: "¿Dónde se coloca la llamada al código Javascript?",
    answer: ["En la sección Body", " Antes de la etiqueta HTML", "En la sección Head o en Body", "En cualquier parte del HTML"],
    trueAnswer: "En la sección Head o en Body",
    unSelectedQuestion: true,
    rank:2
  },
  {
    question: "¿Qué nos indica esto =>?",
    answer: ["Función flecha", "Mayor o igual", "Sigue programando", "Continúa"],
    trueAnswer: "Función flecha",
    unSelectedQuestion: true,
    rank:2
  },
  {
    question: "¿Que se usa para devolver un valor en una función de JavaScript?",
    answer: ["console.log", "value", "return", "send"],
    trueAnswer: "return",
    unSelectedQuestion: true,
    rank:2
  },
  {
    question: "¿Cómo se terminan las instrucciones en Javascript?",
    answer: ["Punto y coma", "Punto y coma o salto de linea", "end", "<br>"],
    trueAnswer: "Punto y coma o salto de linea",
    unSelectedQuestion: true,
    rank:2
  },
  {
    question: "¿Para qué usamos la declaración Break en un bucle?",
    answer: ["Romper código", "Continuar con el siguiente bucle", "Salir del bucle actual", "Marcar un puento break"],
    trueAnswer: "Salir del bucle actual",
    unSelectedQuestion: true,
    rank:3
  },
  {
    question: "JavaScript por defecto nunca va a declarar nada como: ",
    answer: ["undefined", "console.log()", "JavaScript no funciona por si mismo", "null"],
    trueAnswer: "null",
    unSelectedQuestion: true,
    rank:3
  },
  {
    question: "¿Qué es cierto sobre el DOM?",
    answer: ["Es una estructura de objetos", "Puede ser manipulado con JS", "A y b son correctas", "Es un Dominio de HTML"],
    trueAnswer: "A y b son correctas",
    unSelectedQuestion: true,
    rank:4
  },
  {
    question: "¿Qué tipo de lenguaje es  JavaScript?",
    answer: ["Un lenguaje interpretado", "Un lenguaje marcado", "Un lenguaje compilado", "Un lenguaje de Microsoft"],
    trueAnswer: "Un lenguaje interpretado",
    unSelectedQuestion: true,
    rank:5
  },
  {
    question: "¿Qué valor se usa para representar la ausencia de un valor?",
    answer: ["null", "undefined", " String vacía ", " none"],
    trueAnswer: "null",
    unSelectedQuestion: true,
    rank:6
  },
  {
    question: "¿Qué método usarías para duplicar: [1,2,3,4]?",
    answer: ["Reduce", "Filter", "Map", "Sort"],
    trueAnswer: "Map",
    unSelectedQuestion: true,
    rank:7,
  },
  {
    question: "¿Por qué no se recomienda utilizar innerHTML en JavaScript??",
    answer: ["Código extenso", "Provoca bugs", "Es complejo", "Es muy lento"],
    trueAnswer: "Es muy lento",
    unSelectedQuestion: true,
    rank:7
  },
  {
    question: "Elimina el último elemento de una array",
    answer: ["reduce()", "shift()", "of()", "pop()"],
    trueAnswer: "pop()",
    unSelectedQuestion: true,
    rank:8
  },
  {
    question: "¿Que usarías para guardar el nombre de un usuario 3?",
    answer: ["let", "const", "var", "name"],
    trueAnswer: "const",
    unSelectedQuestion: true,
    rank:8
  },
  {
    question: "¿Que usarías para guardar el nombre de un usuario 4?",
    answer: ["let", "const", "var", "name"],
    trueAnswer: "const",
    unSelectedQuestion: true,
    rank:8
  },
  {
    question: "¿Que usarías para guardar el nombre de un usuario 1?",
    answer: ["let", "const", "var", "name"],
    trueAnswer: "const",
    unSelectedQuestion: true,
    rank:9
  },
  {
    question: "¿Que usarías para guardar el nombre de un usuario 2?",
    answer: ["let", "const", "var", "name"],
    trueAnswer: "const",
    unSelectedQuestion: true,
    rank:10
  },
  {
    question: "¿Que usarías para guardar el nombre de un usuario 3?",
    answer: ["let", "const", "var", "name"],
    trueAnswer: "const",
    unSelectedQuestion: true,
    rank:11
  },
  {
    question: "¿Que usarías para guardar el nombre de un usuario 4?",
    answer: ["let", "const", "var", "name"],
    trueAnswer: "const",
    unSelectedQuestion: true,
    rank:12
  },
  {
    question: "¿Que usarías para guardar el nombre de un usuario 2?",
    answer: ["let", "const", "var", "name"],
    trueAnswer: "const",
    unSelectedQuestion: true,
    rank:13
  },
  {
    question: "¿El código JavaScript debe estar por fuerza dentro del archivo .html?",
    answer: ["Es la única opción", "Donde quieras ", "En Css", "También en puede estar en HEAD"],
    trueAnswer: "También en puede estar en HEAD",
    unSelectedQuestion: true,
    rank:14
  },
  {
    question: "Muerte a:",
    answer: ["los sábados", "la resolución del lab-movies de Carlos", "los superBonus", "los test"],
    trueAnswer: "la resolución del lab-movies de Carlos",
    unSelectedQuestion: true,
    rank:15
  }
];
