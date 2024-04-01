import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import ContactItem from '../ContactItem'
import SearchBox from './SearchBox'

const ContactList = () => {
  const {contactList, keyword} = useSelector((state)=>state);
  let [filteredList, setFilteredList] = useState([]);
  useEffect(()=>{
    if(keyword !== ""){
      let list = contactList.filter((item) => item.name.includes(keyword));

      setFilteredList(list);
    }else{
      setFilteredList(contactList)
    }
  }, [keyword, contactList]);

  return (
    <div>
      <SearchBox />
      <div className="contact-list">
        {filteredList.map((item, index)=>(
          <ContactItem item={item} key={index} />
        ))}
      </div>
        {/* {contactList.map((item) => (
            <ContactItem item={item}/>
        ))} */}
    </div>
  )
}

export default ContactList