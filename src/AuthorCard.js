import Card from "react-bootstrap/Card"

const AuthorCard = ({authors}) => {

    return (
     <>
     {authors.map(author => {
        return  <Card key={author.id}>
                    <Card.Body>
                        <Card.Title>{author.name}</Card.Title>
                        <Card.Subtitle className="mb-4 text-muted">{author.description}</Card.Subtitle>
                        <Card.Text className="mb-4 lh-base"> {author.bio}</Card.Text>
                    </Card.Body>
                    <Card.Footer><a href={author.link} target="_blank">Learn More</a></Card.Footer>
                </Card>
     })}
     </>
    )
}

export default AuthorCard