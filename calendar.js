// Create a calendar instance
const calendar = new FullCalendar.Calendar(document.getElementById('calendar'), {
    initialView: 'dayGridMonth',
    dateClick: function(info) {
      showRegistrationForm(info.dateStr);
    }
  });
  
  // Render the calendar
  calendar.render();
  
  // Function to show the registration form
  function showRegistrationForm(date) {
    const registrationForm = document.getElementById('registration-form');
    registrationForm.style.display = 'block';
  
    const submitBtn = document.getElementById('submit-btn');
    submitBtn.addEventListener('click', function() {
      const address = document.getElementById('address').value;
      const phone = document.getElementById('phone').value;
      const notes = document.getElementById('notes').value;
  
      // Here, you can send the registration data to a server or perform any other desired action
      console.log('Registration Data:', { date, address, phone, notes });
  
      // Reset the form
      document.getElementById('address').value = '';
      document.getElementById('phone').value = '';
      document.getElementById('notes').value = '';
  
      // Hide the registration form
      registrationForm.style.display = 'none';
    });
  }