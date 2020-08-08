import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://api.adorable.io/avatars/285/abott@adorable.png" alt="" />
        <div>
          <strong>Wali Queiroz</strong>
          <span>Química</span>
        </div>
      </header>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            <br /><br />
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </p>

      <footer>
        <p>Preço/Hora
              <strong>R$60,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
