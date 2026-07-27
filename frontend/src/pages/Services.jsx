import {
  Shirt,
  Scissors,
  Sparkles,
  UserRound,
  BriefcaseBusiness
} from "lucide-react";


export default function Services() {


  const services = [

    {
      icon: <BriefcaseBusiness size={35}/>,
      title: "Premium Coat Pant",
      price: "Starting Rs. 8000",
      description:
      "Elegant formal wear designed with perfect fitting and premium fabrics."
    },


    {
      icon: <Shirt size={35}/>,
      title: "Custom Shirts",
      price: "Starting Rs. 2500",
      description:
      "Personalized shirts crafted according to your style and measurements."
    },


    {
      icon: <Scissors size={35}/>,
      title: "Wedding Suits",
      price: "Starting Rs. 15000",
      description:
      "Luxury wedding outfits made for your special moments."
    },


    {
      icon: <UserRound size={35}/>,
      title: "Traditional Wear",
      price: "Starting Rs. 5000",
      description:
      "Classic traditional designs with modern tailoring techniques."
    }


  ];



  return (

    <section className="
      bg-gray-50
      py-24
      px-6
    ">


      <div className="
        max-w-7xl
        mx-auto
      ">


        {/* Heading */}

        <div className="
          text-center
          max-w-3xl
          mx-auto
          mb-16
        ">


          <p className="
            uppercase
            tracking-[5px]
            text-sm
            text-[rgb(95,5,5)]
            font-medium
          ">
            Our Services
          </p>


          <h2 className="
            mt-5
            text-5xl
            font-semibold
            text-gray-900
          ">

            Tailoring Services
            <span className="
              text-[rgb(95,5,5)]
            ">
              {" "}Made For You
            </span>

          </h2>


          <p className="
            mt-5
            text-gray-600
            text-lg
          ">
            From classic formal wear to wedding collections,
            we create outfits that represent your personality.
          </p>


        </div>





        {/* Cards */}


        <div className="
          grid
          md:grid-cols-2
          lg:grid-cols-4
          gap-8
        ">


          {
            services.map((service,index)=>(


              <div

                key={index}

                className="
                  group
                  bg-white
                  rounded-3xl
                  p-8
                  border
                  border-gray-100
                  shadow-sm
                  hover:shadow-2xl
                  hover:-translate-y-3
                  transition
                  duration-500
                "

              >


                {/* Icon */}


                <div className="
                  w-16
                  h-16
                  flex
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[rgb(95,5,5)]
                  text-white
                  group-hover:scale-110
                  transition
                  duration-300
                ">

                  {service.icon}

                </div>





                <h3 className="
                  mt-8
                  text-xl
                  font-semibold
                  text-gray-900
                ">

                  {service.title}

                </h3>




                <p className="
                  mt-3
                  text-[rgb(95,5,5)]
                  font-semibold
                ">

                  {service.price}

                </p>




                <p className="
                  mt-4
                  text-gray-500
                  leading-relaxed
                  text-sm
                ">

                  {service.description}

                </p>




                <button className="
                  mt-6
                  text-sm
                  font-medium
                  text-gray-900
                  group-hover:text-[rgb(95,5,5)]
                  transition
                ">

                  Learn More →

                </button>



              </div>


            ))
          }


        </div>



      </div>


    </section>


  );

}