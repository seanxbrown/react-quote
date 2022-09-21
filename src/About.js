import Container from "react-bootstrap/Container";

const About = () => {
    return (
        <Container className="mt-5">
            <h5 className="fw-bold">About this app</h5>
            <p>Inspiration bank is an application designed to help you find and save motivational quotes from historical figures.
                If you know who you're searching for, you can enter their name in the search bar above. The search bar is also attached 
                to a datalist of the 150 authors with the most quotes from the API, so you can also browse through the most popular authors.
                
                It's also possible to get a quote at random, so you can discover completely new ideas.
            </p>
            <p>The top 150 cited authors - as determined by the API - are listed in the popular authors tab.
                The authors in this tab are generated from an API call when the app loads, so the list is dynamic. 
                There, you can find a short bio of the author and a link to their wikipedia page so you can find out more about them.
            </p>
            <p>Finally, you can view all the quotes you have saved in the saved quotes tab. They are displayed in a carousel view so you 
                can scroll through them.
            </p>
        </Container>
    )
}

export default About