//Desenha uma moldura mem uma frase


function barra(qtde){
   for (let i=0; i<qtde+4; i++) {
      process.stdout.write(ch);
  
   }
}

 const readline = require('readline-sync');
 const frase = readline.question('\nFrase: ');
 const ch = '█';


barra(frase.length)
console.log(`\n${ch} ${frase} ${ch}`);
barra(frase.length)

