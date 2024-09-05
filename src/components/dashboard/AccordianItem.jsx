const AccordianItem = ({ data }) => {
  return (
    <div className="border-1 border-gray-400 p-4 rounded-md bg-gray-50 font-light">
      <div>
        <h2 className="font-medium text-gray-600 font-sans text-xl">
          {data.title}
        </h2>
        <p>{data.time}</p>
      </div>
    </div>
  );
};

export default AccordianItem;
