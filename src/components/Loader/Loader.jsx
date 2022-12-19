import { MagnifyingGlass } from 'react-loader-spinner';

const Loader = () => {
  <MagnifyingGlass
    visible={true}
    height="250"
    width="250"
    ariaLabel="MagnifyingGlass-loading"
    wrapperStyle={{
      position: 'fixed',
      top: '50%',
      left: ' 50%',
      transform: 'translate(-50%, -50%)',
    }}
    wrapperClass="MagnifyingGlass-wrapper"
    glassColor="#c0efff"
    color="#e15b64"
  />;
};
export default Loader;
