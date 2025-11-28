
const Box = ({ children, display, columns,gap }) => {

const style = `
  ${display}
  ${columns}
  ${gap}

`;

  return (
    <>
      <div className={style}>{children}</div>
    </>
  );
}

export default Box;
