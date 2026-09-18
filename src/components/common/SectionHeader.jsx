function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  return (
    <div
      className={`section-header section-header--${align}`}
    >
      {eyebrow && (
        <div className="eyebrow">
          {eyebrow}
        </div>
      )}

      <h2 className="heading-lg">
        {title}
      </h2>

      {description && (
        <p className="text-large">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;