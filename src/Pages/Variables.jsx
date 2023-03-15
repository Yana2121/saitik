import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Header } from "../Pages/Header";

function Variables() {
  return (
    <div>
      <Header />
      <h1 className="m-h1">Переменные и константы</h1>
      <div className="line" />
      <p className="p">
        Для хранения данных в программе применяются переменные. Переменная
        представляет именнованную область памяти, в которой хранится значение
        определенного типа. Переменная имеет тип, имя и значение. Тип
        определяет, какого рода информацию может хранить переменная.
      </p>
      <p className="p">
        Перед использованием любую переменную надо определить. Синтаксис
        определения переменной выглядит следующим образом:
      </p>

      <div className="line1">
        <ol>
          <li className="li2">тип имя_переменной;</li>
        </ol>
      </div>

      <p className="p">
        Вначале идет тип переменной, потом ее имя. В качестве имени переменной
        может выступать любое произвольное название, которое удовлетворяет
        следующим требованиям:
      </p>
      <li className="p">
        имя может содержать любые цифры, буквы и символ подчеркивания, при этом
        первый символ в имени должен быть буквой или символом подчеркивания
      </li>
      <li className="p">в имени не должно быть знаков пунктуации и пробелов</li>
      <li className="p">
        имя не может быть ключевым словом языка C#. Таких слов не так много, и
        при работе в Visual Studio среда разработки подсвечивает ключевые слова
        синим цветом.
      </li>
      <p className="p">
        Хотя имя переменой может быть любым, но следует давать переменным
        описательные имена, которые будут говорить об их предназначении.
      </p>
      <p className="p">Например, определим простейшую переменную:</p>

      <div className="line1">
        <ol>
          <li className="li2">
            <span className="p-coomp2">string</span> name;
          </li>
        </ol>
      </div>

      <p className="p">
        В данном случае определена переменная name, которая имеет тип string. то
        есть переменная представляет строку. Поскольку определение переменной
        представляет собой инструкцию, то после него ставится точка с запятой.
      </p>
      <p className="p">
        При этом следует учитывать, что C# является регистрозависимым языком,
        поэтому следующие два определения переменных будут представлять две
        разные переменные:
      </p>
      <div className="line1">
        <ol>
          <li className="li2">
            <span className="p-coomp2">string</span> name;
          </li>
          <li className="li2">
            <span className="p-coomp2">string</span> Name;
          </li>
        </ol>
      </div>

      <p className="p">
        После определения переменной можно присвоить некоторое значение:
      </p>
      <div className="line1">
        <ol>
          <li className="li2">
            <span className="p-coomp2">string</span> name;
          </li>
          <li className="li2">
            name = <span className="p-coomp2">"Tom;"</span>
          </li>
        </ol>
      </div>

      <p className="p">
        Так как переменная name представляет тип string, то есть строку, то мы
        можем присвоить ей строку в двойных кавычках. Причем переменной можно
        присвоить только то значение, которое соответствует ее типу.
      </p>
      <p className="p">
        В дальнейшем с помощью имени переменной мы сможем обращаться к той
        области памяти, в которой хранится ее значение.
      </p>
      <p className="p">
        Также мы можем сразу при определении присвоить переменной значение.
        Данный прием называется инициализацией:
      </p>
      <div className="line1">
        <ol>
          <li className="li2">
            <span className="p-coomp2">string</span> name ={" "}
            <span className="p-coomp2">"Tom"</span>;
          </li>
        </ol>
      </div>

      <p className="p">
        Отличительной чертой переменных является то, что в программе можно
        многократно менять их значение. Например, создадим небольшую программу,
        в которой определим переменную, поменяем ее значение и выведем его на
        консоль:
      </p>
      <div className="line1">
        <ol>
          <li className="li2">
            <span className="p-coomp2">string</span> name ={" "}
            <span className="p-coomp2">"Tom"; </span>
            <span className="li3">
              //Определяем переменную и инициализируем ее
            </span>
          </li>
          <li className="li2">Console.WriteLine(name);</li>
          <li className="li2">
            name = <span className="p-coomp2">"Bob"; </span>
            <span className="li3">// меняем значение переменной</span>
          </li>
          <li className="li2">Console.WriteLine(name);</li>
        </ol>
      </div>

      <p className="p">Консольный вывод программы:</p>
      <div className="line1">
        <span className="p-vivo">Tom</span>
        <span className="p-vivo">Bob</span>
      </div>

      <h3 className="m-h2">Константы</h3>
      <div className="line5" />
      <p className="p">
        Отличительной особенностью переменных является то, что мы можем изменить
        их значение в процессе работы программы. Но, кроме того, в C# есть
        константы. Константа должна быть обязательно инициализирована при
        определении, и после определения значение константы не может быть
        изменено
      </p>
      <p className="p">
        Константы предназначены для описания таких значений, которые не должны
        изменяться в программе. Для определения констант используется ключевое
        слово const, которое указывается перед типом константы:
      </p>

      <div className="line1">
        <ol>
          <li className="li2">
            <span className="p-coomp2">const string</span> NAME ={" "}
            <span className="p-coomp2"> "Tom"; </span>
            <span className="li3"> //Определяем константу</span>
          </li>
        </ol>
      </div>

      <p className="p">
        Так, в данном случае определена константа NAME, которая хранит строку
        "Tom". Нередко для название констант используется верхний регистр, но
        это не более чем условность.
      </p>
      <p className="p">
        При использовании констант надо помнить, что объявить мы их можем только
        один раз и что к моменту компиляции они должны быть определены. Так, в
        следующем случае мы получим ошибку, так как константе не присвоено
        начальное значение:
      </p>

      <div className="line1">
        <ol>
          <li className="li2">
            <span className="p-coomp2">const string</span> NAME;
            <span className="li3">
              {" "}
              // {`! Ошибка - константа NAME не инициализирована`}
            </span>
          </li>
        </ol>
      </div>

      <p className="p">
        Кроме того, мы ее не сможем изменим в процессе работы программы:
      </p>

      <div className="line1">
        <ol>
          <li className="li2">
            <span className="p-coomp2">const string</span> NAME ={" "}
            <span className="p-coomp2"> "Tom"; </span>
            <span className="li3"> // {`Определяем константу`}</span>
          </li>
          <li className="li2">
            NAME = <span className="p-coomp2"> "Bob"; </span>
            <span className="li3">
              {" "}
              // {`!Ошибка - у констаты нельзя изменить значение`}
            </span>
          </li>
        </ol>
      </div>
      <p className="p">
        Таким образом, если нам надо хранить в программе некоторые данные, но их
        не следует изменить, они определяются в виде констант. Если же их можно
        изменять, то они определяются в виде переменных.
      </p>
      <div className="line5" />
      <h2 className="m-h1">Тест</h2>
      <p className="p">
        Для закрепления материала вы можете пройти{" "}
        <Link to="/TestV" className="p1">
          тест
        </Link>
      </p>
      <div className="line5" />
      <Link className="Text-header" to="/T">
        <button className="button1">Следующий урок</button>
      </Link>
    </div>
  );
}

export { Variables };
