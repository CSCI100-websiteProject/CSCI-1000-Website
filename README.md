# Welcome!
Please join the Discord [HERE](https://discord.gg/Tws5ufeGKj) to talk to everyone else and so we can help you work through any problems!
If you haven't already, please fill out this form [HERE](https://forms.gle/1b7BvPTovZsBPzjZA) for teams.

Tutorial Video for project [HERE](https://youtu.be/aCXTC4FrtT4)

## Introduction:

In this project, the class is going to break into groups and build an "About Me" website. 

Each group will consist of 2-5 students and every member will be tasked with creating their own web page that displays some fun information about themselves.
If you feel uncomfortable with creating an "About Me" page, then you are free to create a web page about a topic of your interest. Please make sure the topic does not violate any university student guidelines. 

The purpose of this project is not so much to create some beautiful website, but to familiarize yourself with using git and GitHub in a group setting. This project will force you to learn common git commands that are used by professional engineers daily. You will also be tasked with learning how to create a simple static webpage using HTML, CSS, and some JavaScript. 

Every group will have the autonomy to decide what technologies they would like to use for styling their webpage. You can use simple CSS or choose to import any other styling libraries like Styled Components, Tailwind CSS or MUI. 

#### GOALS:

-   Become comfortable with GitHub and working in a group setting
-   learn how to use basic git commands i.e. add, commit, status, branch, merge, push and pull. [Git CheetSheet](http://git-cheatsheet.com/)
-   Create a static website utilizing HTML, CSS and JavaScript. 

## Steps to getting this project started:

1. Please set up Git and npm if you haven't already. 

    Here are some good resources for setting up GitHub on your device: [Github Docs](https://docs.github.com/en/get-started/quickstart/set-up-git) or this [Youtube         Video](https://www.youtube.com/watch?v=snCP3c7wXw0). 

    Check if you already have npm and node by running ```node -v``` and ```npm -v```. If not, please download npm and nodejs [HERE](https://nodejs.org/en/download/)

2. Each team will create a new GitHub organization. An organization will be a shared GitHub account that each team member can access.

    Follow the directions provided in this link. Please sign up for the free personal account.

         - https://docs.github.com/en/organizations/collaborating-with-groups-in-organizations/creating-a-new-organization-from-scratch

    Make sure to invite all team members to the new organization. 

3. Create an empty public repository in the teams organization. 

4. One team member will clone the Next.js website template to their local computer.

    In your terminal type:

    ``` git clone https://github.com/wangalec/website-template.git ```

    Then cd into the file website-template by typing:

    ``` cd website-template ```

    From here, you will set the git remote repository to the url generated when creating your team’s empty public repository.  

        The url looks something like this "https://github.com/your-account/newly-created-github-repository.git"

    In your terminal type: 

    ``` git remote set-url origin {repository url} ``` 

        It will look something like this:
    ``` git remote set-url origin https://github.com/your-account/newly-created-github-repository.git ```

    Check if the remote repository has been linked

    ``` git remote -v ``` 

    If you set the url correctly, you will see the origin pointing to the url:

    ``` origin  https://github.com/your-account/newly-created-github-repository.git (fetch) ```
    ``` origin  https://github.com/your-account/newly-created-github-repository.git (push)  ```
    
    Next type these two commands:

    ``` git branch -M main ```
    ``` git push -u origin main ```

    Now you should see the newly cloned project in the organization's repository. 

5. Each team member will clone the organization project repository to thier local computer.   

    ``` git clone https://github.com/your-account/newly-created-github-repository.git ```

    cd into project folder:
    
    ``` cd website-template ```

    Next, we want to install all the project dependencies by typing:
    
    ``` npm install ```
    
        If you dont have npm installed on your computer. Check out this website for instructions: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

6. Finally, you are ready to start working on the project.

    to host your website locally type this command:

    ``` npm run dev ```

    checkout http://localhost:3000 in your browser.

disclaimer -- Please make sure to collaborate with your team and always run git pull before working on a new feature. git pull will help ensure that you are working on the most updated code base of your project and help prevent merge errors in the future.
