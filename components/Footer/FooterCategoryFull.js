const FooterCategoryFull = ({ title, nav }) => {
  return (
    <div className="sm:text-center">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <ul className="font-thin text-sm">
        {nav.map((n, key) => (
          <li className="hover:underline cursor-pointer" key={key}>
            {n}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterCategoryFull;
