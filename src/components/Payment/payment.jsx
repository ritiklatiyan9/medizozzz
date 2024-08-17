import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import jsPDF from 'jspdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const PaymentPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    phoneNumber: ''
  });

  const myProducts = useSelector((state) => state.MedicalSlice.myProducts);
  const quantities = useSelector((state) => state.MedicalSlice.quantities);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the WhatsApp message
    const { fullName, email, address, phoneNumber } = formData;
    const orderSummary = myProducts.map((product) => `${product.name} - Quantity: ${quantities[product.id] || 0}`).join('\n');
    const whatsappMessage = `New Payment:\nName: ${fullName}\nEmail: ${email}\nAddress: ${address}\nPhone: ${phoneNumber}\n\nOrder Summary:\n${orderSummary}`;

    // Construct the WhatsApp URL
    const phoneNumberWithoutSpaces = formData.phoneNumber.replace(/\s+/g, ''); // Remove whitespace from phone number
    const phoneNumberWithCountryCode = '8869883042'; // Your WhatsApp number
    const whatsappURL = `https://wa.me/${phoneNumberWithCountryCode}?text=${encodeURIComponent(whatsappMessage)}`;

    // Redirect the user to the WhatsApp chat
    window.location.href = whatsappURL;
  };

  const generatePDF = (fullName, email, address, phoneNumber, orderSummary) => {
    const doc = new jsPDF();
    
    // Set background color
    doc.setFillColor(240, 240, 240);
    doc.rect(0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight(), 'F');
    
    // Set header
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.setTextColor(44, 130, 201);
    doc.text('Order Details', 20, 30);

    // Set body text
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Name: ${fullName}`, 20, 50);
    doc.text(`Email: ${email}`, 20, 60);
    doc.text(`Address: ${address}`, 20, 70);
    doc.text(`Phone: ${phoneNumber}`, 20, 80);

    // Set order summary title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.setTextColor(44, 130, 201);
    doc.text('Order Summary', 20, 100);

    // Set order summary text
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    let startY = 110;
    const lines = doc.splitTextToSize(orderSummary, 160);
    for (let i = 0; i < lines.length; i++) {
        doc.text(lines[i], 20, startY);
        startY += 10;
    }

    const pdfName = `order_${fullName.replace(/\s+/g, '_')}.pdf`;
    return doc.output('datauristring');
};

  const downloadPDF = () => {
    
  };

  const buyHandler = () => {
    toast("Purchased Successfully !");
    const { fullName, email, address, phoneNumber } = formData;
    const orderSummary = myProducts.map((product) => `${product.name}- ${product.price} - Quantity: ${quantities[product.id] || 0}`).join('\n');
    const pdfData = generatePDF(fullName, email, address, phoneNumber, orderSummary);

    const downloadLink = document.createElement('a');
    downloadLink.href = pdfData;
    downloadLink.download = `order_${fullName.replace(/\s+/g, '_')}.pdf`;
    downloadLink.click();
  }

  return (
    <div className="container mx-auto p-4 bg-gradient-to-r from-yellow-50 to-pink-100">
      <h1 className="text-3xl font-bold mb-8 text-center">Billing Details</h1>

      <h2 className="text-3xl font-bold mb-8 text-center">Payment Information</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg">
        {/* Your form inputs */}

        <div className="mb-8 justify-center">
          <h2 className="text-4xl font-bold mb-4">Order Summary</h2>
          <ul className='font-bold'>
            {myProducts.map((product) => (
              <li key={product.id}>
                {product.name} - {product.price} - Quantity: {quantities[product.id] || 0}
              </li>
            ))}
          </ul>
        </div>

        {/* Full Name */}
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-gray-700 font-semibold mb-2">Full Name:</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="form-input mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Your Name"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input mt-1 block p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="your-email@example.com"
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700 font-semibold mb-2">Address:</label>
          <textarea
            name="address"
            id="address"
            value={formData.address}
            onChange={handleChange}
            className="form-textarea mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            rows="3"
            placeholder="123 Main St, City, Country"
          ></textarea>
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-gray-700 font-semibold mb-2">Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="form-input mt-1 block p-2 w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder=""
          />
        </div>

        {/* "Buy" Button */}
        <div className="mb-4">
        <button type="submit" onClick={buyHandler} className="bg-gradient-to-r from-blue-900 to-blue-400 text-white py-2 px-8 rounded hover:bg-blue-600 transition duration-300 flex items-center">
          <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
          Buy
        </button>
          
        </div>
      </form>
    </div>
  );
};

export default PaymentPage;