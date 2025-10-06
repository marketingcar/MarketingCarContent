// Script to create a new admin user in local Strapi
// Run with: node create-admin.js

const axios = require('axios');

async function createAdminUser() {
  const adminData = {
    username: 'admin',
    email: 'admin@marketingcar.com',
    password: 'TempPassword123!',
    firstname: 'Marketing',
    lastname: 'Car'
  };

  try {
    // First, check if we need to create the first admin
    const response = await axios.post(
      'http://localhost:1337/admin/register-admin',
      adminData,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('✅ Admin user created successfully!');
    console.log('\nCredentials:');
    console.log('Email: admin@marketingcar.com');
    console.log('Password: TempPassword123!');
    console.log('\nYou can now log in to Strapi Cloud with these credentials.');
    console.log('IMPORTANT: Change this password immediately after logging in!');
  } catch (error) {
    if (error.response) {
      console.error('❌ Error:', error.response.data.error.message);
      console.log('\nIf admin already exists, try logging in with your existing credentials.');
      console.log('Or contact Strapi Cloud support for password reset.');
    } else {
      console.error('❌ Error:', error.message);
      console.log('\nMake sure Strapi is running locally on http://localhost:1337');
    }
  }
}

createAdminUser();
