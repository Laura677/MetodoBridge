// Método (Adapter) Bridge - Estrutural - Padrões GoF

// 1. IMPLEMENTADOR: define a estrutura dos itens


class TipoBebida {
    constructor(tipoBebida) {
        this.tipoBebida = tipoBebida;
    }

    getTipoBebida() {
        return this.tipoBebida;
    }
}
class TipoLanche {
    constructor(tipoLanche) {
        this.tipoLanche = tipoLanche;
    }

    getTipoLanche() {
        return this.tipoLanche;
    }
}
class TipoBatata {
    constructor(tipoBatata) {
        this.tipoBatata = tipoBatata;
    }

    getTipoBatata() {
        return this.tipoBatata;
    }
}

// 2. IMPLEMENTAÇÕES CONCRETAS: tipos especificos de cada item


class Tam300 extends TipoBebida {
    constructor() {
        super("300ml");
    }
}
class Tam500 extends TipoBebida {
    constructor() {
        super("500ml");
    }
}
class Tam700 extends TipoBebida {
    constructor() {
        super("700ml");
    }
}

class BatataP extends TipoBatata {
    constructor() {
        super("Batata P");
    }
}
class BatataM extends TipoBatata {
    constructor() {
        super("Batata M");
    }
}
class BatataG extends TipoBatata {
    constructor() {
        super("Batata G");
    }
}

class BigMac extends TipoLanche {
    constructor() {
        super("BigMac");
    }
}
class McFish extends TipoLanche {
    constructor() {
        super("McFish");
    }
}
class Quarteirao extends TipoLanche {
    constructor() {
        super("Quarteirão");
    }
}


// 3. ABSTRAÇÃO: representa um combo


class Combo {
    constructor(tipoLanche, tipoBebida, tipoBatata) {
        // A forma recebe uma cor.
        // Isso permite combinar formas e cores diferentes.
        this.tipoLanche = tipoLanche;
        this.tipoBebida = tipoBebida;
        this.tipoBatata = tipoBatata;
    }

    montar() {
        // Cada forma concreta deverá implementar esse método.
        throw new Error("Método montar() não implementado.");
    }
}


// 4. FORMAS CONCRETAS: lanche, batata e bebida


class Lanche extends Combo {
    montar() {
        return `Lanche:  ${this.tipoLanche.getTipoLanche()}`;
    }
}

class Batata extends Combo {
    montar() {
        return `Batata:  ${this.tipoBatata.getTipoBatata()}`;
    }
}

class Bebida extends Combo {
    montar() {
        return `Bebida: ${this.tipoBebida.getTipoBebida()}`;
    }
}


//TESTANDO


const lanche = new Lanche(
    new BigMac(),
    new Tam500(),
    new BatataM()
);

const bebida = new Bebida(
    new BigMac(),
    new Tam700(),
    new BatataG()
);

const batata = new Batata(
    new BigMac(),
    new Tam300(),
    new BatataP()
);

console.log(lanche.montar());
// Lanche:  BigMac

console.log(bebida.montar());
// Bebida: 700ml

console.log(batata.montar());
// Batata:  Batata P