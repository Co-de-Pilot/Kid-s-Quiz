import "./Button.css";

const Button = (props) => {
  const { handleOnClick, children } = props;

  return <button onClick={handleOnClick}>{children}</button>;
};

export default Button;
