import React from 'react';

import './styles.css'
import PageHeader from '../../componentes/PageHeader';
import TeacherItem from '../../componentes/TeacherItem';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input id="subject" type="text" />
          </div>
          <div className="input-block">
            <label htmlFor="weekday">Dia da semana</label>
            <input id="weekday" type="text" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Matéria</label>
            <input id="time" type="text" />
          </div>
        </form>
      </PageHeader>
      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  )
}

export default TeacherList;
