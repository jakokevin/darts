import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'


const DartsModPage = () => {
  const { dartsId } = useParams()
  const navigate = useNavigate()
  const [dartszo, setDartszo] = useState({
    name: '',
    birth_date: '',
    world_ch_won: 0,
    profile_url: '',
    image_url: ''
  })


  useEffect(() => {
    axios.get(`https://darts.sulla.hu/darts/${dartsId}`)
      .then((res) => setDartszo(res.data))
      .catch((error) => console.log(error))
  }, [dartsId])



  const InputOnchange = (event) => {
    const { name, value } = event.target
    setDartszo((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }
  const handleSubmit = async (event) => {
    event.preventDefault()

    const modositottDartszo = {
      name: dartszo.name,
      birth_date: dartszo.birth_date,
      world_ch_won: Number(dartszo.world_ch_won),
      profile_url: dartszo.profile_url,
      image_url: dartszo.image_url
    }
    try {
      await axios.put(`https://darts.sulla.hu/darts/${dartsId}`, modositottDartszo)
      navigate(`/darts/${dartsId}`)
    } catch (error) {
      console.log(error)
      alert('hiba tortent a modositas kozben')
    }
  }
  return (
    <div className="card shadow-sm p-4 mx-auto" style={{ maxWidth: 650 }}>
      <h2 className="mb-4">dartsozo modositasa</h2>
      <form onSubmit={handleSubmit}>
        <label className="form-label mt-3">nev</label>
        <input className="form-control" name="name" value={dartszo.name} onChange={InputOnchange} required />
        <label className="form-label mt-3">szuletesi datum</label>
        <input className="form-control" type="date" name="birth_date" value={dartszo.birth_date || ''} onChange={InputOnchange} required />
        <label className="form-label mt-3">vilagbajnoki cimek szama</label>
        <input className="form-control" type="number" min="0" name="world_ch_won" value={dartszo.world_ch_won} onChange={InputOnchange} required />
        <label className="form-label mt-3">profil url</label>
        <input className="form-control" type="url" name="profile_url" value={dartszo.profile_url} onChange={InputOnchange} />
        <label className="form-label mt-3">kep url</label>
        <input className="form-control" type="url" name="image_url" value={dartszo.image_url} onChange={InputOnchange} />
        <button className="btn btn-primary mt-4" type="submit">modositas mentese</button>
      </form>
    </div>
  )
}


export default DartsModPage
