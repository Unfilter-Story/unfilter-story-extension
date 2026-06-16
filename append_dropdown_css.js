const fs = require('fs');

const dropdownCss = `
/* Dropdown Menu Styles */
.nav-desktop ul li.dropdown {
  position: relative;
}

.nav-desktop ul li.dropdown > a {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.nav-desktop ul li.dropdown .dropdown-menu {
  position: absolute;
  top: 100%;
  left: -1rem;
  min-width: 160px;
  background-color: var(--color-bg-surf);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.2s ease;
  padding: var(--spacing-2) 0;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.nav-desktop ul li.dropdown:hover .dropdown-menu,
.nav-desktop ul li.dropdown:focus-within .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.nav-desktop ul li.dropdown .dropdown-menu li {
  margin: 0;
}

.nav-desktop ul li.dropdown .dropdown-menu a {
  padding: var(--spacing-2) var(--spacing-4);
  display: block;
  font-weight: 500;
  color: var(--color-text-main);
  transition: background-color 0.2s, color 0.2s;
  white-space: nowrap;
}

.nav-desktop ul li.dropdown .dropdown-menu a:hover {
  background-color: var(--color-bg-main);
  color: var(--color-accent);
}

.nav-desktop ul li.dropdown .dropdown-menu a::after {
  display: none; /* remove active underline from dropdown items */
}

/* Mobile Dropdown styling */
.mobile-drawer .dropdown-group {
  display: flex;
  flex-direction: column;
}
.mobile-drawer .dropdown-title {
  font-weight: 700;
  color: var(--color-text-mute);
  padding: var(--spacing-2) 0;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.mobile-drawer .dropdown-items {
  padding-left: var(--spacing-4);
  display: flex;
  flex-direction: column;
}
`;

fs.appendFileSync('css/layout.css', dropdownCss);
console.log('Appended dropdown CSS to layout.css');
