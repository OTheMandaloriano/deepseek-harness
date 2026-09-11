# DeepSeek Harness

[English](README.md) | [中文](README.zh.md) | Português (Brasil)

DeepSeek Harness (`dsh`) é um framework de agentes de código aberto (agent harness) desenvolvido pela [DeepSeek AI](https://deepseek.com).

Ele é construído sobre uma arquitetura onde **tudo é um plugin** e alimentado pelo [Cordis](https://github.com/cordiverse/cordis), cujo design é descrito no artigo [_A Programming Paradigm for Spatiotemporal Composability_](https://arxiv.org/abs/2608.25512).

Documentação: [https://deepseek-harness.github.io/deepseek-harness/](https://deepseek-harness.github.io/deepseek-harness/)

## Prévia para desenvolvedores

O DeepSeek Harness está em _prévia para desenvolvedores_ e em rápida evolução. **MUDANÇAS QUE QUEBRAM A COMPATIBILIDADE OCORRERÃO.**

Leia o [aviso de segurança](SAFETY.md) antes de executar o projeto.

## Execução

### Executar via `npm`

Instale o `Node.js` e execute:

```sh
npx @deepseek-ai/dsh web
```

O comando inicia a Web UI em `http://127.0.0.1:3080` por padrão e a abre no navegador padrão para inicialização local. Ao iniciar via SSH, apenas a URL do host é exibida, pois o endereço de encaminhamento pertence ao cliente SSH ou editor. Passe `--no-open` para executar o servidor sem abrir o navegador. Consulte o [guia da Web UI](docs/user/guide/index.md).

### Executar a partir do código-fonte

Para executar a partir do clone do repositório:

```sh
git clone https://github.com/deepseek-ai/deepseek-harness.git
cd deepseek-harness
pnpm install
pnpm run build
pnpm dsh web
```

`pnpm run build` prepara os artefatos do repositório. `pnpm dsh web` utiliza os artefatos compilados sem necessidade de recompilar.

## Comunidade e suporte

- Envie feedbacks ou relatos de bugs pelo [GitHub Discussions](https://github.com/deepseek-ai/deepseek-harness/discussions).
- Adicione o tópico [`dsh-plugin`](https://github.com/topics/dsh-plugin) ao seu repositório de plugin para torná-lo detectável.
- Participe da <a href="https://discord.gg/Ycq5dCaS4">comunidade oficial do DeepSeek Harness no Discord</a>.

## Contribuição

Consulte [CONTRIBUTING.md](CONTRIBUTING.md).

## Desenvolvimento

Comece pelo [guia de desenvolvimento](docs/development.md) e pela [documentação de arquitetura](docs/architecture.md).

Para agentes de IA, siga [AGENTS.md](AGENTS.md).

## Citação

```bibtex
@misc{deepseek-harness2026,
  title={DeepSeek Harness: Everything is a Plugin},
  author={DeepSeek-AI},
  year={2026},
  publisher={GitHub},
  howpublished={\url{https://github.com/deepseek-ai/deepseek-harness}},
}
```

## Licença

[MIT](LICENSE)

Dependências de terceiros e suas licenças estão declaradas em [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
