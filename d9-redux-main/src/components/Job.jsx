import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'

const Job = ({ data }) => {
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
  const dispatch = useDispatch()

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
        <button
          className="bg-transparent border-0 fs-4"
          onClick={() => {
            if (getName(data.company_name)) {
              dispatch({
                type: 'REMOVE_FROM_FAVLIST',
                payload: data.company_name,
              })
            } else {
              dispatch({
                type: 'ADD_TO_FAVLIST',
                payload: data.company_name,
              })
            }
          }}
        >
          {getName(data.company_name) ? <FaHeart /> : <FaRegHeart />}
        </button>
      </Col>
      <Col xs={9}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  )
}

export default Job
