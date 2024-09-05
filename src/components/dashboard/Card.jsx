const Card = ({ data }) => {
  return (
    <div
      className="space-y-4 bg-orange-100 p-4 rounded-md text-blue-900 flex-1"
      style={{ backgroundColor: `${data.color}` }}
    >
      <h2 className="text-xl font-bold">{data.title}</h2>
      <p className="font-semibold text-3xl">{data.number}</p>
      <p className="text-lg font-semibold" style={{ color: data.textcolor }}>
        {data.vacancy}
      </p>
    </div>
  );
};

export default Card;
