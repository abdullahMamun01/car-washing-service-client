import { Link } from 'react-router-dom';
interface BreadcrumbProps {
  pageName: string;
}
const DashboadBreadcrumb = ({ pageName }: BreadcrumbProps) => {
    
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between px-2">
      <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        {pageName}
      </h2>

      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link className="text-blue-500 font-medium" to="/dashboard">
              Dashboard /
            </Link>
          </li>
          <li className=" font-medium">{pageName}</li>
        </ol>
      </nav>
    </div>
  );
};

export default DashboadBreadcrumb;
