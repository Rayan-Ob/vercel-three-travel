import React from 'react'
import "./FormServiceStyle.css"

function FormService() {
    return (
        <div className='form-service'>
            <h2>Make Your Reservation Through This Form</h2>
            <form action="" className='form-style'>
                <div className='form-style-flex'>
                    <fieldset>
                        <label for="Name" class="form-label">Your Name</label>
                        <input type="text" name="Name" placeholder="Ex. John Smithee" autocomplete="on" />
                    </fieldset>
                    <fieldset>
                        <label for="Number" class="form-label">Your Phone Number</label>
                        <input type="text" name="Number" placeholder="Ex. +xxx xxx xxx" autocomplete="on" />
                    </fieldset>
                </div>
                <div className='form-style-flex'>
                    <fieldset>
                        <label for="chooseGuests" class="form-label">Number Of Guests</label>
                        <select name="Guests" class="form-select" aria-label="Default select example" id="chooseGuests">
                            <option selected>ex. 3 or 4 or 5</option>
                            <option type="checkbox" name="option1" value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4+">4+</option>
                        </select>
                    </fieldset>
                    <fieldset>
                        <label for="date" class="form-label">Check In Date</label>
                        <input type="date" name="date" />
                    </fieldset>
                </div>

                <fieldset>
                    <label for="chooseDestination" class="form-label">Choose Your Destination</label>
                    <select name="Destination" class="form-select" aria-label="Default select example" id="chooseDestination">
                        <option selected>ex. Switzerland</option>
                        <option value="Berlin">Berlin</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Torronto">Torronto</option>
                        <option value="Switzerland">Switzerland</option>
                    </select>
                </fieldset>
                <fieldset>
                    <button class="main-button">Make Your Reservation Now</button>
                </fieldset>
            </form>

        </div>
    )
}

export default FormService