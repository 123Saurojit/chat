const contacts = [
    { id: 1, name: 'John Doe', lastMessage: 'Hey there!' },
    { id: 2, name: 'Jane Smith', lastMessage: 'What\'s up?' },
    { id: 3, name: 'Jane Smith', lastMessage: 'What\'s up?' },
    { id: 4, name: 'Alice Johnson', lastMessage: 'See you later.' },
    { id: 5, name: 'Alice Johnson', lastMessage: 'See you later.' },
    { id: 6, name: 'Alice Johnson', lastMessage: 'See you later.' },
    { id: 7, name: 'Alice Johnson', lastMessage: 'See you later.' },
    { id: 8, name: 'Alice Johnson', lastMessage: 'See you later.' },
    { id: 9, name: 'Alice Johnson', lastMessage: 'See you later.' },
    { id: 10, name: 'Alice Johnson', lastMessage: 'See you later.' },
    { id: 11, name: 'Alice Johnson', lastMessage: 'See you later.' },
  ];


  
const Contacts = ({ style = null , setContact }) => {

  const handleContactClick = ( id ) =>{
    setContact(id)
    }
  return (
    <div className={"  bg-gray-900 px-4 overflow-y-auto " + style}>
    <h2 className="text-xl font-bold mb-4 text-center sticky top-0 bg-inherit py-4">Contacts</h2>
    
      <ul>
        {contacts.map(contact => (
          <li key={contact.id} className="mb-4" onClick={ ()=> handleContactClick( contact.id) }>
            <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 cursor-pointer">
              <h3 className="text-lg font-semibold">{contact.name}</h3>
              <p className="text-gray-400">{contact.lastMessage}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Contacts