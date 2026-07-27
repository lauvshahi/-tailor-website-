import { Award, Scissors, Sparkles, Users } from "lucide-react";
import suit11 from "../assets/suit11.jpg";


export default function About() {

  const features = [
    {
      icon: <Scissors size={24}/>,
      title: "Expert Craftsmanship",
      text: "Every piece is carefully designed and stitched by skilled artisans."
    },

    {
      icon: <Sparkles size={24}/>,
      title: "Premium Quality",
      text: "Selected fabrics and attention to detail for a perfect finish."
    },

    {
      icon: <Award size={24}/>,
      title: "20+ Years Experience",
      text: "Trusted tailoring service with decades of experience."
    },

    {
      icon: <Users size={24}/>,
      title: "Happy Customers",
      text: "Serving customers with dedication and personalized fitting."
    }
  ];


  return (

    <section className="
      bg-white
      py-24
      px-6
    ">


      <div className="
        max-w-7xl
        mx-auto
        grid
        lg:grid-cols-2
        gap-16
        items-center
      ">


        {/* IMAGE SECTION */}

        <div className="
          relative
        ">


<img
  src={suit11}
  alt="Tailor working"
  className="
    w-full
    h-[600px]
    object-cover
    rounded-3xl
    shadow-2xl
    hover:scale-105
    transition
    duration-700
  "
/>



          {/* Experience Card */}

          <div className="
            absolute
            -bottom-8
            right-8
            bg-[rgb(95,5,5)]
            text-white
            rounded-2xl
            px-8
            py-6
            shadow-xl
          ">


            <h3 className="
              text-5xl
              font-bold
            ">
              20+
            </h3>


            <p className="
              text-sm
              tracking-wide
              mt-1
            ">
              Years Experience
            </p>


          </div>


        </div>







        {/* CONTENT SECTION */}


        <div>


          <p className="
            text-sm
            tracking-[5px]
            text-[rgb(95,5,5)]
            font-medium
            uppercase
          ">
            About Unique Tailoring Center
          </p>




          <h2 className="
            mt-5
            text-5xl
            md:text-6xl
            font-semibold
            leading-tight
            text-gray-900
          ">

            Crafting
            <span className="
              text-[rgb(95,5,5)]
            ">
              {" "}Elegance
            </span>

            <br />

            With Perfect Fits

          </h2>





          <p className="
            mt-6
            text-gray-600
            text-lg
            leading-relaxed
            max-w-xl
          ">

            At Unique Tailoring Center, we believe clothing
            is more than fabric. It represents confidence,
            personality, and individuality.

            With over two decades of experience, we create
            premium suits, coats, and traditional outfits
            with precision, passion, and timeless style.

          </p>





          {/* FEATURES */}


          <div className="
            mt-10
            grid
            sm:grid-cols-2
            gap-6
          ">


            {
              features.map((item,index)=>(

                <div
                  key={index}

                  className="
                    group
                    flex
                    gap-4
                    p-5
                    rounded-2xl
                    border
                    border-gray-100
                    hover:border-[rgb(95,5,5)]
                    hover:shadow-lg
                    transition
                    duration-300
                  "
                >


                  <div className="
                    text-[rgb(95,5,5)]
                    mt-1
                    group-hover:scale-110
                    transition
                  ">
                    {item.icon}
                  </div>



                  <div>

                    <h3 className="
                      font-semibold
                      text-gray-900
                    ">
                      {item.title}
                    </h3>


                    <p className="
                      text-sm
                      text-gray-500
                      mt-2
                      leading-relaxed
                    ">
                      {item.text}
                    </p>

                  </div>


                </div>


              ))
            }


          </div>




          {/* BUTTON */}


          <button

            className="
              mt-10
              bg-[rgb(95,5,5)]
              text-white
              px-8
              py-4
              rounded-full
              font-medium
              hover:bg-[rgb(120,10,10)]
              hover:-translate-y-1
              transition
              duration-300
              shadow-lg
            "

          >

            Discover Our Story

          </button>




        </div>


      </div>


    </section>

  );
}