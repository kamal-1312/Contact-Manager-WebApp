import React from "react";
import ContactCard from "./ContactCard";

// passing props(inbuilt) as a property for contact
const ContactList = (props) => {
    console.log(props);
  
    const deleteConactHandler = (id) => {
      props.getContactId(id);
    };
    const renderContactList = props.contacts.map((contact) => {
      return (
        <ContactCard
          contact={contact}
          clickHander={deleteConactHandler}
          key={contact.id}
        />
      );
     }) ;
    //adding contacts info to the react  page 
    return <div className="ui called list"> {renderContactList} </div>;
   
    };

export default ContactList ;