import React from 'react';
import './Main.css';

function Main() {
  return (
    <div className="main container">
      <h1 className="main__title">Аналитика РУТ (МИИТ)</h1>
      <ul className="main__list">
        <li className="main__item">
          <div className="main__item-img main__item-img_type_indicator"></div>
          <h3 className="main__item-name">Ключевые показатели</h3>
          <a className="main__item-link" href="http://localhost:3000/" target="_blank" rel="noreferrer">Просмотреть</a>
        </li>
        <li className="main__item">
          <div className="main__item-img main__item-img_type_finance"></div>
          <h3 className="main__item-name">Финансовое состояние</h3>
          <a className="main__item-link" href="http://localhost:3000/" target="_blank" rel="noreferrer">Просмотреть</a>
        </li>
        <li className="main__item">
          <div className="main__item-img main__item-img_type_production"></div>
          <h3 className="main__item-name">Производственная статистика</h3>
          <a className="main__item-link" href="http://localhost:3000/" target="_blank" rel="noreferrer">Просмотреть</a>
        </li>
        <li className="main__item">
          <div className="main__item-img main__item-img_type_personal"></div>
          <h3 className="main__item-name">Персонал</h3>
          <a className="main__item-link" href="http://localhost:3000/" target="_blank" rel="noreferrer">Просмотреть</a>
        </li>
        <li className="main__item">
          <div className="main__item-img main__item-img_type_property"></div>
          <h3 className="main__item-name">Имущество</h3>
          <a className="main__item-link" href="http://localhost:3000/" target="_blank" rel="noreferrer">Просмотреть</a>
        </li>
      </ul>
    </div>
  );
}

export default Main;