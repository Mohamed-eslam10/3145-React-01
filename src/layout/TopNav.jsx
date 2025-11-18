import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

import { Link } from "react-router";

const links = [
  { label: "Home", url: "/" },
  { label: "Counter", url: "/counter" },
  { label: "Counter 2", url: "/counter-2" },
  { label: "Products", url: "/products" },
  { label: "Users", url: "/users" },
  { label: "Register", url: "/auth/register" },
  { label: "Login", url: "/auth/login" },
];

// links.forEach((link) => console.log(link));

export default function TopNav( ) {
  return (
    <Navbar fluid rounded>
      <NavbarBrand href="https://flowbite-react.com">
        <img
          src="/favicon.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="hidden sm:inline self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          My App
        </span>
      </NavbarBrand>
      <div className="flex md:order-2 items-center gap-1">
        <span className="block text-sm text-white">Guest</span>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar
              alt="User settings"
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded
            />
          }
        >
          <DropdownHeader>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </DropdownHeader>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        {links.map(({ label, url }) => (
          <Link key={label} className="text-gray-600" to={`${url}`}>
            {label}
          </Link>
        ))}
      </NavbarCollapse>
    </Navbar>
  );
}
