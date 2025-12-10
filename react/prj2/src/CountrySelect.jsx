
import { useState } from 'react';

export default function CountrySelect() {
    const [country, setCountry] = useState("india");


    return (
        <div>
            <select 
            name="country" 
            id="cn" 
            value={country} 
            onChange={(e) => setCountry(e.target.value)}>
                <option value="india">india</option>
                <option value="uk">UK</option>
                <option value="usa">USA</option>
                <option value="japan">Japan</option>
            </select>


            <p>selected : {country}</p>
        </div>
    )
}