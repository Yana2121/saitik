import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Header } from "../Pages/Header";

function Types() {
  return (
    <div>
      <Header />
      <h1 className="m-h1">Типы данных</h1>
      <div className="line" />
      <p className="p">
        Как и во многих языках программирования, в C# есть своя система типов
        данных, которая используется для создания переменных. Тип данных
        определяет внутреннее представление данных, множество значений, которые
        может принимать объект, а также допустимые действия, которые можно
        применять над объектом.
      </p>
      <p className="p">В языке C# есть следующие базовые типы данных:</p>
      <li className="p">
        bool: хранит значение true или false (логические литералы). Представлен
        системным типом System.Boolean
      </li>
      <div className="line1">
        <ol>
          <li className="li2">
            {" "}
            <span className="p-coomp2">bool </span>alive ={" "}
            <span className="p-coomp2"> true; </span>
          </li>
          <li className="li2">
            {" "}
            <span className="p-coomp2">bool </span>isDead ={" "}
            <span className="p-coomp2"> false; </span>
          </li>
        </ol>
      </div>
      <li className="p">
        byte: хранит целое число от 0 до 255 и занимает 1 байт. Представлен
        системным типом System.Byte
      </li>
      <div className="line1">
        <ol>
          <li className="li2">
            {" "}
            <span className="p-coomp2">byte </span>bit1 = 1;
          </li>
          <li className="li2">
            {" "}
            <span className="p-coomp2">byte </span>bit2 = 2;
          </li>
        </ol>
      </div>
      <li className="p">
        sbyte: хранит целое число от -128 до 127 и занимает 1 байт. Представлен
        системным типом System.SByte
      </li>
      <div className="line1">
        <ol>
          <li className="li2">
            {" "}
            <span className="p-coomp2">sbyte </span>bit1 = -101;
          </li>
          <li className="li2">
            {" "}
            <span className="p-coomp2">sbyte </span>bit2 = 102;
          </li>
        </ol>
      </div>
      <li className="p">
        short: хранит целое число от -32768 до 32767 и занимает 2 байта.
        Представлен системным типом System.Int16
      </li>
      <div className="line1">
        <ol>
          <li className="li2">
            {" "}
            <span className="p-coomp2">short </span>n1 = 1;
          </li>
          <li className="li2">
            {" "}
            <span className="p-coomp2">short </span>bit2 = 102;
          </li>
        </ol>
      </div>
      <li className="p">
        ushort: хранит целое число от 0 до 65535 и занимает 2 байта. Представлен
        системным типом System.UInt16
      </li>
      <div className="line1">
        <ol>
          <li className="li2">
            {" "}
            <span className="p-coomp2">ushort </span>n1 = 1;
          </li>
          <li className="li2">
            {" "}
            <span className="p-coomp2">ushort </span>bit2 = 102;
          </li>
        </ol>
      </div>
      <li className="p">
        int: хранит целое число от -2147483648 до 2147483647 и занимает 4 байта.
        Представлен системным типом System.Int32. Все целочисленные литералы по
        умолчанию представляют значения типа int:
      </li>
      <div className="line1">
        <ol>
          <li className="li2">
            {" "}
            <span className="p-coomp2">int </span>a = 10;
          </li>
          <li className="li2">
            {" "}
            <span className="p-coomp2">int </span>b = 0b101;
            <span className="li3"> // бинарная форма b =5</span>
          </li>
          <li className="li2">
            {" "}
            <span className="p-coomp2">int </span>c = 0xFF;
            <span className="li3"> // шестнадцатеричная форма c = 255</span>
          </li>
        </ol>
      </div>
      <li className="p">
        uint: хранит целое число от 0 до 4294967295 и занимает 4 байта.
        Представлен системным типом System.UInt32
      </li>
      <li className="p">
        long: хранит целое число от –9 223 372 036 854 775 808 до 9 223 372 036
        854 775 807 и занимает 8 байт. Представлен системным типом System.Int64
      </li>
      <li className="p">
        ulong: хранит целое число от 0 до 18 446 744 073 709 551 615 и занимает
        8 байт. Представлен системным типом System.UInt64
      </li>
      <li className="p">
        float: хранит число с плавающей точкой, занимает 4 байта. Представлен
        системным типом System.Single
      </li>
      <li className="p">
        decimal: хранит десятичное дробное число, может хранить 28 знаков после
        запятой и занимает 16 байт. Представлен системным типом System.Decimal
      </li>
      <li className="p">
        char: хранит одиночный символ в кодировке Unicode и занимает 2 байта.
        Представлен системным типом System.Char. Этому типу соответствуют
        символьные литералы:
      </li>
      <div className="line1">
        <ol>
          <li className="li2">
            {" "}
            <span className="p-coomp2">char </span>a = 'A';
          </li>
          <li className="li2">
            {" "}
            <span className="p-coomp2">char </span>b = '\xSA';
          </li>
          <li className="li2">
            {" "}
            <span className="p-coomp2">char </span>a = '\u0420';
          </li>
        </ol>
      </div>
      <li className="p">
        string: хранит набор символов Unicode. Представлен системным типом
        System.String. Этому типу соответствуют строковые литералы.
      </li>
      <div className="line1">
        <ol>
          <li className="li2">
            {" "}
            <span className="p-coomp2">string </span>hello = 'Hello';
          </li>
        </ol>
      </div>
      <li className="p">
        object: может хранить значение любого типа данных и занимает 4 байта на
        32-разрядной платформе и 8 байт на 64-разрядной платформе. Представлен
        системным типом System.Object, который является базовым для всех других
        типов и классов .NET.
      </li>
      <div className="line1">
        <ol>
          <li className="li2">
            {" "}
            <span className="p-coomp2">object</span> a = 22;
          </li>
          <li className="li2">
            {" "}
            <span className="p-coomp2">object</span> b = 0.14;
          </li>
          <li className="li2">
            {" "}
            <span className="p-coomp2">object</span> c = "hello code";
          </li>
        </ol>
      </div>
      <h3 className="m-h2">Использование системных типов</h3>
      <div className="line5" />
      <p className="p">
        Выше при перечислении всех базовых типов данных для каждого упоминался
        системный тип. Потому что название встроенного типа по сути представляет
        собой сокращенное обозначение системного типа. Например, следующие
        переменные будут эквивалентны по типу:
      </p>
      <div className="line1">
        <ol>
          <li className="li2">
            {" "}
            <span className="p-coomp2">int</span> a = 4;
          </li>
          <li className="li2"> System.Int32 b = 4;</li>
        </ol>
      </div>
      <h3 className="m-h2">Неявная типизация</h3>
      <div className="line5" />
      <p className="p">
        Ранее мы явным образом указывали тип переменных, например, int x;. И
        компилятор при запуске уже знал, что x хранит целочисленное значение.
      </p>
      <p className="p">
        Однако мы можем использовать и модель неявной типизации:
      </p>
      <div className="line1">
        <ol>
          <li className="li2">var hello = "Hell to World";</li>
          <li className="li2"> var c = 20;</li>
        </ol>
      </div>
      <p className="p">
        Для неявной типизации вместо названия типа данных используется ключевое
        слово var. Затем уже при компиляции компилятор сам выводит тип данных
        исходя из присвоенного значения. Так как по умолчанию все целочисленные
        значения рассматриваются как значения типа int, то поэтому в итоге
        переменная c будет иметь тип int. Аналогично переменной hello
        присваивается строка, поэтому эта переменная будет иметь тип string
      </p>
      <p className="p">
        Эти переменные подобны обычным, однако они имеют некоторые ограничения.
      </p>
      <p className="p">
        Во-первых, мы не можем сначала объявить неявно типизируемую переменную,
        а затем инициализировать:
      </p>
      <div className="line1">
        <ol>
          <li className="li3">// этот код работает</li>
          <li className="li2">
            {" "}
            <span className="p-coomp2">int</span> a;
          </li>
          <li className="li2">a = 20;</li>
          <li className="li2"></li>
          <li className="li3">// этот код не работает</li>
          <li className="li2">
            {" "}
            <span className="p-coomp2">var</span> c;
          </li>
          <li className="li2">c = 20;</li>
        </ol>
      </div>
      <div className="line5" />
      <h2 className="m-h1">Тест</h2>
      <p className="p">
        Для закрепления материала вы можете пройти{" "}
        <Link to="/TestT" className="p1">
          тест
        </Link>
      </p>
      <div className="line5" />
      <Link className="Text-header" to="/Opera">
        <button className="button1">Следующий урок</button>
      </Link>
      <Link className="Text-header" to="/V">
        <button className="button1">Предыдущий урок</button>
      </Link>
    </div>
  );
}

export { Types };
