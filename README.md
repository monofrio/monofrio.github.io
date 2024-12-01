# Pokémon GO Search Tool

## Overview

The **Pokémon GO Search Tool** is a React-based web application designed to streamline the process of refining and cleaning out Pokémon storage in the Pokémon GO mobile game. With the ever-growing number of Pokémon species, players often find it challenging to efficiently manage their collection. This tool generates advanced search strings that can be copied and pasted directly into the Pokémon GO search bar, enabling players to filter and identify specific Pokémon for transferring, tagging, or powering up.

By automating this process, the Pokémon GO Search Tool helps players save time, avoid manual errors, and optimize their Pokémon storage with ease.

## Demo

[![Check it out here](https://img.shields.io/badge/Check_it_out_here-007BFF?style=for-the-badge&logo=github)](https://monofrio.github.io)

---

## Features

- **Search String Generation**: Create complex search strings tailored to your Pokémon management needs.
- **Customizable Filters**: Set filters based on IV, CP, Pokémon species, and other criteria.
- **User-Friendly Interface**: Easy-to-use interface for generating, copying, and pasting search strings.
- **Mobile-First Design**: Fully responsive layout for use on both desktop and mobile devices.

---

## Tech Stack

This project utilizes the following technologies:

### Frontend
- **React** (v18.3.1): A JavaScript library for building user interfaces. React's component-based architecture ensures a highly modular and maintainable application.
- **Redux Toolkit** (@reduxjs/toolkit v2.2.1): Simplifies state management and integrates seamlessly with React-Redux (v9.1.0).
- **Redux** (v5.0.1): Provides predictable state management for complex applications.
- **React Bootstrap** (v2.9.1) and **Bootstrap** (v5.3.2): Enable rapid UI development with responsive design components.
- **React Helmet Async** (v2.0.5): Manages document head tags for SEO optimization and dynamic metadata.
- **SASS** (v1.71.1): Enhances styling with advanced features like nesting and mixins.

### Development Tools
- **React-Scripts** (v5.0.1): Provides essential build scripts and tools for developing and deploying the app.
- **Jest** (v29.7.0): Testing framework for ensuring code quality and reliability.
- **Testing Library**:
   - **@testing-library/react** (v15.0.7): Facilitates testing React components.
   - **@testing-library/jest-dom** (v6.4.5): Adds custom Jest matchers for DOM testing.
   - **@testing-library/user-event** (v14.5.2): Simulates user interactions for testing.
- **Regexpu-Core** (v6.0.0): Enables working with Unicode regular expressions.
- **Web Vitals** (v2.1.4): Measures app performance metrics like First Contentful Paint and Largest Contentful Paint.

### Deployment
- **GitHub Pages**: The app is configured to deploy via GitHub Pages for free and accessible hosting.

---

## Installation

Follow these steps to run the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/pokemon-go-search-tool.git
   cd pokemon-go-search-tool
