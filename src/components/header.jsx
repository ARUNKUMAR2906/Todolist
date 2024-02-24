const Header = (props) => {
  return (
    <div>
      <h1 className="text-2xl font-medium">Hello! {props.username}.</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  );
};
export default Header;
