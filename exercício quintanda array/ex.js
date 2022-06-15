import javax.swing.*;

public class OrdenacaoBolha {
    public static void main(String[] args) {
        // valores a serem ordenados
        int vetor[] = {7,3,9,1,10};
        int temp;
        int contador = 1;
        do{
            for (int i=0; i < vetor.length -1; i++){
                if (vetor[i] > vetor [i+1]){
                    temp = vetor[i];
                    vetor[i] = vetor[i+1];
                    vetor[i+1] = temp;
                }
            }
            contador++;
        } while (contador < vetor.length);
        // exibe os números na tela
        String numerosOrdenados = "";
        for (int n : vetor) {
            numerosOrdenados += n+"-";
        }
        JOptionPane.showMessageDialog(null,numerosOrdenados);
    }
}