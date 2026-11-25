import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const DartsListPage = () => {
  const [darts, setDarts] = useState([])
  useEffect(() => {
    axios.get('https://darts.sulla.hu/darts')
      .then((res) => setDarts(res.data))
      .catch((error) => console.log(error))
  }, [])


  return (
    <div>
      <h2 className="mb-4">dartsozok listaja</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
        {darts.map((dartszo) => (
          <div className="col" key={dartszo.id}>
          <div className="card h-100 shadow-sm">
            <img src={dartszo.image_url} className="card-img-top p-3" style={{ height: 210, objectFit: 'contain' }} alt={dartszo.name} />
            <div className="card-body">
            <h3 className="card-title h5">{dartszo.name}</h3>
            <p className="card-text mb-2">szuletesi datum: {dartszo.birth_date}</p>
            <p className="card-text">vilagbajnoki cimek: {dartszo.world_ch_won}</p>
            <Link className="btn btn-outline-primary btn-sm me-2" to={`/darts/${dartszo.id}`}>reszletek</Link>
            <Link className="btn btn-outline-secondary btn-sm" to={`/mod-darts/${dartszo.id}`}>modositas</Link>
          </div>
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}


export default DartsListPage
