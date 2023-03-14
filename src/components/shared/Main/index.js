import './style.css';
const Main = (props) => {
  return (
    <div id={'main-section'} className={'container-fluid'}>
        {props.children}
    </div>
  );
};

export default Main;
