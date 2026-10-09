// Método (Adapter) Bridge - Estrutural - Padrões GoF

// ==========================================
// 1. IMPLEMENTADOR: define a estrutura das cores
// ==========================================

class Cor {
    constructor(cor) {
        this.cor = cor;
    }

    getCor() {
        return this.cor;
    }
}

// ==========================================
// 2. IMPLEMENTAÇÕES CONCRETAS: cores específicas
// ==========================================

class CorVermelho extends Cor {
    constructor() {
        super("Vermelho");
    }
}

class CorAzul extends Cor {
    constructor() {
        super("Azul");
    }
}

class CorAmarelo extends Cor {
    constructor() {
        super("Amarelo");
    }
}

// ==========================================
// 3. ABSTRAÇÃO: representa uma forma geométrica
// ==========================================

class Forma {
    constructor(cor) {
        // A forma recebe uma cor.
        // Isso permite combinar formas e cores diferentes.
        this.cor = cor;
    }

    desenhar() {
        // Cada forma concreta deverá implementar esse método.
        throw new Error("Método desenhar() não implementado.");
    }
}

// ==========================================
// 4. FORMAS CONCRETAS: círculo, quadrado e triângulo
// ==========================================

class Circulo extends Forma {
    desenhar() {
        return `Círculo na cor ${this.cor.getCor()}`;
    }
}

class Quadrado extends Forma {
    desenhar() {
        return `Quadrado na cor ${this.cor.getCor()}`;
    }
}

class Triangulo extends Forma {
    desenhar() {
        return `Triângulo na cor ${this.cor.getCor()}`;
    }
}

// ==========================================
// 5. TESTANDO O PADRÃO BRIDGE
// ==========================================

// Criamos as cores.
const vermelho = new CorVermelho();
const azul = new CorAzul();
const amarelo = new CorAmarelo();

// Combinamos formas com cores diferentes.
const circulo = new Circulo(vermelho);
const quadrado = new Quadrado(azul);
const triangulo = new Triangulo(amarelo);

// Exibimos os resultados.
console.log(circulo.desenhar());
// Círculo na cor Vermelho

console.log(quadrado.desenhar());
// Quadrado na cor Azul

console.log(triangulo.desenhar());
// Triângulo na cor Amarelo