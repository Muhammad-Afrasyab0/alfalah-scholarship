function GlassCard({
  children,
  className = "",
  strong = false,
  hover = false,
}) {
  const classes = [
    strong ? "glass-strong" : "glass",
    hover ? "motion-lift" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={classes}>{children}</div>;
}

export default GlassCard;