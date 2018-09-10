import React from 'react';

const Form = props => (
  <form onSubmit={ props.getStats }>
    <input type="text" name="summoner" placeholder="summoner.."/>
    <button>Get Stats</button>
  </form>
);


export default Form;