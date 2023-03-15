import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Header } from "../Pages/Header";

function Main() {
  return (
    <div className="main">
      <Header />
      <h1 className="m-h1">Главная</h1>
      <div className="line"></div>
      <h3 className="m-h2">Язык C# и платформа .NET</h3>
      <p className="p">
        На сегодняшний момент язык программирования C# один из самых мощных,
        быстро развивающихся и востребованных языков в ИТ-отрасли. В настоящий
        момент на нем пишутся самые различные приложения: от небольших
        десктопных программок до крупных веб-порталов и веб-сервисов,
        обслуживающих ежедневно миллионы пользователей.
      </p>
      <p className="p">
        C# уже не молодой язык и как и вся платформа .NET уже прошел большой
        путь. Первая версия языка вышла вместе с релизом Microsoft Visual Studio
        .NET в феврале 2002 года. Текущей версией языка является версия C# 11,
        которая вышла 8 ноября 2022 года вместе с релизом .NET 7.
      </p>
      <p className="p">
        C# является языком с Си-подобным синтаксисом и близок в этом отношении к
        C++ и Java. Поэтому, если вы знакомы с одним из этих языков, то овладеть
        C# будет легче.
      </p>
      <p className="p">
        C# является объектно-ориентированным и в этом плане много перенял у Java
        и С++. Например, C# поддерживает полиморфизм, наследование, перегрузку
        операторов, статическую типизацию. Объектно-ориентированный подход
        позволяет решить задачи по построению крупных, но в тоже время гибких,
        масштабируемых и расширяемых приложений. И C# продолжает активно
        развиваться, и с каждой новой версией появляется все больше интересных
        функциональностей.
      </p>
      <div className="line5"></div>
      <h3 className="m-h2">Роль платформы .NET</h3>
      <p className="p">
        Когда говорят C#, нередко имеют в виду технологии платформы .NET
        (Windows Forms, WPF, ASP.NET, Xamarin). И, наоборот, когда говорят .NET,
        нередко имеют в виду C#. Однако, хотя эти понятия связаны, отождествлять
        их неверно. Язык C# был создан специально для работы с фреймворком .NET,
        однако само понятие .NET несколько шире.
      </p>
      <p className="p">
        Как-то Билл Гейтс сказал, что платформа .NET - это лучшее, что создала
        компания Microsoft. Возможно, он был прав. Фреймворк .NET представляет
        мощную платформу для создания приложений. Можно выделить следующие ее
        основные черты:
      </p>
      <li className="p">
        Поддержка нескольких языков. Основой платформы является общеязыковая
        среда исполнения Common Language Runtime (CLR), благодаря чему .NET
        поддерживает несколько языков: наряду с C# это также VB.NET, C++, F#, а
        также различные диалекты других языков, привязанные к .NET, например,
        Delphi.NET. При компиляции код на любом из этих языков компилируется в
        сборку на общем языке CIL (Common Intermediate Language) - своего рода
        ассемблер платформы .NET. Поэтому при определенных условиях мы можем
        сделать отдельные модули одного приложения на отдельных языках.
      </li>
      <li className="p">
        Кроссплатформенность. .NET является переносимой платформой (с некоторыми
        ограничениями). Например, последняя версия платформы на данный момент -
        .NET 7 поддерживается на большинстве современных ОС Windows, MacOS,
        Linux. Используя различные технологии на платформе .NET, можно
        разрабатывать приложения на языке C# для самых разных платформ -
        Windows, MacOS, Linux, Android, iOS, Tizen.
      </li>
      <li className="p">
        Мощная библиотека классов. .NET представляет единую для всех
        поддерживаемых языков библиотеку классов. И какое бы приложение мы не
        собирались писать на C# - текстовый редактор, чат или сложный веб-сайт -
        так или иначе мы задействуем библиотеку классов .NET.
      </li>
      <li className="p">
        Разнообразие технологий. Общеязыковая среда исполнения CLR и базовая
        библиотека классов являются основой для целого стека технологий, которые
        разработчики могут задействовать при построении тех или иных приложений.
        Например, для работы с базами данных в этом стеке технологий
        предназначена технология ADO.NET и Entity Framework Core. Для построения
        графических приложений с богатым насыщенным интерфейсом - технология WPF
        и WinUI, для создания более простых графических приложений - Windows
        Forms. Для разработки кроссплатформенных мобильных и десктопных
        приложений - Xamarin/MAUI. Для создания веб-сайтов и веб-приложений -
        ASP.NET и т.д.
      </li>
      <p className="p">
        К этому стоит добавить активной развивающийся и набирающий популяность
        Blazor - фреймворк, который работает поверх .NET и который позволяет
        создавать веб-приложения как на стороне сервера, так и на стороне
        клиента. А в будущем будет поддерживать создание мобильных приложений и,
        возможно, десктоп-приложений.
      </p>
      <li className="p">
        Производительность. Согласно ряду тестов веб-приложения на .NET 7 в ряде
        категорий сильно опережают веб-приложения, построенные с помощью других
        технологий. Приложения на .NET 7 в принципе отличаются высокой
        производительностью.
      </li>
      <p className="p">
        Также еще следует отметить такую особенность языка C# и фреймворка .NET,
        как автоматическая сборка мусора. А это значит, что нам в большинстве
        случаев не придется, в отличие от С++, заботиться об освобождении
        памяти. Вышеупомянутая общеязыковая среда CLR сама вызовет сборщик
        мусора и очистит память.
      </p>
      <div className="line5"></div>
      <h3 className="m-h2">.NET Framework и .NET 7</h3>
      <p className="p">
        Стоит отметить, что .NET долгое время развивался премущественно как
        платформа для Windows под названием .NET Framework. В 2019 вышла
        последняя версия этой платформы - .NET Framework 4.8. Она больше не
        развивается
      </p>
      <p className="p">
        С 2014 Microsoft стал развивать альтернативную платформу - .NET Core,
        которая уже предназначалась для разных платформ и должна была вобрать в
        себя все возможности устаревшего .NET Framework и добавить новую
        функциональность. Затем Microsoft последовательно выпустил ряд версий
        этой платформы: .NET Core 1, .NET Core 2, .NET Core 3, .NET 5. И текущей
        версией является расматриваемая в этом руководстве платформа .NET 7.
        Поэтому следует различать .NET Framework, который предназначен
        преимущественно для Windows, и кросплатформенный .NET 7. В данном
        руководстве речь будет идти о C# 11 в связке с .NET 7, поскольку это
        актуальная платформа.
      </p>
      <div className="line5"></div>
      <h3 className="m-h2">Управляемый и неуправляемый код</h3>
      <p className="p">
        Нередко приложение, созданное на C#, называют управляемым кодом (managed
        code). Что это значит? А это значит, что данное приложение создано на
        основе платформы .NET и поэтому управляется общеязыковой средой CLR,
        которая загружает приложение и при необходимости очищает память. Но есть
        также приложения, например, созданные на языке С++, которые
        компилируются не в общий язык CIL, как C#, VB.NET или F#, а в обычный
        машинный код. В этом случае .NET не управляет приложением.
      </p>
      <p className="p">
        В то же время платформа .NET предоставляет возможности для
        взаимодействия с неуправляемым кодом.
      </p>
      <div className="line5"></div>
      <h3 className="m-h2">JIT-компиляция</h3>
      <p className="p">
        Как выше писалось, код на C# компилируется в приложения или сборки с
        расширениями exe или dll на языке CIL. Далее при запуске на выполнение
        подобного приложения происходит JIT-компиляция (Just-In-Time) в машинный
        код, который затем выполняется. При этом, поскольку наше приложение
        может быть большим и содержать кучу инструкций, в текущий момент времени
        будет компилироваться лишь та часть приложения, к которой
        непосредственно идет обращение. Если мы обратимся к другой части кода,
        то она будет скомпилирована из CIL в машинный код. При том уже
        скомпилированная часть приложения сохраняется до завершения работы
        программы. В итоге это повышает производительность.
      </p>
      <p className="p">
        По сути это все, что вкратце надо знать о платформе .NET и языке C#. А
        теперь создадим первое приложение.
      </p>

      <div className="line5" />
      <Link className="Text-header" to="/V">
        <button className="button1">Приступить к урокам</button>
      </Link>
    </div>
  );
}

export { Main };