import React from 'react'

const ChatHeader = ({user}) => {
  return (
    <div className="align-items-start py-2 px-4 w-100 border-bottom sticky-top " style={{ borderRadius: "8px", backgroundColor:'green'}}>
    <div className="d-flex align-items-center py-1">
        <div className="position-relative">
            <img src="https://pics.craiyon.com/2023-11-15/GZp-tcMSTqOJ-270CwHCIA.webp" className="rounded-circle mx-2" alt={user.username} width="60" height="60" />
        </div>
        <div className="flex-grow-1">
            <strong style={{fontSize:'25px'}}>Logged in as <span className='text-warning'>{user.username}</span></strong>
        </div>
    </div>
</div>
    )
}

export default ChatHeader