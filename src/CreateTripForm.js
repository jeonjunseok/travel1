// CreateTripForm.js
import React, { useState } from 'react';
import './CreateTripForm.css';

function CreateTripForm() {
  const [tripName, setTripName] = useState('');
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("여행 계획:", { tripName, location, startDate, endDate });
  };

  return (
    <div className="create-trip-form">
      <header>
        <h1>Traveler</h1>
        <nav>
          <button>여행 만들기</button>
          <button>스토리</button>
          <button>나의 노트</button>
          <button className="active">나의 여행</button>
        </nav>
      </header>
      
      <h2>여행 만들기</h2>
      <p>나의 여행 일정을 만들어보세요...</p>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>여행 코스 이름</label>
          <input 
            type="text" 
            placeholder="도쿄여행" 
            value={tripName} 
            onChange={(e) => setTripName(e.target.value)} 
          />
        </div>
        
        <div className="form-group">
          <label>어디로?</label>
          <input 
            type="text" 
            placeholder="도쿄" 
            value={location} 
            onChange={(e) => setLocation(e.target.value)} 
          />
        </div>
        
        <div className="form-group">
          <label>언제?</label>
          <div>
            <input 
              type="date" 
              value={startDate} 
              onChange={(e) => setStartDate(e.target.value)} 
            />
            <input 
              type="date" 
              value={endDate} 
              onChange={(e) => setEndDate(e.target.value)} 
            />
          </div>
        </div>
        
        <div className="button-group">
          <button type="button" className="cancel-btn">취소</button>
          <button type="submit" className="submit-btn">여행 만들기</button>
        </div>
      </form>
    </div>
  );
}

export default CreateTripForm;
