/* eslint-disable react/prop-types */
export const Todo = () => {
  return (
    <li className="w-full flex justify-between items-center">
      <span className="text-[1rem] c_small:text-[1.3rem]">do the dishes</span>
      <div className=" space-x-2 c_small:space-x-3 font-semibold text-white text-[1.2rem] c_small:text-2xl">
        <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 c_small:py-1.5 rounded-md">
          Edit
        </button>
        <button className="bg-red-500 hover:bg-red-600 px-4 py-2 c_small:py-1.5 rounded-md">
          Delete
        </button>
      </div>
    </li>
  );
};
