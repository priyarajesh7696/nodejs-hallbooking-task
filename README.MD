hallbooking-api task
﻿

GET
user/getAllCustomers
http://localhost:8000/user/getAllCustomers
﻿


POST
user/createRoom
localhost:8000/
﻿{
      "roomId": 5,
      "noOfSeats": "15",
      "amenities": ["AC", "TV", "Hot-Water", "Wifi"],
      "price": 1000,
      "status": false,
      "rName": "guest room"
     
    }

GET
user/getBookedRooms
localhost:8000/user/getBookedRooms
﻿

POST
user/bookRoom
localhost:8000/user/bookRoom
﻿

Body
raw (json)
json
{
    "customername":"priya",
    "roomid":"1",
    "date":"1/03/2024",
    "start_time":"4:00:00",
    "end_time":"10:00:00"
    }
GET
user/getBookedCustomers
﻿

