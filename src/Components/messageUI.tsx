import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineEdit, AiOutlineSend } from 'react-icons/ai'; // Import icons
import { FaImage, FaPaperclip, FaRegLaughBeam, FaSmile } from 'react-icons/fa'; // Additional icons for options

interface Message {
  name: string;
  message: string;
  date: string;
  isActive?: boolean;
  id: number;
}

interface ChatMessage {
  sender: string;
  message: string;
  time: string;
  senderType: 'user' | 'recipient';
}

const MessageUI: React.FC = () => {
  // Sample user messages
  const messages: Message[] = [
    { id: 0, name: 'Neha Jaiswal', message: "It's great connecting with you", date: 'Oct 12' },
    { id: 1, name: 'Shruti Sharma', message: "Let's connect", date: 'Oct 11' },
    { id: 2, name: 'Kiran Suresh', message: "Become an SDET at top companies", date: 'Oct 9' },
    { id: 3, name: 'Pradeep Kumar', message: 'Career', date: 'Oct 9' },
    { id: 4, name: 'Priyata Singh', message: 'Details required', date: 'Oct 8' },
    { id: 5, name: 'Prerana Masurkar', message: 'You: I wanted to address the experience...', date: 'Oct 23' },
    { id: 6, name: 'Prerana Singh', message: 'You: I wanted to address the experience...', date: 'Oct 17' },
    { id: 7, name: 'Arti Masurkar', message: 'You: I wanted to address the experience...', date: 'Oct 27' },
    { id: 8, name: 'Ajit Singh', message: 'You: I wanted to address the experience...', date: 'Oct 17' },
    { id: 9, name: 'Prerana Patil', message: 'You: I wanted to address the experience...', date: 'Oct 7' },
    { id: 10, name: 'Amit Singh', message: 'You: Looking forward to our meeting...', date: 'Oct 5' },
    { id: 11, name: 'Rohit Sharma', message: 'You: Let’s finalize the project details...', date: 'Oct 17' },
    { id: 12, name: 'Sneha Gupta', message: 'You: Great, I’ll review the document...', date: 'Oct 7' },
    { id: 13, name: 'Priya Rao', message: 'You: Can we discuss the next steps?', date: 'Oct 27' },
    { id: 14, name: 'Anil Verma', message: 'You: Please share the updated proposal...', date: 'Oct 17' },
    { id: 15, name: 'Neha Joshi', message: 'You: I have completed the task...', date: 'Oct 7' },
    { id: 16, name: 'Karan Malhotra', message: 'You: Let’s arrange a call to go over the details...', date: 'Oct 27' },
    { id: 17, name: 'Nikita Mehta', message: 'You: Can you please confirm the schedule?', date: 'Oct 7' },
    { id: 18, name: 'Saurabh Singh', message: 'You: I’ll send the presentation shortly...', date: 'Oct 27' },
  ];

  // Chat messages for each user
  const chatConversations: Record<number, ChatMessage[]> = {
    0: [
      { sender: 'Neha Jaiswal', message: "It's great connecting with you.", time: '5:00 PM', senderType: 'recipient' },
      { sender: 'You', message: 'Thanks, Neha!', time: '5:15 PM', senderType: 'user' },
    ],
    1: [
      { sender: 'Shruti Sharma', message: "Let's connect soon.", time: '4:00 PM', senderType: 'recipient' },
      { sender: 'You', message: 'Sure thing, Shruti!', time: '4:10 PM', senderType: 'user' },
    ],
    5: [
      { sender: 'Prerana Masurkar', message: 'I am looking for senior profiles with 4.5 years of experience', time: '5:37 PM', senderType: 'recipient' },
      { sender: 'Mohammad Kashif Patel', message: 'I wanted to address the experience requirement.', time: '9:01 PM', senderType: 'user' },
    ],
  };

  // State to track the selected user and modal visibility
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [userMessage, setUserMessage] = useState<string>('');
  const [messagesInModal, setMessagesInModal] = useState<{ sender: 'user' | 'ai'; text: string }[]>([]);
  const modalRef = useRef<HTMLDivElement | null>(null); // Ref for modal

  // Function to handle sending a message and receiving a response from AI
  const handleSendMessage = () => {
    if (userMessage.trim()) {
      const newMessages = [
        ...messagesInModal,
        { sender: 'user', text: userMessage },
        { sender: 'ai', text: 'Thank you for the opportunity! If you have any more questions or if there’s anything else I can help you with, feel free to ask.' }
      ];
      setMessagesInModal(newMessages);
      setUserMessage('');
    }
  };

  // Close modal when clicking outside of it
  const handleOutsideClick = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsModalOpen(false); // Close the modal if clicked outside
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('mousedown', handleOutsideClick); // Add event listener on mount
    } else {
      document.removeEventListener('mousedown', handleOutsideClick); // Remove event listener on unmount
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick); // Clean up
    };
  }, [isModalOpen]);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar with Scrollable List */}
      <div className="w-1/3 border-r bg-white flex flex-col">
        <div className="p-4 border-b text-lg font-semibold">Messaging</div>
        <div className="flex-1 overflow-y-auto">
          {messages.map((msg) => (
            <div
              key={msg.id}
              onClick={() => setSelectedUserId(msg.id)}
              className={`flex items-center p-4 border-b cursor-pointer ${selectedUserId === msg.id ? 'bg-gray-200' : ''}`}
            >
              <div className="w-12 h-12 rounded-full bg-gray-300 mr-3"></div>
              <div>
                <div className="font-semibold">{msg.name}</div>
                <div className="text-sm text-gray-600">{msg.message}</div>
              </div>
              <div className="ml-auto text-sm text-gray-500">{msg.date}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Section */}
      <div className="w-2/3 flex flex-col relative">
        {/* Keep the header unchanged */}
        <div className="p-4 border-b bg-white flex justify-between">
          <div className="text-lg font-semibold text-gray-800">Chat</div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4">
          {selectedUserId !== null && chatConversations[selectedUserId]?.map((chat, index) => (
            <div key={index} className={`flex mb-4 ${chat.senderType === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex items-start ${chat.senderType === 'recipient' ? 'mr-2' : 'ml-2'}`}>
                {chat.senderType === 'recipient' && (
                  <div className="w-10 h-10 rounded-full bg-gray-300 mr-2"></div>
                )}
                <div className={`max-w-xs p-4 rounded-lg ${chat.senderType === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                  {chat.senderType === 'recipient' && (
                    <div className="font-semibold">{chat.sender}</div>
                  )}
                  <div className="text-sm">{chat.message}</div>
                  <div className="text-xs text-gray-500 mt-1 text-right">{chat.time}</div>
                </div>
                {chat.senderType === 'user' && (
                  <div className="w-10 h-10 rounded-full bg-gray-300 ml-2"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Message Input with Options */}
        {selectedUserId !== null && (
          <div className="p-4 border-t bg-white flex flex-col">
            {/* Centered Buttons Above the Green Line */}
            <div className="flex justify-center mb-2">
              <button className="flex items-center border border-blue-500 text-blue-500 bg-white font-semibold py-2 px-4 rounded-full hover:bg-blue-100 mr-2">
                <AiOutlineEdit className="mr-1" style={{ color: 'inherit' }} /> {/* Edit icon */}
                <div className="border-l border-blue-500 h-6 mx-2"></div> {/* Vertical line */}
                Yes, Interested
              </button>
              <button className="flex items-center border border-blue-500 text-blue-500 bg-white font-semibold py-2 px-4 rounded-full hover:bg-blue-100">
                <AiOutlineEdit className="mr-1" style={{ color: 'inherit' }} /> {/* Edit icon */}
                <div className="border-l border-blue-500 h-6 mx-2"></div> {/* Vertical line */}
                No, Thanks
              </button>
            </div>

            {/* Green Line */}
            <div className="h-1 bg-green-500 mb-2"></div> {/* Green line */}

            {/* Input Field with Edit Icon */}
            <div className="flex items-center relative mb-2">
              <input
                type="text"
                placeholder="Write a message..."
                className="flex-1 border rounded-full p-3 text-sm outline-none pr-10"
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
              />
              <button
                className="absolute right-10 text-blue-500 flex items-center"
                onClick={() => setIsModalOpen(true)}
              >
                <AiOutlineEdit className="mr-2" /> {/* Icon next to the button text */}
              </button>
            </div>

            {/* Options for Uploads and Emojis */}
            <div className="flex justify-between">
              <button className="flex items-center text-gray-500 hover:text-blue-500">
                <FaImage className="mr-1" /> Image
              </button>
              <button className="flex items-center text-gray-500 hover:text-blue-500">
                <FaPaperclip className="mr-1" /> Attachment
              </button>
              <button className="flex items-center text-gray-500 hover:text-blue-500">
                <FaRegLaughBeam className="mr-1" /> GIF
              </button>
              <button className="flex items-center text-gray-500 hover:text-blue-500">
                <FaSmile className="mr-1" /> Emoji
              </button>
              <button
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full flex items-center justify-center"
                onClick={handleSendMessage}
              >
                Send
                <AiOutlineSend className="ml-2" />
              </button>
            </div>
          </div>
        )}



        {/* Modal for AI Interaction - Positioned within the chat section */}
        {isModalOpen && (
          <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-10">
            <div className="bg-white rounded-lg p-4 w-3/4" ref={modalRef}>
              {/* Display Messages in the Modal */}
              <div className="mb-4 max-h-64 overflow-y-auto">
                {messagesInModal.map((msg, index) => (
                  <div key={index} className={`flex mb-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs p-3 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Field and Send Button */}
              <div className="flex flex-col items-start mt-4"> {/* Align items to the start */}
                <input
                  type="text"
                  placeholder="Your prompt"
                  className="border rounded-full p-2 outline-none w-full mb-2" // Added width and margin-bottom for spacing
                  value={userMessage}
                  onChange={(e) => setUserMessage(e.target.value)}
                />
                <div className="w-full flex justify-end"> {/* Align button to the right */}
                  <button
                    className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-full flex items-center justify-center"
                    onClick={handleSendMessage}
                  >
                    Generate
                    <AiOutlineSend className="ml-2" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageUI;
