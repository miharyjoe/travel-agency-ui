import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CardTravel(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://images.pexels.com/photos/2925146/pexels-photo-2925146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default  CardTravel;