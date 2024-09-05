const Recents = () => {
  return (
    <div className="bg-bluish my-4 rounded-md text-white overflow-hidden">
      <div className="bg-darkbluish p-4 text-2xl text-center">
        <p>Recent Activity</p>
      </div>
      <div className="space-y-6 p-4">
        <p>10.40AM, Fri 10 Sept 2021</p>
        <p className="font-semibold text-2xl">You Posted a New Job</p>
        <p className="text-wrap">
          Kindly check the requirements and terms of work and make sure
          everything is right
        </p>
        <div className="flex justify-between gap-4">
          <p>Today you makes 12 activity</p>
          <button className="bg-orangish px-4 py-2 rounded-md">
            See all activity
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recents;
