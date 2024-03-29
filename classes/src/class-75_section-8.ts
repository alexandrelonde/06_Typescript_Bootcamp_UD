/*
    uma classe abstrata é vista com um template e não pode ser instanciada.
    Para isso, criamos subclasses concretas que o serão. Dentro dessa perspectiva,
    utilizamos modificadores de acesso para gerir essa dinâmica.
    Ou seja, a classe abstrata é um contrato que a subclasse terá de implementar.

    É muito importante falar que ao criarmos uma classe abstrata podemos seguir o 
    comportamento de que certas propriedades e métodos serão chamados na classe 
    abstrata mas serão instanciados apenas pela subclasse.
*/

abstract class Course75 {

    // Propriedades estáticas
    private static TOTAL_COURSES = 0;

    static readonly TYPESCRIPT_TITLE = "Typescript Bootcamp";

    protected constructor(
        protected _title: string,
        protected price: number,
        protected subtitle = "",
        protected creationDate = new Date(2021, 2, 3)
    ) {
        this.validate();

        Course75.TOTAL_COURSES++;
    }

    // Método protected -> visto pela classe e suas subclasses
    protected abstract validate();

    // Método static -> comum a todas a instâncias da classe
    static printTitle(course: Course75) {
        console.log(`The title of the course is: ${course.title}`)
    }

    // Métodos get e set que precisam ser acessados fora da classe
    get title() {
        return this._title;
    }

    set title(newTitle: string) {
        if (!newTitle) {
            throw "Title cannot be empty!";
        }
         this._title = newTitle;
    }

    get age(){
        const ageInMs = new Date().getTime() - this.creationDate.getTime()

        // Corrigindo a conversão de milessegundos para dias
        const ageInDays = ageInMs / (1000 * 60 * 60 * 24);

        // Corrigindo a conversão de dias para anos
        const ageInYears = ageInDays / 365;

        return Math.round(ageInYears);

        /*
            A função Math.round é uma função utilizada para arredondar o
            número para o número inteiro mais próximo. É uma função utilizada
            tanto em JavaScript quanto em TypeScript. 
        */
    }

}


class FreeCourse75 extends Course75 {

    constructor (
        title: string,
        subtitle = "",
        creationDate = new Date(2021, 4, 5)
    ) {
        super(title, 0, subtitle, creationDate);
    }

    protected validate() {
        console.log(`Called FreeCourse75 validate()`);
    }
}

// const typescript75 = new Course75(Course75.TYPESCRIPT_TITLE, 100);

// console.log(typescript75.title);

/*
    De acordo com o código acima, não conseguimos mais instancias as classes
    pai, mas conseguimos instancias as subclasses ou classes filhas de acordo
    com o código abaixo.
*/


const angular75 = new FreeCourse75("Angular Core");

console.log(angular75);
