interface IProps {
  currentPage: number;
  itemCount: number;
  children: JSX.Element[];
}

const Paginate = ({ currentPage, itemCount, children }: IProps): JSX.Element => {
  const indexOfLastCard = currentPage * itemCount;
  const indexOfFirstCard = indexOfLastCard - itemCount;
  const currentCards = children.slice(indexOfFirstCard, indexOfLastCard);

  return <>{currentCards.map((item) => item)}</>;
};

export default Paginate;
