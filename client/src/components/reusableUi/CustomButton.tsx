type CustomButtonProps = {};

export default function CustomButton({ label, onClick }: CustomButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}
