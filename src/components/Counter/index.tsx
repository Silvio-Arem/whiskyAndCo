import { CounterDiv } from './styles';

interface CounterProps {
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
}

export default function Counter({ quantity, onQuantityChange }: CounterProps) {
  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    onQuantityChange(newQuantity);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      onQuantityChange(newQuantity);
    }
  };

  return (
    <CounterDiv>
      <button onClick={handleDecrement}>-</button>
      <span>{quantity}</span>
      <button onClick={handleIncrement}>+</button>
    </CounterDiv>
  );
}