# Проект коллекция фильмов
## Техническое задание
### О проекте
Данное приложение — сервис для формирования коллекции фильмов для просмотра. Пользователям предоставляется возможность добавлять в избранное фильмы, а так же сортировать их и искать.
 
### Описание функциональности
 
При открытии страницы загружаются фильмы и отображаются в виде карточек фильма.
 
#### Сортировка
Все сортировки работаю по убыванию.
* Возможна по следующим категориям:
  * рейтингу
  * дате выпуска
  * сумме кассового сбора
 
#### Добавление фильма в избранное
Фильм можно добавить в избранное при помощи кнопки "+" в карточке.
Добавленная карточка исчезает из списка фильмов.
Добавленные фильмы в избранное хранятся в localStorage.
 
#### Удаление фильма из избранного
Фильм можно удалить из избранного при помощи кнопки "х" в карточке.
Добавленная карточка исчезает из списка фильмов.
 
#### Переключение в режим избранных фильмов
При переключении в режим избранных фильмов, поиск очищается.
Фильтр сбрасывается.
Отображаются только избранные фильмы.
 
 
#### Поиск по фильмам
Поиск осуществляется по названию фильма, любое слово из фильма должно учитываться в поиске.
При выполнения поиска сбрасывается выбранный фильтр.
 
 
### Карточка фильма
Карточка фильма состоит из постера и его описания.
Все данные придут с сервера. С сервера могут прийти значения с null. В таком случае необходимо установить значения по умолчанию.
* Рейтинг, Бюджет установть 0
* Дата релиза, Режиссер, Сюжет установить прочерк(-)
 
Максимальное количество символов для Сюжета 140. Если Сюжет содержит более 140 символов то должно отобразится 137 и '...'.
 
 
## План выполнения задания
 
### Замокать данные.
Все данные должны генерировать на клиенте и иметь рандомные значения не **какого хардкода**.
Структура может быть такой
```
{
   title: 'Jurassic World: Fallen Kingdom',
   releseDate: '06-06-2018',
   plot: 'When the island s dormant volcano begins roaring to life, Owen and Claire mount a campaign to rescue the remaining dinosaurs from this extinction-level event.',
   poster: 'https://m.media-amazon.com/images/M/MV5BNzIxMjYwNDEwN15BMl5BanBnXkFtZTgwMzk5MDI3NTM@._V1_SX300.jpg',
   boxOffice: '$417,719,760',
   rating: 6.3,
   director: 'J.A. Bayona',
}
```
### Отобразить замоканные данные.
Необходимо создать функцию для отрисовки для отрисовки карточек.