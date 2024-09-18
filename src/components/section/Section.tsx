interface SectionProps {
  children: React.ReactNode;
  title: string;
  button?: React.ReactNode;
}

function Section({ children, title, button }: SectionProps) {
  return (
    <section className="flex flex-col">
      <div className="flex flex-row justify-between text-[color:var(--text-main)]">
        <h2 className="text-lg">{title}</h2>
        {button}
      </div>
      {children}
    </section>
  );
}

export default Section;
