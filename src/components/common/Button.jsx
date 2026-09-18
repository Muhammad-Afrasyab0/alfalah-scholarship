function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}) {
  const classes = `button button--${variant} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;