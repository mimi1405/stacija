import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/404.css'

export default function Failure() {
  return (
    <>
        <section id='failure-section'>
            <h1>Da ist wohl was schief gelaufen!</h1>
            <p>Klicke oder tippe <Link to="/" id='getback'>hier</Link> um zur Startseite zurückzukehren.</p>
        </section>
    </>
  )
}
