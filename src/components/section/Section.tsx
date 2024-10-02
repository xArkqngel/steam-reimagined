interface SectionProps {
  children: React.ReactNode;
  title: string;
  button?: React.ReactNode;
}

function Section({ children, title, button }: SectionProps) {
  return (
    <section className="flex flex-col w-[1200px]" key={title}>
      <div className="flex flex-row justify-between text-[color:var(--text-main)]">
        <h2 className="text-base font-semibold pb-4">{title}</h2>
        {button}
      </div>
      {children}
    </section>
  );
}

export default Section;
