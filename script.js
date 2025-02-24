// Doctor time slots based on ID
const doctorSlots = {
    1: ['09:00 AM - 10:00 AM', '11:00 AM - 12:00 PM', '02:00 PM - 03:00 PM'],
    2: ['10:00 AM - 11:00 AM', '12:00 PM - 01:00 PM', '03:00 PM - 04:00 PM'],
    3: ['08:00 AM - 09:00 AM', '01:00 PM - 02:00 PM', '04:00 PM - 05:00 PM'],
    4: ['09:00 AM - 11:00 AM', '01:00 PM - 03:00 PM', '05:00 PM - 07:00 PM'],
    5: ['11:00 AM - 01:00 PM', '03:00 PM - 05:00 PM', '06:00 PM - 08:00 PM']
};

// Select elements
const doctorSelect = document.getElementById('doctorSelect');
const slotSelect = document.getElementById('slotSelect');
const appointmentForm = document.getElementById('appointmentForm');
const confirmationSection = document.getElementById('confirmationSection');
const confirmationMessage = document.getElementById('confirmationMessage');

// When doctor is selected, populate time slots
doctorSelect.addEventListener('change', function() {
    const selectedDoctor = this.value;
    slotSelect.innerHTML = '<option value="" disabled selected>Select Time Slot</option>';

    if (doctorSlots[selectedDoctor]) {
        doctorSlots[selectedDoctor].forEach(slot => {
            const option = document.createElement('option');
            option.value = slot;
            option.textContent = slot;
            slotSelect.appendChild(option);
        });

        slotSelect.disabled = false;
    } else {
        slotSelect.disabled = true;
    }
});

// Handle form submission
appointmentForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const patientName = document.getElementById('patientName').value;
    const patientEmail = document.getElementById('patientEmail').value;
    const selectedDoctor = doctorSelect.options[doctorSelect.selectedIndex].text;
    const selectedSlot = slotSelect.value;

    // Basic validation
    if (!patientName || !patientEmail || !selectedSlot) {
        alert('Please complete all fields.');
        return;
    }

    // Confirmation message
    confirmationMessage.textContent = `Appointment for ${patientName} with ${selectedDoctor} at ${selectedSlot} has been booked successfully!`;
    confirmationSection.hidden = false;
});
