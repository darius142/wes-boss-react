import React from 'react';

class AddFishForm extends React.Component {
  creareFish(event) {
    event.preventDefault();
    const fish = {
      name: this.name.value,
      price: this.price.value,
      status: this.status.value,
      desc: this.desc.value,
      image: this.image.value,
      
    }
  }
  render() {
    return (
      <form className="fish-edit" onSubmit={(e) => this.creareFish(e)}>
        <input type="text" placeholder="Fish Name" />
        <input type="text" placeholder="Fish Price" />
        <select>
          <option value="available">Fresh</option>
          <option value="available">Sold out</option>
        </select>
        <textarea placeholder="Fish Desc" ></textarea>
        <input type="text" placeholder="Fish Image" />
        <button type="submit">+ Add Item</button>
      </form>
    )
  }
}

export default AddFishForm;
