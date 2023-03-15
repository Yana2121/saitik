import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Header } from "../Pages/Header";

function If() {
  return (
    <div>
      <Header />
      <h1 className="m-h1">Конструкция if..else</h1>
      <div className="line" />
      <p className="p">
        Условные конструкции - один из базовых компонентов многих языков
        программирования, которые направляют работу программы по одному из путей
        в зависимости от определенных условий. Одной из таких конструкций в
        языке программирования C# является конструкция if..else
      </p>
      <p className="p">
        Конструкция if/else проверяет истинность некоторого условия и в
        зависимости от результатов проверки выполняет определенный код.
      </p>
      <p className="p">
        Конструкция if/else проверяет истинность некоторого условия и в
        зависимости от результатов проверки выполняет определенный код.
      </p>
      <div className="line1">
        <ol>
          <li className="li2">
            {" "}
            <span className="p-coomp2">if </span>(условие);
          </li>
          <li className="li2">{`{`}</li>
          <li className="li2">выполняемые инструкции</li>
          <li className="li2">{`}`}</li>
        </ol>
      </div>

      <p className="p">
        После ключевого слова if ставится условие. Условие должно представлять
        значение типа bool. Это может быть непосредственно значение типа bool
        или результат условного выражения или другого выражения, которое
        возвращает значение типа bool. И если это условие истинно (равно true),
        то срабатывает код, который помещен далее после условия внутри фигурных
        скобок. Например:
      </p>
      <div className="line1">
        <ol>
          <li className="li2">
            {" "}
            <span className="p-coomp2">int </span>num1 = 8;
          </li>
          <li className="li2">
            {" "}
            <span className="p-coomp2">int </span>num2 = 6;
          </li>
          <li className="li2">
            {" "}
            <span className="p-coomp2">if</span>
            {`(num1 > num2)`};
          </li>
          <li className="li2">{`{`}</li>
          <li className="li2">
            Console.WriteLine($"Число {`{num1}`} больше числа {`{num2}`}");
          </li>
          <li className="li2">{`}`}</li>
        </ol>
      </div>

      <p className="p">
        В данном случае у нас первое число больше второго, поэтому выражение
        num1 {`>`} num2 истинно и возвращает true, следовательно, управление
        переходит к строке Console.WriteLine("Число {`{num1}`} больше числа{" "}
        {`{num2}`}
        ");
      </p>
      <p className="p">
        Если блок if содержит одну инструкцию, то мы можем его сократить, убрав
        фигурные скобки:
      </p>
      <div className="line1">
        <ol>
          <li className="li2">
            {" "}
            <span className="p-coomp2">int </span>num1 = 8;
          </li>
          <li className="li2">
            {" "}
            <span className="p-coomp2">int </span>num2 = 6;
          </li>
          <li className="li2">
            {" "}
            <span className="p-coomp2">if</span>
            {`(num1 > num2)`};
          </li>
          <li className="li2">
            Console.WriteLine($"Число {`{num1}`} больше числа {`{num2}`}");
          </li>

          <li className="li3">// или так</li>
          <li className="li2">
            {" "}
            <span className="p-coomp2">if</span>
            {`(num1 > num2)`} Console.WriteLine($"Число {`{num1}`} больше числа{" "}
            {`{num2}`}");
          </li>
        </ol>
      </div>

      <div className="line1">
        <ol>
          <li className="li2">
            {" "}
            <span className="p-coomp2">int </span>num1 = 8;
          </li>
          <li className="li2">
            {" "}
            <span className="p-coomp2">int </span>num2 = 6;
          </li>
          <li className="li2">
            {" "}
            <span className="p-coomp2">if</span>
            {`(num1 > num2 && num1 == 8)`};
          </li>
          <li className="li2">{`{`}</li>
          <li className="li2">
            Console.WriteLine($"Число {`{num1}`} больше числа {`{num2}`}");
          </li>
          <li className="li2">{`}`}</li>
        </ol>
      </div>
      <p className="p">
        В данном случае блок if будет выполняться, если num1 {`>`} num2 равно
        true и num1==8 равно true.
      </p>

      <h3 className="m-h2">Выражение else</h3>
      <div className="line5" />
      <p className="p">
        Но что, если мы захотим, чтобы при несоблюдении условия также
        выполнялись какие-либо действия? В этом случае мы можем добавить блок
        else:
      </p>
      <div className="line1">
        <ol>
          <li className="li2">
            {" "}
            <span className="p-coomp2">int </span>num1 = 8;
          </li>
          <li className="li2">
            {" "}
            <span className="p-coomp2">int </span>num2 = 6;
          </li>
          <li className="li2">
            {" "}
            <span className="p-coomp2">if</span>
            {`(num1 > num2)`};
          </li>
          <li className="li2">{`{`}</li>
          <li className="li2">
            Console.WriteLine($"Число {`{num1}`} больше числа {`{num2}`}");
          </li>
          <li className="li2">{`}`}</li>
          <li className="li2">
            {" "}
            <span className="p-coomp2">else</span>
          </li>
          <li className="li2">{`{`}</li>
          <li className="li2">
            Console.WriteLine($"Число {`{num1}`} меньше числа {`{num2}`}");
          </li>
          <li className="li2">{`}`}</li>
        </ol>
      </div>

      <h3 className="m-h2">else if</h3>
      <div className="line5" />
      <p className="p">
        Но в примере выше при сравнении чисел мы можем насчитать три состояния:
        первое число больше второго, первое число меньше второго и числа равны.
        Используя конструкцию else if, мы можем обрабатывать дополнительные
        условия:
      </p>
      <div className="line1">
        <ol>
          <li className="li2">
            {" "}
            <span className="p-coomp2">int </span>num1 = 8;
          </li>
          <li className="li2">
            {" "}
            <span className="p-coomp2">int </span>num2 = 6;
          </li>
          <li className="li2">
            {" "}
            <span className="p-coomp2">if</span>
            {`(num1 > num2)`};
          </li>
          <li className="li2">{`{`}</li>
          <li className="li2">
            Console.WriteLine($"Число {`{num1}`} больше числа {`{num2}`}");
          </li>
          <li className="li2">{`}`}</li>
          <li className="li2">
            {" "}
            <span className="p-coomp2">else if </span>
            {`(num1 > num2)`};
          </li>
          <li className="li2">
            Console.WriteLine($"Число {`{num1}`} меньше числа {`{num2}`}");
          </li>
          <li className="li2">{`{`}</li>
          <li className="li2">
            Console.WriteLine("Число num1 равно числу num2");
          </li>
          <li className="li2">{`}`}</li>
        </ol>
      </div>
      <div className="line5" />
      <h2 className="m-h1">Задания</h2>
      <li className="p">Упражнение 1</li>
      <p className="p">
        Напишите консольную программу, в которую пользователь вводит с
        клавиатуры два числа. А программа сранивает два введенных числа и
        выводит на консоль результат сравнения (два числа равны, первое число
        больше второго или первое число меньше второго).
      </p>
      <li className="p">Упражнение 2</li>
      <p className="p">
        Напишите консольную программу, в которую пользователь вводит с
        клавиатуры число. Если число одновременно больше 5 и меньше 10, то
        программа выводит "Число больше 5 и меньше 10". Иначе программа выводит
        сообщение "Неизвестное число".
      </p>
      <li className="p">Упражнение 3</li>
      <p className="p">
        Напишите консольную программу, в которую пользователь вводит с
        клавиатуры число. Если число либо равно 5, либо равно 10, то программа
        выводит "Число либо равно 5, либо равно 10". Иначе программа выводит
        сообщение "Неизвестное число".
      </p>
      <li className="p">Упражнение 4</li>
      <p className="p">
        В банке в зависимости от суммы вклада начисляемый процент по вкладу
        может отличаться. Напишите консольную программу, в которую пользователь
        вводит сумму вклада. Если сумма вклада меньше 100, то начисляется 5%.
        Если сумма вклада от 100 до 200, то начисляется 7%. Если сумма вклада
        больше 200, то начисляется 10%. В конце программа должна выводить сумму
        вклада с начисленными процентами.
      </p>
      <p className="p">
        Для получения вводимого с клавиатуры числа используйте выражение
        Convert.ToDouble(Console.ReadLine())
      </p>
      <li className="p">Упражнение 5</li>
      <p className="p">
        Изменим предыдущую задачу. Допустим, банк периодически начисляет по всем
        вкладам кроме процентов бонусы. И, допустим, сейчас банк решил
        доначислить по всем вкладам 15 единиц вне зависимости от их суммы.
        Измените программу таким образом, чтобы к финальной сумме дочислялись
        бонусы.
      </p>
      <div className="line5" />
      <Link className="Text-header" to="/Test">
        <button className="button1">Итоговый тест</button>
      </Link>
      <Link className="Text-header" to="/Opera">
        <button className="button1">Предыдущий урок</button>
      </Link>
    </div>
  );
}

export { If };
