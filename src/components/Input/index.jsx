import { Container } from "./styles";

export function Input({ title, icon: Icon, ...rest }) {
  return (
    <Container>
      <span>{title}</span>

      <div className="containerInput">
        {Icon && <Icon size={20} />}
        <input {...rest} />
      </div>
    </Container>
  );
}
