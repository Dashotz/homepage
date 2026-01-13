# Marci Metzger - The Ridge Realty Group

A modern, professional real estate website for Marci Metzger, Pahrump Realtor with nearly 3 decades of experience. Built with React and Tailwind CSS.

## Features

- 🏠 **Property Listings** - Showcase properties in Pahrump, Nevada with beautiful cards
- 🔍 **Advanced Property Search** - Comprehensive search with filters for location, type, bedrooms, baths, and price
- 📊 **Get It Sold Section** - Highlighting track record: 90 clients helped in 2021, $28.5M in sales
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🎨 **Modern Design** - Professional and user-friendly interface
- ⚡ **Fast Performance** - Built with Vite for optimal speed
- 📞 **Contact Integration** - Direct phone links and WhatsApp messaging

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header with Marci Metzger branding
│   ├── Hero.jsx            # Hero section with Pahrump Realtor theme and search
│   ├── GetItSold.jsx       # Track record and sales achievements
│   ├── FeaturedProperties.jsx  # Property listings (Search Listings)
│   ├── Services.jsx        # Services section (Commercial & Residential)
│   ├── About.jsx           # About Marci Metzger section
│   ├── ContactForm.jsx     # Contact form with WhatsApp integration
│   └── Footer.jsx          # Footer with contact info and office hours
├── App.jsx                 # Main app component
├── main.jsx               # Entry point
└── index.css              # Global styles with Tailwind
```

## Business Information

- **Realtor**: Marci Metzger
- **Company**: The Ridge Realty Group
- **Location**: Pahrump, Nevada
- **Phone**: (206) 919-6886
- **Address**: 3190 HW-160, Suite F, Pahrump, Nevada 89048
- **Office Hours**: Daily 8:00 am - 7:00 pm
- **Experience**: Nearly 3 decades

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing

## Customization

You can easily customize:
- Colors in `tailwind.config.js`
- Property data in `src/components/FeaturedProperties.jsx`
- Content in any component file

## License

This project is open source and available for use.
