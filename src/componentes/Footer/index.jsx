import "./Footer.css"

const Footer = () => { 
    return  <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.aluracursos.com/'>
                <img src="/img/facebook.png" alt='Facebook' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="/img/twitter.png" alt='twitter' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />

        <div className="desa-por">
             <div >
            <strong>Desarrollado por @CecilioAvila </strong> <br />
          <strong>Gracias a One Oracle y Alura </strong>
        </div>
        </div>       
       
    </footer>
}

export default Footer