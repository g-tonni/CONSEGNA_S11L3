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
      className="mx-0 mt-3 p-3 rounded-4 shadow-sm"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3} className="d-flex align-items-center">
        <button
          className="bg-transparent border-0 fs-4 d-flex flex-column justify-content-center me-2"
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
        <Link to={`/${data.company_name}`} className="link-az">
          {data.company_name}
        </Link>
      </Col>
      <Col xs={9} className="d-flex align-items-center">
        <a
          href={data.url}
          target="_blank"
          rel="noreferrer"
          className="link-job"
        >
          {data.title}
        </a>
      </Col>
    </Row>
  )
}

export default Job
