import { Container, Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import SingleFav from './SingleFav'

const FavList = function () {
  const favList = useSelector((currentState) => {
    return currentState.favouritesList.content
  })

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          {favList.map((element, i) => {
            return <SingleFav key={i} fav={element} />
          })}
        </Col>
      </Row>
    </Container>
  )
}

export default FavList
