import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase/config';

export function BirthdayBoyPage() {
  useEffect(() => {
    //   getCurrentUser();
  }, []);

  //   const getCurrentUser = async () => {
  //     const data = await firestore
  //       .collection('birthday')
  //       .doc('')
  //       .onSnapshot(doc => console.log(doc.data()));
  //   };

  const [state, setState] = useState({
    birthdayBoyName: null,
    wish: null,
    birthdayDate: null,
  });

  const handleSubmit = async evt => {
    evt.preventDefault();
    console.log(state);
    const birthdatCollection = await firestore
      .collection('birthday')
      .add({ birthdayBoyName: state.birthdayBoyName });

    console.log('ID :>> ', birthdatCollection.id);

    await firestore
      .collection('birthday')
      .doc(birthdatCollection.id)
      .collection('wishes')
      .add({ wish: state.wish, date: state.birthdayDate });
  };

  const handleChange = ({ target: { name, value } }) => {
    setState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <h4>Birthday Boy Page</h4>
      <form onSubmit={handleSubmit}>
        <input
          name="birthdayBoyName"
          onChange={handleChange}
          type="text"
          placeholder="birthday boy name"
          required
        />
        <input
          name="wish"
          onChange={handleChange}
          type="text"
          placeholder="your wish"
          required
        />
        <input
          name="birthdayDate"
          onChange={handleChange}
          type="date"
          placeholder="date of birthday"
          required
        />
        <button type="submit">create</button>
      </form>
    </>
  );
}
