const FooterCategoryHalf = ({ title, nav }) => {
  return (
    <div className="sm:text-center">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <ul className="flex flex-wrap font-thin text-sm">
        {nav.map((n, key) => (
          <li className="w-1/2 hover:underline cursor-pointer" key={key}>
            {n}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterCategoryHalf;
