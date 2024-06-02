import useBreadcrumbs from "use-react-router-breadcrumbs";

const routes = [
  { path: "/shop/cups", breadcrumb: "Cups" },
  { path: "/shop/bowls", breadcrumb: "Bowls" },
  { path: "/shop/plates", breadcrumb: "Plates" },
  { path: "/shop/thegoodcollection", breadcrumb: "The Good Collection" },
  { path: "/products/:productId", breadcrumb: null }, // Optionally hide this if you don't want productId in breadcrumbs
];

const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes);

  return (
    <nav>
      {breadcrumbs.map(
        ({ breadcrumb }, index) =>
          breadcrumb && (
            <span key={index}>
              {breadcrumb}
              {index < breadcrumbs.length - 1 ? " > " : ""}
            </span>
          )
      )}
    </nav>
  );
};

export default Breadcrumbs;
