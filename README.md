# Hootsuite-streams-clone

A simplified clone of Hootsuite's dashboard streams.

# Getting Started

First checkout this repo, then install and run the server with the following commands:
```
> git clone git@github.com:oliverpople/hootsuite-streams-clone.git
> cd hootsuite-streams-clone/express-backend
> npm install
> npm start
```

Then in a new tab checkout the same repo and run the front-end like so:
```
> cd hootsuite-streams-clone/react-client
> npm install
> npm start
```

Note: At this point you may be asked to select an alternative port to the back-end, in which case select 'Y' / 'Yes'.

### Quality of Service Matrix

![QoS Matrix](hootsuite_QoS.jpg)

### User Stories

MVP:
```
As a User
So I can view my tweet
I want to connect to my twitter feed

As a User
So I can read my last tweet 
I want to view the text from my most recent tweet

As a User
So I can see my last tweet's image
I want to view the image from my most recent tweet

As a User
So I can see my most recent tweets together
I want to view my 5 most recent tweets
```

V2:

```
As a User
So I can view multiple twitter streams simultaneously 
I want to open my twitter streams in parrellel (vertically) in the view

As a User
So I can reduce the the number of twitter streams in my view
I want the option to delete each stream individually

As a User
So I can view my retweeted tweets only
I want to the option to filter my Twitter stream by 'Retweets'  
```

V3:

```
As a User
So I can view my Instagram post 
I want to connect to my Instagram feed 

As a User
So I can read my last Instragram post
I want to view the text from my most recent post

As a User
So I can see my last Instragram post's image
I want to view the image from my most recent post

As a User
So I can view my shared Instagram posts only
I want to the option to filter my Instagram stream by 'Shared posts'  
```

### Initial MVP Wireframe Outlining React.j Components
![MVP wireframe](Hootesuite_react.jpg)
