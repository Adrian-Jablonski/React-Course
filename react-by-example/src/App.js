import React, { Component } from 'react';
import './App.css';
import GuestList from './components/GuestList';

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: [
      {
        name: 'Treasure',
        isConfirmed: false,
        isEditing: false
      },
      {
        name: 'Nic',
        isConfirmed: true,
        isEditing: false
      },
      {
        name: 'Matt',
        isConfirmed: true,
        isEditing: true
      }
    ]
  }

  toggleGuestPropertyAt = (property, indexToChange) => {
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,   // using spread operator to transfer unchanged key values to new object
            [property]: !guest[property]
          }
        }
        return guest;
      })
    })
  }

  toggleConfirmationAt = (index) => {
    this.toggleGuestPropertyAt("isConfirmed", index);
  }

  removeGuestAt = (index) => {
    this.setState({
      guests: [
        ...this.state.guests.slice(0, index),
        ...this.state.guests.slice(index + 1)
      ]
    })
  }

  toggleEditingAt = (index) => {
    this.toggleGuestPropertyAt("isEditing", index);
  }

  setNameAt = (name, indexToChange) => {
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,   // using spread operator to transfer unchanged key values to new object
            name
          }
        }
        return guest;
      })
    })
  }

  toggleFilteredGuests = () => {
    this.setState({
      isFiltered: !this.state.isFiltered
    })
  }

  handleNameInput = (e) => {
    this.setState({pendingGuest: e.target.value})
  }

  newGuestSubmitHandler = (e) => {
    e.preventDefault();
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false
        },
        ...this.state.guests
      ],
      pendingGuest: ''
    })
  }

  getTotalInvited = () => {
    return this.state.guests.length;
  }
  // getAttendingGuests
  // getUnconfirmedGuests

  render() {

    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>A Treehouse App</p>
          <form onSubmit={this.newGuestSubmitHandler}>
            <input 
              type="text" 
              onChange={this.handleNameInput}
              value={this.state.pendingGuest} 
              placeholder="Invite Someone" />
            <button type="submit" name="submit" value="submit">Submit</button>
          </form>
        </header>
        <div class="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input 
                type="checkbox"
                onChange={this.toggleFilteredGuests}
                checked={this.state.isFiltered}
              /> Hide those who haven't responded
            </label>
          </div>
          <table className="counter">
            <tbody>
              <tr>
                <td>Attending:</td>
                <td>2</td>
              </tr>
              <tr>
                <td>Unconfirmed:</td>
                <td>1</td>
              </tr>
              <tr>
                <td>Total:</td>
                <td>3</td>
              </tr>
            </tbody>
          </table>
          <GuestList
            guests={this.state.guests}
            isFiltered={this.state.isFiltered}
            toggleConfirmationAt={this.toggleConfirmationAt}
            toggleEditingAt={this.toggleEditingAt}
            setNameAt={this.setNameAt}
            removeGuestAt={this.removeGuestAt}
          ></GuestList>
        </div>
      </div>
    );
  }
}

export default App;
