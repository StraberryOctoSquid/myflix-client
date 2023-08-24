Start Parcel
parcel src\index.html


## Search:

### Problem: UX 
If a user types into the search bar and then navigates away... The value of the search is not updated (or cleared to null). When one returns to the home/Myflix page the search bar appears empty but the previous search is still in view. This can cause confusion for the user and overall, may diminish the experience with the app. 

### Proposed solution:
Pass the search variable as a paramater to each of the clickable views from the main view that contains the search. On click, have them set the value of search to null.

### Problem: Functional efficiency
Every time that a value is typed into the search bar, $user is redefined.

### Proposed solution:
Because this problem doesn't effect UX, we will not fix it. However, the problem seems to stem from the way in which paramaters are passed using different functions. The solution could be as simple as creating another function that doesn't use the setUser parameter.

## Home or /route

### Problem: UX
The page that is first navigated to is a log in page. This is fine if you have a profile. If you don't because it is your first time to the site, it could be easier to reach the sign up page. Also the log in and sign up pages could look better. They could show a preview, maybe in the background, of what the site offers. This could be viewed as advertising the app. "You made it here, give us your email, awesome things await if you do...". 

### Solution:
At minimum a small sign up link could be placed below the sign in button on the log in page.
Movie cards could be added to the background of login and sign up views.

### Problem UX mobile
Overall the app looks and works fairly well. There a couple of visual and functional improvements that I'd like to spend more time on.

- The search function opperates smoothly on a desktop but, on a mobile device the keyboard covers up the results.

- 