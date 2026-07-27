import { useState } from "react";


function Measurement() {


  const [measurement, setMeasurement] = useState({

    name: "",
    chest: "",
    waist: "",
    shoulder: "",
    sleeve: "",
    height: ""

  });



  const handleChange = (e) => {

    setMeasurement({

      ...measurement,

      [e.target.name]: e.target.value

    });

  };



  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(measurement);

    alert("Measurement Saved Successfully!");

  };



  return (

    <section className="min-h-screen bg-gray-100 py-12">


      <div className="
        max-w-xl
        mx-auto
        bg-white
        p-8
        rounded-2xl
        shadow-lg
      ">


        <h1 className="
          text-3xl
          font-bold
          mb-8
          text-center
        ">
          Customer Measurement
        </h1>



        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >


          {/* Customer Name */}

          <input

            type="text"

            name="name"

            placeholder="Customer Name"

            value={measurement.name}

            onChange={handleChange}

            className="
              w-full
              border
              p-3
              rounded-lg
              focus:outline-none
              focus:ring-2
              focus:ring-black
            "

          />



          {/* Chest */}

          <input

            type="number"

            name="chest"

            placeholder="Chest (inches)"

            value={measurement.chest}

            onChange={handleChange}

            className="
              w-full
              border
              p-3
              rounded-lg
            "

          />



          {/* Waist */}

          <input

            type="number"

            name="waist"

            placeholder="Waist (inches)"

            value={measurement.waist}

            onChange={handleChange}

            className="
              w-full
              border
              p-3
              rounded-lg
            "

          />



          {/* Shoulder */}

          <input

            type="number"

            name="shoulder"

            placeholder="Shoulder (inches)"

            value={measurement.shoulder}

            onChange={handleChange}

            className="
              w-full
              border
              p-3
              rounded-lg
            "

          />



          {/* Sleeve */}

          <input

            type="number"

            name="sleeve"

            placeholder="Sleeve Length (inches)"

            value={measurement.sleeve}

            onChange={handleChange}

            className="
              w-full
              border
              p-3
              rounded-lg
            "

          />



          {/* Height */}

          <input

            type="number"

            name="height"

            placeholder="Height (inches)"

            value={measurement.height}

            onChange={handleChange}

            className="
              w-full
              border
              p-3
              rounded-lg
            "

          />




          <button

            type="submit"

            className="
              w-full
              bg-black
              text-white
              py-3
              rounded-lg
              hover:bg-gray-800
              transition
            "

          >

            Save Measurement

          </button>


        </form>


      </div>


    </section>

  );

}


export default Measurement;