import React, { Component } from 'react';
import './App.css';
import GuestList from './components/GuestList';
import Counter from './components/Counter';

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
  getAttendingGuests = () => {
    return this.state.guests.reduce((total, guest) =>
      guest.isConfirmed ? total + 1 : total,
      0
      )
  }

  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnconfirmed  = totalInvited - numberAttending;

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
          <Counter
            totalInvited={totalInvited}
            numberAttending={numberAttending}
            numberUnconfirmed={numberUnconfirmed}
          ></Counter>

          <GuestList
            guests={this.state.guests}
            isFiltered={this.state.isFiltered}
            toggleConfirmationAt={this.toggleConfirmationAt}
            toggleEditingAt={this.toggleEditingAt}
            setNameAt={this.setNameAt}
            removeGuestAt={this.removeGuestAt}
            pendingGuest={this.state.pendingGuest}
          ></GuestList>
        </div>
      </div>
    );
  }
}

export default App;
