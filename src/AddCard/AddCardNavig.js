import React from "react";

function AddCardNav({deck}){
  return(
  <div className="container">
    <nav>
      <ol>
        <li className="breadcrumb-primary"><a href="/">Home</a></li>
          <li className="breadcrumb-primary"><a href={`/decks/${deck.id}`}>{deck.name}</a></li>
          <li className="breadcrumb-secondary">Add Card</li>
       </ol>
    </nav>
  </div>
          
  );
}

export default AddCardNavig;