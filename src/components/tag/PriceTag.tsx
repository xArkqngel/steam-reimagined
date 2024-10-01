interface PriceTagProps {
  price: number;
  discount: string;
}

function PriceTag({ price, discount }: PriceTagProps) {
  const originalPrice = (price * 100) / (100 - parseInt(discount));

  return (
    <>
      {parseInt(discount) > 0 ? (
        <div className="flex flex-row gap-1 font-bold">
          <div className="bg-[color:var(--accent-green)] text-[color:var(--bg-main)] px-2 py-1 rounded-sm">
            -{discount}%
          </div>
          <div className="flex flex-col text-xs">
            <div className="text-[color:var(--text-dim)]">
              <del>${originalPrice.toFixed(2)}</del>
            </div>
            <div className="text-[color:var(--accent-green)]">${price}</div>
          </div>
        </div>
      ) : price > 0 ? (
        <div>${price}</div>
      ) : (
        <div className="pr-2">Free to play</div>
      )}
    </>
  );
}

export default PriceTag;
