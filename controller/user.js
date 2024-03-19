const rooms = [
  {
    roomId: 0,
    noOfSeats: "200",
    amenities: ["AC", "TV", "Hot-Water", "Wifi", "Lunch"],
    price: 1000,
    status: false,
    rName: "conference"

  },
  {
    roomId: 1,
    noOfSeats: "10",
    amenities: ["AC", "TV", "Hot-Water", "Wifi"],
    price: 500,
    status: false,
    rName: "Family Room"
  },
  {
    roomId: 2,
    noOfSeats: "50",
    amenities: ["AC", "Wifi", "Lunch", "Dinner"],
    price: 2300,
    status: false,
    rName: "Get-Together",
  },
  {
    roomId: 3,
    noOfSeats: "150",
    amenities: ["AC", "Wifi", "Lunch"],
    price: 3000,
    status: true,
    rName: "Get-Together"
  }
];
const customer_details = [{
  customer_name: "priya",
  roomId:1,
  date: "12/02/2024",
  startTime: "4:00:00 am",
  endTime: "9:00:00",
  status: "booked"
},
{
  customer_name: "Raj",
  roomId:2,
  date: "12/02/2024",
  startTime: "4:00:00 am",
  endTime: "9:00:00",
  status: "pending"
},
{
  customer_name: "rithvik",
  roomId:1,
  date: "13/02/2024",
  startTime: "4:00:00 am",
  endTime: "9:00:00",
  status: "booked"
},
{
  customer_name: "riththi",
  roomId:3,
  date: "10/02/2024",
  startTime: "4:00:00 am",
  endTime: "9:00:00",
  status: "booked"
}
]

const createRoom = (req, res) => {
  try {

   
        rooms.push(req.body);
        res.status(200).send({
            message: "Room Created successfully",
            rooms
          });
    }
      
      
    catch (error) {
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
};
const BookRoom = (req, res) => {
  try {
     customer_details.map((e)=>{
      if((e.roomId != req.body.roomId) && (e.date != req.body.date))
      customer_details.push(req.body);
     })
        
        res.status(200).send({
          message: "Room bokked Successfully",
          customer_details

        });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error"
    });
  }
};

const getBookedRooms = (req, res) => {
  try {
    const bookedRooms = customer_details.filter((e) =>{
      if(e.status === "booked" )
      return e.roomId
     });

    res.status(200).send({
      message: "get Booked rooms successfully",
      bookedRooms
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error"
    });
  }
};
const getAllCustomers = (req, res) => {
  try {
    res.status(200).send({
      message: "customer feched Successfully",
      customer_details
    });
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error"
    });
  }
};

const getBookedCustomers = (req, res) => {
  try {
    const bookedroom = customer_details.map((e) => {
      if (e.status === "booked")
      {
        return `customer Name ${e.customer_name} booked with the room  ${e.roomId} `;
      }
       
    });

    res.status(200).send({
      message: "customer booked no of rooms fetch successfully",
      bookedroom
    });
    
  } catch (error) {
    res.status(500).send({
      message: "Internal Server Error"
    });
  }
};

export default {
  createRoom,
  BookRoom,
  getBookedRooms,
  getBookedCustomers,
  getAllCustomers
};
