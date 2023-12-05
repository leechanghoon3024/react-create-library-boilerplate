interface Props {
    text: string;
}
export const ExampleComponent = ({ text }: Props) => {
    return <div>Hi, Im Example Component {text}</div>;
};
