# Тренировочный проект список дел на React с использованием Redux Toolkit

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Ссылка на Github Pages

https://solodzh78.github.io/react_redux_toolkit_todo/

### Кратккое описание

Redux Toolkit
Создан store с помощью {configureStore}
Создан Срез с редюсерами при помощи { createSlice }
Созданы асинхронные Thunk`и с помощью { createAsyncThunk }
Экспортированы общий reducer и actions из среза
Общий reducer импортирован и подключен к стору

React Redux
При помощи { Provider } стор подключен к App
Для доступа к стору из компонентов приложения использован хук { useSelector }
Для отправки actions в стор использован хук { useDispatch } и импортированные из среза actions