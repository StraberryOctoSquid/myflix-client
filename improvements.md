
## Search:

### Problem: UX: Search Function
If a user types into the search bar and then navigates away... The value of the search is not updated (or cleared to null). When one returns to the home/Myflix page the search bar appears empty but the previous search is still in view. This can cause confusion for the user and overall, may diminish the experience with the app. 

### Proposed solution:
Pass the search variable as a paramater to each of the clickable views from the main view that contains the search. On click, have them set the value of search to null.

### Problem: Functional efficiency
Every time that a value is typed into the search bar, $user is redefined.

### Proposed solution:
Because this problem doesn't effect UX, we will not fix it. However, the problem seems to stem from the way in which paramaters are passed using different functions. The solution could be as simple as creating another function that doesn't use the setUser parameter.

## Home or /route

### Problem: UX
The page that is first navigated to is a log in page. This is fine if you have a profile. If you are a first time user and don't have a profile, the navigation could be streamlined a bit to help you to reach the sign up page. Also the log in and sign up pages could look better. They could show a preview, maybe in the background, of what the site offers. This could be viewed as advertising the app. "You made it here, give us your email, awesome things await if you do...". 

### Solution:
At minimum a small [sign up]() link could be placed below the sign in button on the log in page.
Movie cards could be added to the background of login and sign up views.

### Problem UX mobile

- The search function opperates smoothly on a desktop but, on a mobile device the keyboard covers up the results.

- On mobile landscape, the movie-card buttons are not justified beautifully. See screen-shot below.

- <img src="img/movie-card mobile landscape.jpg" width="400">



### General UX Improvements
- Movie-card text could have some additional formatting, maybe a background color, different font etc.

- Similar adjustments would help all views, especially profile.


<img src="img\movie-card text.jpg" width="150">

- A carousel could be added
- Users could have the ability to add more movies to the database
- More data about genre, director and actors could be available
- Featured, or movie of the week


