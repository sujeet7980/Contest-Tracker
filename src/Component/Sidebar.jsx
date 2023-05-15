import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', position: 'fixed' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader >
          <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Contest Tracker
          </a>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="globe">All Contests</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/codeforces" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="book-open">Codeforces</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/code_chef" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="book-open">Codechef</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/leet_code" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="book-open">LeetCode</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/at_coder"  activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="book-open">At Coder</CDBSidebarMenuItem>
            </NavLink> 
            <NavLink exact to="/hacker_earth"  activeClassName="activeClicked" > 
              <CDBSidebarMenuItem icon="book-open">Hacker Earth</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
           @copyright
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;