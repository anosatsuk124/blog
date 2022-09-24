import Card from './Card/Card';

interface Cards {
    posts: any;
}

const Cards = (props: Cards) => {
    return (
        <ul>
            {props.posts.map((post: any) => (
                <Card
                    href={post.frontmatter.url}
                    title={post.frontmatter.title}
                    body={post.frontmatter.description}
                />
            ))}
        </ul>
    );
};

export default Cards;
