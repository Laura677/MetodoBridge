# Bridge — Padrão de Projeto GoF

Projeto desenvolvido em JavaScript para estudar o **Bridge**, um padrão estrutural que separa a abstração da implementação, permitindo alterar os componentes de forma independente.

## Funcionamento

O exemplo utiliza lanches, bebidas e batatas. A classe `Combo` recebe os componentes, e as classes `Lanche`, `Bebida` e `Batata` utilizam o método `montar()` para apresentar o item correspondente.

Opções disponíveis:

- **Lanches:** BigMac, McFish e Quarteirão.
- **Bebidas:** 300ml, 500ml e 700ml.
- **Batatas:** pequena, média e grande.

## Tecnologias

- JavaScript
- Node.js

## Como executar

Com o Node.js instalado, execute no terminal, substituindo pelo nome do seu arquivo:

```bash
node McDonaldBridge.js
```

## Saída esperada

```text
Lanche:  BigMac
Bebida: 700ml
Batata:  Batata P
```
