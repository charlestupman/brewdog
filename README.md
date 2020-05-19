# brewdog

Thank you for taking the time to look at my test application.

I aimed to fulfill the project breif as much as possible within the time limit available. 

I initially considered using one of the many mobile libraries available, React Native Web, Ionic Web, Material UI however I thought that the best exhibiton of my skills would be to create as much as possible from scratch to illustrate my coding practices and skills.

Unfortunately taking this approach meant I had less time to look at the testing and support that I would normally do on an application like this.

I also went overtime with the exercise taking longer than the indicated time frame without fully completing the last item on the project brief. If you would like me to take more time and complete the last item please let me know and I would be happy to implement the item sorting.

I used react-create-react-app to bootstrap my frontend with only minor modifications including adding a src route in the .env file for easier path generation and the inculsion of SCSS+ modules for targeted, hashed CSS.

I then set up the main components of the application before introducing redux for manipulation of state as well as handling of api requests to Brewdog.

I split the state into the domain and application state as you can see from Redux dev tools. The domain is completely separate and not tied to react at all so it is possible to use this exact code no matter what front end library you are using, React Native, Angular x, Vue etc.

The factories I developed to maintain state are a version of my own design and allow interface with an api through a small and easily tested service which created the equivalnet to redux thunks. I have used this system with many applications and I find it reduces repeated code use within the domain by 70 - 80%. Usually these factories are heavily tested however within the timeframe I was unable to implement them.

I used some third party components for the carousel and modal components with mixed results. The carousel seems to have platform specific quirks and would be something I would look to rewrite from scratch or fix.

The use of the carousel's innate slide components over conventional Routes (I would have preferred react-router-dom) was a nessecary imposition of the third party component and the truncated timeframe.

When it comes to testing there is much less here than I would normally apply to any application I build. In a commercial project I would use storybook to develop and snapshot test each component for all their main states whilst I would write jest tests for all services (some of which you can see).

Ultimately with a project like this I could spend the next several weeks fleshing it out until it had 100% test coverage, was fully cross browser compatible and operated perfectly on every platform however I hope you can appreciate that was unrealistic within the givent timeframe.

If you have any questions or would like me to elaborate on any part of my code or decision making processes I would be happy to chat through them at any time.


