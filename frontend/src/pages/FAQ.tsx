import React from 'react';

const FAQ: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Frequently Asked Questions (FAQ)</h1><br />
      <div>
        <h3>1. How do I make a reservation?</h3>
        <p>To make a reservation, first use the search form on the homepage to select your travel dates and destination. Then, choose from the available hotel, flight, or car rental options and complete your booking by entering the required information.</p>
      </div><br />
      <div>
        <h3>2. How can I cancel my reservation?</h3>
        <p>To cancel your reservation, log in to your account and go to the "My Reservations" section. Select the reservation you wish to cancel and click the "Cancel" button. You can review the cancellation policy and refund status in the reservation details.</p>
      </div><br />
      <div>
        <h3>3. Can I modify my reservation?</h3>
        <p>Yes, you can modify your reservation. After logging in to your account, go to the "My Reservations" section and select the reservation you want to change. Follow the instructions to update your reservation details. For questions about eligibility, please contact our customer support team.</p>
      </div><br />
      <div>
        <h3>4. What payment methods are accepted?</h3>
        <p>We accept various payment methods including credit cards, debit cards, PayPal, and in some cases, bank transfers. You can choose your preferred payment option during the reservation process.</p>
      </div><br />
      <div>
        <h3>5. Has my reservation been confirmed?</h3>
        <p>Once your reservation is complete, you will receive a confirmation email. This email contains your reservation details, reservation number, and other important information. You can also check the status of your reservation by logging in to your account and visiting the "My Reservations" section.</p>
      </div><br />
      <div>
        <h3>6. Why do prices fluctuate?</h3>
        <p>Prices may vary based on demand and availability. To secure the best rates, it is recommended to book early. Prices are subject to change, so it's a good idea to check rates before finalizing your reservation.</p>
      </div><br />

      <div>
        <h3>7. What information is required?</h3>
        <p>When making a reservation, you typically need to provide your name, email address, phone number, and payment details. For hotel or flight reservations, you will also need to provide travel dates, destination, and the number of people staying.</p>
      </div><br />
      <div>
        <h3>9. How can I contact customer support?</h3>
        <p>To contact our customer support team, visit the "Contact Us" section on our website or email us at support@example.com. You can also reach us by phone or through live chat options available on our site.</p>
      </div>
    </div>
  );
};

export default FAQ;

