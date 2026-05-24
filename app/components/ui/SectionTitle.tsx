type Props = {
  label: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  label,
  title,
  description,
}: Props) {
  return (
    <div className="max-w-3xl">
      <p className="mb-5 text-xs uppercase tracking-[0.4em] text-[#c3963b]">
        {label}
      </p>

      <h2 className="font-serif text-5xl leading-tight md:text-7xl">
        {title}
      </h2>

      {description && (
        <p className="mt-8 text-lg leading-relaxed text-[#292928]/70">
          {description}
        </p>
      )}
    </div>
  );
}