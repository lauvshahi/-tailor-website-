import { useState } from "react";


function Admin() {


  const [bookings, setBookings] = useState([
    {
      id: "001",
      name: "Ram",
      date: "10 Aug",
      status: "Pending"
    },
    {
      id: "002",
      name: "Hari",
      date: "12 Aug",
      status: "Done"
    },
    {
      id: "003",
      name: "Sita",
      date: "15 Aug",
      status: "Pending"
    }
  ]);



  return (

    <section className="min-h-screen bg-gray-100 py-10">


      <div className="max-w-6xl mx-auto px-6">


        {/* Header */}

        <div className="mb-8">

          <h1 className="
            text-4xl
            font-bold
            text-gray-900
          ">
            Admin Dashboard
          </h1>


          <p className="text-gray-600 mt-2">
            Manage customer tailoring bookings
          </p>

        </div>




        {/* Table Card */}

        <div className="
          bg-white
          rounded-2xl
          shadow-lg
          overflow-hidden
        ">


          <table className="w-full">


            <thead className="bg-black text-white">

              <tr>

                <th className="px-6 py-4 text-left">
                  Booking ID
                </th>


                <th className="px-6 py-4 text-left">
                  Name
                </th>


                <th className="px-6 py-4 text-left">
                  Date
                </th>


                <th className="px-6 py-4 text-left">
                  Status
                </th>


              </tr>

            </thead>



            <tbody>


              {bookings.map((booking) => (

                <tr
                  key={booking.id}
                  className="
                    border-b
                    hover:bg-gray-50
                    transition
                  "
                >


                  <td className="px-6 py-4">
                    {booking.id}
                  </td>


                  <td className="px-6 py-4 font-medium">
                    {booking.name}
                  </td>


                  <td className="px-6 py-4">
                    {booking.date}
                  </td>


                  <td className="px-6 py-4">


                    <span
                      className={`
                        px-4
                        py-2
                        rounded-full
                        text-sm
                        font-medium

                        ${
                          booking.status === "Done"

                          ?

                          "bg-green-100 text-green-700"

                          :

                          "bg-yellow-100 text-yellow-700"
                        }

                      `}
                    >

                      {booking.status}

                    </span>


                  </td>


                </tr>

              ))}


            </tbody>


          </table>


        </div>


      </div>


    </section>

  );

}


export default Admin;