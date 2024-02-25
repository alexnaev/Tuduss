import Button from './Button'

const AddTask = () => {
  return (
    <form className='add-form'>
        <div className='form-control'>
            <label>Oppgåve</label>
            <input type='text' placeholder='Legg Til Oppgåve' />
        </div>
        <div className='form-control'>
            <label>Dato & Tidspunkt</label>
            <input type='text' placeholder='1. Jan kl. 12:00' />
        </div>
        <div className='form-control form-control-check'>
            <label>Påminning</label>
            <input type='checkbox' />
        </div>

        <Button type='submit' text='Lagre Oppgåve' className='btn btn-block' />
    </form>
  )
}

export default AddTask