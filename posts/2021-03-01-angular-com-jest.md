---
title: Angular com Jest
description: Configurando Jest com Angular e aumentando a produtividade
  do   Engenheiro de Software.
date: 2020-08-13 12:00:00
thumbnail: assets/img/zqhk5z6ovrt6r9u58e43.png
category: js
background: "#D6BA32"
---
## O que é Jest?
> É um poderoso Framework de Testes em JavaScript com um foco na simplicidade, que funciona com projetos usando: Babel, TypeScript, Node, React, Angular, Vue e muito mais!

Essa é a descrição oficial do [Jest](https://jestjs.io/pt-BR/).

## Por que tirar uma estrutura nativa e usar o Jest?

A principal resposta seria o aumento de produtividade do engenheiro. Sempre que uma ferramenta X é considerada melhor é importante considerar a sua colocação no projeto.

Alguns dos principais motivos para usar o Jest:
- Configuração mínima;
- [Snapshots](https://jestjs.io/docs/en/snapshot-testing) 📸;
- Testes Isolados maximizando o desempenho;
- Cobertura criada pelo Istambul;
- Testes com Watch com diversas configurações


## Configurando o Jest no Angular

Vamos iniciar a configuração do Jest no nosso projeto Angular.

### 1. Desinstalação do Karma
Desinstale o karma e todas suas dependências.

```
npm uninstall karma karma-chrome-launcher karma-coverage-istanbul-reporter karma-jasmine karma-jasmine-html-reporter @types/jasmine @types/jasminewd2 jasmine-core jasmine-spec-reporter
```

### 2. Remover o teste do `angular.json`
Remova toda a seção de teste do arquivo `angular.json`, conforme abaixo:

```json
"test": {
    "builder": "@angular-devkit/build-angular:karma",
    "options": {
        "main": "src/test.ts",
        "polyfills": "src/polyfills.ts",
        "tsConfig": "tsconfig.spec.json",
        "karmaConfig": "karma.conf.js",
        "assets": [
        "src/favicon.ico",
        "src/assets"
        ],
        "styles": [
        "src/styles.scss"
        ],
        "scripts": []
    }
}
```

### 3. Arquivos do Karma
Excluir os arquivos `karma.conf.js` e `src/test.ts`

### 4. Instalação do Jest

```
npm install jest @types/jest jest-preset-angular --save-dev
```

### 5. Arquivo de configuração do Jest

Crie o arquivo `setupJest.ts` na raiz do seu projeto, e coloque este import dentro dele:

```
import 'jest-preset-angular';
```

### 6. Atualização do tsconfig.spec.ts

Por default o arquivo `tsconfig.spec.ts` tem a seguinte configuração:

```javascript
{
  "extends": "./tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": [
      "jasmine",
      "node"
    ]
  },
  "files": [
    "src/test.ts",
    "src/polyfills.ts"
  ],
  "include": [
    "src/**/*.spec.ts",
    "src/**/*.d.ts"
  ]
}
```

Se faz necessário trocar o `jasmine` por `jest` e remover o `src/test.ts` das configurações, já que excluímos ele no item 3 deste, ficando da seguinte forma:

```javascript
{
  "extends": "./tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": [
      "jest",
      "node"
    ]
  },
  "files": [
    "src/polyfills.ts"
  ],
  "include": [
    "src/**/*.spec.ts",
    "src/**/*.d.ts"
  ]
}
```

### 7. Atualizar o script de test

Por padrão, o `package.json` vem com a seguinte configuração de testes:

```
"test": "ng test",
```

Para utilizar o Jest precisamos trocar para: 

```
"test": "jest",
```

### 8. Configuração do Jest

Por fim, só adicionar esse trecho de código no final do seu `package.json`

```json
"jest": {
    "preset": "jest-preset-angular",
    "setupFilesAfterEnv": [
      "<rootDir>/setupJest.ts"
    ],
    "testPathIgnorePatterns": [
      "<rootDir>/node_modules/",
      "<rootDir>/dist/",
      "<rootDir>/src/test.ts"
    ],
    "globals": {
      "ts-jest": {
        "tsConfig": "<rootDir>/tsconfig.spec.json",
        "stringifyContentPathRegex": "\\.html$",
        "astTransformers": {
          "before": [
            "jest-preset-angular/build/InlineFilesTransformer",
            "jest-preset-angular/build/StripStylesTransformer"
          ]
        }
      }
    }
  }
```

### 9. Ajuste no arquivo de tsconfig

Com o lançamento da versão 10 do Angular, as configurações do arquivo `tsconfig.json` foram migradas para `tsconfig.base.json` e para a utilização do Jest precisamos adicionar a seguinte linha de código dentro do `compilerOptions`:
```
"esModuleInterop": true
```

## Resultado

Ao fim de toda a configuração é possível ver o Jest rodando dentro do seu projeto.

![run test](https://dev-to-uploads.s3.amazonaws.com/i/890gv8krdpc2sa0bbwea.gif)

Veja os pull requests utilizados neste artigo no meu Github: 
- [Jest Config](https://github.com/brunoromeiro/2020-site/pull/11)
- [Fix Warnings](https://github.com/brunoromeiro/2020-site/pull/12)