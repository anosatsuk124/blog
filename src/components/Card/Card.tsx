import './Card.css';

export interface Card {
    title: string;
    body: string;
    href: string;
}

const Card = (props: Card) => {
    return (
        <li className="link-card">
            <a href={props.href}>
                <h2>
                    {props.title}
                    <span>&rarr;</span>
                </h2>
                <p>{props.body}</p>
            </a>
        </li>
    );
};

export default Card;
