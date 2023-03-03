import styles from "./panel.module.css"

function containerClassNameProvider(baseClassname, additionalClassName) {
  if (additionalClassName === undefined) {
    return baseClassname;
  }
  return `${baseClassname} ${additionalClassName}`
}

export function Panel({children, className}) {
  const containerClassName = containerClassNameProvider(styles.container, className);

  return (
      <div className={containerClassName}>
        {children}
      </div>
  );
}
