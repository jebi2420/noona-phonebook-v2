import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import ContactItem from '../ContactItem'
import SearchBox from './SearchBox'
import { Button } from 'react-bootstrap';

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

  const resetSearch = () => {
    setFilteredList(contactList);
  };

  return (
    <div className='contact-list-area'>
      <SearchBox />
      {keyword !== "" && (
        <Button onClick={resetSearch} className="mt-3">
          연락처 돌아가기
        </Button>
      )}
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