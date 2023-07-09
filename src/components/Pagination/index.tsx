export function Pagination() {
  return (
    <div className="flex justify-end">
      <nav aria-label="Pagination">
        <ul className="flex text-dark-grey gap-x-1">
          <li className=" ">
            <a
              href="#"
              className="w-8 h-8 flex text-center justify-center items-center border border-orange font-bold text-orange rounded-lg"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="w-8 h-8 flex text-center justify-center items-center bg-light rounded-lg"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              className="w-8 h-8 flex text-center justify-center items-center bg-light rounded-lg"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="w-8 h-8 flex text-center justify-center items-center bg-light rounded-lg"
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              className="w-8 h-8 flex text-center justify-center items-center bg-light rounded-lg"
            >
              5
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
