"use client";

import { useEffect, useState } from 'react';

const Page = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [cruds, setCruds] = useState([]);

    useEffect(() => {
        const fetchCruds = async () => {
            const res = await fetch('/api/crud');
            const data = await res.json();
            setCruds(data);
        };
        fetchCruds();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/crud', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        if (res.ok) {
            setFormData({ name: '', email: '' });
            const newCrud = await res.json();
            setCruds((prev) => [...prev, newCrud]);
        } else {
            alert('Error');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Name" required />
                <input name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Email" required />
                <button>Submit</button>
            </form>
            <ul>
                {cruds.map((crud) => (
                    <li key={crud._id}>{crud.name} - {crud.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default Page;