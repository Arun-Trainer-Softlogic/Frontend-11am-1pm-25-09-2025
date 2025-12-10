import React, { useState } from "react"


export default function UserForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        age: ""
    })


    function handleChange(e) {
        const { name, value } = e.target
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(form)
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="name"

                />
                <input name="email" value={form.email} onChange={handleChange} placeholder="email" />
                <input name="age" value={form.age} onChange={handleChange} placeholder="age" />


                <button type="submit">Submit</button>

            </form>
        </>

    )
}