import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Header } from "../Pages/Header";

function Operation() {
  return (
    <div>
      <Header />
      <h1 className="m-h1">Арифмитические операции</h1>
      <div className="line" />
      <p className="p">
        В C# используется большинство операций, которые применяются и в других
        языках программирования. Операции представляют определенные действия над
        операндами - участниками операции. В качестве операнда может выступать
        переменной или какое-либо значение (например, число). Операции бывают
        унарными (выполняются над одним операндом), бинарными - над двумя
        операндами и тернарными - выполняются над тремя операндами. Рассмотрим
        все виды операций.
      </p>
      <p className="p">Бинарные арифметические операции:</p>

      <li className="p">Операция сложения двух чисел:</li>
      <div className="line1">
        <ol>
          <li className="li2">
            {" "}
            <span className="p-coomp2">int </span>x = 10;
          </li>
          <li className="li2">
            {" "}
            <span className="p-coomp2">int </span>z = x + 10;{" "}
            <span className="li3"> //22</span>
          </li>
        </ol>
      </div>

      <li className="p">Операция вычитания двух чисел:</li>
      <div className="line1">
        <ol>
          <li className="li2">
            {" "}
            <span className="p-coomp2">int </span>x = 10;
          </li>
          <li className="li2">
            {" "}
            <span className="p-coomp2">int </span>z = x - 6;{" "}
            <span className="li3"> //4</span>
          </li>
        </ol>
      </div>

      <li className="p">Операция умножения двух чисел:</li>
      <div className="line1">
        <ol>
          <li className="li2">
            {" "}
            <span className="p-coomp2">int </span>x = 10;
          </li>
          <li className="li2">
            {" "}
            <span className="p-coomp2">int </span>z = x * 5;{" "}
            <span className="li3"> //50</span>
          </li>
        </ol>
      </div>

      <li className="p">операция деления двух чисел:</li>
      <div className="line1">
        <ol>
          <li className="li2">
            {" "}
            <span className="p-coomp2">int </span>x = 10;
          </li>
          <li className="li2">
            {" "}
            <span className="p-coomp2">int </span>z = x / 5;{" "}
            <span className="li3"> //2</span>
          </li>

          <li className="li2">
            {" "}
            <span className="p-coomp2">double </span>a = 10;
          </li>
          <li className="li2">
            {" "}
            <span className="p-coomp2">double </span>b = 3;
          </li>
          <li className="li2">
            {" "}
            <span className="p-coomp2">double </span>z = a / b;{" "}
            <span className="li3"> //3.33333</span>
          </li>
        </ol>
      </div>

      <li className="p">
        Операция получение остатка от целочисленного деления двух чисел:
      </li>
      <div className="line1">
        <ol>
          <li className="li2">
            {" "}
            <span className="p-coomp2">double </span>x = 10.0;
          </li>
          <li className="li2">
            {" "}
            <span className="p-coomp2">double </span>z = x % 4.0;{" "}
            <span className="li3"> //2</span>
          </li>
        </ol>
      </div>

      <li className="p">Операция инкремента</li>
      <div className="line1">
        <ol>
          <li className="li2">
            {" "}
            <span className="p-coomp2">int </span>x1 = 5;
          </li>
          <li className="li2">
            {" "}
            <span className="p-coomp2">int </span>z1 = ++x1;{" "}
            <span className="li3"> //z1=6; x1=6</span>
          </li>
          <li className="li2">
            {" "}
            <span className="p-coomp2">int </span>x2 = 5;
          </li>
          <li className="li2">
            {" "}
            <span className="p-coomp2">int </span>z2 = x2++;{" "}
            <span className="li3"> //z2=5; x2=6</span>
          </li>
        </ol>
      </div>

      <li className="p">
        Операция декремента или уменьшения значения на единицу. Также существует
        префиксная форма декремента (--x) и постфиксная (x--).
      </li>
      <div className="line1">
        <ol>
          <li className="li2">
            {" "}
            <span className="p-coomp2">int </span>x1 = 5;
          </li>
          <li className="li2">
            {" "}
            <span className="p-coomp2">int </span>z1 = --x1;{" "}
            <span className="li3"> //z1=4; x1=4</span>
          </li>
          <li className="li2">
            {" "}
            <span className="p-coomp2">int </span>x2 = 5;
          </li>
          <li className="li2">
            {" "}
            <span className="p-coomp2">int </span>z2 = x2--;{" "}
            <span className="li3"> //z2=5; x2=4</span>
          </li>
        </ol>
      </div>

      <p className="p">
        При выполнении сразу нескольких арифметических операций следует
        учитывать порядок их выполнения. Приоритет операций от наивысшего к
        низшему:
      </p>
      <li className="p">Инкремент, декремент</li>
      <li className="p">Умножение, деление, получение остатка</li>
      <li className="p">Сложение, вычитание</li>

      <h3 className="m-h2">Ассоциативность операторов</h3>
      <div className="line5"></div>
      <p className="p">
        Как выше было отмечено, операции умножения и деления имеют один и тот же
        приоритет, но какой тогда результат будет в выражении:
      </p>
      <div className="line1">
        <ol>
          <li className="li2">
            {" "}
            <span className="p-coomp2">int </span>x = 10 / 5 * 2;
          </li>
        </ol>
      </div>
      <p className="p">
        Стоит нам трактовать это выражение как (10 / 5) * 2 или как 10 / (5 *
        2)? Ведь в зависимости от трактовки мы получим разные результаты.
      </p>
      <p className="p">
        Когда операции имеют один и тот же приоритет, порядок вычисления
        определяется ассоциативностью операторов. В зависимости от
        ассоциативности есть два типа операторов:
      </p>
      <li className="p">
        Левоассоциативные операторы, которые выполняются слева направо
      </li>
      <li className="p">
        Правоассоциативные операторы, которые выполняются справа налево
      </li>
      <p className="p">
        Все арифметические операторы являются левоассоциативными, то есть
        выполняются слева направо. Поэтому выражение 10 / 5 * 2 необходимо
        трактовать как (10 / 5) * 2, то есть результатом будет 4.
      </p>

      <div className="line5" />
      <Link className="Text-header" to="/If">
        <button className="button1">Следующий урок</button>
      </Link>
      <Link className="Text-header" to="/T">
        <button className="button1">Предыдущий урок</button>
      </Link>
    </div>
  );
}

export { Operation };
