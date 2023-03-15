import React from "react";
import { Routes, Route, Link } from "react-router-dom";

function Header() {
  return (
    <div className="App-header">
      <div className="div">
        <Link className="Text-header" to="/">
          <button className="button">Главная</button>
        </Link>

        <Link className="Text-header" to="/V">
          <button className="button">Переменные и константы</button>
        </Link>

        <Link className="Text-header" to="/T">
          <button className="button">Типы данных</button>
        </Link>

        <Link className="Text-header" to="/Opera">
          <button className="button">Арифмитические операции</button>
        </Link>

        <Link className="Text-header" to="/If">
          <button className="button">Конструкция if..else</button>{" "}
        </Link>

        {/* <Link className="Text-header" to="/C">
          <button className="button">Циклы</button>
        </Link> */}

        <div className="line5" />
        <p>
          <button className="button">
            <p>
              <a
                className="Text-h"
                href="/assets/Rukovodstvo_polzovatelya.docx"
                download
              >
                Руководство пользователя
              </a>
            </p>
          </button>
        </p>

        <button className="button">
          <p>
            <a
              className="Text-h"
              href="/assets/Rukovodstvo_programmista.docx"
              download
            >
              Руководство программиста
            </a>
          </p>
        </button>
      </div>
    </div>
  );
}

export { Header };
