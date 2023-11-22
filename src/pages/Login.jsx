import React from 'react'
import Button from '../components/UI/Button/Button'
import Input from '../components/UI/Input/Input'

const Login = () => {
  return (
    <div>
        <h1>Страница для логина</h1>
        <form>
            <Input type="text" placeholder="Введите логин" />
            <Input type="password" placeholder="Введите пароль" />
            <Button>Войти</Button>
        </form>
    </div>
  )
}

export default Login