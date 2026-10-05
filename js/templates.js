export function homeTemplate() {
  return `
        <section class="about-us-container">
            <h1>Quem somos</h1>

            <p>
                A Código Solidário é uma ONG criada com o objetivo de aproximar
                a tecnologia de pessoas que ainda têm pouco acesso a ela.
                Nosso foco é oferecer oportunidades de aprendizado em programação,
                informática e ferramentas digitais.
            </p>

            <p>
                Acreditamos que a tecnologia pode abrir portas para estudo,
                trabalho e desenvolvimento pessoal. Por isso, buscamos criar
                projetos gratuitos e acessíveis para jovens e comunidades.
            </p>

            <p>
                Nossa missão é usar o conhecimento em tecnologia para gerar
                novas oportunidades e ajudar mais pessoas a se prepararem
                para o futuro.
            </p>

            <img
                src="/images/backgorund1.png"
                alt="Alunos fazendo trabalho de faculdade juntos"
            >
        </section>

        <section class="contact-area">
            <h2>Contato</h2>

            <p>
                E-mail:
                <a href="mailto:contato@codigosolidario.org">
                    contato@codigosolidario.org
                </a>
            </p>

            <p>
                WhatsApp:
                <a href="tel:+5511996940311">
                    (11) 99694-0311
                </a>
            </p>
        </section>
    `;
}

export function projectsTemplate() {
  return `
        <section class="projects">

            <h1>Nossos Projetos</h1>

            <article>
                <h2>Programar para Crescer</h2>

                <p>
                    Projeto voltado para jovens que desejam aprender os primeiros
                    conceitos de programação, lógica, HTML, CSS e JavaScript.
                </p>
            </article>

            <article>
                <h2>Inclusão Digital</h2>

                <p>
                    Oferecemos oficinas de informática para pessoas que possuem
                    pouco contato com computadores e ferramentas digitais.
                </p>
            </article>

            <article>
                <h2>Conexão Profissional</h2>

                <p>
                    Projeto criado para ajudar jovens na preparação para o mercado
                    de trabalho, com orientação para currículo, LinkedIn e entrevistas.
                </p>
            </article>

        </section>
    `;
}

export function registerTemplate() {
  return `
        <section class="signup">

            <h1>Cadastre-se</h1>

            <form id="registerForm">

                <fieldset>

                    <legend>Dados pessoais</legend>

                    <div class="field">
                        <label for="nome">Nome completo</label>

                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            minlength="3"
                            maxlength="100"
                            required
                        >
                    </div>

                    <div class="field">
                        <label for="cpf">CPF</label>

                        <input
                            type="text"
                            id="cpf"
                            name="cpf"
                            placeholder="000.000.000-00"
                            maxlength="14"
                            required
                        >
                    </div>

                    <div class="field">
                        <label for="email">E-mail</label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="seuemail@exemplo.com"
                            required
                        >
                    </div>

                    <div class="field">
                        <label for="telefone">Telefone</label>

                        <input
                            type="tel"
                            id="telefone"
                            name="telefone"
                            placeholder="(00) 00000-0000"
                            maxlength="15"
                            required
                        >
                    </div>

                    <div class="field">
                        <label for="nascimento">Data de nascimento</label>

                        <input
                            type="date"
                            id="nascimento"
                            name="nascimento"
                            required
                        >
                    </div>

                </fieldset>


                <fieldset>

                    <legend>Endereço</legend>

                    <div class="field">
                        <label for="cep">CEP</label>

                        <input
                            type="text"
                            id="cep"
                            name="cep"
                            placeholder="00000-000"
                            maxlength="9"
                            inputmode="numeric"
                            required
                        >
                    </div>

                    <div class="field">
                        <label for="endereco">Endereço</label>

                        <input
                            type="text"
                            id="endereco"
                            name="endereco"
                            required
                        >
                    </div>

                    <div class="field">
                        <label for="cidade">Cidade</label>

                        <input
                            type="text"
                            id="cidade"
                            name="cidade"
                            required
                        >
                    </div>

                    <div class="field">
                        <label for="state">Estado</label>

                        <select id="state" name="state" required>

                            <option value="">
                                Selecione um estado
                            </option>

                            <option value="SP">São Paulo</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PR">Paraná</option>
                            <option value="SC">Santa Catarina</option>

                        </select>
                    </div>

                </fieldset>


                <fieldset>

                    <legend>Participação na ONG</legend>

                    <div class="field">

                        <label for="area">
                            Como deseja ajudar?
                        </label>

                        <select id="area" name="area" required>

                            <option value="">
                                Selecione uma opção
                            </option>

                            <option value="programacao">
                                Programação
                            </option>

                            <option value="informatica">
                                Informática
                            </option>

                            <option value="mentoria">
                                Mentoria profissional
                            </option>

                            <option value="eventos">
                                Eventos e oficinas
                            </option>

                            <option value="doacao">
                                Doação
                            </option>

                        </select>
                    </div>

                    <div class="field">

                        <label for="message">
                            Mensagem
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            maxlength="500"
                            placeholder="Conte um pouco sobre você"
                        ></textarea>

                    </div>

                </fieldset>

                <p
                    id="formMessage"
                    class="form-message"
                    aria-live="polite"
                ></p>

                <button type="submit">
                    Enviar cadastro
                </button>

            </form>

        </section>
    `;
}
