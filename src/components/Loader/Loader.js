import { Oval } from 'react-loader-spinner';

export const Loader = ({ height, width }) => {
  return (
    <Oval
      height={height}
      width={width}
      color="#ffffff"
      wrapperStyle={{ display: 'flex', justifyContent: 'center' }}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#ffffff"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  );
};
