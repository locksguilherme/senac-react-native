class Employe{
    empcode: number = 0
    empName: string = ''
    private empMatricula: string = ''
    constructor(code:number, name: string, matricula:string){
        this.empcode = code
        this.empName = name
        this.setmatricula(matricula)
    }

    setmatricula(matricula: string): void{
        if(matricula.length < 5){
            console.log('Número de matrícula deve ter no mínimo 5 digitos')
        }
        else{
            this.empMatricula = matricula
        }
    }
}

let emp1: Employe
emp1 = new Employe(10,'Jose', '12388')

/*emp1.empcode = 10
emp1.empName = 'Joseph'
emp1.setmatricula('123787')*/

console.log(emp1)