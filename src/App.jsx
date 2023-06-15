import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function App() {
  const districts = [
    {
        id: 1,
        title: 'Thiruvananthapuram',
        img: 'https://www.ekeralatourism.net/wp-content/uploads/2018/08/kovlam.jpg',
        desc: 'Capital city of Kerala'
    },
    {
        id: 2,
        title: 'Kollam',
        img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/9c/f4/af/worlds-largest-bird-sculpture.jpg?w=500&h=400&s=1',
        desc: 'Land of Cashew Industry'
    },
    {
        id: 3,
        title: 'Pathanamthitta',
        img: 'https://trip2kerala.com/wp-content/uploads/2021/11/Konni-Pathanamthitta-Eco-Tourisum.jpg',
        desc: 'Pilgrim Capital of Kerala'
    },
    {
        id: 4,
        title: 'Alappuzha',
        img: 'https://www.tourmyindia.com/blog//wp-content/uploads/2021/09/Best-Places-to-Visit-in-Alleppey-Kerala.jpg',
        desc: 'Venice of the East'
    },
    {
        id: 5,
        title: 'Kottayam',
        img: 'https://keralatourism.travel/images/destinations/headers/kottayam-kerala-tourism-entry-fee-timings-holidays-reviews-header.jpg',
        desc: 'Land of Letters, Latex, and Lakes'
    },
    {
        id: 6,
        title: 'Idukki',
        img: 'https://1.bp.blogspot.com/-IM7E4VYZ_Yg/VWf7HZ72E9I/AAAAAAAABYs/rWf7U4cj-rQ/s1600/Tourist%2BAttractions%2BIdukki%2BKerala%252C%2BTourist%2BPlaces%2Bto%2BVisit%2Bin%2BIdukki%2BKerala.jpg',
        desc: 'Land of Mountains, Dams, and Spice Gardens'
    },
    {
        id: 7,
        title: 'Ernakulam',
        img: 'https://i0.wp.com/travelogueofkuntala.com/wp-content/uploads/2020/07/thundam-Ashbin.jpg?resize=750%2C818&ssl=1',
        desc: 'Commercial and Industrial Hub of Kerala'
    },
    {
        id: 8,
        title: 'Thrissur',
        img: 'https://www.trawell.in/admin/images/upload/049130109ThrissurPooram_Main.jpg',
        desc: 'Cultural Capital of Kerala'
    },
    {
        id: 9,
        title: 'Palakkad',
        img: 'https://www.trawell.in/admin/images/upload/148645431SilentValleyPark_Main.jpg',
        desc: 'Gateway to Kerala'
    },
    {
        id: 10,
        title: 'Malappuram',
        img: 'https://keralatourism.travel/images/destinations/headers/nilambur-kerala-tourism-entry-fee-timings-holidays-reviews-header.jpg',
        desc: 'City of Hills, Soccer Capital/Mecca of Football'
    },
    {
        id: 11,
        title: 'Kozhikode',
        img: 'https://yometro.com/images/places/kozhikode-beach.jpg',
        desc: 'City of Spices'
    },
    {
        id: 12,
        title: 'Wayanad',
        img: 'https://www.keralatourism.org/images/microsites/wayanad/waynadu-1024x768.jpg',
        desc: 'Land of Paddy Fields and Coffee Plantations'
    },
    {
        id: 13,
        title: 'Kannur',
        img: 'https://assets.traveltriangle.com/blog/wp-content/uploads/2020/01/Madayipara_10th-jan.jpg',
        desc: 'Land of Looms and Lore'
    },
    {
        id: 14,
        title: 'Kasaragod',
        img: 'https://cimages1.touristlink.com/repository/B/E/K/A/L/F/O/R/bekal-fort-kasargod_1.jpg',
        desc: 'Land of Gods, Forts, and Beaches'
    }
];

  return (
    
    <div style={{ margin: '50px' }}>
      <center><h1>Districts in kerala</h1></center>
       <Container>
      <Row>
        
        {
          districts.map((e)=>(
            <Col key={e.id}>
              <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{height:'200px'}} src={e.img}/>
      <Card.Body>
        <Card.Title>{e.title}</Card.Title>
        <Card.Text>
         {e.desc}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </Col>
          ))
        }
        
       </Row>
       
    </Container>
   
  </div>
  )
}
