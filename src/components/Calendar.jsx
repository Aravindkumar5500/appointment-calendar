import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import AppointmentForm from "../components/AppointmentFrom.jsx";


export default function CalendarPage() {
  
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState(() => {
    const saved = localStorage.getItem("appointments");
    return saved ? JSON.parse(saved) : {};
  });
  const [editIndex, setEditIndex] = useState(null); 
  const [showForm, setShowForm] = useState(false); 

  useEffect(() => {
    localStorage.setItem("appointments", JSON.stringify(appointments));
  }, [appointments]);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setShowForm(true);
    setEditIndex(null);   };

  const handleAddAppointment = (newAppointment) => {
    const dateKey = selectedDate.toDateString();
    const dateAppointments = appointments[dateKey] || [];
    if (editIndex !== null) {
      // Edit mode
      const updatedAppointments = [...dateAppointments];
      updatedAppointments[editIndex] = newAppointment;
      setAppointments({ ...appointments, [dateKey]: updatedAppointments });
    } else {
      // Add mode
      setAppointments({ ...appointments, [dateKey]: [...dateAppointments, newAppointment] });
    }
    setShowForm(false);
    setEditIndex(null);
  };

  const handleEditAppointment = (index) => {
    setShowForm(true);
    setEditIndex(index);
  };

  const handleDeleteAppointment = (appointmentIndex) => {
    const dateKey = selectedDate.toDateString();
    const updatedAppointments = (appointments[dateKey] || []).filter((_, i) => i !== appointmentIndex);
    setAppointments({ ...appointments, [dateKey]: updatedAppointments });
    alert("Appointment deleted successfully!");
    // setShowForm(false);
    // setEditIndex(null);
  };

  const currentAppointments = appointments[selectedDate.toDateString()] || [];
  const editingAppointment = editIndex !== null ? currentAppointments[editIndex] : null;

  return (
   
      <>
  
    <div className="mt-6 flex justify-center flex-col items-center w-full">
  <h3 className="text-lg font-semibold mb-4 text-white">
    Appointments on{selectedDate.toDateString()}
  </h3>


     <div className="flex justify-center mt-6">
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          onClickDay={handleDateClick}
          className="react-calendar"
        />
    </div>


  {currentAppointments.map((appt, index) => (
    <div
      key={index}
      className="w-[90%] max-w-md mb-4 p-4 border rounded-lg flex justify-between items-center bg-[#2b2b2b] text-white shadow-lg"
    >
      <div className="flex justify-center flex-col">
      <span>
        <strong>Time:</strong> {appt.time} <br />
        <strong className="patientname">Patient Name 🤧: </strong>{" "}
        <span className="patient">{appt.patient}</span> <br />
        <strong className="doctorname">Doctor Name 🩺: </strong>{" "}
        <span className="doctor">{appt.doctor}</span>
      </span>

      <div className="flex space-x-2">
        <button
          onClick={() => handleEditAppointment(index)}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Edit
        </button>
        <button
          onClick={() => handleDeleteAppointment(index)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
        </div>
      </div>
    </div>
  ))}

      
      </div>

      {showForm && (
        <AppointmentForm
          onAdd={handleAddAppointment}
          initialData={editingAppointment}
          
        />
      )}
    
    </>
  
);
}
