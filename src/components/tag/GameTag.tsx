interface GameTagProps {
  tag: string;
}

function GameTag({ tag }: GameTagProps) {
  return (
    <div className="rounded-sm text-xs text-[color:var(--text-dim)] bg-[color:var(--bg-highlight)] p-2">
      {tag}
    </div>
  );
}

export default GameTag;
