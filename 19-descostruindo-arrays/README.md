## Descostruindo arrays

```js
    const nomes = ["Matheus", "Lucas", "Henrique"]
```

### Forma 01: Descontruindo com objetos
```js
    let {0: pessoaUm, 3: pessoaTres} = nomes
    // Matheus, Henrique
```

### Forma 02: Através da posição
```js
    let [pessoaUm, pessoaTres] = nomes;
    // Matheus, Henrique
```
