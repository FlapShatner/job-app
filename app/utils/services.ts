import { Data } from '../types/exp';
export const sendEmail = async (data: Data) => {
    const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    
    return response.json();
    };