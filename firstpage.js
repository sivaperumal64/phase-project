// import React from 'react';
// const Dashboard = () => {
//   return (
//     <div>
//       <h1>Dashboard</h1>
//       {/* Add dashboard content here */}
//     </div>
//   );
// };

// export default Dashboard;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const InvoiceList = () => {
//   const [invoices, setInvoices] = useState([]);

//   useEffect(() => {
//     const fetchInvoices = async () => {
//       const response = await axios.get('/api/invoices');
//       setInvoices(response.data);
//     };
//     fetchInvoices();
//   }, []);

//   return (
//     <div>
//       <h2>Invoices</h2>
//       <ul>
//         {invoices.map((invoice) => (
//           <li key={invoice.id}>{invoice.number} - {invoice.amount}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default InvoiceList;
// import React, { useState } from 'react';
// import axios from 'axios';

// const PaymentForm = () => {
//   const [amount, setAmount] = useState('');
//   const [currency, setCurrency] = useState('USD');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('/api/payments', { amount, currency });
//       alert('Payment successful!');
//     } catch (error) {
//       alert('Payment failed. Please try again.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="number"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//         placeholder="Amount"
//         required
//       />
//       <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
//         <option value="USD">USD</option>
//         <option value="EUR">EUR</option>
//         <option value="GBP">GBP</option>
//       </select>
//       <button type="submit">Make Payment</button>
//     </form>
//   );
// };

// export default PaymentForm;

document.addEventListener('DOMContentLoaded', function() {  
    // Get the navigation links  
    const signinLink = document.getElementById('sigin-link');
    const loginLink = document.getElementById('login-link');  
    const getStartedLink = document.getElementById('account-link');  
    const businessLink = document.getElementById('bussiness-link');  
    const corporateLink = document.getElementById('corporate-link');  
    const cardLink = document.getElementById('card-link');  
    const currencyLink = document.getElementById('currency-link');  
    // const blogLink = document.getElementById('blog-link');
    const dictlink = document.getElementById('accounting-link');
    const einvoiceLink = document.getElementById('invoice-link');
    const invoiceautomationLink = document.getElementById('invoiceForm');
    const invoiceLink =document.getElementById('invoiceCapture-link');
    const mandatesLink = document.getElementById('mandates-link');
    const payrollLink = document.getElementById('payroll-link');
    const virtualLink = document.getElementById('virtual-link');
    const cardpaymentLink = document.getElementById('cardpayment-link');
    const policyLink = document.getElementById('policy-link');

  
    // Function to handle navigation
    function navigateTo(url, event) {
        if (event) {
            event.preventDefault();
        }
        window.location.href = url;
    }

    // Add click event listeners to the links
    if (signinLink) {  
        signinLink.addEventListener('click', (e) => navigateTo('sigin.html', e));
    }  
  
    if (loginLink) {  
        loginLink.addEventListener('click', (e) => navigateTo('login.html', e));
    }  
  
    if (getStartedLink) {  
        getStartedLink.addEventListener('click', (e) => navigateTo('account.html', e));
    }  
  
    if (businessLink) {  
        businessLink.addEventListener('click', (e) => navigateTo('bussines.html', e));
    }  
  
    if (corporateLink) {  
        corporateLink.addEventListener('click', (e) => navigateTo('corporate.html', e));
    }  
  
    if (cardLink) {  
        cardLink.addEventListener('click', (e) => navigateTo('card.html', e));
    }  
  
    if (currencyLink) {  
        currencyLink.addEventListener('click', (e) => navigateTo('currency.html', e));
    }
    if(dictlink) {
        dictlink.addEventListener('click', (e) => navigateTo('dict.html', e));
    } 
    if(einvoiceLink) {
        einvoiceLink.addEventListener('click', (e) => navigateTo('einvoice.html', e));
    }
    if(invoiceautomationLink) {
   invoiceautomationLink.addEventListener('click', (e) => navigateTo('invoiceautomation.html', e));
    }
    if(invoiceLink) {
        invoiceLink.addEventListener('click', (e) => navigateTo('inCapture.html', e));
    }
    if(mandatesLink) {
        mandatesLink.addEventListener('click', (e) => navigateTo('invoicemandates.html', e));
    }
    if(payrollLink) {
        payrollLink.addEventListener('click', (e) => navigateTo('howpay.html', e ));
    }
    if(virtualLink) {
        virtualLink.addEventListener('click', (e) => navigateTo('virtualcards.html', e));
    }
    if(cardpaymentLink) {
        cardpaymentLink.addEventListener('click', (e) => navigateTo('card.html', e));
    }
    if(policyLink) {
        policyLink.addEventListener('click', (e) => navigateTo('smart.html', e));
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const blogLink = document.getElementById('blog-link');
    
    if (blogLink) {
        // If user clicks blog link
        blogLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = 'blog.html';
            loadBlogContent();
        });
    } else {
        // If already on blog page
        loadBlogContent();
    }

    function loadBlogContent() {
        const blogSection = document.querySelector('.blog-posts');
        const blogContent = `
            <article class="blog-post">
                <img src="path/to/image1.jpg" alt="Blog post 1 image">
                <h2>The Future of AP Automation</h2>
                <p>Explore how artificial intelligence and machine learning are revolutionizing accounts payable processes...</p>
                <a href="#" class="read-more">Read More</a>
            </article>

            <article class="blog-post">
                <img src="path/to/image2.jpg" alt="Blog post 2 image">
                <h2>Mastering Global Payments</h2>
                <p>Learn about the challenges and solutions in managing international payments for growing businesses...</p>
                <a href="#" class="read-more">Read More</a>
            </article>

            <article class="blog-post">
                <img src="path/to/image3.jpg" alt="Blog post 3 image">
                <h2>Compliance in the Digital Age</h2>
                <p>Stay ahead of regulatory changes and ensure your finance operations remain compliant...</p>
                <a href="#" class="read-more">Read More</a>
            </article>
        `;
        
        blogSection.innerHTML = blogContent;
    }
});


// document.addEventListener('DOMContentLoaded', function() {
    // Navigation routes configuration
    // const routes = {
    //     'signin-link': '/auth/signin.html',
    //     'login-link': '/auth/login.html',
    //     'account-link': '/account/account.html',
    //     'business-link': '/business/business.html',
    //     'corporate-link': '/cards/corporate.html',
    //     'card-link': '/payments/card.html',
    //     'currency-link': '/exchange/currency.html',
    //     'accounting-link': '/resources/dictionary.html',
    //     'invoice-link': '/invoicing/einvoice.html',
    //     'invoiceForm': '/invoicing/automation.html',
    //     'invoiceCapture-link': '/invoicing/capture.html',
    //     'mandates-link': '/compliance/mandates.html',
    //     'payroll-link': '/payroll/payments.html',
    //     'virtual-link': '/cards/virtual.html',
    //     'cardpayment-link': '/payments/card.html',
    //     'policy-link': '/compliance/smart-policy.html',
    //     'blog-link': '/resources/blog.html'
    // };

    // Handle navigation
    // function handleNavigation() {
        // Get all elements that could be navigation links
        // const navElements = document.querySelectorAll('[data-nav-link]');

        // navElements.forEach(element => {
            // const routeKey = element.id;
            
            // if (routes[routeKey]) {
                // element.addEventListener('click', (e) => {
                    // e.preventDefault();
                    // try {
                        // window.location.href = routes[routeKey];
                    // } catch (error) {
                        // console.error(`Navigation error for ${routeKey}:`, error);
                    // }
                // });

                // Add cursor pointer to indicate clickable element
                // element.style.cursor = 'pointer';
            // }
        // });
    // }

    // Initialize navigation
    // try {
        // handleNavigation();
    // } catch (error) {
        // console.error('Navigation initialization error:', error);
    // }
// });


