import image from './assets/image.jpg'


export const Form = () => {
    return(
        <>
          <div class="bg-zinc-700 h-screen flex justify-center items-center">
        {/* <!-- card --> */}
        <div class="bg-zinc-800 p-2 mx-6 md:h-64 rounded-2xl flex flex-col md:flex-row">
            {/* <!-- image --> */}
        <img src={image} alt=""
        class="md:h-60 md:w-52 h-80 w-96  rounded-xl md:rounded-l-xl md:rounded-r-none transform hover:scale-105 duration-200 hover:rounded-xl"/>
        
        <div class="p-6 md:p-12 ">
            <h2 class="font-serif text-white text-xl text-center md:text-left">
                Get diet and fitness tips in your inbox
            </h2>
            <p class="max-w-xs my-4 text-xs text-center text-white md:text-left">
                Eat better and exercise better.Sign up for the Diet & Fitness newsletter.
            </p>
            <div class="flex flex-col md:flex-row  my-8">
            <input type="text" placeholder="Enter your email address"
            class="bg-zinc-800 p-2 px-4 text-sm text-center border border-zinc-600 text-white focus:outline-none"/>
            <button class="px-5 py-3 text-xs my-2 md:mx-2.5 md:my-0 rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white">Subscribe</button>
            </div>
        </div>
        </div>
    </div>
        </>
    )
}