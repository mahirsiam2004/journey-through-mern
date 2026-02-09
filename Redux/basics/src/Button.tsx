

export const Button = ({children,type,handler}) => {
  const style =
    type === "danger"
      ? " bg-red-500 text-white rounded px-3 py-2"
      : "bg-blue-500 text-white  rounded px-3 py-2 ";
  return (
    <button onClick={handler} className={style}>
      {children}
    </button>
  )
}
