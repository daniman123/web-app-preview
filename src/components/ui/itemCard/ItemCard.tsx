export interface IItemCard {
  cardTitle: string;
  cardDescription: string;
}

const ItemCard: React.FC<IItemCard> = ({ cardDescription, cardTitle }) => {
  return (
    <div className="relative flex flex-col h-full max-w-64 border border-slate-300 backdrop-blur-lg rounded-md p-3">
      <div className="flex-grow bg-black min-h-80 rounded-md"></div>
      <div className="p-1">
        <div className="text-sm font-semibold">{cardTitle}</div>
        <div className="text-xs">{cardDescription}</div>
      </div>
    </div>
  );
};

export default ItemCard;
