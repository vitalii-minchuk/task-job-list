interface ILoader {
  type?: 'dark' | 'light';
}
function Loader({ type = 'dark' }: ILoader) {
  return (
    <div className="flex items-center justify-center ">
      <div
        className={`w-16 h-16 border-b-2 rounded-full animate-spin ${
          type === 'dark' ? 'border-gray-900' : 'border-gray-200'
        }`}
      />
    </div>
  );
}

Loader.defaultProps = {
  type: 'dark',
};

export default Loader;
