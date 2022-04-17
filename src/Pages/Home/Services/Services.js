import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div id="experts" className="container">
          <h2 className="text-primary text-center mt-5">Our Experts</h2>
          <div className="row">
            {services.map((service) => (
              <Expert key={service.id} service={service}></Expert>
              
            ))}
          </div>
        </div>
      );
};

export default Services;