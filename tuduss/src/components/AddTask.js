import { useState } from 'react'
import Button from './Button'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [date, setDate] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Fyll Ut Skjema')
      return
    }

    onAdd({ text, date, reminder })

    setText('')
    setDate('')
    setReminder(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Oppgåve</label>
            <input type='text' placeholder='Legg Til Oppgåve' value={text} onChange={(e) => setText(e.target.value)} />
        </div>
        <div className='form-control'>
            <label>Dato & Tidspunkt</label>
            <input type='text' placeholder='1. Jan kl. 12:00' value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className='form-control form-control-check'>
            <label>Påminning</label>
            <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
        </div>

        <Button type='submit' text='Lagre Oppgåve' className='btn btn-block' />
    </form>
  )
}

export default AddTask