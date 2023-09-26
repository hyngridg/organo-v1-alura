import './Rodape.css'

const Rodape = () => {
    return(
        <footer className="rodape">
            <nav>
                <ul className='listIconesSociais'>
                    <li>
                        <a href="facebook.com" target="_blank">
                            <img src="/images/fb.png" alt="ícone Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank">
                            <img src="/images/tw.png" alt="ícone Twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target="_blank">
                            <img src="/images/ig.png" alt="ícone Instagram" />
                        </a>
                    </li>
                </ul>
            </nav>

            <section>
                <img src="/images/logo.png" alt="Logo Organo" />
            </section>

            <section>
                <p>Desenvolvido por Alura</p>
            </section>
        </footer>
    )
}

export default Rodape