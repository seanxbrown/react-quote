import Card from "react-bootstrap/Card"

const AuthorCard = ({authors}) => {

    return (
     <>
     {authors.map(author => {
        return  <Card key={author.id}>
                    <Card.Body>
                        <Card.Title data-testid="author-name">{author.name}</Card.Title>
                        <Card.Subtitle data-testid="author-desc" className="mb-4 text-muted">{author.description}</Card.Subtitle>
                        <Card.Text data-testid="author-bio" className="mb-4 lh-base">{author.bio}</Card.Text>
                    </Card.Body>
                    <Card.Footer><a href={author.link} target="_blank" rel="noreferrer" data-testid="author-link">Learn More</a></Card.Footer>
                </Card>
     })}
     </>
    )
}

export default AuthorCard