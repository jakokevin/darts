import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const CreateDartsPage = () => {
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()

    const ujDartszo = {
      name: event.target.elements.name.value,
      birth_date: event.target.elements.birth_date.value,
      world_ch_won: Number(event.target.elements.world_ch_won.value),
      profile_url: event.target.elements.profile_url.value,
      image_url: event.target.elements.image_url.value
    }

    try {
      await axios.post('https://darts.sulla.hu/darts', ujDartszo)
      navigate('/')
    } catch (error) {
      console.log(error)
      alert('hiba tortent a mentes kozben')
    }
  }


  return (
    <div className="card shadow-sm p-4 mx-auto" style={{ maxWidth: 650 }}>
      <h2 className="mb-4">uj dartsozo</h2>
      <form onSubmit={handleSubmit}>
        <label className="form-label mt-3">nev</label>
        <input className="form-control" name="name" required />
        <label className="form-label mt-3">szuletesi datum</label>
        <input className="form-control" type="date" name="birth_date" required />
        <label className="form-label mt-3">vilagbajnoki cimek szama</label>
        <input className="form-control" type="number" min="0" name="world_ch_won" required />
        <label className="form-label mt-3">profil url</label>
        <input className="form-control" type="url" name="profile_url" />
        <label className="form-label mt-3">kep url</label>
        <input className="form-control" type="url" name="image_url" />
        <button className="btn btn-primary mt-4" type="submit">mentes</button>
      </form>
    </div>
  )
}



export default CreateDartsPage
