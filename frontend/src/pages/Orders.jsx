import { useState } from "react";


function Orders() {


  const [orders, setOrders] = useState([

    {
      id: "001",
      customer: "Ram",
      item: "Coat Pant",
      status: "Booking"
    },

    {
      id: "002",
      customer: "Hari",
      item: "Wedding Suit",
      status: "Stitching Started"
    },

    {
      id: "003",
      customer: "Sita",
      item: "Daura Suruwal",
      status: "Ready"
    }

  ]);



  const statuses = [
    "Booking",
    "Measurement Taken",
    "Stitching Started",
    "Ready",
    "Delivered"
  ];



  const updateStatus = (id) => {


    setOrders(

      orders.map((order)=>{


        if(order.id === id){

          const currentIndex =
            statuses.indexOf(order.status);


          const nextStatus =
            statuses[currentIndex + 1];


          return {

            ...order,

            status:
            nextStatus || order.status

          };

        }


        return order;


      })

    );


  };



  return (

    <section className="
      min-h-screen
      bg-gray-100
      py-12
    ">


      <div className="
        max-w-6xl
        mx-auto
        px-6
      ">


        <h1 className="
          text-4xl
          font-bold
          mb-8
        ">
          Order Management
        </h1>



        <div className="
          bg-white
          rounded-2xl
          shadow-lg
          overflow-hidden
        ">


          <table className="w-full">


            <thead className="
              bg-black
              text-white
            ">

              <tr>

                <th className="p-4 text-left">
                  Order ID
                </th>

                <th className="p-4 text-left">
                  Customer
                </th>

                <th className="p-4 text-left">
                  Item
                </th>

                <th className="p-4 text-left">
                  Status
                </th>

                <th className="p-4">
                  Action
                </th>

              </tr>


            </thead>



            <tbody>


            {orders.map((order)=>(


              <tr
                key={order.id}
                className="
                  border-b
                  hover:bg-gray-50
                "
              >


                <td className="p-4">
                  {order.id}
                </td>


                <td className="p-4 font-medium">
                  {order.customer}
                </td>


                <td className="p-4">
                  {order.item}
                </td>


                <td className="p-4">


                  <span className="
                    bg-blue-100
                    text-blue-700
                    px-4
                    py-2
                    rounded-full
                    text-sm
                  ">

                    {order.status}

                  </span>


                </td>



                <td className="p-4">


                  <button

                    onClick={() =>
                      updateStatus(order.id)
                    }

                    className="
                      bg-black
                      text-white
                      px-4
                      py-2
                      rounded-lg
                      hover:bg-gray-800
                    "

                  >

                    Next Status

                  </button>


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


export default Orders;