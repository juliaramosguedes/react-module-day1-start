import React from 'react';
import './App.css';

const App = () => {
  const user = {
    firstName: 'Julia',
    lastName: 'Ramos',
    image: 'https://cdn11.bigcommerce.com/s-wzfpfq4l/images/stencil/1280x1280/products/769/787/Sunflower__41797.1457994092.png?c=2&imbypass=on'
  };

  const displayName = () => {
    if (user.lastName) {
      return `${user.firstName} ${user.lastName}`
    }

    return user.firstName;
  }

  return (
    <div className="title">
      <h1>Hello, {displayName()}</h1>
      <img src={user.image} className="img-title" />
    </div>
  );
};

export default App;