import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom'



const DartsDelPage = () => {
  const { dartsId } = useParams()
  const navigate = useNavigate()
  const [dartszo, setDartszo] = useState(null)
  useEffect(() => {
    axios.get(`https://darts.sulla.hu/darts/${dartsId}`)
      .then((res) => setDartszo(res.data))
      .catch((error) => console.log(error))
  }, [dartsId])
  const handleDelete = async () => {
    try {
      await axios.delete(`https://darts.sulla.hu/darts/${dartsId}`)
      navigate('/')
    } catch (error) {
      console.log(error)
      alert('hiba tortent a torles kozben')
    }
  }
  if (!dartszo) return null
  return (
    <div className="card shadow-sm p-4" style={{ maxWidth: 600 }}>
      <h2 className="mb-4">dartsozo torlese</h2>
      <p>biztosan torolni szeretned: {dartszo.name}?</p>
      <button className="btn btn-danger me-2" onClick={handleDelete}>torles</button>
      <Link className="btn btn-secondary" to={`/darts/${dartszo.id}`}>megse</Link>
    </div>
  )
}



export default DartsDelPage
