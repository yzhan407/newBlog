import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './InnerArticle.css';


// here UseContext has to be in {}
function InnerArticle(props){
    console.log(props)
        return(
            <div className="inner-article">
                <Card className="text-center">
                    <Card.Header></Card.Header>
                    <Card.Body>
                        <Card.Title>{props.data.title}</Card.Title>
                        <Card.Text>
                            <p dangerouslySetInnerHTML={{__html: props.data.content}} />
                        </Card.Text>
                        <Button variant="primary" href={props.data.link}>Take a Look</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">{props.data.time}</Card.Footer>
                </Card>
            </div>
        )
    
}
    
export default InnerArticle;