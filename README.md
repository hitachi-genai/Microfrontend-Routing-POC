# Microfrontend-Routing-POC
Dacument Link : https://docs.google.com/document/d/19tndLYDbaIy32iP5Js0cWDoDyh4z8bRxJkfFn46vzJI/edit?usp=sharing
New microfrontend routing Approach 

In this new approach, we handle independent and nested routing in a Microfrontend (MFE) setup.
Problems currently we are facing:
1) when we click back button in any microforntend app it is not working as expected
2) we are doing hard refresh on home page 

# Platform Portal (Shell)
The host application, referred to as the shell app in this document, is based on a browser history strategy that manages high-level routing. The shell app's routing determines the mounting and unmounting of microfrontend remotes. The platform portal is pre-configured to integrate with other microfrontends once they are ready.
Microfrontends (apps)

# Microfrontend
 apps use a browser history strategy when acting as hosts and an in-memory history strategy when acting as remotes. You can refer as app1 and app2 in this reference code.

# Steps to follow:

for reference of this app
- `app1` & `app2`: apps using a browser history strategy when acting as hosts and an in-memory history strategy when acting as remotes.
- `shell`: host app based on a browser history strategy that handles high-level routing. Shell routing determines mounting/unmounting of `app1` and `app2` remotes.

Step 1: Create a bootstrap.tsx File
In your microfrontend apps (e.g., app1 or app2), create a bootstrap.tsx file as demonstrated in the POC app. Adjust the routing part as needed in your code.


Step2:  Pass the Bootstrap File in the main.ts File
Update your main.ts file to include the bootstrap file.


Step3: Define the types.ts File
Create and define the types.ts file.


Step4: Create a NavigationManager.tsx File
Create a NavigationManager.tsx file and adjust the routing. Manage the routing names according to your code. 


Step5 : Wrap Your Outlet File with NavigationManager
Wrap your outlet file with NavigationManager and make other necessary adjustments in your code to remove errors. 

Step6: Update federation.config.ts File
Ensure the correct file paths and app names are passed through the federation.config.ts file. Notify the portal team with your app name after updating.


Conclusion
This approach ensures that the microfrontend applications can handle routing independently while maintaining seamless integration with the host application's routing strategy. By following these steps, you can set up a robust and efficient routing mechanism in your microfrontend architecture, ensuring consistency and reliability across your platform. This method enhances modularity and allows for easier maintenance and scaling of the microfrontend system.
By adopting this approach, you are ensuring a more modular and scalable architecture that can be easily maintained and extended as your platform grows.



# Running Demo
1. _(Optional)_ Select node version with node version manager by running `nvm use`. The repo has been battle-tested with v16 Node.js version.
2. Install deps by running `npm install`. Since the repo is based on [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces) the command will install deps for all MFEs.
3. Start apps by running `npm start`.

