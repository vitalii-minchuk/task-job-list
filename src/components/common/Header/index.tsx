import GitHubSvg from '../../../assets/svgs/GitHubSVG';

function Header() {
  return (
    <header className="w-full h-[60px] bg-gray-700 text-gray-300 shadow-lg shadow-gray-700">
      <div className="my-container h-full flex justify-between items-center">
        <h2 className="text-2xl">task-job-list</h2>
        <button
          className="p-[8px] rounded-full flex justify-between items-center gap-[10px] transition-all hover:bg-gray-600"
          type="button"
          onClick={() =>
            window.open(
              'https://github.com/vitalii-minchuk/task-job-list',
              '_blank'
            )
          }
        >
          <p className="uppercase text-sm">View code</p>
          <GitHubSvg width="24px" height="24px" />
        </button>
      </div>
    </header>
  );
}

export default Header;
