import { test, expect } from '@playwright/test';
test('API Test', async ({ request }) => {

    const apiKey = process.env.REQRES_API_KEY;

    const payload = {
        name: 'Mark',
        email: 'mark@gmail.com',
        role: 'admin'
    };
    
    const Response = await request.post(
        'https://reqres.in/api/users',
        {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey
            },
            data: payload
        }
    );

    expect(Response.status()).toBe(201);

    const createdData = await Response.json();

    const getResponse = await request.get(
        'https://reqres.in/api/users',
        {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey
            }
        }
    );

    expect(getResponse.status()).toBe(200);

    const updatedResponse = await request.put(
        `https://reqres.in/api/users/${createdData.id}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey
            },
            data: {
                name: 'Mark',
                job: 'QA Engineer'
            }
        }
    );

    expect(updatedResponse.status()).toBe(200);

    const updatedData = await updatedResponse.json();

    expect(updatedData.job).toBe('QA Engineer');

});
