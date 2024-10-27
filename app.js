// const express = require('express');
// const path = require('path');
// const app = express();

// // Serve static files from the "public" directory
// app.use(express.static(path.join(__dirname, 'backend')));




// app.post("/get", async (req, res) => {
//     var name = req.body.name;
//     var email = req.body.email;
//     var phone = req.body.phone-no;
//     var date = req.body.appointment-date;
//     var time = req.body.appointment-time;


//         const newUser = ({
//             name: name,
//             email: email,
//             phone: phone-no,
//             date: appointment-date,
//             time: appointment-time
//         });

//         await newUser.save();

//     });


//     const accountSid = 'AC493d65ba8693dbb3a678f1154ad6f2ec';
//     const authToken = 'ecc5546568907574b8a02353f43417cb';
//     const client = require('twilio')(accountSid, authToken);

//     client.messages
//         .create({
//             body: 'Hi your appointmet is ',
//             from: 'whatsapp:+14155238886',
//             to: 'whatsapp:'+ newUser.phone
//         })
//         .then(message => console.log(message.sid));




// // Start the server
// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });







// const express = require('express');
// const path = require('path');
// // const mongoose = require('mongoose');
// const twilio = require('twilio');
// const bodyParser = require('body-parser');
// // const session = require('express-session');
// const app = express();

// app.use(express.static(path.join(__dirname, 'backend')));
// app.use(bodyParser.json()); 



// // mongoose.connect('mongodb+srv://GundaNamratha:nam123@cluster0.0af2lft.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // });


// // const userSchema = new mongoose.Schema({
// //   name: String,
// //   email: String,
// //   phone: String,
// //   appointmentDate: String,
// //   appointmentTime: String,
// // });

// // const User = mongoose.model('User', userSchema);


// // app.post("/get", async (req, res) => {
// //   const { name, email, phone, appointmentDate, appointmentTime } = req.body;

// // //   try {
    
// // //     const existingAppointment = await User.findOne({
// // //       appointmentDate: appointmentDate, 
// // //       appointmentTime: appointmentTime,
// // //     });

// // //     if (existingAppointment) {
      
// // //     //   return res.status(409).json({ message: 'This slot is already booked, please choose another date or time.' });
// // //       return res.status(409).send('<script>alert("This slot is already booked, please choose another date or time.");  window.location.href = "/slot.html"; </script>');
// // //     }

    
// //     const newUser = new User({
// //       name: name,
// //       email: email,
// //       phone: phone,
// //       appointmentDate: appointmentDate,
// //       appointmentTime: appointmentTime,
// //     });

   
// //     await newUser.save();
// //     const user =  await User.findOne({ phone: phone });
// //     // req.session.user = user;
    
// //     const accountSid = 'AC493d65ba8693dbb3a678f1154ad6f2ec';
// //     const authToken = 'ecc5546568907574b8a02353f43417cb';
// //     const client = twilio(accountSid, authToken);
// //     // console.log(phone);
// //     const phone_no = `+91${user.phone}`;
    
// //     const message = await client.messages.create({
// //       body: `Hi ${name}, your appointment is confirmed on ${appointmentDate} at ${appointmentTime}.`,
// //       from: 'whatsapp:+14155238886',
// //       to: 'whatsapp:' + phone_no
// //     });

// //     console.log('Message sent:', message.sid);

    
// //     // res.status(200).json({ message: 'Appointment booked and message sent!' });
// //     res.status(200).send('<script>alert("Appointment booked and message sent!");  window.location.href = "/slot.html";</script>');
// //   } 
// // //   catch (error) {
// // //     console.error('Error:', error);
// // //     // res.status(500).json({ error: 'Failed to book appointment or send message' });
// // //     res.status(500).send('<script>alert("Failed to book appointment or send message");  window.location.href = "/slot.html";</script>');
// // //   }}
// // );



// app.post("/get", async (req, res) => {
//     // Log the received data
//     // console.log("Received data:", req.body);
  
//     // Extract the values from the request body
//     // const { name, email, phone, appointmentDate, appointmentTime } = req.body;
  
//     // Log the phone number to verify it is correctly extracted
//     // console.log("Phone number received:", req.body.phone);
  
//     // Validate that all necessary fields are present
//     // if (!name || !email || !phone || !appointmentDate || !appointmentTime) {
//     //   return res.status(400).send('<script>alert("All fields are required."); window.location.href = "/slot.html";</script>');
//     // }
  
//     // try {
//     //   // Check if the appointment slot is already booked
//     //   const existingAppointment = await User.findOne({
//     //     appointmentTime: appointmentTime,
//     //   });
  
//     //   if (existingAppointment) {
//     //     return res.status(409).send('<script>alert("This slot is already booked, please choose another date or time.");</script>');
//     //   }
  
//     //   // Create a new user with the appointment details
//     //   const newUser = new User({
//     //     name,
//     //     email,
//     //     phone,
//     //     appointmentDate,
//     //     appointmentTime,
//     //   });
  
//     //   // Save the new appointment to the database
//     //   await newUser.save();


//     const p_in = document.getElementById("phone");
//     const phone_in = p_in.value;

//     const n_in = document.getElementById("name");
//     const name_in = n_in.value;
//       // Use Twilio to send a WhatsApp message with appointment details
//       const accountSid = 'AC493d65ba8693dbb3a678f1154ad6f2ec';
//       const authToken = 'ecc5546568907574b8a02353f43417cb';
//       const client = twilio(accountSid, authToken);
  
//       // Format the phone number to include the country code
//       const phone_no = `+91${phone_in}`;
      
//       // Send the WhatsApp message using Twilio
//       const message = await client.messages.create({
//         body: `Hi ${name_in}, your appointment is confirmed on ${appointmentDate} at ${appointmentTime}.`,
//         from: 'whatsapp:+14155238886',
//         to: 'whatsapp:' + phone_no // Use the phone variable here
//       });
  
//       console.log('Message sent:', message.sid);
  
//       // Send a success response back to the client
//       res.status(200).send('<script>alert("Appointment booked and message sent!"); window.location.href = "/slot.html";</script>');
  
//     });
  






// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


// app.post("/get", async (req, res) => {
    //     const { name, phone, appointmentDate, appointmentTime } = req.body;



    
    //     try {
        //         const accountSid = 'AC493d65ba8693dbb3a678f1154ad6f2ec'; 
        //         const authToken = 'ecc5546568907574b8a02353f43417cb'; 
        //         const client = twilio(accountSid, authToken);
        
        //         const phone_no = `+91${phone}`;
        //         const message = await client.messages.create({
            //             body: `Hi ${name}, your appointment is confirmed on ${appointmentDate} at ${appointmentTime}.`,
            //             from: 'whatsapp:+14155238886',
            //             to: `whatsapp:${phone_no}`
            //         });
            
            //         console.log('Message sent:', message.sid);
            //         res.status(200).send('<script>alert("Appointment booked and message sent!"); window.location.href = "/slot.html";</script>');
            //     } catch (error) {
                //         console.error('Error:', error);
                //         res.status(500).send('<script>alert("Failed to book appointment or send message"); window.location.href = "/slot.html";</script>');
                //     }
                // });
                



const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// Serve static files from the 'backend' directory
app.use(express.static(path.join(__dirname, 'backend')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define routes for home and booking pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'backend', 'home.html'));
});

app.get('/booking', (req, res) => {
    res.sendFile(path.join(__dirname, 'backend', 'bookin.html'));
});

const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
