import React from "react";
import './Footer.css';

const Footer = () => {
    return(
        <footer class="footer-premium">
        <div class="footer-premium__content">
          <span class="footer-premium__title">Testar o Premium de graça</span>
          <span class="footer-premium__subtitle">
            Inscreva-se para curtir música ilimitada e podcasts só com alguns
            anúncios. Não precisa de cartão de crédito.
          </span>
        </div>
        
        <button class="footer-premium__button">
            <span>Inscreva-se grátis</span>
        </button>
        
      </footer>
    )
}

export default Footer;