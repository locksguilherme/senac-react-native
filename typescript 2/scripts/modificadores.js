"use strict";
class Employe {
    constructor(code, name, matricula) {
        this.empcode = 0;
        this.empName = '';
        this.empMatricula = '';
        this.empcode = code;
        this.empName = name;
        this.setmatricula(matricula);
    }
    setmatricula(matricula) {
        if (matricula.length < 5) {
            console.log('Número de matrícula deve ter no mínimo 5 digitos');
        }
        else {
            this.empMatricula = matricula;
        }
    }
}
let emp1;
emp1 = new Employe(10, 'Jose', '12388');
/*emp1.empcode = 10
emp1.empName = 'Joseph'
emp1.setmatricula('123787')*/
console.log(emp1);
