import styles from '../styles/connect.module.scss'
import { useState } from 'react'
import { sendContactForm } from '../lib/api'
import localFont from 'next/font/local'

const jost = localFont({
    src: '../src/fonts/Jost/Jost-Regular.ttf',
    display: 'swap',
  })

const initValues = {
    name: "",
    email: "",
    subject: "",
    message:""
}

const initState = {values: initValues}

export default function ContactForm() {

    const [state, setState] = useState(initState)
    const [loading, setLoading] = useState(false)
    const {values}: any = state

    const handleChange = ({target}: any) => setState((prev) => ({
        ...prev,
        values: {
            ...prev.values,
            [target.name] : target.value
        },
    }))

    const onSubmit = async(e: any) =>{
        const btn = document.getElementById('button')
        if (btn === null) {
            alert('oops');
          } else {
            btn.innerHTML = 'Отправка...'
          }
        e.preventDefault(),
        setLoading(true)
        setState((prev) =>({
            ...prev,
        }))
        try {
            await sendContactForm(values)

            if (btn === null) {
              } else {
                btn.innerHTML = 'Отправить'
              }
            alert('Ваше сообщение успешно отправлено')
        } catch (error) {
            error: error
        }
    }

    return(
        <div className={styles.connectWrapper}>
                <div className={styles.formContainer}>
                    <form className={styles.form} name='ContactForm'>
                        <label className={styles.label} htmlFor="name">Имя:</label>
                        <input
                            id='cleanValue' 
                            className={`${styles.input} ${jost.className}`}
                            name="name"
                            type="text"
                            placeholder='Ваше имя'
                            value={values.name}
                            onChange={handleChange}
                            minLength={3}
                            maxLength={40}
                            required
                            autoComplete="off"
                        />
                        <label className={styles.label} htmlFor="subject">Тема:</label>
                        <select
                            className={`${styles.input} ${jost.className}`}
                            name="subject"
                            value={values.subject}
                            onChange={handleChange}
                            autoComplete="off"   
                        >
                            <option disabled> Выберите тему</option>
                            <option>Консультация</option>
                            <option>Оформление заказа</option>
                            <option>Технические вопросы</option>
                            <option>Оставить отзыв</option>
                            <option>Иные вопросы</option>
                        </select>
                        <label className={styles.label} htmlFor="email">Email:</label>
                        <input
                            type="email"
                            className={`${styles.input} ${jost.className}`}
                            name="email"
                            placeholder='example@gmail.com'
                            value={values.email}
                            onChange={handleChange}
                            minLength={7}
                            maxLength={150}
                            required
                            autoComplete="off"   
                        />
                        <label className={styles.label} htmlFor="message">Сообщение:</label>
                        <textarea
                            className={`${jost.className} textarea`}
                            name="message"
                            value={values.message}
                            onChange={handleChange}
                            rows={4}
                            placeholder="Введите ваше сообщение..."
                            minLength={10}
                            maxLength={1500}
                            required
                            autoComplete="off"    
                        />
                        <button
                            type="submit"
                            id='button'
                            disabled={!values.name || !values.email || !values.message}
                            onClick={onSubmit}
                            >Отправить</button>
                    </form>
                </div>
            </div>
    )
}