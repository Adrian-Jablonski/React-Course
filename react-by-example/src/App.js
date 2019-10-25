import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';

class App extends Component {

  state = {
    isFiltered: false,
    pendingGuest: "",
    guests: []
  }

  lastGuestId = 0;

  newGuestId = () => {
    const id = this.lastGuestId;
    this.lastGuestId += 1;
    return id;
  }

  toggleGuestPropertyAt = (property, id) => {
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (guest.id === id) {
          return {
            ...guest,   // using spread operator to transfer unchanged key values to new object
            [property]: !guest[property]
          }
        }
        return guest;
      })
    })
  }

  toggleConfirmationAt = (id) => {
    this.toggleGuestPropertyAt("isConfirmed", id);
  }

  removeGuestAt = (id) => {
    this.setState({
      guests: this.state.guests.filter(guest => id !== guest.id)
    })
  }

  toggleEditingAt = (id) => {
    this.toggleGuestPropertyAt("isEditing", id);
  }

  setNameAt = (name, id) => {
    this.setState({
      guests: this.state.guests.map((guest, index) => {
        if (index === id) {
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
    const id = this.newGuestId();
    this.setState({
      guests: [
        {
          name: this.state.pendingGuest,
          isConfirmed: false,
          isEditing: false,
          id
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
        <Header
          newGuestSubmitHandler={this.newGuestSubmitHandler}
          handleNameInput={this.handleNameInput}
          pendingGuest={this.state.pendingGuest}
        ></Header>

        <MainContent
          totalInvited={totalInvited}
          numberAttending={numberAttending}
          numberUnconfirmed={numberUnconfirmed}
          toggleFilteredGuests={this.toggleFilteredGuests}
          isFiltered={this.state.isFiltered}
          guests={this.state.guests}
          toggleConfirmationAt={this.toggleConfirmationAt}
          toggleEditingAt={this.toggleEditingAt}
          setNameAt={this.setNameAt}
          removeGuestAt={this.removeGuestAt}
          pendingGuest={this.state.pendingGuest}
        ></MainContent>
      </div>
    );
  }
}

export default App;
