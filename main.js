/* Test File for External Script URL
   
   Steps to include this file on all BridgeWeb pages
     1. Upload file to BridgeWebs via Documents Tab
     2. Take note of file name and add it to your URL: https://bridgewebs.com/{Your BridgeWebs Name}/{File_Name}.js
     3. Add this URL to the 1st External URL section, under Settings > Options
     4. Save and refresh the page
*/

console.log('Hello World - From External URL');

// This is a javascript file to modify the default styling of BridgeWebs sites
// Copyright (c) 2024 - Chris Mabey - https://chrisMabey.dev

// TODO: Handle Mobile View with Flex Style Stacking of Elements

const body_id = 'bwbox_bwpagebody1'; // Everything below the Header
const top_menu_section_id = 'menunav' // The top menu section
const top_menu_class_name = 'menu-top';  // The UL class name
const top_menu_title_link_class_names = 'menu-button menu-drop'; // Menu titles
const left_menu_section_id = 'bwbox_main_left'; // The left hand side of the page, including menu and bulletins
const left_menu_id = 'bwbox_main_menu1a'; // The main menu of the page including icons
const left_menu_text_id = 'bwbox_main_menu1b'; // The bulletin portion of the left hand side of the page
const right_menu_section_id = 'news_column4';
const main_content_id = 'bwbox_main_both'; // The main content of the home page
const footer_class_name = 'bwbox_footer';
const version_class_name = 'bwbox_release';

const mobile_width_px = 768;

// Listen for window resize events
// window.addEventListener('resize', handleResize);

// Wait for the page to load before continuing
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
  init();
});


function init() {
  console.log('Init Bridge Webs Custom Javascript File');
  hideBridgeWebsVersion();
  hideHeaderBar();
  hideFooterSection();
  // checkIfMobileView();
  // Call it initially in case the screen is already small
  // handleResize(); 
  setTimeout(() => {
    centerTopMenu(); 
  }, 200);
}

// Hide the version text
function hideBridgeWebsVersion() {
  const div = document.getElementsByClassName(version_class_name);
  if (div.length > 0) {
    div[0].style.display = 'none';
    console.log('Bridge Webs Version Hidden');
  } else {
    console.log ('Bridge Webs Version Not Found');
  }
  return;
}

// Hide the Bridge Webs text at the bottom of the page
function hideFooterSection() {
  const footer_section = document.getElementsByClassName(footer_class_name);
  if (footer_section.length > 0) {
    footer_section[0].style.display = 'none';
    console.log('Bridge Webs Footer Hidden');
  } else {
    console.log ('Bridge Webs Footer Not Found');
  }
  return;
}

// Center the top menu
function centerTopMenu() {
  const menu_list = document.querySelector('ul.menu-top');
  // const menu_list = document.querySelector('.menu-box-top ul');
  if(menu_list != null) {
    menu_list.style.margin = "0 auto";
    menu_list.style.width = "fit-content";
    centerTopMenuTitles();
    console.log('Centered Top Menu');   
  } else {
    console.error('No elements found with class name:', menu_list);
  }
}

// TODO: This should be for anything in desktop size or larger
// Center Main Content
function centerMainContent() {
  const mainContent_elem = document.getElementById('bwbox_main_both'); // main_content_id
  if(mainContent_elem != null) {
    mainContent_elem.style.margin = "0 auto";
    mainContent_elem.style.width = "fit-content";
    mainContent_elem.style.display = "flex";

    console.log('Centered Main Content');   
  } else {
    console.error('No elements found with id:', main_content_id);
  }
}


// TODO: The Home style isn't centering when on mobile view. 
// It should also take up the entire width of the page at a certain breakpoint
// It almost seems as if the body is not centered on the page

// Center the Top Menu Titles
function centerTopMenuTitles() {
  const menu_titles = document.getElementsByClassName('menu-button menu-drop');
  if(menu_titles.length > 0) {
    for(let i = 0; i < menu_titles.length; i++){
      menu_titles[i].style.textAlign = "center";
      menu_titles[i].style.width = "100%";
    }
    console.log('Centered Menu Text');
  } else {
    console.error('No element found to center: ', 'menu-button menu-drop');
  }
}

// Hide the Header bar
function hideHeaderBar(){
  const header_div = document.querySelector('div.header_style');
  if(header_div != null){
    header_div.style.display = "none";
    console.log('Hidden header');
  } else {
    console.error('No header element found');
  }
}

// testing
// Hide the icons on the left hand side
function hideLeftMenuIcons() {
  const left_icons = document.querySelector('.bwbox_leftmenu'); // not a good selector, only because it's the first element does this work
  if(left_icons != null){
    left_icons.style.display = "none";
  } else {
    console.error('No left menu element found');
  }
}

// Check for mobile view
function checkIfMobileView() {
  const container = document.getElementById(body_id);
  const containerWidth = container.offsetWidth;

  if (containerWidth <= mobile_width_px) {
    console.log('Mobile view detected. Container width: ' + container.offsetWidth);
    return true;
  } else {
    console.log('Desktop view detected. Container width: ' + container.offsetWidth);
    return false;
  }
}

// Hide menu while on Mobile View
function hideMenu() {
  if(checkIfMobileView()) { 
    const menu = document.getElementById(left_menu_section_id);
    menu.style.display = 'none';
    console.log('Hidden Menu');
  } else {
    console.log('Cannot Hide Menu');
  }
  return;
}

//testing
// Show menu while on Desktop View
function showMenu() {
  if(checkIfMobileView() !== true) { 
    const menu = document.getElementById(left_menu_section_id);
    menu.style.display = 'inline-block';
    console.log('Show Menu');
  } else {
    console.log('Cannot Show Menu');
  }
  return;
}

// Hide right-hand side column
function hideRightCol() {
  const rightCol = document.getElementById(right_menu_section_id);
  rightCol.style.display = 'none';
  console.log('Hidden Right-Hand Side Column');
}

//testing
// Show right-hand side column
function showRightCol() {
  const rightCol = document.getElementById(right_menu_section_id);
  rightCol.style.display = 'inline-block';
  console.log('Show Right-Hand Side Column');
}

// Handle resize events
function handleResize() {
  if (window.innerWidth <= mobile_width_px) {  
    console.log('Mobile view detected');
    hideMenu();
    hideRightCol();
  } else {
    console.log('Desktop view detected');
    showMenu();
    showRightCol();
  }
}


