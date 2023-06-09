---
noteId: "367ce3d013ef11ee9679c17d4291bbc8"
tags: []

---

# Inclass Demo

## Problem Domain

You have been hired by a goat fan club called GoatPick to build an app that helps users determine the cutest goat picture out of a collection of photographs.

Since catalogs are expensive to print and distribute, and goats need only the loyalest of fans, and GoatPick is a lean startup that needs to carefully watch its expenditures. GoatPick wants to feature only the most loved goats in its catalog that are the most likely to achieve loyal fandom.

This means that GoatPick wants to do market analysis to test their potential fan interest… before actually putting them into the catalog.

To make this market analysis effectively, GoatPick wants you to build an app that displays potential goat candidates to individuals in focus groups (two goats at a time, side-by-side) so you’ll need to manage the size and the aspect ratio of the images.

The app’s purpose is to have the group members choose which goat, of the two displayed images, that they would most likely be fans of, and then store, calculate, and visually display the resulting data.

To keep the goat selection process as untainted as possible, you have been instructed to not allow any results to be shown to users until there have been a total of 15 selections made.

The marketing team is not only interested in the total number of clicks, but also the number of times that a goat was shown. So, you’ll also need to keep track of how many times each image is displayed.

You are also responsible for the look and feel of the app, so don’t forget a custom font, color palette, layout with semantic HTML, and so on.

### To recap:

Your app will randomly display two of these unique pictures at a time, the user should be able to click on their favorite.  Once clicked, the images will rerender another set of random pictures.  Although it is acceptable for the pictures to be shown back to back on today's iteration of this app, the two pictures rendered may not be the same.

Example:

goat A / goat B
goat C / goat A

After choosing your favorite goat 15 times, the voting session will conclude, the user can press a view results "button" and the app will render a list showing all of the goats names, the number of times they were viewed, and the number of clicks received.

### What Do We Need?

#### Constructor - build goat objects

- store our goat info
  - votes
  - names
  - times it has been shown
  - image

#### Executable Code

- Event listener
  - click
    - increase the votes for the goat (store the votes)
- Counter for how many votes the user when through - 15 votes per session
- Button for viewing the results
  - Event listener - kick in after voting rounds are done
  - display our votes (table)
- Conditional logic to make sure the images are unique
- Logic to make sure images are random
- DOM references
  - Button
  - Images
