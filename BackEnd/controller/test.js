const { decode } = require('jsonwebtoken');
const userId =  decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2MzRmY2VkNGQzYjRlNzhjNWMxYTg0NjQiLCJpYXQiOjE2NjYxNzQ2ODJ9.EoapAUicQvJmjvjQ1JiEJS2-kjB2lEuWz7BajExIShI",process.env.TOKENSECRET)
console.log(userId);