# Simple Rule-Based Chatbot

A basic chatbot built with Node.js and Express that uses pattern matching for responses. No API keys or internet connection required!

## Features

- No API keys or external services needed
- Simple rule-based responses
- Clean, responsive chat interface
- Easy to extend with more patterns
- Works offline

## Prerequisites

- Node.js 14+ and npm

## Setup

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd chatbot
   ```

2. Install the required packages:
   ```bash
   npm install
   ```

## Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```
   or for production:
   ```bash
   npm start
   ```

2. Open your web browser and navigate to:
   ```
   http://localhost:3000
   ```

## Project Structure

```
chatbot/
├── public/
│   └── index.html      # Frontend HTML/CSS/JS
├── server.js           # Express server
├── package.json        # Project dependencies
└── .env               # Environment variables
```

## How to Add More Responses

You can easily add more responses by editing the `responses` object in `server.js`. For example:

```javascript
const responses = {
    // ... existing responses ...
    'your pattern': 'Your response here',
    'another pattern': 'Another response here'
};
```

## Customization

- **Styling**: Customize the UI by modifying the styles in `public/index.html`
- **Responses**: Add more patterns and responses in `server.js`
- **Behavior**: Modify the response logic in the `/api/chat` endpoint

## License

This project is open source and available under the [MIT License](LICENSE).
