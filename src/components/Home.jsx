import React, { useState } from 'react'
import foto1 from '../assets/images/icon-pro.svg'
import foto2 from '../assets/images/icon-arcade.svg'
import foto3 from '../assets/images/icon-advanced.svg'
import end from '../assets/images/icon-thank-you.svg'



const btn = [
{
  id: 0,
  name: '1'
},
{ id: 1,
  name: '2'
},
{ id: 2,
  name: '3'
},
{
  id: 3,
  name: '4'
},
];

const span = [ 
  {
    id: 1,
    step: 'step 1',
    name: 'your info'
  },
  {
    id: 2,
    step: 'step 2',
    name: 'select plan'
  },
  {
    id: 3,
    step: 'step 3',
    name: 'add-ns'
  },
  {
    id: 4,
    step: 'step 4',
    name: 'summary'
  },
].map(({id, step, name}) => 
  <li key={id} style={{
  padding: '10px 0',
  height: '80px',
  letterSpacing: '2px'
}}><span>{step}<h3>{name}</h3></span></li>)

// ----------------- This is empty step1
const Step1 = () => {
return(
<>

</>
  )
}





const Step2 = () => {
  const [boxSelect, setBoxSelect] = useState([false, true, false])
  const [moveToggle, setMoveToggle] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelectPlan = (index) => {
    setSelectedPlan(index);
  };

  const handleToggle = () => {
    setMoveToggle(!moveToggle)
  }

  const handleBox = (index) => {
  const newBoxSelect = Array(3).fill(false);  // Reset all boxes to false
  newBoxSelect[index] = true;  // Set the clicked box to true
  setBoxSelect(newBoxSelect);
};

  return(
    <>
      <div className='step-2'>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly biling.</p>
      <div className='boxs'>
            <div 
            onClick={() => handleBox(0)}
            className={`select ${boxSelect[0]  ? 'selected' : false}`}
            >
              <img src={foto1}/>
              <h3>arcade</h3>
              {!moveToggle ? <h6>$9/mo</h6> :  <h6>$100/mo</h6>  }
          {moveToggle && <span>2 months free</span>}
            </div>

           <div 
            onClick={() => handleBox(1)}
            className={`select ${boxSelect[1] ? 'selected' : false}`}
            >
              <img src={foto2}/>
              <h3>advanced</h3>
             {!moveToggle ? <h6>$12/mo</h6> : <h6>$130/mo</h6>}
          {moveToggle && <span>2 months free</span>}
            </div>

            <div 
            onClick={() => handleBox(2)}
            className={`select ${boxSelect[2] ? 'selected' : false}`}
            >
              <img src={foto3}/>
              <h3>pro</h3>
           {!moveToggle  ?  <h6>$15/mo</h6> : <h6>$170/mo</h6>}
          {moveToggle && <span>2 months free</span>}
            </div>
    </div>
            <div className='check-box'>
              <span className={`change-color ${!moveToggle ? 'setColor' : ''}`}
              >
                monthly
              </span>
              <button onClick={handleToggle} className={`background-change ${moveToggle ? 'moved' : ''}`}>
                <div className={`toggle ${moveToggle ? 'move' : ''}`}></div>
              </button>
              <p className={`change-color ${moveToggle ? 'setColor' : ''}`}
              >
                Yearly
              </p>
            </div>
      </div>
    </>
  )
}

const Step3 = () => {
  const [boxSelect, setBoxSelect] = useState([false, false, false])
  const [moveToggle, setMoveToggle] = useState(null);
  

  const handleBox = (index) => {
    const newBoxSelect = [...boxSelect];
    newBoxSelect[index] = !newBoxSelect[index];
    setBoxSelect(newBoxSelect);
  };
    


  return(
    <>
  <div className='step-3'>
      <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience</p>
        <div className='boxs-3'>
        
        <div 
          className={`box-checkbox ${boxSelect[0] ? 'selected' : false}`}
          >
          <input 
          className='checkbox'
          onClick={() => handleBox(0)}
          type="checkbox" 
          />
            <h3>online service  <p>access to multiplayer games</p></h3>
           {'move'? <span>+$1/mo</span>:<span>+$10/yr</span>}
        </div>

        <div 
          className={`box-checkbox ${boxSelect[1] ? 'selected' : false}`}
          >
          <input
          className='checkbox'
           type="checkbox" 
           onClick={() => handleBox(1)}
          />
          <h3>larger storage<p>extra 1tb of cloud save</p></h3>
          {'move'  ? <span>+$2/mo</span> :<span>+$20/yr</span>}
        </div>

        <div 
          className={`box-checkbox ${boxSelect[2] ? 'selected' : false}`}
          >
          <input 
          className='checkbox'
          onClick={() => handleBox(2)}
          type="checkbox" 
          />
          <h3>Customizable profile<p>custom theme on your profile</p></h3>
          {'move' ?<span>+$3/mo</span> :<span>+$30/yr</span>}
        </div>

      </div>
  </div>
    </>
  )
}

const Step4 = () => {
  
  return(
    <>
    <div className='step-4'>
    <h1>Finishing up</h1>
        <p>Double-check everything looks ok before confirming</p>
        <div className='boxs-4'>
          <div className='arcade'>
            <h3>
              arcade (monthly)
            <p>$9/mo</p> 
            </h3>
              <a href="">change</a>
          </div>

          <div>
            <span className='line'></span>
            <h5>
              online servie 
              <p>$1/mo</p>
            </h5>

              <h5>
                larger storage
              <p>$2/mo</p>
              </h5>

          </div>
            
        </div>

        <h3 className='h3'>Total (per month) <span>+$12/mo</span></h3>
    </div>
    </>
  )
}
const End = () => {
  return(
    <>
      <div className='end'>
        <img src={end} />
        <h1>Thank you!</h1>
        <p>
          thanks for confirming your subscription! We hope you have
            fun using our platform. If you ever need support, please
            feel free to email us at jasurumarov.94@gmail.com
        </p>
      </div>
    </>
  )
}

// ----------------- All pages components 


const pages = [
  {
    id: 1,
    page: <Step1 />
  },
  {
    id: 2,
    page: <Step2 />
  },
  {
    id: 3,
    page: <Step3 />
  },
  {
    id: 4,
    page: <Step4 />
  },
  {
    id: 5,
    page: <End />
  },
]

const Home = () => {
const [currentPage, setCurrentPage] = useState(0);
const [clickPage, setClickPage] = useState(true);
const [inputNumber, setInputNumber] = useState('')
const [inputName, setInputName] = useState('')
const [inputEmail, setInputEmail] = useState('')
const [formErrors, setFormErrors] = useState({});



const validateFrom = () => {
  const errors = {};

   // Validate name
   if (!inputName.trim()) {
    errors.name = 'Name is field is required';
  } 

  // Validate email
  if (!inputEmail.trim()) {
    errors.email = 'Email is field is required';
  } else if (!/\S+@\S+\.\S+/.test(inputEmail)) {
    errors.email = 'Invalid email format';
  }

  // Validate phone number
  if (!inputNumber.trim()) {
    errors.number = 'Number is field is required';
  } else if (!/^\d+$/.test(inputNumber)) {
    errors.number = 'Invalid phone number';
  }

  setFormErrors(errors);
  return Object.keys(errors).length === 0;
}


const handleInputEmail = (e) => {
  return(
    setInputEmail(e.target.value)
  )
}

const handleInputName = (e) => {
  return(
    setInputName(e.target.value)
  )
}

const handleInputNumber = (e) => {
  return(
    setInputNumber(e.target.value)
  )
}



const nextPage = () => {
  const isFormValid = validateFrom();
  if (isFormValid) {
    setCurrentPage((prevIndex) => prevIndex + 1);
  }
};

const handleSubmit = (e) => {
  e.preventDefault();
  const isFormValid = validateFrom();
  if (isFormValid) {
  }
};

const goBack = () => {
  if (currentPage > 0) {
    setCurrentPage((prevIndex) => prevIndex - 1);
  }
};

// ----------------- button next pages 
const next = currentPage < 3 ? <button className='next-btn' onClick={nextPage}>Next step</button>
: currentPage < 4  ? <button className='next-btn' onClick={nextPage}>Submit</button>: null; 

// ----------------- button prev pages 
const prev = currentPage > 0 && currentPage < 4 && ( <span className='prev' onClick={goBack}>Go back</span> );

const handlePage = (id) => {
  setCurrentPage(id);
};

// ----------------- buttons step
const getBtn = btn.map(({id, name}) => 
<li key={id}
style={{
  padding: '10px 0',
  height: '80px',
}}
>


 <button 
  className={`border-btn ${id === currentPage ? 'active' : ''}`}
  value={clickPage} 
  // onClick={() => handlePage(id)}
  >
    {name}
</button>
</li>)



  return (
    <div className='Home'>
      <section>
            <div className='block1'>
                <div className='block-btn'>
                  {getBtn}
                </div>
                <div className='block-spn'>
                  {span}
                </div>
            </div>
          <div className='block'>

            {pages[currentPage].page}

            {prev}

{!currentPage&& <div className='step-1'>
                <h1>Personal info</h1>
                <p>please provide your name, email address, and phone number</p>
   
          <label htmlFor="name">Name</label>
          <input 
          className={`input-name ${formErrors.name ? 'invalid' : ''}`}
          type="text"
          name='name'
          id='name'
          placeholder='Type your name'
          value={inputName}
          onChange={handleInputName}
          />
  {formErrors.name && <p className="error">{formErrors.name}</p>}

          <label htmlFor="email">Email address</label>
          <input 
          className={`input-email ${formErrors.email ? 'invalid' : ''}`}
          type="email" 
          id='email'
          name='email'
          placeholder='Type your email'
          value={inputEmail}
          onChange={handleInputEmail}
          />
 {formErrors.email && <p className="error">{formErrors.email}</p>}

          <label htmlFor="phoneNumber">Phone Number</label>
          <input 
          className={`remove-number-arrows ${formErrors.number ? 'invalid' : ''}`}
          type="number" 
          id='phoneNumber' 
          name='phoneNumber' 
          value={inputNumber} 
          onChange={handleInputNumber}
          placeholder='Type your phone-number'
          />
  {formErrors.number && <p className="error">{formErrors.number}</p>}
</div>}

          {next}
          
          </div>
      </section>
    </div>
  )
}

export default Home









































