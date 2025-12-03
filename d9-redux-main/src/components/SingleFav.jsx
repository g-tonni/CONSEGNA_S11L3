import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

const SingleFav = function ({ fav }) {
  const favList = useSelector((currentState) => {
    return currentState.favouritesList.content
  })

  const getName = function (name) {
    if (favList.includes(name)) {
      return true
    } else {
      return false
    }
  }

  const [icona, setIcona] = useState(getName(fav))
  const dispatch = useDispatch()

  return (
    <div className="d-flex justify-content-between align-items-center p-4 border border-dark rounded-4 shadow-sm mb-3">
      <Link className="m-0" to={`/${fav}`}>
        {fav}
      </Link>
      <button
        className="bg-transparent border-0 fs-4 d-flex align-items-center"
        onClick={() => {
          setIcona(!icona)
          dispatch({
            type: 'REMOVE_FROM_FAVLIST',
            payload: fav,
          })
        }}
      >
        {icona ? <FaHeart /> : <FaRegHeart />}
      </button>
    </div>
  )
}

export default SingleFav
