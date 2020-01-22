import React from 'react';

const UserLocationForm = () => {
  return (
    <div className="user-location-form" >
      <h1>Featured Pet</h1>
      <form>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="City or Province"
        />
      </form>
    </div>
  );
}

export default UserLocationForm;
