import { useState } from "react";
import patients from "../data/patients.json";
import doctors from "../data/doctors.json";

export default function AppointmentForm({ onAdd, initialData }) {
  const [patient, setPatient] = useState(initialData?.patient || "");
  const [doctor, setDoctor] = useState(initialData?.doctor || "");
  const [time, setTime] = useState(initialData?.time || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!patient || !doctor || !time) {
      alert("Please fill in all fields.");
      return;
    }
    onAdd({ patient, doctor, time });
    alert(initialData ? "Appointment updated!" : "Appointment added!");
    setPatient("");
    setDoctor("");
    setTime("");
  };

  return (
    <>
    <div className="appointment-form">
    <form onSubmit={handleSubmit} className=" border p-4 rounded bg-light">
      <div className=" mb-3">
        <label className="form-label">Patient</label>
        <select className="form-select" value={patient} onChange={(e) => setPatient(e.target.value)}>
          <option value="">Select Patient</option>
          {patients.map((p, index) => (
            <option key={index} value={p}>{p}</option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Doctor</label>
        <select className="form-select" value={doctor} onChange={(e) => setDoctor(e.target.value)}>
          <option value="">Select Doctor</option>
          {doctors.map((d, index) => (
            <option key={index} value={d}>{d}</option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Time</label>
        <input type="time" className="form-control" value={time} onChange={(e) => setTime(e.target.value)} />
      </div>

      <button type="submit" className="btn btn-success w-100">
        {initialData ? "Update Appointment" : "Add Appointment"}
      </button>
    </form>
    </div>
    </>
  );
}
