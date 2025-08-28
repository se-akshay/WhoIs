# WhoIs Domain Lookup App

A lightning-fast, professional-grade domain lookup app built with React, Vite, and Tailwind CSS. Instantly query domain registration, DNS, and historical data using the WhoisXML API, with support for both JSON and XML responses.

## Features

- Modern UI with Hero, Search, Result, Stats, and Footer sections
- Responsive design using Tailwind CSS
- Domain search with live API integration
- XML-to-JSON conversion using `fast-xml-parser`
- Overflow handling for long fields
- Professional-grade reliability and accuracy

## Tech Stack

- React
- Vite
- Tailwind CSS
- fast-xml-parser

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Install `fast-xml-parser` for XML response parsing:
   ```sh
   npm install fast-xml-parser
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

### Usage

- Enter a domain name in the search box and click "Lookup".
- The app will fetch data from the WhoisXML API and display parsed results.
- Handles both JSON and XML responses, converting XML to JSON using `fast-xml-parser`.

## File Structure

```
frontend/
  ├── public/
  ├── src/
  │   ├── components/
  │   │   ├── Hero.jsx
  │   │   ├── SearchBox.jsx
  │   │   ├── Result.jsx
  │   │   ├── StatsBar.jsx
  │   │   ├── Footer.jsx
  │   │   └── WhyUs.jsx
  │   ├── App.jsx
  │   ├── App.css
  │   └── main.jsx
  ├── index.html
  ├── package.json
  ├── vite.config.js
  └── README.md
```

## API Integration

- Uses [WhoisXML API](https://www.whoisxmlapi.com/) for domain lookup.
- Example endpoint:
  ```
  https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=YOUR_API_KEY&domainName=example.com
  ```
- Replace `YOUR_API_KEY` with your actual API key.

## XML Parsing

- The app uses `fast-xml-parser` to convert XML responses to JSON:
  ```js
  import { XMLParser } from "fast-xml-parser";
  const parser = new XMLParser();
  const jsonObj = parser.parse(xmlText);
  ```

## Customization

- Tailwind CSS classes can be adjusted for colors, spacing, and layout.
- UI components are modular and easy to extend.

## License

MIT

## Contact

For support or inquiries, contact: [your-email@example.com]
