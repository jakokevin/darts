
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'



const DartsSinglePage = () => {
  const { dartsId } = useParams()
  const [dartszo, setDartszo] = useState(null)
  useEffect(() => {
    axios.get(`https://darts.sulla.hu/darts/${dartsId}`)
      .then((res) => setDartszo(res.data))
      .catch((error) => console.log(error))
  }, [dartsId])

  if (!dartszo) return null
  return (
    <div className="container py-4">
      <div className="card shadow-sm p-4">
        <h2 className="mb-4">{dartszo.name}</h2>
        <img
          className="single-image rounded shadow-sm mb-4"
          src={dartszo.image_url}
          alt={dartszo.name}
          style={{
            width: '220px',
            height: '280px',
            objectFit: 'cover'
          }}
        />
        <p className="fs-5">szuletesi datum: {dartszo.birth_date}</p>
        <p className="fs-5">vilagbajnoki cimek: {dartszo.world_ch_won}</p>
        <p>
          <a
            href={dartszo.profile_url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-primary"
          >
            profil megnyitasa
          </a>
        </p>
        <div className="d-flex flex-column gap-2 mt-2">
          <Link to="/" className="btn btn-secondary w-100">
            vissza
          </Link>
          <Link to={`/mod-darts/${dartszo.id}`} className="btn btn-primary w-100">
            modositas
          </Link>
          <Link to={`/del-darts/${dartszo.id}`} className="btn btn-danger w-100">
            torles
          </Link>
        </div>
      </div>
    </div>
  )
}



export default DartsSinglePage
