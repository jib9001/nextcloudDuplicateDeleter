# nextcloudDuplicateDeleter
This is a script to accent the functionality of the duplicate finder app in next cloud

The duplicate finder will, by default, show up to ~40 duplicate files that were found with the ability to look at and delete individual files. This is fine if there aren't many files, but if you have a ton of duplicates, like me, you just want to be able to automatically delete them. This script will delete duplicates one at a time automatically, and when it runs out of files, it will click load more. It does so by imitating user clicks on the webpage

**Usage**
- Open the javascript console on your browser using the included browser dev tools
- Copy this script
- Paste this script into the console and press enter
- Delete one section of duplicates (you have to delete all but one for that section to disappear and trigger the mutation observer)
- Wait paitiently as this isn't fast
