import './button.css';

const Button = ({ text, bg, color, padding, margin, border }) => {
  const button = {
    background: bg,
    color,
    padding,
    border,
    margin,
    fontWeight: '800',
    borderRadius: '10px',
    display: 'block',
  };

  return <button style={button}>{text}</button>;
};

export default Button;
