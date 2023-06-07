// HIGHER ORDER COMPONENT
// This component will be wrapped around all the pages

const Wrapper = (Component: React.FC) => () => {
  return (
    <div className="content">
      <Component />
    </div>
  );
}
export default Wrapper