import React from 'react';
import './Main.css';
import increase from '../../images/increase.png';
import decrease from '../../images/decrease.png';
import financeState from '../../images/finance-state.png';
import analysis from '../../images/analysis.png';
import education from '../../images/education.png';
import contract from '../../images/contract.png';
import teacher from '../../images/teacher.png';
import salary from '../../images/salary.png';

function Main() {

  const [showPersonal, setShowPersonal] = React.useState(false);
  const [showProduction, setShowProduction] = React.useState(false);
  const [showFinance, setShowFinance] = React.useState(false);

  function isShowPersonal () {
    isHideAll();
    setShowPersonal(true);
  }

  function isShowProduction () {
    isHideAll();
    setShowProduction(true);
  }

  function isShowFinance () {
    isHideAll();
    setShowFinance(true);
  }

  function isHideAll () {
    setShowPersonal(false);
    setShowProduction(false);
    setShowFinance(false);
  }

  return (
    <div className="main container">
      <h1 className="main__title">Аналитическая платформа РУТ&nbsp;(МИИТ)</h1>
      <ul className="main__list">
        <li className="main__item">
          <div className="main__item-img main__item-img_type_indicator"></div>
          <h3 className="main__item-name">Ключевые показатели</h3>
          <a className="main__item-link" href="http://localhost:3000/" target="_blank" rel="noreferrer">Просмотреть</a>
        </li>
        <li className="main__item">
          <div className="main__item-img main__item-img_type_finance"></div>
          <h3 className="main__item-name">Финансовое состояние</h3>
          <button className="main__item-link" onClick={isShowFinance}>Просмотреть</button>
          <div className={`main__item-menu ${showFinance ? "main__item-menu_type_show" : "main__item-menu_type_hide"}`}>
            <button className="main__close-menu" type="button" onClick={isHideAll}></button>
              <a className="main__menu-item" href="http://83.220.46.36/viewer/public?dashboardGuid=87c5fa2978bb4def8efc0c024bd85bf9" target="_blank" rel="noreferrer">
                <img className="main__menu-img" src={increase} alt="иконка"></img>
                <p className="main__menu-link">Доходы</p>
              </a>
              <a className="main__menu-item" href="http://localhost:3000/" target="_blank" rel="noreferrer">
                <img className="main__menu-img" src={decrease} alt="иконка"></img>
                <p className="main__menu-link">Расходы</p>
              </a>
              <a className="main__menu-item" href="http://83.220.46.36/viewer/public?dashboardGuid=c203df2fb19a468d8b1b0c8032ee4fc9" target="_blank" rel="noreferrer">
                <img className="main__menu-img" src={financeState} alt="иконка"></img>
                <p className="main__menu-link">Финансовые результаты</p>
              </a>
          </div>
        </li>
        <li className="main__item">
          <div className="main__item-img main__item-img_type_production"></div>
          <h3 className="main__item-name">Производственная статистика</h3>
          <button className="main__item-link" onClick={isShowProduction}>Просмотреть</button>
          <div className={`main__item-menu ${showProduction ? "main__item-menu_type_show" : "main__item-menu_type_hide"}`}>
            <button className="main__close-menu" type="button" onClick={isHideAll}></button>
              <a className="main__menu-item" href="http://localhost:3000/" target="_blank" rel="noreferrer">
                <img className="main__menu-img" src={education} alt="иконка"></img>
                <p className="main__menu-link">Учебный процесс</p>
              </a>
              <a className="main__menu-item" href="http://localhost:3000/" target="_blank" rel="noreferrer">
                <img className="main__menu-img" src={analysis} alt="иконка"></img>
                <p className="main__menu-link">Анализ безубыточности</p>
              </a>
          </div>
        </li>
        <li className="main__item">
          <div className="main__item-img main__item-img_type_personal"></div>
          <h3 className="main__item-name">Персонал</h3>
          <button className="main__item-link" onClick={isShowPersonal}>Просмотреть</button>
          <div className={`main__item-menu ${showPersonal ? "main__item-menu_type_show" : "main__item-menu_type_hide"}`}>
            <button className="main__close-menu" type="button" onClick={isHideAll}></button>
              <a className="main__menu-item" href="http://localhost:3000/" target="_blank" rel="noreferrer">
                <img className="main__menu-img" src={teacher} alt="иконка"></img>
                <p className="main__menu-link">Структура ППС</p>
              </a>
              <a className="main__menu-item" href="http://localhost:3000/" target="_blank" rel="noreferrer">
                <img className="main__menu-img" src={salary} alt="иконка"></img>
                <p className="main__menu-link">Зарплата</p>
              </a>
              <a className="main__menu-item" href="http://localhost:3000/" target="_blank" rel="noreferrer">
                <img className="main__menu-img" src={contract} alt="иконка"></img>
                <p className="main__menu-link">Эффективные контракты</p>
              </a>
          </div>
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