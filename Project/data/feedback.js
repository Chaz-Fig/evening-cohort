document.addEventListener('DOMContentLoaded', () => {
   const feedbackInput = document.querySelector('#feedbackInput');
   const submitBtn = document.querySelector('#submitBtn'); 

   // Function submitting feedback
   const submitFeedback = (event) => {
       event.preventDefault(); // Helps handle form without causing page to reload after submission.

       const feedback = feedbackInput.value.trim(); //tried using just feedbackInput.value; however, doing this. If i just entered spaces a few times the alert would come out as a blank feedback submitted. With trim it will show the else alert of provide your feedback instead.

       if (feedback) {
           alert(`Feedback submitted: "${feedback}"`); // Shows an alert message with the feedback
           
       } else {
           alert('Please provide your feedback.'); // Shows provide your feedback message
       }
   }

   // added eventlistener
   submitBtn.addEventListener('click', submitFeedback);
});