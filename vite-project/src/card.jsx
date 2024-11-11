import gotImage from "./assets/got.jpg"

export const Card = ({name}) => {

    

    
return(
<>
   <div className="flex justify-center items-center  bg-slate-600">
   <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
          <img
            src={gotImage}
            alt=""
            className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
          />
          <div className="mt-6 mb-2">
            <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
              <h2>{name}</h2>
            </span>
            <h2 className="text-xl font-semibold tracking-wide"></h2>
          </div>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
            amet
          </p>
        </div>
   </div>
</>
);
}