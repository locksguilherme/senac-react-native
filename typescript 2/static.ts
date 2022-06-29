class Conexao{
    static path:string = ''
    database:string = ''
    static getConexao(): string{
        return this.path
    }
}

let conexao: Conexao
conexao = new Conexao()
conexao.database = 'loja'

Conexao.path 
console.log(Conexao.getConexao())

