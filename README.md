## Introduction

Energy Pro is a data visualisation application that showcases a users energy usage. When first loading the application the user is presented with a google map where they can either click on the map icons or the cards below. 

## Production Application Link 
[Click me](https://energyusage.netlify.app/)

## Tech Stack

###### Frontend 
- Typescript
- React
- Matuerial UI 
- CSS modules via SCSS
- Google Maps api

###### Backend 
- JSON server deplyed using cyclic (https://app.cyclic.sh/)
- Backend server can be found here: https://github.com/Tashsub/json-server-energy
- Production api -  https://rich-gold-nightingale-gear.cyclic.app/

## React Design Pattern: Atomic Design

Components have been split up into three key folders. 

- Atoms: these involve small basic comonents such as a title or a logo. 
- Molecules: on the other hand these can and at times involve a combinations of atoms. 
- Organisms: these are the most complex and make up a large part of the functionality of the application such as the menu and cards. 

## React Core Concepts
- Hooks
- React Router
- 

## Iconography
Google Icons (https://fonts.google.com/icons)


## Error Handling 

At times, there may be issues with the server we are making requests to, for instance it may be down or not
working as expected. Precautionary step error handling was taken into account in the event any API requests fail
and as a result a fall back error message is displayed.


## Testing 

- Test 1: test written to ensure that the correct number of sites are rendered when a user viewing content via
the Portfolio view.
- Test 2: test written to ensure that a user can interact with the filter (click into it), select the ‘Size’ option and
the result is the sites are ordered from largest to smallest.
- Additionally, some manual testing has been conducted, for instance making api requests fail. Changing
screen dimensions to observe how components would look on smaller devices.
